import Button from './common/Button';
import classnames from 'classnames';
import Arrow from '../assets/doublearrow.svg?react';

export interface SidebarProps {
  isExpanded?: boolean;
}

function Sidebar({ isExpanded = false }: SidebarProps) {
  const sidebarClasses = classnames(
    'bg-nymph-900 col-span-2 rounded-sm px-8 py-16 text-stone-50 flex flex-col gap-8',
    {
      'sr-only': !isExpanded,
    }
  );
  return (
    <>
      {/* This button is hidden as the nav is always expanded for screenreaders, so is only needed for visual reliant users */}
      <button className='bg-nymph-900 text-cream-500' aria-hidden>
        <Arrow />
      </button>
      <nav id='projects' aria-label='Your Projects' className={sidebarClasses}>
        <h2 className='text-xl font-bold uppercase'>Your Projects</h2>
        <Button label='Add Project' icon='+' />
        <menu>
          <li>Learning React</li>
        </menu>
      </nav>
    </>
  );
}

export default Sidebar;
