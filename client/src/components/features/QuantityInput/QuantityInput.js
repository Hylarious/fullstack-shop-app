import { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const QuantityInput = (props) => {
  const [count, setCount] = useState(props.count);

  const handleCountUp = (e) => {
    e.preventDefault();
    setCount(count + 1);
    props.countUp(e, count);
  };
  const handleCountDown = (e) => {
    e.preventDefault();
    if (count > 0) {
      setCount(count - 1);
      props.countDown(e, count);
    }
  };
  return (
    <ButtonGroup>
      <Button onClick={handleCountDown}>-</Button>
      <p>{count}</p>
      <Button onClick={handleCountUp}>+</Button>
    </ButtonGroup>
  );
};
export default QuantityInput;
