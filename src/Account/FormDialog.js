import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { toast } from 'react-toastify';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import authFetch from '../axios/Intercepter';

const theme = createTheme();


 function FormDialog({ close, opn ,dataLoad , edtData}) {
   
   const [data, setData] = React.useState({
     title: "",
     firstName: "",
     lastName: "",
     email: "",
   });


   React.useEffect(()=> {

    setData(edtData);
   },[edtData]);
    
  
  const handleSubmit = (event) => {
    event.preventDefault();
    authFetch.put("/accounts/" + edtData.id ,data).then(y => {

      if (y.status == 200 || y.status == 201) {
        toast.success("Sucessfully Update");
        console.log(y);
        dataLoad();
      }
    }).catch(y => {
      toast.error("Error");
    })
  };

  const inputHandlar = (e) => {
    if (e.target.type != "checkbox") {
      setData({ ...data, [e.target.name]: e.target.value });
    } else {
      setData({ ...data, [e.target.name]: e.target.checked });
    }
  }

  // console.log(data);
  // console.log(edtData);

return (
    <div>
      <Dialog open={opn} onClose={close}>
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
                Update Now
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Title</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Title"
                    name="title"
                    value={data.title}
                    onChange={inputHandlar}
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
                  onChange={inputHandlar}
                  value={data.firstName}

                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="text"
                  label="Last Name"
                  name="lastName"
                  onChange={inputHandlar}
                  value={data.lastName}

                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={inputHandlar}
                  value={data.email}

                />



                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Update
                </Button>              
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Dialog>
    </div>
  );
}


export default React.memo(FormDialog);