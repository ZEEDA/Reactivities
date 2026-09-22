import NavBr from "./NavBr";
import Container from "@mui/material/Container";
import { Box, CssBaseline } from "@mui/material";
import { Outlet, useLocation } from "react-router";
import HomePage from "@/features/home/HomePage";

function App() {
  const location: ReturnType<typeof useLocation> = useLocation();
  return (
    <Box sx={{ backgroundColor: "#f2f4f8", minHeight: "100vh" }}>
      <CssBaseline />
      {location.pathname === '/' ? <HomePage />: 
        <>
          <NavBr />
          <Container maxWidth="xl">
            <Outlet />
          </Container>
        </>
      }
    </Box>
  );
}

export default App;
