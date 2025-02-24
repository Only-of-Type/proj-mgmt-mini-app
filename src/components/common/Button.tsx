import { ReactNode } from 'react';
import classnames from 'classnames';

export interface ButtonType {
  label: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  isDisabled?: boolean;
  buttonStyle?: 'primary' | 'secondary';
  buttonType?: 'button' | 'icon';
}

function Button({
  label,
  icon,
  iconPosition,
  isDisabled,
  buttonStyle = 'primary',
  buttonType,
}: ButtonType) {
  //    Button styles
  const primaryStyles = 'bg-raisin-900 hover:bg-cyan-800';
  const classes = classnames(
    'rounded-md px-5 py-2 flex items-center relative w-min text-nowrap gap-1',
    {
      [primaryStyles]: buttonStyle === 'primary',
      //   [disabled]: isDisabled,
    }
  );
  return (
    <button className={classes} disabled={isDisabled}>
      {icon && <span className='pb-1'>+</span>}
      {label}
    </button>
  );
}
export default Button;
