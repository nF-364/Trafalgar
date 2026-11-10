import React from 'react'
import logo from './assets/logo.svg'
import logo1 from './assets/logo1.png'
import koz from './assets/koz.png'
import dori from './assets/dori.png'
import hujjat from './assets/hujjat.png'
import hujjt from './assets/hujjt.png'
import quti from './assets/quti.png'
import hujat from './assets/hujat.png'
import logo2 from './assets/rasm.png'

import bexruz from 'react'
const App = () => {
  return (
    <div>
      <header>
        <nav className='flex items-center justify-between conatiner max-w-[90%] mx-auto py-10'>
          <img src={logo} alt="" />
          <ul className='flex items-center gap-9 text-[18px]'>
            <li className='text-[#1F1534] font-semibold'>Home</li>
            <li className='text-[#918f94]'>Find a doctor</li>
            <li className='text-[#918f94]'>Apps</li>
            <li className='text-[#918f94]'>Testimonials</li>
            <li className='text-[#918f94]'>About us</li>
          </ul>
        </nav>

        <div className='flex items-center justify-between conatiner max-w-[90%] mx-auto py-10'>
          <div className='space-y-7'>
            <h1 className='text-[48px] w-[421px] font-semibold'>Virtual healthcare
              for you</h1>
            <p className='text-[21px] w-[440px] text-[#7D7987]'>Trafalgar provides progressive, and affordable
              healthcare, accessible on mobile online
              for everyone</p>
              <button className='py-[16px] px-[37px] bg-[#458FF6] text-white rounded-[55px]'>Consult today</button>
          </div>
          <img src={logo1} alt="" />
        </div>
      </header>
      <main>
        <section>
        <section className='py-20'>
  <h1 className='font-bold text-[36px] text-center'>Our services</h1>
  <p className='w-[962px] max-w-full text-center mx-auto mt-[62px] text-gray-500'>
    We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
  </p>

  <div className='flex  mt-16 flex-wrap justify-between max-w-[1180px] mx-auto '>
    <div className='bg-white max-w-[380px] w-full rounded-3xl shadow-xl p-10'>
      <img src={koz} alt='Search doctor' className='w-[95px] h-[95px] object-contain' />
      <p className='text-black text-[24px] font-bold mt-10 mb-4'>Search doctor</p>
      <p className='text-gray-500 leading-[27px]'>
        Choose your doctor from thousands of specialist, general, and trusted hospitals
      </p>
    </div>
      <div className='bg-white max-w-[380px] w-full rounded-3xl shadow-xl p-10'>
      <img src={dori} alt='Search doctor' className='w-[95px] h-[95px] object-contain' />
      <p className='text-black text-[24px] font-bold mt-10 mb-4'>Online pharmacy</p>
      <p className='text-gray-500 leading-[27px]'>
        Buy  your medicines with our mobile application with a simple delivery system
      </p>
    </div>
      <div className='bg-white max-w-[380px] w-full rounded-3xl shadow-xl p-10'>
      <img src={hujjat} alt='Search doctor' className='w-[95px] h-[95px] object-contain' />
      <p className='text-black text-[24px] font-bold mt-10 mb-4'>Consultation</p>
      <p className='text-gray-500 leading-[27px]'>
        Free consultation with our trusted doctors and get the best recomendations
      </p>
    </div>
      <div className='bg-white max-w-[380px] w-full rounded-3xl shadow-xl p-10 mt-[45px]'>
      <img src={hujjt} alt='Search doctor' className='w-[95px] h-[95px] object-contain' />
      <p className='text-black text-[24px] font-bold mt-10 mb-4'>Details info</p>
      <p className='text-gray-500 leading-[27px]'>
        Free consultation with our trusted doctors and get the best recomendations
      </p>
    </div>
      <div className='bg-white max-w-[380px] w-full rounded-3xl shadow-xl p-10 mt-[45px]'>
      <img src={quti} alt='Search doctor' className='w-[95px] h-[95px] object-contain' />
      <p className='text-black text-[24px] font-bold mt-10 mb-4'>Emergency care</p>
      <p className='text-gray-500 leading-[27px]'>
      You can get 24/7 urgent care for yourself or your children and your
lovely family
      </p>
    </div>
      <div className='bg-white max-w-[380px] w-full rounded-3xl shadow-xl p-10 mt-[45px]'>
      <img src={hujat} alt='Search doctor' className='w-[95px] h-[95px] object-contain' />
      <p className='text-black text-[24px] font-bold mt-10 mb-4'>Tracking</p>
      <p className='text-gray-500 leading-[27px]'>
    Track and save your medical history and health data 
      </p>
    </div>
  </div>
<button className="w-[192px] h-[54px] border-2 border-[#69a5ff] rounded-full bg-white text-[#5597f5] text-[16px] font-semibold hover:bg-[#69a5ff] hover:text-white transition-all duration-300 mx-auto block mt-16">
  Learn more
</button>
</section>


        </section>
        <section>
          {/* Emin */}
          <div className="container flex items-center justify-between py-10 mx-auto max-w-[90%]">
            <div>

              <img src={logo2} alt="logo"/>

            </div>

            <div className="space-y-10">
              <h1 className="text-black text-[36px] font-semibold">Leading healthcare providers</h1>
              <hr class="border-[1px] w-[50px]" />

              <p className="text-[18px] text-[#7D7987] max-w-[435px]">
                Trafalgar provides progressive and affordable
                healthcare, accessible on mobile and online
                for everyone. To us, it's not just work.
                We take pride in the solutions we deliver.
              </p>

              <button className="w-[201.92px] h-[56px] rounded-[55px] border-[1.4px] border-[#458FF6] text-[#458FF6]  font-bold text-[18px]  flex items-center justify-center">
                Learn more
              </button>
            </div>
          </div>
        
        </section>
        <section>
          {/* Islom */}
        </section>
        <section className='container max-w-[90%] mx-auto bg-blue-500 py-15 rounded-2xl text-white'>
          {/* Behruz */}

          <h1 className='justify-center text-3xl text-center'>What our customer are saying</h1>

          <div className='flex items-center justify-between py-10'>
            <div className='flex items-center gap-[20px]  '>

              <img src="bexruz.png" alt="" />
              <div className="flex flex-col">
                <p className='flex text-3xl'>Edward Newgate</p>
                <p className='text-blue-100 flex-row-reverse' flex-wrap>Founder Circle</p>
              </div>
            </div>

            <div className='text-2xl w-[500px] flex gap-5 '>
              <p className='rounded-10 text-gray-300'>“Our dedicated patient engagement app and
                web portal allow you to access information instantaneously (no tedeous form, long calls,
                or administrative hassle) and securely”</p>
            </div>
          </div>

        </section>
        <section>
          {/* Botir */}
        </section>
      </main>
      <footer>
        {/* E'zoza */}
      </footer>
    </div>
  )
}

export default App