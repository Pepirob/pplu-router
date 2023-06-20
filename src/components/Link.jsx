/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { EVENTS } from "../consts";

export function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0;
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctlKey || event.shiftKey;
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && isModifiedEvent && !isManageableEvent) {
      event.preventDefault();
      navigate(to);
    }

    event.preventDefault();
    navigate(to);
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
}
