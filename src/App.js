import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let [equation, setEquation] = useState("");
  let [result, setResult] = useState(0);

  const btnClickHandler = (e) => {
    e.preventDefault();
    let newEquation = equation + e.target.value;
    setEquation(newEquation)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    try{
      if(equation == "0/0"){
        setResult("NaN")
        return;
      }
      else if(equation.length === 0){
        setResult("Error")
        return;
      }

      let val = eval(equation)
      setResult(val)
    } catch(error){
      setResult("Error")
    }
  }

  const clearAll = () => {
    setEquation("")
    setResult("")
  }

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input type="text" 
      value={equation} 
      className="result"
      onChange={(e) => {
        setEquation(e.target.value)
      }}
      
      />

    {result ? <div className="output">{result}</div> : ""}

      <form className="btnContainer" onSubmit={onSubmitHandler}>
        <button type="button" id="7" value="7" className="btn"
        onClick={btnClickHandler}
        >          
          7
        </button>
        <button type="button" id="8" value="8" className="btn"
        onClick={btnClickHandler}
        >
          8
        </button>
        <button type="button" id="9" value="9" className="btn"
        onClick={btnClickHandler}
        >
          9
        </button>
        <button type="button" id="+" value="+" className="btn"
        onClick={btnClickHandler}
        >
          +
        </button>
        <button type="button" id="4" value="4" className="btn"
        onClick={btnClickHandler}
        >
          4
        </button>
        <button type="button" id="5" value="5" className="btn"
        onClick={btnClickHandler}
        >
          5
        </button>
        <button type="button" id="6" value="6" className="btn"
        onClick={btnClickHandler}
        >
          6
        </button>
        <button type="button" id="-" value="-" className="btn"
        onClick={btnClickHandler}
        >
          -
        </button>
        <button type="button" id="1" value="1" className="btn"
        onClick={btnClickHandler}
        >
          1
        </button>
        <button type="button" id="2" value="2" className="btn"
        onClick={btnClickHandler}
        >
          2
        </button>
        <button type="button" id="3" value="3" className="btn"
        onClick={btnClickHandler}
        >
          3
        </button>
        <button type="button" id="*" value="*" className="btn"
        onClick={btnClickHandler}
        >
          *
        </button>
        <button type="button" className="btn"
        onClick={clearAll}
        >
          C
          </button>
        <button type="button" id="0" value="0" className="btn"
        onClick={btnClickHandler}
        >
          0
        </button>
        <button type="button" className="btn"
        onClick={onSubmitHandler}
        >
          =
          </button>
        <button type="button" id="/" value="/" className="btn"
        onClick={btnClickHandler}
        >
          /
        </button>
      </form>
    </div>
  );
}

export default App;
