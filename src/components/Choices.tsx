import { useEffect, useState } from "react";
import "./Choices.scss";

const Choices = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        if (prevPosition === 8) {
          return 0;
        }

        return prevPosition + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [position]);

  return (
    <div className="choices" id="Features">
      <h2>Your board - your choices.</h2>
      <p>Choose any type of retrospective that suits your team. {position}</p>
      <div className="choices__content">
        <div className="choices__buttons">
          <button onClick={() => setPosition(0)}>Collaborate</button>
          <button onClick={() => setPosition(3)}>Moderate</button>
          <button onClick={() => setPosition(6)}>Customize</button>
        </div>
        <img src={`assets/choices/choices_${position}.svg`} alt="choices_1" />
      </div>
    </div>
  );
};

export default Choices;
