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
import { useLocation} from 'react-router-dom';
import defaultPhoto from "../assets/defaultPhoto.jpg";




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
  const {state} = useLocation()
  console.log(state)


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const date1 =  item.date[2] +  " " +  item.date[1] +  " " +  item.date[3] +  " , " +  item.date[0];


  return (
    <Card sx={{ width: '80%', height:'80vh', margin:'50px auto' }}>
      <CardMedia
        component="img"
        height="350px"
        image={state.image}
        alt="Görsel yazısı"
      />
      
      <CardHeader title={state.title} 
      // subheader={date1} 
      />

      <CardContent>
       <Typography variant="body2" color="text.secondary">
       {state.content} 
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant='h6'><AccountCircleIcon/>{state.author}</Typography>
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
  );
}