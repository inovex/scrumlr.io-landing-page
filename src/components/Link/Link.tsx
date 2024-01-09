import type { ReactNode } from 'react';
import classNames from 'classnames';
import './Link.scss';

type LinkProps = {
  href?: string;
  ariaLabel?: string;
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
  tertiary?: boolean;
};

export const Link =(props: LinkProps) => {
  return (
    <a 
      aria-label={props.ariaLabel}
      className={classNames('link', {'link--tertiary': props.tertiary}, props.className)}
      href={props.href}
    >
      {props.children}
    </a>
  );
}
