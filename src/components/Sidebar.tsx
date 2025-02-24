// export interface SidebarProps{

import Button from './common/Button';

// }
function Sidebar() {
  return (
    <nav
      id='projects'
      aria-label='Your Projects'
      className='bg-gradient-to-r from-raisin-900 from-50% to-nymph-900 to-100% col-span-2 rounded-sm px-8 py-16 text-stone-50 flex flex-col gap-8'
    >
      <h2 className='text-xl font-bold uppercase'>Your Projects</h2>
      <Button label='Add Project' icon='+' />
      <menu>
        <li>Learning React</li>
      </menu>
    </nav>
  );
}

export default Sidebar;
