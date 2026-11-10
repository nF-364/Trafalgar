import React from 'react'
import logo from './assets/logo.svg'
import logo1 from './assets/logo1.png'

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
          {/* Rustam */}
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