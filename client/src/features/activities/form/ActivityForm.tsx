import { useActivities } from "@/lib/hooks/useActivities";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
import type { SubmitEvent } from "react";
import { useNavigate, useParams } from "react-router";

const ActivityForm = () => {
  const { id } = useParams<{id: string}>();
  const { updateActivity, createActivity, activity, isLoadingActivity } = useActivities(id);
  const navigate = useNavigate();

  const todayDate = new Date().toISOString().split("T")[0];
  const normalizeDate = (date: string) => new Date(date).toISOString().split("T")[0];

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data: { [key: string]: FormDataEntryValue } = {};
    
    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (activity) {
      data.id = activity.id;
      await updateActivity.mutateAsync(data as unknown as Activity);
      navigate(`/activities/${activity.id}`);
    } else {
      createActivity.mutate(data as unknown as Activity, {
        onSuccess: (id) => {
          navigate(`/activities/${id}`);
        }
      });
    }
  };

  if (isLoadingActivity) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", py: 2 }}>
      <Paper sx={{ borderRadius: 4, padding: 3, maxWidth: "100%", width: 990, margin: "0 auto" }}>
        <Typography variant="h5" color="primary" sx={{ mb: 3 }}>
          {activity ? "Edit Activity" : "Create Activity"}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <TextField name="title" label="Title" defaultValue={activity?.title} />
          <TextField
            name="description"
            label="Description"
            multiline
            rows={3}
            defaultValue={activity?.description}
          />
          <TextField
            name="category"
            label="Category"
            defaultValue={activity?.category}
          />
          <TextField
            name="date"
            label="Date"
            type="date"
            defaultValue={activity?.date? normalizeDate(activity.date) : todayDate}
          />
          <TextField name="city" label="City" defaultValue={activity?.city} />
          <TextField name="venue" label="Venue" defaultValue={activity?.venue} />
          <Box sx={{ display: "flex", justifyContent: "end", gap: 3 }}>
            <Button color="inherit">
              Cancel
            </Button>
            <Button
              color="success"
              variant="contained"
              type="submit"
              disabled={updateActivity.isPending || createActivity.isPending}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
export default ActivityForm;
