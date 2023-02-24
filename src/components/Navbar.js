import * as React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";
import loginAvatar from "../assets/login-avatar.png";
import logo from "../assets/logo1.png";
import Avatar from "@mui/material/Avatar";
import { AccountCircle } from "@mui/icons-material";
import { useAuth } from "../contexts/AuthContextProvider";
import { toastSuccessNotify } from '../helpers/ToastNotify';

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: spacing(2),
  },
  title: {
    display: { xs: "none", sm: "block" },
    fontFamily: "Girassol",
    "& span": {
      fontSize: 30,
      color: "wheat",
      

    },
  },
  login: {
    padding: 10,
    fontSize: 20,
    color: "white",
    textDecoration: "none",
  },
  register: {
    fontSize: 20,
    padding: 10,
    color: "white",
    textDecoration: "none",
  },
  maxWidthLogReg: {
    textDecoration: "none",
    color: "black",
  },
  cwImg: {
    width: 50,
  },
  appBar: {
    backgroundColor: "#046582",
  },
  linkStyle: {
    textDecoration: "none",
    color: "black",

  },

};

export default function PrimarySearchAppBar() {

  const { currentUser,logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const navigate = useNavigate();
  

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {  
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    logout();
    toastSuccessNotify ("You have been logged out successfully.")
  };

  const handleDashboard = () => {
    navigate("/");
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <>
      {currentUser?.email ? (     
        
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMenuOpen}
          onClose={handleMenuClose}
          // sx={{ marginTop: "2rem" }}
          style={{ marginTop: "2.3rem"  }}
        >
          <Link to="/profile" style={styles.linkStyle}> 
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          </Link>
          <Link to="/new-blog" style={styles.linkStyle}> 
            <MenuItem onClick={handleMenuClose}>New</MenuItem>
          </Link>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      ) : (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMenuOpen}
          onClose={handleMenuClose}
          style={{ marginTop: "2.3rem"  }}
        >
          <Link to="/login" style={styles.linkStyle}>
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
          </Link>
          <Link to="/register" style={styles.linkStyle}>
            <MenuItem onClick={handleMenuClose}>Register</MenuItem>
          </Link>
        </Menu>
      )}
    </>
  );

  return (
    <div style={styles.grow}>
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            sx={styles.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDashboard}
          >
            <img src={logo} alt="cw" style={styles.cwImg} />
          </IconButton>
          <div style={styles.grow} />
          <Link to="/" style={styles.login}>
            <Typography sx={styles.title} variant="h6" noWrap>
              ──── <span>{" Cem "}</span> Blog ────
            </Typography>
          </Link>
          <div style={styles.grow} />
          <div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {currentUser?(
                <Avatar alt="Remy Sharp" src={loginAvatar} />
              ) : (
              <AccountCircle />
              )}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

              