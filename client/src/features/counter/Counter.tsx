import { useStore } from "@/lib/hooks/useStore";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";

// First way to implement Observable component
// import { Observer } from "mobx-react-lite";
// const Counter = () => {
//   const { counterStore } = useStore();
//   return (
//     <Paper sx={{ my: 2, padding: 2 }}>
//       <Observer>
//         {() => (
//           <>
//             <Typography variant="h4" gutterBottom>
//               {counterStore.title}
//             </Typography>
//             <Typography variant="h6">
//               The count is: {counterStore.count}
//             </Typography>
//           </>
//         )}
//       </Observer>
//       <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
//         <Button
//           onClick={() => counterStore.decrement()}
//           variant="contained"
//           color="error"
//         >
//           Decrement
//         </Button>
//         <Button
//           onClick={() => counterStore.increment()}
//           variant="contained"
//           color="success"
//         >
//           Increment
//         </Button>
//         <Button
//           onClick={() => counterStore.increment(5)}
//           variant="contained"
//           color="primary"
//         >
//           Increment by 5
//         </Button>
//       </Box>
//     </Paper>
//   );
// };

// Second way to implement observable HOC using `observer` from `mobx-react-lite`
const Counter = observer(() => {
  const { counterStore } = useStore();
  return (
    <Paper
      sx={{
        my: 2,
        padding: 2,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid size={8}>
          <Typography variant="h4" gutterBottom>
            {counterStore.title}
          </Typography>
          <Typography variant="h6">
            The count is: {counterStore.count}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Button
              onClick={() => counterStore.decrement()}
              variant="contained"
              color="error"
            >
              Decrement
            </Button>
            <Button
              onClick={() => counterStore.increment()}
              variant="contained"
              color="success"
            >
              Increment
            </Button>
            <Button
              onClick={() => counterStore.increment(5)}
              variant="contained"
              color="primary"
            >
              Increment by 5
            </Button>
          </Box>
        </Grid>
        <Grid size={4} sx={{ p: 4 }}>
          <Typography variant="h5">
            Counter Events ({counterStore.eventCount})
          </Typography>
          <List>
            {counterStore.events.map((event, index) => (
              <ListItem key={index}>{event}</ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Paper>
  );
});
export default Counter;
