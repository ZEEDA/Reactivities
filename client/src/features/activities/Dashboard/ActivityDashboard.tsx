import ActivitiesList from "@/components/ActivitiesList";
import Grid from "@mui/material/Grid";
import { Suspense } from "react";

const ActivityDashboard = () => {
  return (
    <Grid container spacing={2} sx={{ py: 2 }}>
      <Grid size={7}>
        <Suspense fallback={<div>Loading activities...</div>}>
          <ActivitiesList />
        </Suspense>
      </Grid>
      <Grid size={5}>
        Activity filters
      </Grid>
    </Grid>
  );
};
export default ActivityDashboard;
