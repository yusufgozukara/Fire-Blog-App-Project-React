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
import { useNavigate } from 'react-router-dom';
import defaultPhoto from '../assets/defaultPhoto.jpg';
import { Grid } from '@mui/material';
// import {useFetch} from '../helpers/functions';

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

export default function BlogCard({item}) {
  console.log(item)
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const date1 = item.date[2]+' '+item.date[1]+' '+item.date[3]+' , '+item.date[0];


  return (

    <Card sx={{ maxWidth: 345, margin:'50px' }} onClick={() => navigate('/details')}>
      
      <CardMedia
        component="img"
        height="194"
        // onError={defaultPhoto}
        image={ item.image ? item.image :defaultPhoto }
        alt="Görsel yazısı"
      />

      <CardHeader
        title={item.title}
        subheader={date1}
      />

      <CardContent>
       <Typography variant="body2" color="text.secondary">
          {item.content}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant='h6'><AccountCircleIcon/>{item.author}</Typography>
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