import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import django from "../assets/django.jpeg";
import { useAuth } from "../contexts/AuthContextProvider";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 25,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  },

  mainDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 500,
    marginTop: 100,
  },
  image: {
    borderRadius: "50%",
    width: "100px",
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  const { currentUser } = useAuth();

  return (
    <div className={classes.mainDiv}>
      <Card className={classes.root}>
        <img
          src={currentUser?.photoURL || django}
          className={classes.image}
          alt="profile"
        />
        <CardContent className={classes.content}>
          
          <Typography variant="h5" component="h2">
          Username : {currentUser?.displayName || currentUser?.email.split("@")[0] || "Not Found!"}
          </Typography>
          
          <Typography variant="h5" component="h5">
          Email : {currentUser?.email || "Not Found!"}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
