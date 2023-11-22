import { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const QuantityInput = (props) => {
  const [count, setCount] = useState(props.quantity);

  const handleCountUp = (e) => {
    e.preventDefault();
    const newCount = count + 1;
    setCount(newCount);
    props.countUp(e, newCount);
  };

  const handleCountDown = (e) => {
    e.preventDefault();
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      props.countDown(e, newCount);
    }
  };

  return (
    <ButtonGroup className="m-3 quantityInput">
      <Button onClick={handleCountDown}>-</Button>
      <div>
        {count}
      </div>
      <Button onClick={handleCountUp}>+</Button>
    </ButtonGroup>
  );
};
export default QuantityInput;
