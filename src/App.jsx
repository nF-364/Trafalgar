import React from 'react'
import bexruz from 'react'
const App = () => {
  return (
    <div>
      <header>
        {/* Abdulboriy */}
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