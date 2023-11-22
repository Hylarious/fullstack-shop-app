import { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const OrderForm = (props) => {
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
    if (address && name && email) {
      props.action({ name, email, address });
    }
    <Navigate to='/'/>
  };

  return (
    <Col sm={6}>
      <h4>Dane zamówienia: </h4>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className='mb-2'>
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
        <Form.Group className='mb-2'>
          <Form.Label>E-mail:</Form.Label>
          <Form.Control
            {...register('email', { required: true })}
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
        <Form.Group className='mb-2'>
          <Form.Label>Ulica</Form.Label>
          <Form.Control
            {...register('street', { required: true })}
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
        <Form.Group className='mb-2'>
          <Form.Label>Numer domu</Form.Label>
          <Form.Control
            type="text"
            value={homeNumber}
            onChange={(e) => setHomeNumber(e.target.value)}
            placeholder="Nr."
          />
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Label>Kod pocztowy i miejscowość</Form.Label>
          <Form.Control
            {...register('city', { required: true })}
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
    </Col>
  );
};

export default OrderForm;
