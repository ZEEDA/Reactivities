import ActivityDashboard from "@/features/activities/Dashboard/ActivityDashboard";
import NavBr from "./NavBr";
import Container from "@mui/material/Container";
import { Box, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import { useActivities } from "@/lib/hooks/useActivities";

function App() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const {activities, isPending} = useActivities();
  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities?.find((a) => a.id === id));
  };

  const handleCancelSelectedActivity = () => {
    setSelectedActivity(undefined);
  };
  const handleOpenForm = (id?: string) => {
    if (id) handleSelectedActivity(id);
    else handleCancelSelectedActivity();
    setIsOpenForm(true);
  };

  const handleCloseForm = () => {
    setIsOpenForm(false);
  };

  return (
    <Box sx={{ backgroundColor: "#f2f4f8", minHeight: "100vh" }}>
      <CssBaseline />
      <NavBr setIsOpenForm={setIsOpenForm} />
      <Container maxWidth="xl">
        {!activities || isPending ? (
          <Typography>Loading activities...</Typography>
        ) : (
          <ActivityDashboard
            activities={activities}
            selectActivity={handleSelectedActivity}
            cancelSelectedActivity={handleCancelSelectedActivity}
            selectedActivity={selectedActivity}
            editMode={isOpenForm}
            openForm={handleOpenForm}
            closeForm={handleCloseForm}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;
