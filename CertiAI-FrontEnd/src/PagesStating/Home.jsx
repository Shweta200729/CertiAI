import React from 'react'
import Hero from '../assets/Hero.png'
const Home = () => {
  return (
    <div>
       <section className="min-h-screen  bg-gradient-to-r from-[#fde9ea] to-white flex items-center px-20 font-poppins max-lg:px-6">
      
      {/* Left Content */}
      <div className="flex-1">
        <p className="text-[#ff6b6b] text-xs ml-25 font-semibold tracking-widest mb-4">
          LEARN FROM TODAY
        </p>

        <h1 className="text-[48px] font-bold text-[#2d2b4e] leading-tight mb-4 max-md:text-4xl">
          The Best Way For  Your Learning
        </h1>

        <p className="text-[#6f6c90] text-sm max-w-[480px] leading-relaxed mb-5">
          there are many dummy international certification tests to offer
          with a good price. learn from home
        </p>

        <button className="flex items-center gap-2 bg-[#e74c3c] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#d63c2d] transition">
          Explore Tests <span>→</span>
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center max-lg:hidden">
        <img
          src={Hero}
          alt="Learning Illustration"
          className="max-w-[520px] w-full"
        />
      </div>

    </section>
  
    </div>
  )
}

export default Home;
