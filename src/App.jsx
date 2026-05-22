import { useState } from 'react'
import CalculatorButtons from './components/calculatorButtons';
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(0);
  const [expression, setExpression] = useState('');

  function calculate(operation) {
    const inputVal = Number(inputValue);

    if (inputValue === '') return;

    let newResult = result;


    if (operation === '+') {
      newResult = result + inputVal;
    }

    if (operation === '-') {
      newResult = result - inputVal;
    }

    if (operation === 'x') {
      newResult = result * inputVal;
    }

    if (operation === '÷') {
      newResult = result / inputVal;
    }

    if (operation === '%') {
      newResult = inputVal / 100;
    }

    if (operation === '^2') {
      newResult = Math.pow(result, 2);
    }

    if (operation === '^x') {
      newResult = Math.pow(result, inputVal);
    }

    if (operation === '√') {
      newResult = Math.sqrt(inputVal);
    }

    const newExpression = `${result} ${operation} ${inputVal} = ${newResult}`;

    setResult(newResult);
    setExpression(newExpression);

  }

  function equals() {
    setExpression(result);
  }

  function resetInput() {
    setInputValue('');
  }

  function resetResult() {
    setResult(0);
    setExpression('');
  }

  return (
    <div className="App">
      <div className='containerCalculator'>
        <div className='texts'>
          <h6>Digite um número para calcular</h6>
          <p>{expression || result}</p>
          <div className='input-container'>
            <input
              className='input-field'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          <label for="input-field" class="input-label"></label>
          <span className="input-highlight"></span>
          </div>
        </div>
        <CalculatorButtons
          calculate={calculate}
          equals={equals}
          resetInput={resetInput}
          resetResult={resetResult}
        ></CalculatorButtons>
      </div>
    </div>
  );
}

export default App
