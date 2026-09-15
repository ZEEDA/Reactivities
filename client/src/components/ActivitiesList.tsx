import { List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
import { use } from 'react';

let activitiesPromise: Promise<Activity[]> | null = null;

function getActivities() {
  if (!activitiesPromise) {
    activitiesPromise = axios
      .get<Activity[]>('https://localhost:5001/api/activities')
      .then((response) => response.data);
  }

  return activitiesPromise;
}

function ActivitiesList() {
  const activities = use(getActivities());

  if (activities.length === 0) return <div>No activities found</div>;

  return (
    <List>
      {activities.map((activity: Activity) => (
        <ListItem key={activity.id}>
          <ListItemText>{activity.title}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
}

export default ActivitiesList