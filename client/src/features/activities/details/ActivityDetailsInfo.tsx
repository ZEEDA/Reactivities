import { formatDate } from "@/lib/util/util";
import { CalendarToday, Info, Place } from "@mui/icons-material";
import { Divider, Grid, Paper, Typography } from "@mui/material";

export default function ActivityDetailsInfo({activity}:{activity: Activity}) {
    return (
        <Paper sx={{ mb: 2 }}>

            <Grid sx={{ alignItems: 'center', pl: 2, py: 1 }} container>
                <Grid size={1}>
                    <Info color="info" fontSize="large" />
                </Grid>
                <Grid size={11}>
                    <Typography>{activity.description}</Typography>
                </Grid>
            </Grid>
            <Divider />
            <Grid sx={{ alignItems: 'center', pl: 2, py: 1 }} container>
                <Grid size={1}>
                    <CalendarToday color="info" fontSize="large" />
                </Grid>
                <Grid size={11}>
                    <Typography>{formatDate(activity.date)}</Typography>
                </Grid>
            </Grid>
            <Divider />

            <Grid sx={{ alignItems: 'center', pl: 2, py: 1, pr :1 }} container>
                <Grid size={1}>
                    <Place color="info" fontSize="large" />
                </Grid>
                <Grid size={11}>
                    <Typography>
                        {activity.venue}, {activity.city}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}