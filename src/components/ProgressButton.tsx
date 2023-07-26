import classNames from "classnames";
import "./ProgressButton.scss";
import Icon from "./Icon";

type ProgessButtonProps = {
  children: string;
  icon: string;
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
    <div className={classNames(
          "progress-button",
          active && "progress-button--active"
        )}>
      <Icon name={icon} />
      <button
        onClick={onClick}
        className=
          "progress-button__button"
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
