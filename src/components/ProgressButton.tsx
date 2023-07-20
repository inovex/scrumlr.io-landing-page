import classNames from "classnames";
import "./ProgressButton.scss";

type ProgessButtonProps = {
  children: string;
  icon?: string;
  onClick: () => void;
  active: boolean;
};

const ProgressButton = ({
  children,
  icon,
  onClick,
  active,
}: ProgessButtonProps) => {
  return (
    <div className="progress-button">
      <img src={`icons/icon-${icon}.svg`} alt="" />
      <button
        onClick={onClick}
        className={classNames(
          "progress-button__button",
          active && "progress-button__button--active"
        )}
      >
        {children}
      </button>
      {active && (
        <div className="progress-button__progress">
          <div className="progress-button__progress-bar" />
        </div>
      )}
    </div>
  );
};

export default ProgressButton;
