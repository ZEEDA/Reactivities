import ActivityCard from "@/features/activities/Dashboard/ActivityCard";
import { Box } from "@mui/material";
interface IActivitiesListProps {
  setSelectedActivity: (activity: Activity | null) => void;
  activities: Activity[];
  closeForm: () => void;
  cancelSelectedActivity: () => void;
}

function ActivitiesList({
  setSelectedActivity,
  activities,
  closeForm,
  cancelSelectedActivity
}: IActivitiesListProps) {

  if (activities.length === 0) return <div>No activities found</div>;

  // setSelectedActivity(activities[0]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {activities.map((activity: Activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          setSelectedActivity={setSelectedActivity}
          closeForm={closeForm}
          cancelSelectedActivity={cancelSelectedActivity}
        />
      ))}
    </Box>
  );
}

export default ActivitiesList;
