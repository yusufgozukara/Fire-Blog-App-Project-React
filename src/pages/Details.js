import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation, useNavigate} from 'react-router-dom';
import defaultPhoto from "../assets/defaultPhoto.jpg";
import { Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import { AuthContext } from '../contexts/AuthContext';
import { blogDelete } from '../helpers/functions';




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Details() {

  const navigate = useNavigate();
  const {currentUser} = React.useContext(AuthContext);
  console.log(currentUser.email);


  const item = useLocation()
  // const {author, content, date, id, image, title} = item;
  console.log(item.state.id)


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const date1 =  item.state.date[2] +  " " +  item.state.date[1] +  " " +  item.state.date[3] +  " , " +  item.state.date[0];

  const handleDelete = () => {
    blogDelete(item.state.id);
    navigate('/');
  }


  return (
    <Container>
    <Card sx={{ width: '80%', height:'80vh', margin:'50px auto' }}>
      <CardMedia
        component="img"
        height="350px"
        image={item.state.image}
        alt="Görsel yazısı"
      />
      
      <CardHeader title={item.state.title} 
      subheader={date1} 
      />

      <CardContent>
       <Typography variant="body2" color="text.secondary">
       {item.state.content} 
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant='h6'><AccountCircleIcon/>{item.state.author}</Typography>
      </CardContent>


      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <ChatBubbleOutlineIcon />
        </IconButton>

      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    {item.state.author ==  currentUser.email && (
    <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                gap={25}

            >
                <Button onClick={() => navigate(`/updateblog/${item.state.id}`, {state: item})} variant="contained" color="primary">Update</Button>
                <Button onClick={handleDelete} variant="contained" color="warning">Delete</Button>
    </Grid>
      
      ) }
    <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                gap={25}

            >
                <Button  onClick={() => navigate(-1)} variant="contained" color="secondary">Home</Button>
    </Grid>
    </Container>
  );
}