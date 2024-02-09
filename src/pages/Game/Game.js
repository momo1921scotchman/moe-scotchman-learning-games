import { useEffect, useState } from "react";
import axios from "axios";
import { getWordsEndpoint } from "../../utils/api-utils";
import "./Game.scss";

const Game = () => {
  const [words, setWords] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

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
  console.log(filterWords);

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
        <ul></ul>
      </div>
    </main>
  );
};

export default Game;
