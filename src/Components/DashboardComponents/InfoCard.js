import {
  Grid,
  Card,
  CardContent,

  Typography,

  Avatar,
} from '@material-ui/core';

const InfoCards = (props) => {
  return (
    <Card>
      <CardContent>
        <Grid container justify="space-between" alignItems="center" spacing={3}>
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              {props.heading}
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {props.cost}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar style={props.style}>
              {props.text}
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default InfoCards;