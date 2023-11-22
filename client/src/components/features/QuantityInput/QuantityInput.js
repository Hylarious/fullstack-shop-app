import { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const QuantityInput = (props) => {
  const [count, setCount] = useState(props.quantity);

  const handleCountUp = (e) => {
    e.preventDefault();
    const newCount = count + 1
    setCount(newCount);
    props.countUp(e, count);
  };
  const handleCountDown = (e) => {
    e.preventDefault();
    if (count > 0) {
      const newCount = count - 1 
      setCount(newCount);
      props.countDown(e, count);
    }
  };
  return (
    <ButtonGroup> 
      <Button onClick={handleCountDown}>-</Button>
      <div className='mx-2'>{count}</div>
      <Button onClick={handleCountUp}>+</Button>
    </ButtonGroup>
  );
};
export default QuantityInput;
