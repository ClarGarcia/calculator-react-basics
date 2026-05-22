import './calculatorButtons.css';

function CalculatorButtons(props) {
    return (
        <div className='calculatorButton'>
            <div className='resetButtons'>
                <div className='reset'>
                <button onClick={() => props.resetResult()}>C</button>
                <button onClick={() => props.resetInput()}>CE</button>
                </div>
                <div className='equals'>
                    <button onClick={() => props.equals()}>=</button>
                </div>
            </div>
            <div className='calculator'>
                <button onClick={() => props.calculate('%')}>%</button>
                <button onClick={() => props.calculate('^2')}>x²<sup>2</sup></button>
                <button onClick={() => props.calculate('^x')}>x<sup>x</sup></button>
                <button onClick={() => props.calculate('√')}>√</button>
            </div>
            <div className='calculator'>
                <button onClick={() => props.calculate('+')}>+</button>
                <button onClick={() => props.calculate('-')}>-</button>
                <button onClick={() => props.calculate('x')}>x</button>
                <button onClick={() => props.calculate('÷')}>÷</button>
            </div>
        </div>
    );
}

export default CalculatorButtons;