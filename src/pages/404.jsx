import { Link } from "../components/Link";

export function Page404() {
  return (
    <>
      <h1>This is NOT fine</h1>
      <img
        src="https://midu.dev/images/this-is-fine-404.gif"
        alt="gif del perro de This is Fine quemándose vivo"
      />
      <Link to={"/"}>Volver a home</Link>
    </>
  );
}
