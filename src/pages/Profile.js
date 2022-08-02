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

export default function Profile() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: '50%', height:'60vh', margin:'50px auto' }}>
      <CardMedia
        component="img"
        height="350px"
        image="https://i.imgflip.com/49h02u.jpg"
        alt="Görsel yazısı"
      />
      
      <CardHeader sx={{textAlign:'center'}}
        title="Shrimp and Chorizo Paella"
      />

      <CardContent>
       <Typography variant="body2" color="text.secondary" sx={{textAlign:'center'}}>
          Sayfamız sizin gibi nadide bir şahsı ağırladığı için kıvanç duyar.  
        </Typography>
      </CardContent>

      <CardContent>
        <Typography sx={{textAlign:'center'}} variant='h6'><AccountCircleIcon/>clarus@gmail.com</Typography>
      </CardContent>

    </Card>
  );
}