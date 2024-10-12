import H1 from "./h1";

function Hero() {
  return (
    <div className="w-full h-fit bg-gradient-to-l from-dark-blue-600 to-dark-blue-200">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-8 px-6 py-12 justify-center items-center sm:justify-around ">
          <div className="w-full sm:w-1/2">
            <H1>Oi, eu sou o Rudnei</H1>
            <p>
              Criei essa página para falar um pouco mais sobre mim, minha
              tragetória profissional, meus aprendizados, habilidades técnicas e
              curiosidades. Além, é claro, de falar um pouco de mim como pessoa,
              hobbies, gostos e afins. Fique a vontade ;)
            </p>
          </div>
          <img
            className="rounded-full"
            src="https://avatars.githubusercontent.com/rudneisantiago"
            alt="Foto do rosto de Rudnei Santiago"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
