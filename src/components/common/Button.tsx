import { ReactNode } from 'react';
import classnames from 'classnames';

export interface ButtonType {
  label: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  buttonStyle?: 'primary' | 'secondary';
  buttonType?: 'button' | 'icon';
}

function Button({
  label,
  icon,
  iconPosition,
  buttonStyle = 'primary',
  buttonType,
}: ButtonType) {
  //    Button styles
  const primaryStyles = 'bg-rose-700 hover:bg-rose-900';
  const secondaryStyles =
    '!border-nymph-700 hover:bg-nymph-500 text-nymph-900 hover:text-cream-300';
  const classes = classnames(
    'w-full max-w-[10rem] justify-center rounded-full px-5 py-2 text-lg flex items-center relative text-nowrap gap-1 text-cream-300 border-2 border-transparent',
    {
      [primaryStyles]: buttonStyle === 'primary',
      [secondaryStyles]: buttonStyle === 'secondary',
      //   [disabled]: isDisabled,
    }
  );
  return (
    <button className={classes}>
      {icon && <span>+</span>}
      {label}
    </button>
  );
}
export default Button;
