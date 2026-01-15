
import Hero from '../assets/Hero.png'
const ContactUs = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#fde9ea] to-white flex items-center px-20 font-poppins max-lg:px-6">
      
      {/* Left Content */}
      <div className="flex-1 mb-50">
        <h2 className="text-4xl font-bold text-black mb-6 border-b-4 border-black inline-block">
          Contact US
        </h2>

        <p className="text-sm text-gray-800 max-w-[520px] mb-6">
          Have a question or want to learn more about <strong>CertiAI?</strong>{" "}
          Get in touch with us!
        </p>

        <div className="space-y-2 text-sm text-gray-900 mb-6">
          <p>
            <strong>Address:</strong> [Your Physical Address or Headquarters]
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <span className="text-[#e74c3c]">contact@certiai.com</span>
          </p>
          <p>
            <strong>Phone:</strong> [+1 (XXX) XXX-XXXX]
          </p>
          <p>
            <strong>Social Media:</strong> [Links to your social media profiles]
          </p>
        </div>

        <p className="text-sm text-gray-700 max-w-[520px]">
          We value your feedback and inquiries. Reach out to our team, and
          we&apos;ll be delighted to assist you.
        </p>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center max-lg:hidden">
        <img
          src={Hero}
          alt="Contact Illustration"
          className="max-w-[520px]  w-full"
        />
      </div>
    </section>
  );
};

export default ContactUs;
