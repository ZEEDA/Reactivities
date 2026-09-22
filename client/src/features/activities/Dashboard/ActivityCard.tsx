import { AccessTime, Place } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router";
import { format } from 'date-fns';
import { formatDate } from "@/lib/util/util";
interface IActivityCardProps {
  activity: Activity;
}
const ActivityCard = ({ activity }: IActivityCardProps) => {
  const isHost = false;
  const isGoing = false;
  const label = isHost ? "You are hosting" : isGoing ? "You are going" : "";
  const isCancelled = false;
  const color = isHost ? "secondary" : isGoing ? "warning" : "default";
  return (
    <Card sx={{ borderRadius: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardHeader
          avatar={<Avatar sx={{ height: 80, width: 80 }} />}
          title={
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              {activity.title}
            </Typography>
          }
          subheader={
            <>
              Hosted by <Link to={`/profiles/bob`}>Bob</Link>
            </>
          }
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            mr: 2,
          }}
        >
          {(isHost || isGoing) && (
            <Chip label={label} color={color} sx={{ borderRadius: 2 }} />
          )}
          {isCancelled && (
            <Chip label="Cancelled" color="error" sx={{ borderRadius: 2 }} />
          )}
        </Box>
      </Box>
      <Divider sx={{ mb: 3 }} />
      <CardContent sx={{ p: 0 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, px: 2 }}>
          <Box sx={{display: 'flex', alignItems: 'center', flexGrow: 0}}>
            <AccessTime sx={{ mr: 1 }} />
            <Typography variant="body2" noWrap>{formatDate(activity.date)}</Typography>
          </Box>
          <Place sx={{ ml: 3, mr: 1 }} />
          <Typography variant="body2">{activity.venue}</Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            gap: 2,
            backgroundColor: "grey.200",
            py: 3,
            pl: 3,
          }}
        >
          Attendees go here
        </Box>
      </CardContent>
      <CardContent sx={{ pb: 2 }}>
        <Typography variant="body2">{activity.description}</Typography>
        <Button
          size="medium"
          variant="contained"
          sx={{
            display: "flex",
            justifySelf: "flex-end",
            borderRadius: 10,
            backgroundColor: "#037ef9",
          }}
          component={Link}
          to={`/activities/${activity.id}`}
        >
          View
        </Button>
      </CardContent>
    </Card>
  );
};
export default ActivityCard;
