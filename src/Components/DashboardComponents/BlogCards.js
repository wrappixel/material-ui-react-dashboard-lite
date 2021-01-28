  import {
    Divider,
    Card,
    CardContent,
    CardMedia, 
    Typography,
    makeStyles,
    Avatar,
    Box
  } from '@material-ui/core';
 const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 250,
    },
    avatar: {
        display: "inline-block",
        border: "2px solid white",
        
      }
  });
  const faces = [
    "http://i.pravatar.cc/300?img=1",
    "http://i.pravatar.cc/300?img=2",
    "http://i.pravatar.cc/300?img=3",
    "http://i.pravatar.cc/300?img=4"
  ];  
const InfoCards = (props) => {
    const classes = useStyles();
    return ( 
        <Card >
            <CardMedia
            className={classes.media}
            image={props.image}
            />
            <CardContent>
            <Typography
                
                variant={"h4"}
                gutterBottom
            >
                {props.title}
            </Typography>
            <Typography
                
                variant={"caption"}
            >
                We are going to learn different kinds of species in nature that live
                together to form amazing environment.
            </Typography>
            </CardContent>
            <Divider  light />
            <Box p={2}>
            {faces.map(face => (
                <Avatar className={classes.avatar} key={face} src={face} />
            ))}
            </Box>
        </Card>
    );
}
 
export default InfoCards;