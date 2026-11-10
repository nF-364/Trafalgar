import React from 'react'
import koz from './assets/koz.png'
import dori from './assets/dori.png'
import hujjat from './assets/hujjat.png'
import hujjt from './assets/hujjt.png'
import quti from './assets/quti.png'
import hujat from './assets/hujat.png'

const App = () => {
  return (
    <div>
      <header>
        {/* Abdulboriy */}
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
        </section>
        <section>
          {/* Islom */}
        </section>
        <section>
          {/* Behruz */}
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