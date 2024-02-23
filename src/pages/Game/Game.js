import { useEffect, useState } from "react";
import axios from "axios";
import { getWordsEndpoint } from "../../utils/api-utils";
import "./Game.scss";

const Game = () => {
  const [words, setWords] = useState(null);

  const getWords = async () => {
    try {
      let response = await axios.get(getWordsEndpoint());
      setWords(response.data);
    } catch (err) {
      console.log("error: ", err);
    }
  };
  useEffect(() => {
    getWords();
  }, []);

  if (words === null) {
    return <p>Please wait retrieving information...</p>;
  }

  const optionOne = Math.floor(Math.random() * words.length);

  const selectWord = words[optionOne];
  const filterWords = words.filter((word) => {
    return selectWord.id !== word.id;
  });

  const randomsArr = [];
  const newArr = [];
  while (randomsArr.length < 4) {
    const randIndex = Math.floor(Math.random() * filterWords.length);
    const randWord = filterWords[randIndex];
    if (!randomsArr.includes(randIndex)) {
      randomsArr.push(randIndex);
      newArr.push(randWord);
    }
  }

  return (
    <main>
      <div className="game__question">
        <img
          src={selectWord.image}
          alt={selectWord.english}
          className="game__image"
        />
        <p>{selectWord.english}</p>
      </div>
      <div className="game__answers">
        <ul>
          <li>
            <p className="game__statimc">{selectWord.statimc}</p>
          </li>
          {newArr.map((word, index) => (
            <li key={index}>
              <p className="game__statimc">{word.statimc}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Game;
