import Product from '../Product/Product';
import { Row } from 'react-bootstrap';

const Products = ({ products }) => {
  return (
    <Row>
      {products.map((prod) => (
        <Product key={prod.id} {...prod} />
      ))}
    </Row>
  );
};

export default Products;
