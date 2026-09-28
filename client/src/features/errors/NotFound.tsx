import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router";
import SearchOffIcon from "@mui/icons-material/SearchOff";

const NotFound = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          gap: 2,
          textAlign: "center",
          mt: 2,
        }}
      >
        <SearchOffIcon sx={{ fontSize: 100, color: "text.secondary" }} />
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          404
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Typography variant="body1" color="text.disabled">
          It may have been moved or deleted, or you may have typed the address
          incorrectly.
        </Typography>
        <Button
          component={Link}
          to="/activities"
          variant="contained"
          size="large"
        >
          Go back to activities
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
