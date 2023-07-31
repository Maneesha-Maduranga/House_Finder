import { Outlet } from 'react-router-dom';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <header>
        <Navbar />
      </header>
      <main className='container mx-auto'>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
