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
  const primaryStyles = 'bg-rose-700 hover:bg-rose-900';
  const secondaryStyles = 'bg-nymph-700 hover:bg-nymph-900';
  const classes = classnames(
    'rounded-md px-5 py-2 flex items-center relative w-min text-nowrap gap-1 text-cream-300',
    {
      [primaryStyles]: buttonStyle === 'primary',
      [secondaryStyles]: buttonStyle === 'secondary',
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
