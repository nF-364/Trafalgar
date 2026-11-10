import React from 'react'
import logo from './assets/rasm.png'

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
          <div className="container flex items-center justify-between py-10 mx-auto max-w-[90%]">
            <div>

              <img src={logo} alt="logo"/>

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