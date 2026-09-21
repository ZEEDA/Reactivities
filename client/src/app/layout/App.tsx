import NavBr from "./NavBr";
import Container from "@mui/material/Container";
import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";

function App() {
  return (
    <Box sx={{ backgroundColor: "#f2f4f8", minHeight: "100vh" }}>
      <CssBaseline />
      <NavBr />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
