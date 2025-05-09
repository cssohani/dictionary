import { useState, useEffect } from 'react'
import axios from 'axios'
import './Dictionary.css'

const Dictionary = () => {
    const [word, setWord] = useState("");
    const [meaning, setMeaning] = useState("");

    //API_KEY = process.env.API_KEY;

    const fetchMeaning = async (string) => {
        const response = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=f3558918-3c64-46f5-aa62-3494264aafd5`)
        setMeaning(response.data[response.data.length-1].shortdef)
        console.log(response.data[response.data.length-1])
    }
    const findMeaning = () => {
        console.log(word);
        fetchMeaning(word)
        
    }

    useEffect(() => {
        fetchMeaning("")
    }, [])

  return (
    <div className="container">
        <div className="headers">
            <h1>Welcome to Dictionary!</h1>
            <h3>What word do you want the definition for?</h3>
        </div>
        <div className="inputArea">
            <input className="wordInput" value={word} onChange={(e) => setWord(e.target.value)} placeholder="Enter word"/>
            <button className="btn" onClick={findMeaning}>Find meaning</button>
        </div>
        <p className="meaning">{meaning}</p>
        
    </div>
  )
}

export default Dictionary
