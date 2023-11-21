import { NavLink } from "react-router-dom"
import { Container, Nav, Navbar} from "react-bootstrap"


const MainMenu = () => {
  return (
    <Navbar bg="light" data-bs-theme="light" expand="lg" className="mb-4">
		<Container>
			<Navbar.Brand as={NavLink} to="/" >
			<img src="logo.png" alt="Logo" width='40%'/>
			</Navbar.Brand>
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
