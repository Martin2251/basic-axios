import logo from './logo.svg';
import './App.css';
import { useState} from "react"
import axios from "axios"

function App() {
  const [quote , setQuote] = useState("")

  const getQuote = () => {
    axios.get("https://api.quotable.io/random")
    .then(response => {console.log(response.data.content)
    setQuote(response.data.content)
  }).catch(err => {
console.log(err)
    })
  }
  return (
    <div className="App">
      <button onClick={getQuote}>get quote</button>
      {quote && <h4>{quote}</h4>}
    </div>
  );
}

export default App;
