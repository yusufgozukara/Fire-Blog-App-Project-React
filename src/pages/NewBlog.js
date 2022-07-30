import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blok from '../assets/blok.png';
// import { TextareaAutosize } from '@mui/material';


const theme = createTheme();

export default function NewBlog() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
          
          <img src={blok} alt="blok" />
          
          <Typography component="h1" variant="h5" >
            New Blog
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              placeholder="Title"
              name="title"
              label='title'
              autoComplete="title"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="image URL"
              label='image'
              placeholder="Image URL"
              type="text"
              id="image"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label='Content'
              name="Content"
              placeholder="Image URL"
              type="text"
              id="image"
              autoComplete="current-password"
            />
            {/* <TextareaAutosize
              margin="normal"
              required
              fullWidth
              minRows={15}
              maxRows={20}
              style={{ width: 500 }}
              name="Content"
              label="Content"
              type="text"
              id="Content"
              placeholder="Content"
              autoComplete="current-password"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'primary.light'}}
            >
              Add New Blog
            </Button>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}