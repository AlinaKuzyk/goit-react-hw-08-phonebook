import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { FormStyled, LabelStyled } from './LoginView.styled';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    switch (event.target.name) {
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
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <FormStyled onSubmit={handleSubmit} autoComplete="off">
        <LabelStyled>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="example@mail.com"
          />
        </LabelStyled>
        <LabelStyled>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </LabelStyled>
        <button type="submit">Log In</button>
      </FormStyled>
    </div>
  );
};

export default LoginView;
