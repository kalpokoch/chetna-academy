const SectionTitle = ({ title, subtitle }) => (
  <div>
    <h2 className="text-4xl md:text-6xl font-bold mb-6">{title}</h2>
    <p className="text-lg md:text-xl mb-10">{subtitle}</p>
  </div>
);

const Mission = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden py-20">
  {/* Section heading */}
  <div className="text-center relative z-10 max-w-3xl mb-16">
    <SectionTitle 
      title="Our Mission"
      subtitle="To empower youth across India — especially in underserved regions — with real-world, practical skills through affordable, hands-on training and mentorship, making them self-reliant and employable."
    />
  </div>

  {/* Stacked gradient + images row */}
  <div className="flex w-full justify-between items-center relative z-10 mt-60 mb-40">

    {/* LEFT STACK - pushed to far left */}
    <div className="absolute top-[-30px] left-[-0px] -translate-y-1/2">
      <img
        src="/Ellipse 12.svg"
        alt="Gradient Left"
        className="w-[580px] h-[1300px] object-contain"
      />
      <img
        src="/Industrialsed training.svg"
        alt="Training Illustration"
        className="absolute top-1/2 left-1/2 w-[600px] object-contain transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>

    {/* CENTER STACK */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 mt-10 z-10">
      <img
        src="/Ellipse 14.svg"
        alt="Gradient Center"
        className="w-[1000px] h-[1000px] object-contain"
      />
      <img
        src="/inclusive learning.svg"
        alt="Inclusive Illustration"
        className="absolute top-1/2 left-1/2 w-[600px] object-contain transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>

    {/* RIGHT STACK - pushed to far right */}
    <div className="absolute top-[-50px] right-[-0px] -translate-y-1/2">
      <img
        src="/Ellipse 13.svg"
        alt="Gradient Right"
        className="w-[600px] h-[1300px] object-contain"
      />
      <img
        src="/Project based approch.svg"
        alt="Project Illustration"
        className="absolute top-1/2 left-1/2 w-[600px] object-contain transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>


  </div>
</section>
);
};

export default Mission;
