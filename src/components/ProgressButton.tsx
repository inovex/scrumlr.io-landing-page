import classNames from "classnames";
import "./ProgressButton.scss";
import Icon from "./Icon";

type ProgessButtonProps = {
  children: string;
  icon: string;
  onClick: () => void;
  active: boolean;
  duration: number;
};

const ProgressButton = ({
  children,
  icon,
  onClick,
  active,
  duration,
}: ProgessButtonProps) => {
  return (
    <div
      className={classNames(
        "progress-button",
        active && "progress-button--active"
      )}
    >
      <Icon name={icon} />
      <button onClick={onClick} className="progress-button__button">
        {children}
      </button>
      {active && (
        <div className="progress-button__progress">
          <div
            className="progress-button__progress-bar"
            style={{
              animation: `progress ${duration}ms linear forwards`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProgressButton;
