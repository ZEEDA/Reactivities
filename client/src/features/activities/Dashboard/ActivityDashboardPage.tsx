import ActivitiesList from "@/components/ActivitiesList";
import Grid from "@mui/material/Grid";
import { Suspense } from "react";
import ActivityFilters from "./ActivityFilters";

const ActivityDashboardPage = () => {
  return (
    <Grid container spacing={2} sx={{ py: 2 }}>
      <Grid size={8}>
        <Suspense fallback={<div>Loading activities...</div>}>
          <ActivitiesList />
        </Suspense>
      </Grid>
      <Grid size={4}>
        <ActivityFilters />
      </Grid>
    </Grid>
  );
};
export default ActivityDashboardPage;
