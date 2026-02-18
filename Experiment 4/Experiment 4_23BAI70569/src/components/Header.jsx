import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(6px)",
        borderBottom: "1px solid rgba(15,23,42,0.06)",
        color: "#06202a",
      }}
    >
      <Toolbar sx={{ width: "100%", maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <div className="header-brand" style={{ flexGrow: 1 }}>
          <div className="brand-badge">E</div>
          <div>
            <Typography variant="h6">EcoTrack</Typography>
            <Typography variant="caption" className="muted">
              Environmental dashboard
            </Typography>
          </div>
        </div>

        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>

        <Button color="inherit" component={Link} to="/logs">
          Logs
        </Button>

        {isAuthenticated ? (
          <Button color="inherit" component={Link} to="/logout">
            Logout
          </Button>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Header);
