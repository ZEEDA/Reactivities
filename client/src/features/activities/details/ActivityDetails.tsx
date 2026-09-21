import { useActivities } from "@/lib/hooks/useActivities";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router";

const ActivityDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { activity, isLoadingActivity } = useActivities(id);

  if (isLoadingActivity) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ py: 2 }}>
      <Card sx={{ borderRadius: 4 }}>
        <CardMedia
          component="img"
          src={`/images/categoryImages/${activity?.category}.jpg`}
        />
        <CardContent>
          <Typography variant="h5">{activity?.title}</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "light" }}>
            {activity?.date}
          </Typography>
          <Typography variant="body1">{activity?.description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="text"
            component={Link}
            to={`/manage/${activity?.id}`}
          >
            Edit
          </Button>
          <Button color="inherit" onClick={() => navigate("/activities")}>
            Cancel
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
export default ActivityDetails;
