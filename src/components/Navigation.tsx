// export interface NavigationType{

// }

function Navigation({ ...props }) {
  return (
    <nav>
      <menu>
        <li>
          <a href='#' title='Go to Homepage'>
            <img src='/compasslogosimple.svg' alt='' className='h-12' />
          </a>
        </li>
      </menu>
    </nav>
  );
}

export default Navigation;
