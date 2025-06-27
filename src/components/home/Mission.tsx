const Mission = () => {
  return (
    <section className="w-full bg-white overflow-hidden h-screen ">
      {/* Heading and Subheading */}
      <div className="relative z-10 px-6 pt-10 text-center">
        <h1 className="text-7xl font-bold text-gray-800 mb-4">Our Mission</h1>
        <p className="max-w-[660px] mx-auto text-gray-600 text-lg font-bold">
          To empower youth across India — especially in underserved regions — with
          real-world, practical skills through affordable, hands-on training and
          mentorship, making them self-reliant and employable.
        </p>
      </div>
      
      {/* Illustrations */}
      <div className="relative flex justify-center items-center min--[100%]">
        {/* Left */}
        <img
          src="/Industrialsed training.svg"
          alt="Industialsed Training"
          className="absolute w-auto h-[350px] left-[170px] translate-y-[320px] z-10"
        />
        {/* Right */}
        <img
          src="/Project based approch.svg"
          alt="Project based approach"
          className="absolute w-auto h-[350px] right-[150px] translate-y-[310px] z-10"
        />
        {/* Center */}
        <img
          src="/inclusive learning.svg"
          alt="Inclusive Learning"
          className="absolute w-auto h-[300px] top-[200px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        />
      </div>
      {/* Gradient Background Layer (Now with fixed height) */}
      <div className="relative w-auto h-[70%]">
        {/* Gradient image on the left */}
        <img
          src="/Ellipse 12.svg"
          alt="Left Gradient"
          className="absolute top-0 left-0 w-full h-full -translate-x-[15%] -translate-y-1/5 pointer-events-none select-none"
        />
        {/* Gradient image on the right */}
        <img
          src="/Ellipse 13.svg"
          alt="Right Gradient"
          className="absolute top-0 right-0 w-full h-full translate-x-[15%] translate-y-1/5 pointer-events-none select-none"
        />
        {/* Gradient image on the center */}
        <img
          src="/Ellipse 14.svg"
          alt="Center Gradient"
          className="absolute top-[180px] left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        />
        {/*  Sliding Text at Bottom */}
        <div className="absolute bottom-[35px] w-full overflow-hidden">
          <div className="flex animate-slide w-max whitespace-nowrap text-xl font-semibold text-gray-800">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 px-4">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut cupiditate. Delectus quibusdam, a ad natus inventore quam laudantium commodi! Porro cupiditate explicabo impedit adipisci, mollitia ut assumenda. Vel, et!</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
