// export interface SidebarProps{

import Button from './common/Button';

// }
function Sidebar() {
  return (
    <nav
      id='projects'
      aria-label='Your Projects'
      className='bg-gradient-to-r from-slate-900 to-slate-700 col-span-2 rounded-sm px-8 py-16 text-stone-50 flex flex-col gap-8'
    >
      <h2 className='text-xl font-bold uppercase'>Your Projects</h2>
      <button className='bg-cyan-600 rounded-md px-5 py-2 flex items-center relative w-min text-nowrap gap-1 hover:bg-cyan-800'>
        <span className='pb-1'>+</span>Add Project
      </button>
      <Button label='Add Project' />
      <menu>
        <li>Learning React</li>
      </menu>
    </nav>
  );
}

export default Sidebar;
