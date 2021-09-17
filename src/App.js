import React, { useEffect, useState } from 'react'
import wordList  from './resources/words.json'

const MAX_TYPED_KEYS = 30

const getWord = () => {
  const index = Math.floor(Math.random() * wordList.length);  
  const word = wordList[index];
    return word.toLowerCase();
}

const isValidKey = (key, word) => {
  if(!word) return false;

  const result = word.split('').includes(key);
  return result;
}

const Word =({word, validKeys}) => {
  return (<>
          <span className="matched"></span>
          <span className="remainder">{word}</span>
          </> )

};
const App =() =>  {
  
  const [word, setWord]=useState('')
  const [typedKeys, setTypedKeys] = useState([]);
  const [validKeys, setValidKeys] = useState([]);

  useEffect(() => {
    setWord(getWord());
  }, []);

  
  const handleKeyDown = (e) =>{
    e.preventDefault();
    const {key} = e ;
    setTypedKeys((prev) =>  [...prev, key].slice(MAX_TYPED_KEYS * -1));
    
    if(isValidKey(key, word)) {
      setValidKeys((prev)=> {
        const isValidLength = prev.length <= word.length;
        const isNextChar = isValidLength && word[prev.length] == key;

       return (isNextChar)? [...prev, key ] : prev;
      })
    }

    console.log('key', key)
  }
    return  ( <div className="container" tabIndex="0" onKeyDown={handleKeyDown}>
    <div className="valid-keys">
        <Word word={word} validKeys={validKeys} />
    </div>

    <div className="typed-keys">{typedKeys? typedKeys.join(' '): null}</div>
    <div className="completed-words">
      <ol>
        <li>cidade</li>
        <li>carro</li>
        <li>moto</li>          
      </ol>
    </div>
  </div>
  );
};

export default App;