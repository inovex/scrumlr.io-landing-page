import type { ReactNode } from 'react';
import classNames from 'classnames';
import './Button.scss';

type ButtonProps = {
  ariaLabel?: string;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
};

export const Button =(props: ButtonProps) => {
  return (
    <button 
      aria-label={props.ariaLabel}
      className={classNames('button', props.className)}
      disabled={props.disabled} 
      onClick={props.onClick}
    >
      {props.children}
      {props.icon}
    </button>
  );
}
