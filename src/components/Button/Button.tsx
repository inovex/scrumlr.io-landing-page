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
  color?: 'pink' | 'blue';
  size?: 'small' | 'default';
};

export function Button(props: ButtonProps) {
  return (
    <button 
      className={classNames('button', `button--${props.variant}`, `button--${props.color}`, `button--${props.size}`, props.className)}
      disabled={props.disabled} 
      onClick={props.onClick}
    >
      {props.children}
      {props.icon}
    </button>
  );
}
