import { useActivities } from "@/lib/hooks/useActivities";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
import type { SubmitEvent } from "react";

interface IActivityFormProps {
  activity?: Activity | null;
  closeForm: () => void;
}
const ActivityForm = ({ closeForm, activity }: IActivityFormProps) => {
  const { updateActivity, createActivity } = useActivities();
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
    } else {
      await createActivity.mutateAsync(data as unknown as Activity);
    }

    closeForm();
  };

  return (
    <Paper sx={{ borderRadius: 4, padding: 3 }}>
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
          <Button color="inherit" onClick={closeForm}>
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
  );
};
export default ActivityForm;
