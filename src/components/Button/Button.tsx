import type { ReactNode } from 'react';
import classNames from 'classnames';
import './Button.scss';

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export function Button(props: ButtonProps) {
  return (
    <button 
      className={classNames('button', `button--${props.variant}`, props.className)}
      disabled={props.disabled} 
      onClick={props.onClick}
    >
      {props.children}
      {props.icon}
    </button>
  );
}
