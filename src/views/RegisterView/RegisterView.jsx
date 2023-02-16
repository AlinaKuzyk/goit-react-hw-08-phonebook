import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { FormStyled, LabelStyled } from './RegisterView.styled';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        return setName(event.target.value);
      case 'email':
        return setEmail(event.target.value);
      case 'password':
        return setPassword(event.target.value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <FormStyled onSubmit={handleSubmit}>
        <LabelStyled>
          Username
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
          ></input>
        </LabelStyled>

        <LabelStyled>
          Email
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            value={email}
            onChange={handleChange}
          ></input>
        </LabelStyled>

        <LabelStyled>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
        </LabelStyled>

        <button type="submit">Sing Up</button>
      </FormStyled>
    </div>
  );
};

export default RegisterView;
