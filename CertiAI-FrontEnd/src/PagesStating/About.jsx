import Hero from '../assets/Hero.png'

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#fde9ea] to-white flex items-center px-20 font-poppins max-lg:px-6">
      
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-black mb-6 border-b-4 border-black inline-block">
          About US
        </h2>

        <div className=" pb-40 text-sm text-gray-800 leading-relaxed max-w-[560px]">
          <p className="flex gap-3">
            <span>🎈</span>
            <span className='font-[500]'>
              Welcome to <strong>CertiAI!</strong> We are a pioneering platform
              committed to revolutionizing the way individuals learn and excel
              in their fields. At CertiAI, we harness the power of artificial
              intelligence to provide cutting-edge solutions in education and
              assessment.
            </span>
          </p>

          <p className='font-[500]'>
            Our mission is to empower learners, educators, and institutions by
            offering innovative tools and comprehensive learning environments.
            With a focus on adaptive learning, we tailor our solutions to
            individual needs, ensuring personalized and effective learning
            experiences.
          </p>

          <p className='font-[500]'>
            Together, we strive to create a seamless ecosystem that fosters
            knowledge acquisition, skill development, and professional growth.
          </p>

          <p className="font-medium font-[500]">
            Join us on this transformative journey as we shape the future of
            learning with CertiAI!
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1  flex justify-center max-lg:hidden">
        <img
          src={Hero}
          alt="About Illustration"
          className="max-w-[520px]  w-full"
        />
      </div>
    </section>
  );
};

export default About;
