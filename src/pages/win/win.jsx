import "./styles.scss";
import Confetti from "react-confetti";

import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxReload } from "react-icons/rx";

import { TimerContext } from "../../context/timerContext";
import { assets } from "../../assets";

const Win = () => {
  const { resetState } = useContext(TimerContext);
  const { brandLogo } = assets();
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetState();
      navigate("/");
    }, 8000);

    return () => clearTimeout(timeoutId);
  }, [resetState, navigate]);

  return (
    <div className="wrapper_en">
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <div className="first_content_en">
        <div className="logo_container_en">
          <img src={brandLogo} alt="Brand Logo" />
        </div>
        <div className="text_container_en">
          <p>
            PARABÉNS,
            <br />
            GANHOU!
          </p>
        </div>

        <Link to="/">
          <button className="btn_accept_wn" onClick={resetState}>
            <RxReload />
          </button>
        </Link>
      </div>
    </div>
  );
};

export { Win };
