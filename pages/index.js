import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Mentor | Calculator app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className="calculator">
        <h1>calc</h1>
        <div className="screen">
          <p className="screen-text">123456789</p>
        </div>
        <div className="keypad">
          <div className="row-1">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button id="var-1">DEL</button>
          </div>
          
          <div className="row-2">
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
          </div>

          <div className="row-3">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
          </div>

          <div className="row-4">
            <button>.</button>
            <button>0</button>
            <button>/</button>
            <button>x</button>
          </div>
          
          <div className="row-5">
            <button id="var-1">RESET</button>
            <button id="var-2">=</button>

          </div>

        </div>
      </main>

      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Ash</a>.
      </footer>
    </div>
  )
}
