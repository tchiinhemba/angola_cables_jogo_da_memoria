import "./styles.scss";
import { assets } from "../../assets";

import { useContext } from "react";
import { TimerContext } from "../../context/timerContext";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();

  const { setCards, setTurns, setGameStarted, setSeconds, setTimerColor } = useContext(TimerContext);
  const { brandLogo, iconsGame } = assets();

  // Shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...iconsGame, ...iconsGame]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div className="wrapper_ab">
      <div className="first_content_ab">
        <div className="logo_container_ab">
          <img src={brandLogo} alt="Brand Logo" />
        </div>
        <div className="text_container_ab">
          <p>
            TEM <span>5 SEGUNDOS</span> <br />
            PARA MEMORIZAR
            <br /> A POSIÇÃO DE CADA <br />
            UM DOS NOSSOS <br />
            SEGUROS
          </p>
        </div>
        <button
          className="btn_accept_ab"
          onClick={() => {
            handleClick(navigate, shuffleCards, setSeconds, setTimerColor);
          }}
        >
          <span>ACEITO O DESAFIO</span>
        </button>
        <p>
          <span className="description_ab">TOQUE PARA JOGAR</span>
        </p>
      </div>
    </div>
  );
};

function handleClick(navigate, shuffleCards, setSeconds, setTimerColor) {
  shuffleCards();
  setTimerColor('green')
  setSeconds(5);
  navigate("/game");
}

export { Info };
