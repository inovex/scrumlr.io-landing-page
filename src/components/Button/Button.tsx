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
  variant?: 'primary' | 'tertiary';
};

export const Button =(props: ButtonProps) => {
  return (
    <button 
      aria-label={props.ariaLabel}
      className={classNames('button', `button--${props.variant}`, props.className)}
      disabled={props.disabled} 
      onClick={props.onClick}
    >
      <span>{props.children}</span>
      {props.icon}
    </button>
  );
}
