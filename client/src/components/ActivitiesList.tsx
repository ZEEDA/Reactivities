import ActivityCard from "@/features/activities/Dashboard/ActivityCard";
import { Box } from "@mui/material";
import axios from "axios";
import { use, useEffect } from "react";

function deleteActivity(activity: Activity) {
  return axios.delete(`https://localhost:5001/api/activities/${activity.id}`);
}

let activitiesPromise: Promise<Activity[]> | null = null;

function getActivities() {
  if (!activitiesPromise) {
    activitiesPromise = axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => response.data);
  }

  return activitiesPromise;
}

interface IActivitiesListProps {
  setSelectedActivity: (activity: Activity | null) => void;
  setListUpdated: (updated: boolean) => void;
}

function ActivitiesList({
  setSelectedActivity,
  setListUpdated,
}: IActivitiesListProps) {
  const activities = use(getActivities());

  const handleDeleteActivity = async (activity: Activity) => {
    await deleteActivity(activity);
    setListUpdated(true);
  };

  useEffect(() => {
    return () => {
      activitiesPromise = null;
    };
  }, []);

  if (activities.length === 0) return <div>No activities found</div>;

  // setSelectedActivity(activities[0]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {activities.map((activity: Activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          setSelectedActivity={setSelectedActivity}
          handleDeleteActivity={handleDeleteActivity}
        />
      ))}
    </Box>
  );
}

export default ActivitiesList;
