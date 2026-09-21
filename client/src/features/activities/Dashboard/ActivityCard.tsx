import { useActivities } from "@/lib/hooks/useActivities";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import { Link } from "react-router";

interface IActivityCardProps {
  activity: Activity;
}
const ActivityCard = ({ activity }: IActivityCardProps) => {
  const { deleteActivity } = useActivities();
  const handleDeleteActivity = async (id: string) => {
    await deleteActivity.mutateAsync(id);
  };
  return (
    <Card sx={{ borderRadius: 4, px: 1 }}>
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography sx={{ color: "text.secondary", mb: 1 }}>
          {activity.date}
        </Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle1">
          <strong>{activity.city}</strong> / {activity.venue}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", pb: 2 }}
      >
        <Chip label={activity.category} variant="outlined"></Chip>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            size="medium"
            variant="contained"
            sx={{ borderRadius: 10, backgroundColor: "#037ef9" }}
            component={Link}
            to={`/activities/${activity.id}`}
          >
            View
          </Button>
          <Button
            size="medium"
            variant="contained"
            sx={{ borderRadius: 10, backgroundColor: "#f93737" }}
            onClick={() => {
              handleDeleteActivity(activity.id);
            }}
            disabled={deleteActivity.isPending}
          >
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};
export default ActivityCard;
