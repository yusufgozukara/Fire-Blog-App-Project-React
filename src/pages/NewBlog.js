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
import { useContext} from "react";
// import { TextareaAutosize } from '@mui/material';


const theme = createTheme();

export default function NewBlog() {

  const { info, setInfo} = useContext(BlogContext)
  const {newBlogTitle,setNewBlogTitle} = useContext(BlogContext)
  const {newBlogImage,setNewBlogImage} = useContext(BlogContext)
  const {newBlogContent, setNewBlogContent} = useContext(BlogContext)
  const {handleSubmit} = useContext(BlogContext);

  // console.log(newBlogTitle,newBlogImage, newBlogContent)




  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     title: data.get('newBlogTitle'),
  //     image: data.get('newBlogImage'),
  //     content: data.get('newBlogContent'),
  //   });
  //   const title = data.get('newBlogTitle');
  //   const image = data.get('newBlogImage');
  //   const content = data.get('newBlogContent')
  //   console.log(title, image, content)
  // };

  const handleChange= (e) => {
    e.preventDefault();
    const name= e.target.name;
    const value=e.target.value;
    // console.log(name,value);
    setInfo({...info, [name]:value})
    // console.log(info);
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
            New Blog
          </Typography>
          <form component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
              // value={newBlogTitle}
              value={info.title}
              // onChange={(e) => setNewBlogTitle(e.target.value)}
              onChange={handleChange}
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
              // value={newBlogImage}
              value={info.image}
              // onChange={(e) => setNewBlogImage(e.target.value)}
              onChange={handleChange}
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
              // value={newBlogContent}
              value={info.content}
              // onChange={(e) => setNewBlogContent(e.target.value)}
              onChange={handleChange}
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
          </form>
        </Box>

      </Container>
    </ThemeProvider>
  );
}