import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import operations from 'store/auth/auth-operations';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <form onSubmit={handleSubmit} style={{ width: '300px' }}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          sx={{
            mt: 25,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          sx={{
            mt: 5,
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
            mt: 5,
          }}
        />
        <Button
          size="large"
          variant="contained"
          type="submit"
          sx={{
            backgroundImage:
              'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,48,79,1) 35%, rgba(10,177,217,1) 86%, rgba(0,212,255,1) 100%)',
            mt: 6,
            ml: 7,
            maxWidth: '100px',
            maxHeight: '80px',
          }}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterView;
