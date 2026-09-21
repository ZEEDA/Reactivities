import ActivityCard from "@/features/activities/Dashboard/ActivityCard";
import { useActivities } from "@/lib/hooks/useActivities";
import { Box, Typography } from "@mui/material";

function ActivitiesList() {
  const { activities, isPending } = useActivities();

  if (!activities || isPending)
    return <Typography>Loading activities...</Typography>;

  if (activities.length === 0) return <div>No activities found</div>;

  // setSelectedActivity(activities[0]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {activities.map((activity: Activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
        />
      ))}
    </Box>
  );
}

export default ActivitiesList;
