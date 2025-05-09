import { useState, useEffect } from 'react'
import axios from 'axios'
//require('dotenv').config()

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
    <div>
      <h1>Welcome to dictionary</h1>
      <input className="wordInput" value={word} onChange={(e) => setWord(e.target.value)}/>
      <button onClick={findMeaning}>Find meaning</button>
      <p>{meaning}</p>
    </div>
  )
}

export default Dictionary
