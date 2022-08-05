import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blok from '../assets/blok.png';
import { BlogContext } from '../contexts/BlogContext';
import { useContext, useEffect } from "react";
import { AuthContext } from '../contexts/AuthContext';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { UpdateBlogFunc } from '../helpers/functions';
// import { TextareaAutosize } from '@mui/material';


const theme = createTheme();

export default function UpdateBlog() {

  
  
  const item = useLocation()
  // const {author, content, date, id, image, title} = item;
  const updateItem = item.state.state
  console.log(updateItem.title)
  
  const [newBlogTitle,setNewBlogTitle] = useState(updateItem.title)
  const [newBlogImage,setNewBlogImage] = useState(updateItem.image)
  const [newBlogContent, setNewBlogContent] = useState(updateItem.content)
  const {handleSubmit} = useContext(BlogContext);
  
  const date = new Date().toString().split(' ')
  // console.log(date);

  const {currentUser} = useContext(AuthContext);
  useEffect(() => {
    // console.log(currentUser);
    
  }, [currentUser])

  const handleUpdate = (e) => {
    e.preventDefault();
    UpdateBlogFunc();
  }

 
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
            Update Blog
          </Typography>
          <form component="form" onSubmit={handleUpdate} noValidate sx={{ mt: 1 }}>
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
              value={newBlogTitle}
              // value={info.title}
              onChange={(e) => setNewBlogTitle(e.target.value)}
              // onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="image"
              label='image'
              placeholder="Image URL"
              type="text"
              id="image"
              autoComplete="current-password"
              value={newBlogImage}
              // value={info.image}
              onChange={(e) => setNewBlogImage(e.target.value)}
              // onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label='Content'
              name="content"
              placeholder="Image URL"
              type="text"
              id="image"
              autoComplete="current-password"
              value={newBlogContent}
              // value={info.content}
              onChange={(e) => setNewBlogContent(e.target.value)}
              // onChange={handleChange}
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
              Update Blog
            </Button>
          </form>
        </Box>

      </Container>
    </ThemeProvider>
  );
}