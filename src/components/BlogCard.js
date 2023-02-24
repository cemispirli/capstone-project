import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import blog from "../assets/blog.jpg";

import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useAuth } from "../contexts/AuthContextProvider";
import { toastErrorNotify } from "../helpers/ToastNotify";
import { makeStyles } from "@mui/styles";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import VisibilityIcon from '@mui/icons-material/Visibility';

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 20,
    width: "320px",
    height: "290px",
    marginBottom: 10,
  },

  title: {
    fontFamily: "Girassol",
    color: "#046582",
  },
  image: {
    height: "130px",
    width: "300px",

  },
  module: {
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    "text-overflow": "ellipsis",
    "text-align": "justify",    
    // "textIndent": "1em", 
    overflow: "hidden",
  },
  icon: {
    marginLeft: "10px",
    width: "25px",
  },
  count: {
    padding: "0px",
    margin: "0px",
    marginLeft: "3px",
    // width: "1px",
    fontSize: "16px",
    color: "black",
  },
  cardContent: {
    backgroundColor: "#efeefe",
    height: "90px",
    width: "300px",
  },
  author: {
    fontFamily: "Girassol",
    color: "#046582",
    position:"absolute",
    bottom: "-10px",
    // left: "5px",
    right: "5px",
  },

});

export default function MediaCard({ post }) {
  const {
    id,
    title,
    content,
    image,
    author,
    published_date,
  } = post;

  // console.log(post);
  const classes = useStyles();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const openDetails = () => {
    if (!currentUser) {
      toastErrorNotify("Login for detials of blog!");
    }
    navigate(`/detail/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className={classes.root}>
      <CardActionArea onClick={openDetails}>
      <CardMedia 
        component="img"
        className={classes.image}
        image={image || blog}
        title={title}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary"className={classes.module} component="p">
          {content}
        </Typography>
        
            

      </CardContent>
      <CardActions>
        
         {/* <IconButton aria-label="like count" className={classes.icon}>
           <FavoriteIcon color={like_count > 0 ? "error" : "disabled"} />
         </IconButton> 
           <p className={classes.count} style={{display: like_count < 1 ?  "none" : "block" }}>
           {like_count}
           </p>    


         <IconButton aria-label="view count" className={classes.icon}>
           < VisibilityIcon color={view_count > 0 ? "primary" : "disabled"} />           
         </IconButton>
         <p className={classes.count} style={{display: view_count < 1 ?  "none" : "block" }}>
           {view_count}
           </p>     

         <IconButton aria-label="comment count" className={classes.icon}>
           <ChatBubbleOutlineIcon color={comment_count > 0 ? "success" : "disabled"} />           
         </IconButton>
            <p className={classes.count} style={{display: comment_count < 1 ?  "none" : "block" }}>
               {comment_count}
            </p>
          */}
            <Typography variant="body"  className={classes.author} component="p">
              Created By  {author}
              {moment(published_date).format(" DD MMM YYYY")}
            </Typography>  
      </CardActions>
      
    </CardActionArea>
    </Card>


  );
}
