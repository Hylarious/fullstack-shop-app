import { NavLink } from "react-router-dom"
import { Container, Nav, Navbar} from "react-bootstrap"


const MainMenu = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
		<Container>
			<Navbar.Brand as={NavLink} to="/" >Kociamber za włóczką</Navbar.Brand>
			<div>
			<Nav className="me-auto">
				<Nav.Link as={NavLink} to="/cart">Koszyk</Nav.Link>
			</Nav>
		</div>
		</Container>
	</Navbar>
  );
};

export default MainMenu;
