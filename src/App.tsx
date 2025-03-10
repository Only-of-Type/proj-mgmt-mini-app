import Navigation from './components/Navigation';
import NewProject from './components/NewProject';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <main className='h-dvh grid grid-cols-6 xl:grid-cols-12'>
        <Sidebar />
        <NewProject />
      </main>
    </>
  );
}

export default App;
