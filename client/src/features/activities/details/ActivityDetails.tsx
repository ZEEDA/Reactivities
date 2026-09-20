import { useActivities } from "@/lib/hooks/useActivities";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface IActivityDetailsProps {
  selectedActivity: Activity;
  cancelSelectedActivity: () => void;
  openForm: (id?: string) => void;
  closeForm: () => void;
}

const ActivityDetails = ({
  selectedActivity,
  cancelSelectedActivity,
  openForm,
  closeForm,
}: IActivityDetailsProps) => {
  const { activities } = useActivities();

  const activity = activities?.find((ac) => ac.id === selectedActivity.id);

  if (!activity) return <Typography>Loading...</Typography>;
  
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
        <Button color="primary" onClick={() => openForm(activity.id)}>
          Edit
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            cancelSelectedActivity();
            closeForm();
          }}
        >
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};
export default ActivityDetails;
