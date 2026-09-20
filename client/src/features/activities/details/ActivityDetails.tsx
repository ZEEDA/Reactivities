import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface IActivityDetailsProps {
  activity: Activity;
  setSelectedActivity: (activity: Activity | null) => void;
  setIsOpenForm: (value: boolean) => void;
}

const ActivityDetails = ({ activity, setSelectedActivity, setIsOpenForm }: IActivityDetailsProps) => {
  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "light" }}>
          {activity.date}
        </Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={() => setIsOpenForm(true)}>Edit</Button>
        <Button color="inherit" onClick={() => setSelectedActivity(null)}>Cancel</Button>
      </CardActions>
    </Card>
  );
};
export default ActivityDetails;
