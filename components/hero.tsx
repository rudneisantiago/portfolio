function Hero() {
  return (
    <div className="w-full h-fit bg-gradient-to-l from-dark-blue-600 to-dark-blue-200">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-8 px-6 py-12 justify-center items-center sm:justify-between ">
          <p className="w-full sm:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            consectetur deserunt id ab sit ducimus porro eveniet, molestiae
            rerum explicabo architecto libero optio, nisi harum tempore minus
            fugiat cum animi?
          </p>
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
