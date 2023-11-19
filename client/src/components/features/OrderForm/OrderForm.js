import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addOrderData, addOrderRequest, getOrder } from '../../../redux/cartRedux';

const OrderForm = () => {
    const dispatch = useDispatch()
    const order = useSelector(getOrder)
    console.log(order)
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [homeNumber, setHomeNumber] = useState('');
  const [city, setCity] = useState('');

  const address = street + ' ' + homeNumber + ', ' + city;

  const handleSubmit = () => {
    dispatch(addOrderData({name, email, address}))
    
    dispatch(addOrderRequest(order))
  };


  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group>
        <Form.Label>Imię i nazwisko</Form.Label>
        <Form.Control
          {...register('name', { required: true, minLength: 3 })}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Wpisz imię i nazwisko"
        />
        {errors.name && (
          <small className="d-block form-text text-danger mt-2">
           To pole jest wymagane
          </small>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>E-mail:</Form.Label>
        <Form.Control
        {...register('email', {required: true})}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Wpisz email"
        />
        {errors.email && (
          <small className="d-block form-text text-danger mt-2">
           To pole jest wymagane
          </small>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>Ulica</Form.Label>
        <Form.Control
        {...register('street', {required: true})}
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          placeholder="Ulica"
        />
        {errors.street && (
          <small className="d-block form-text text-danger mt-2">
           To pole jest wymagane
          </small>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>Numer domu</Form.Label>
        <Form.Control
         
          type="text"
          value={homeNumber}
          onChange={(e) => setHomeNumber(e.target.value)}
          placeholder="Nr."
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Kod pocztowy i miejscowość</Form.Label>
        <Form.Control
        {...register('city', {required: true})}
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Wpisz kod pocztowy i miasto"
        />
        {errors.city && (
          <small className="d-block form-text text-danger mt-2">
           To pole jest wymagane
          </small>
        )}
      </Form.Group>
      <Button type="submit">Złóż zamówienie</Button>
    </Form>
  );
};

export default OrderForm;
