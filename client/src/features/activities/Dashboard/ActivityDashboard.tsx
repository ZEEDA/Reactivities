import ActivitiesList from "@/components/ActivitiesList";
import Grid from "@mui/material/Grid";
import { Suspense } from "react";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface IActivityDashboardProps {
  activities: Activity[];
  selectActivity: (id: string) => void;
  cancelSelectedActivity: () => void;
  selectedActivity: Activity | undefined;
  editMode: boolean;
  openForm: (id?: string) => void;
  closeForm: () => void;
}
const ActivityDashboard = ({
  activities,
  selectActivity,
  cancelSelectedActivity,
  selectedActivity,
  editMode,
  openForm,
  closeForm,
}: IActivityDashboardProps) => {
  // const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
  //   null,
  // );
  const handleSetSelectedActivity = (activity: Activity | null) => {
    // go to the top of the page
    window.scrollTo(0, 0);
    selectActivity(activity?.id ?? "");
  };

  return (
    <Grid container spacing={2} sx={{ py: 2 }}>
      <Grid size={7}>
        <Suspense fallback={<div>Loading activities...</div>}>
            <ActivitiesList
              activities={activities}
              setSelectedActivity={handleSetSelectedActivity}
              closeForm={closeForm}
              cancelSelectedActivity={cancelSelectedActivity}
            />
        </Suspense>
      </Grid>
      <Grid size={5}>
        <Suspense fallback={<div>Loading activity details...</div>}>
          {selectedActivity && !editMode && (
            <ActivityDetails
              cancelSelectedActivity={cancelSelectedActivity}
              selectedActivity={selectedActivity}
              openForm={openForm}
              closeForm={closeForm}
            />
          )}
          {editMode && (
            <ActivityForm
              activity={selectedActivity}
              closeForm={closeForm}
            />
          )}
        </Suspense>
      </Grid>
    </Grid>
  );
};
export default ActivityDashboard;
