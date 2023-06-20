import { Children, useEffect, useState } from "react";
import { EVENTS } from "../consts";
import { match } from "path-to-regexp";

/* eslint-disable react/prop-types */
export function Router({ children, defaultComponent: DefaultComponent }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.addEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type;

    const isRoute = name === "Route";
    if (!isRoute) return null;

    return props;
  });

  const Page = routesFromChildren.find(({ path }) => {
    if (path === currentPath) return true;

    const matchedUrl = match(path, { decode: decodeURIComponent });
    const matched = matchedUrl(currentPath);

    if (!matched) return false;

    routeParams = matched.params;
    return true;
  })?.component;

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent />;
}
