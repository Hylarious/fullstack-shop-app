import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import MainMenu from '../MainMenu/MainMenu';

const MainLayout = ({ children }) => {
  return (
    <div>
      <MainMenu />
      <Container>{children}</Container>

      <Footer />
    </div>
  );
};

export default MainLayout;
