import { H2 } from "./h2";

function AboutMe(props) {
  return (
    <section id="about-me" className="container mx-auto">
      <div className="w-full sm:w-3/4 mx-auto">
        <H2 className="text-center">Sobre mim</H2>
        <p>{props.children}</p>
      </div>
    </section>
  );
}

export { AboutMe };
