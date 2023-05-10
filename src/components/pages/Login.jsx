import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import operations from 'store/auth/auth-operations';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          sx={{
            mt: 45,
            width: 300,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          sx={{
            mt: 45,
            ml: 5,
            width: 300,
          }}
        />
        <Button
          size="large"
          variant="contained"
          type="submit"
          sx={{
            backgroundImage:
              'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,48,79,1) 35%, rgba(10,177,217,1) 86%, rgba(0,212,255,1) 100%)',
            mt: 45.8,
            ml: 5,
            mb: 5,
            maxWidth: '100px',
            maxHeight: '80px',
          }}
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default Login;
