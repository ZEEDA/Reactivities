import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Group } from "@mui/icons-material";
import { NavLink } from "react-router";
import MenuItemLink from "@/app/shared/components/MenuItemLink";

const pages = ["Activities", "About", "Contact"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage:
          "linear-gradient(135deg, #182a73, #218aae 69%, #20a7ac 89%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Group
                sx={{ display: { xs: "none", md: "block" } }}
                fontSize="large"
              />
              <Typography
                variant="h4"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Reactivities
              </Typography>
            </Box>
          </NavLink>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ marginRight: "auto", marginLeft: "auto" }}>
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Group
                  sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                  fontSize="large"
                />
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    fontWeight: 700,
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Reactivities
                </Typography>
              </Box>
            </NavLink>
            <Box
              sx={{
                display: { xs: "none", md: "flex", gap: 4 },
              }}
            >
              <MenuItemLink to="/activities">Activities</MenuItemLink>
              <MenuItemLink to="/createActivity">Create Activity</MenuItemLink>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Typography variant="h6">User Menu</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
