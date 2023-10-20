import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <TextField
        id="name-basic"
        label="Name"
        size="small"
        type="text"
        name="name"
        required
      />
      <TextField
        id="email-basic"
        label="Email"
        size="small"
        type="email"
        name="email"
        required
      />
      <TextField
        id="password-basic"
        label="Password"
        size="small"
        type="password"
        name="password"
        required
      />
      <Button
        variant="contained"
        type="submit"
        style={{ width: '150px', margin: '0 auto' }}
      >
        Register
      </Button>
    </form>
    // <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //   <label className={css.label}>
    //     Username
    //     <input type="text" name="name" required />
    //   </label>
    //   <label className={css.label}>
    //     Email
    //     <input type="email" name="email" required />
    //   </label>
    //   <label className={css.label}>
    //     Password
    //     <input type="password" name="password" required />
    //   </label>
    //   <button type="submit">Register</button>
    // </form>
  );
};
