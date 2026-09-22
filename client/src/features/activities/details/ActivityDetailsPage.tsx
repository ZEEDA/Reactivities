import { useActivities } from "@/lib/hooks/useActivities";
import {
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";

const ActivityDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { activity, isLoadingActivity } = useActivities(id);

  if (isLoadingActivity) return <Typography>Loading...</Typography>;

  if(!activity) return <Typography>Activity not found</Typography>;

  return (
    <Grid container spacing={2} sx={{ py: 2}}>
      <Grid size={8}>
        <ActivityDetailsHeader activity={activity} />
        <ActivityDetailsInfo activity={activity}/>
        <ActivityDetailsChat />
      </Grid>
      <Grid size={4}>
        <ActivityDetailsSidebar />
      </Grid>
    </Grid>
  );
};
export default ActivityDetailsPage;
