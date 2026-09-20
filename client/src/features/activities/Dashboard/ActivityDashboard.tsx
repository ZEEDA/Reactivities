import ActivitiesList from "@/components/ActivitiesList";
import Grid from "@mui/material/Grid";
import { Suspense, useState } from "react";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface IActivityDashboardProps {
  isOpenForm: boolean;
  setIsOpenForm: (value: boolean) => void;
}
const ActivityDashboard = ({
  isOpenForm,
  setIsOpenForm,
}: IActivityDashboardProps) => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null,
  );
  const [formUpdated, setFormUpdated] = useState<boolean>(false);

  const handleFormUpdated = (updated: boolean) => {
    setFormUpdated(updated);
    setTimeout(() => {
      setFormUpdated(false);
    }, 100);
  };
  const handleSetSelectedActivity = (activity: Activity | null) => {
    // go to the top of the page
    window.scrollTo(0, 0);
    setSelectedActivity(activity);
  };

  return (
    <Grid container spacing={2} sx={{ py: 2 }}>
      <Grid size={7}>
        <Suspense fallback={<div>Loading activities...</div>}>
          {!formUpdated && <ActivitiesList setListUpdated={handleFormUpdated} setSelectedActivity={handleSetSelectedActivity} />}
        </Suspense>
      </Grid>
      <Grid size={5}>
        <Suspense fallback={<div>Loading activity details...</div>}>
          {selectedActivity && !isOpenForm && (
            <ActivityDetails
              setSelectedActivity={handleSetSelectedActivity}
              activity={selectedActivity}
              setIsOpenForm={setIsOpenForm}
            />
          )}
          {isOpenForm && (
            <ActivityForm
              setIsOpenForm={setIsOpenForm}
              activity={selectedActivity}
              submitForm={handleFormUpdated}
            />
          )}
        </Suspense>
      </Grid>
    </Grid>
  );
};
export default ActivityDashboard;
