// import React from 'react'

// const NotFound = () => {
//   return (
//     <div>NotFound</div>
//   )
// }

// export default NotFound

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import notfound from '../assets/notfound.png';

export default function NotFound() {
  return (
    <Card sx={{ maxWidth: 700, display: "flex",justifyContent: "center",alignItems: 'center' }}>
      <CardActionArea sx={{ maxWidth: 700, display: "flex",justifyContent: "center",alignItems: 'center' }}>
        <CardMedia
          component="img"
          height="500"
          image={notfound}
          alt="page not found"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign='center'>
            Böyle bir sayfa bulunamadı
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
