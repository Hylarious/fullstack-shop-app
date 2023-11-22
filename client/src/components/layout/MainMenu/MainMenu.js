import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getCartProducts } from '../../../redux/cartRedux';

const MainMenu = () => {
  const products = useSelector(getCartProducts)
  let totalQuantity = products.reduce(
    (total, product) => total + product.quantity,
    0,
  );
  return (
    <Navbar bg="light" data-bs-theme="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src="logo.png" alt="Logo" width="40%" />
        </Navbar.Brand>
        <div>
          <Nav className="me-auto cartDot">
            <Nav.Link as={NavLink} to="/cart">
              Koszyk
            </Nav.Link>
            {totalQuantity > 0 && (
              <div>
                <p>{totalQuantity}</p>
              </div>
            )}
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default MainMenu;
