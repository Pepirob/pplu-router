import { Link } from "../components/Link";
export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        ¡Hola!, me llamo Jose Luis y estoy creando un clon de Rseact Router.
      </p>
      <Link to={"/"}>Ir a Home</Link>
    </>
  );
}
