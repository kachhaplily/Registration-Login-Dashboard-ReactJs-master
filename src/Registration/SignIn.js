import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { userRegi } from '../ReduxStore/action/regiAction';
import { useFormik } from 'formik';
import * as Yup from "yup";

const theme = createTheme();

export default function SignIn() {

  const regiData = useSelector(y => y.regi);
  const disData = useDispatch();


  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .required('Please Select the title !'),
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Please Enter Your First Name !'),

    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Please Enter Your Last Name !'),

    email: Yup.string()
      .email('Invalid email')
      .required('Please Enter Your Email!'),

    password: Yup.string()
      .matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/, ' Must use Alpha Numeric with special char and length 8 must be 8 charcarter')
      .required("Please Enter Password"),

    confirmPassword: Yup.string().required("Please Enter Confirm Password").
      oneOf([null, Yup.ref('password')], "password should match"),

    acceptTerms: Yup.bool()
      .oneOf([true], "You must accept the terms and conditions")

  });

  const formik = useFormik({
    initialValues: {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false
    },

    validationSchema: SignupSchema,

    onSubmit: (values) => {
      disData(userRegi(values))

    },
  });
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Title</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Title"
                name="title"
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              >
                <MenuItem value="Mr">Mr</MenuItem>
                <MenuItem value="Miss">Miss</MenuItem>
                <MenuItem value="Mrs">Mrs</MenuItem>
              </Select>
            </FormControl>

            <TextField
              margin="normal"
              required
              fullWidth
              id="text"
              label="First Name"
              name="firstName"
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="text"
              label="Last Name"
              name="lastName"
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              // type="password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>,
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              // type="password"
              id="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              onChange={formik.handleChange}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>,
              }}
            />
            <FormControlLabel
              control={<Checkbox typeof='checkbox' name="acceptTerms" value="remember" color="primary" onClick={formik.handleChange} 
              
              />}
              label="Remember me"
              helperText={formik.touched.acceptTerms && formik.errors.acceptTerms}
              error={formik.touched.acceptTerms && Boolean(formik.errors.acceptTerms)}
            
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}