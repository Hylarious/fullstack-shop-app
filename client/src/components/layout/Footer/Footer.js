import { Col, Container, Row } from "react-bootstrap"


const Footer = () => {
  return (
    <Container className="my-4">
			<Row className="text-muted justify-content-center">
				<Col  xs="auto">Copyright &copy; Book.app</Col>
			</Row>
		</Container>
  )
};

export default Footer;
