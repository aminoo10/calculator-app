import Head from 'next/head'
import { useState } from 'react';


export default function Home() {

// let operand = ''
const [oldNum, setOldNum] = useState('');
const [operand, setOperand] = useState('');
const [result, setResult] = useState(''); 
const [displayResult, setDisplayResult] = useState(''); //this is only for when equals is used, so we can clear oldNum and result, and still show the value.

//conditional rendering for display number: if result is blank, use oldNum. otherwise always use result.
const [opPressed, setOpPressed] = useState(false);

const handleClick = (number) => {
  setResult(result + number);
}

const resetCalc = () => {
  setResult('');
  setDisplayResult('');
  setOldNum('');
  setOpPressed(false);
}

const handleClickZero = () => {
  if (result !== '') setResult(result + 0)
}

const handleClickDecimal = () => {
  if (!result.includes(".")) setResult(result + ".")
}

const delCalc = () => {
  setResult(result.slice(0,-1));
}

const handleEquals = () => {
  //when '=' is pressed.
  if (numberPresent(result) && numberPresent(oldNum)) { //cant press equals when there is no other number to calculate against
    if (operand === '+') {
      add(true);
    }
    else if (operand === '-') {
      sub(true);
    }
    else if (operand === 'x') {
      mult(true);
    }
    else if (operand === '/') {
      div(true);
    }

    setOpPressed(false);
    setResult('');
    setOldNum('');
    setOperand('');
  }


}

const calculate = (op) => {
  if (numberPresent(result) || numberPresent(displayResult)) { //cannot do operations initially without there being two values populated.
    if (!opPressed) {
      if (numberPresent(displayResult) && !numberPresent(result)){
        setOldNum(displayResult)
      } else setOldNum(result);

      setResult('');
      setOperand(op);
      setOpPressed(true);
    } else if (opPressed && numberPresent(result)) { 
      if (operand === '+') {
        add();
      }
      else if (operand === '-') {
        sub();
      }
      else if (operand === 'x') {
        mult();
      }
      else if (operand === '/') {
        div();
      }
      setResult('');
      setOperand(op);
    }
  } 
}
// helper methods to check whether these two values are populated

// const resultsPresent = () => {
//   if (result !== '' || result !== '.' ) {
//     return true;
//   } else return false;
// }

// const oldNumPresent = () => {
//   if (oldNum !== '' || oldNum !== '.' ) {
//     return true;
//   } else return false;

// }

const numberPresent = (value) => {
  let bool = false;
  if (value && value != '.') {
    bool = true 
  } 
  return bool;
}




//if argument is set to one thing it will set the display number, if its not set, it will display to oldNum.
const add = (equals) => {
  if (equals) {
    setDisplayResult(parseFloat(oldNum) + parseFloat(result));
  } else setOldNum(parseFloat(oldNum) + parseFloat(result));
  
}

const sub = (equals) => {
  if (equals) {
    setDisplayResult(parseFloat(oldNum) - parseFloat(result));
  } else setOldNum(parseFloat(oldNum) - parseFloat(result));
}

const mult = (equals) => {
  if (equals) {
    setDisplayResult(parseFloat(oldNum) * parseFloat(result));
  } else setOldNum(parseFloat(oldNum) * parseFloat(result));
}

const div = (equals) => {
  // if (result === 0) {
  //   setOldNum("Don't do that...");
  //   setResult('');
  // }
  //already impossible to input the number zero first, hahaha!!!!
  if (equals) {
    setDisplayResult(parseFloat(oldNum) / parseFloat(result));
  } else setOldNum(parseFloat(oldNum) / parseFloat(result));
  
}




/*when you press '+', what happens?

edge cases: 1. operands should not work if there is no input (result is either '.' or '').
how to make a function like pressing operands constantly without pressing equals? 
      answer: if oldNum has initially been populated, that means we still have a value waiting to have operations done by other values? correct?
      use an if case checking to see if oldNum is still present (equals has not been pressed and the numbers have not been cleared.)
      basically work like this:
      operand pressed -> check to see if operand is pressed by seeing if oldNum is not blank.
      if oldNum is blank -> set oldNum to the value of result and clear result.
      if oldNum is NOT blank -> do what equals would do: add the result to oldNum, keep result blank. 




*/

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
          {!result && <p className="screen-text">{oldNum}</p>}
          {result && <p className="screen-text">{result}</p>}
          {!oldNum && !result && <p className="screen-text">{displayResult}</p> }
        </div>
        <div className="keypad">
          <div className="row-1">
            <button value="7" onClick={e => handleClick(e.target.value)}>7</button>
            <button value="8" onClick={e => handleClick(e.target.value)}>8</button>
            <button value="9" onClick={e => handleClick(e.target.value)}>9</button>
            <button id="var-1" onClick={delCalc}>DEL</button>
          </div>
          
          <div className="row-2">
            <button value="4" onClick={e => handleClick(e.target.value)}>4</button>
            <button value="5" onClick={e => handleClick(e.target.value)}>5</button>
            <button value="6" onClick={e => handleClick(e.target.value)}>6</button>
            <button value="+" onClick={e => calculate(e.target.value)}>+</button>
          </div>

          <div className="row-3">
            <button value="1" onClick={e => handleClick(e.target.value)}>1</button>
            <button value="2" onClick={e => handleClick(e.target.value)}>2</button>
            <button value="3" onClick={e => handleClick(e.target.value)}>3</button>
            <button value="-" onClick={e => calculate(e.target.value)}>-</button>
          </div>

          <div className="row-4">
            <button onClick={handleClickDecimal}>.</button>
            <button onClick={handleClickZero}>0</button>
            <button value="/" onClick={e => calculate(e.target.value)}>/</button>
            <button value="x" onClick={e => calculate(e.target.value)}>x</button>
          </div>
          
          <div className="row-5">
            <button id="var-1" onClick={resetCalc}>RESET</button>
            <button id="var-2" onClick={handleEquals}>=</button>

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
