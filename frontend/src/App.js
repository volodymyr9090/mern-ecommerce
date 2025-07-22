import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <h1>Welcome To MyShop</h1>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome to MyShop</h1>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
