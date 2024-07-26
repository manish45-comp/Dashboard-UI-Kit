import { Box, Button, Typography } from "@mui/joy";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const checkActive = (path) => {
    return location.pathname === path;
  };
  return (
    <Box
      sx={{
        borderBottomRightRadius: { xs: 0, lg: 15 },
        borderBottomLeftRadius: { xs: 0, lg: 15 },
        marginBottom: { xs: 0, lg: 3 },
        padding: 3,
      }}
      className="bg-white"
    >
      <Box>
        <Typography level="h2">Settings</Typography>
        <Box sx={{ display: "flex", gap: 1, marginTop: 4 }}>
          <Button
            variant={checkActive("/dashboard/settings") ? "solid" : "soft"}
            onClick={() => navigate("/dashboard/settings")}
          >
            Profile
          </Button>
          <Button
            variant={
              checkActive("/dashboard/settings/security") ? "solid" : "soft"
            }
            onClick={() => navigate("/dashboard/settings/security")}
          >
            Security
          </Button>
          <Button
            variant={
              checkActive("/dashboard/settings/billing") ? "solid" : "soft"
            }
            onClick={() => navigate("/dashboard/settings/billing")}
          >
            Billing
          </Button>
        </Box>

        <Box sx={{ marginTop: 5 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
