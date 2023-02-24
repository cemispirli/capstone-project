import React from "react";
import moment from "moment";
import {  useEffect } from "react";
import { useBlog } from "../contexts/BlogContextProvider";
import { useAuth } from "../contexts/AuthContextProvider";
import loadingGif from "../assets/loading.gif";
import { useNavigate, useParams } from "react-router-dom";
import { toastSuccessNotify } from "../helpers/ToastNotify";
import noData from "../assets/no-data.png";
import { makeStyles } from "@mui/styles";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import blog from "../assets/blog.jpg";
import DeleteIcon from '@mui/icons-material/Delete';



const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    // width:"500px",
    // height: "400px",
  },
  cardRoot: {
    width: 345,
    width: "100%",
    // margin: 10,
    padding: 10,
    backgroundColor: "blue",
  },
  cardContent: {
    display: "-webkit-box",
    "text-align": "justify",
    "textIndent": "1em", 
    margin: 10,
  },

  author: {
    fontFamily: "Girassol",
    color: "#046582",
    fontSize: "1.1em",
    position:"relative",
    textTransform: "capitalize",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",

  },
  icon: {
    marginLeft: "10px",
    width: "25px",
  },

  title: {
    fontFamily: "Girassol",
    textAlign: "center",
    margin: 20,
    color: "#046582",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
  },
});

export default function Details() {
  const classes = useStyles();
  const {  deleteOneBlog, getOneBlog} = useBlog();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const result = getOneBlog(id);



 

  useEffect(() => {
    getOneBlog(id);
  }, []);
  
  console.log(result);  
  






  


  const deleteHandler = (id) => {
    console.log("DeleteHandler", id);
    deleteOneBlog(id);
    navigate("/");
    toastSuccessNotify("Deleted successfully!");
  };

  const updateHandler = (id) => {
    navigate(`/update-blog/${id}`);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title} style = {{marginBottom: "20px"}} variant="h5" noWrap>
        ──── Details ────
      </Typography>
      {result?.length > 0 ? (
        result?.map((item, index) => (
          <div key={index}>
          <Card sx={{ maxWidth: 500 }} className={classes.cardRoot} >
      <CardMedia
        sx={{ height: 140 }}
        image={item.image || blog }
        title={item.title }
      />
      <Typography variant="body"  className={classes.author} component="p">
          Created By  {item.author}
          {moment(item.published_date).format(" DD MMM YYYY")}
      </Typography> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className={classes.title}>
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className={classes.cardContent}>
          {item.content}
        </Typography>
        
        {/* <div className={classes.buttonGroup}>
          <Typography variant="body"   component="p">
          Do you want like this post?
      </Typography>
      
          <IconButton aria-label="like count" onClick={handleClick} style={{margin:0, padding:0,marginLeft:"10px"}}>
           <FavoriteIcon color={ "error" } />
          </IconButton>  
      
        </div> */}
        
          
      </CardContent>
      {/* <CardContent>
        {result.comment_count > 0 ? (
          <div>
            <Typography variant="body"  className={classes.author} component="p" style={{textDecoration:"underline"}}>
              Comments  
            </Typography>
            <div>
              {result.comments.map((comment,id) => (
                <div key={id}>
                  <p className={classes.author}
                  style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",}}
                   >
                        {comment.content }

                          <IconButton onClick={() => deleteClickComment(comment.id)} aria-label="like count" style={{margin:0, padding:0}}>
                            <DeleteIcon />
                          </IconButton>

                    </p>
                  <p className={classes.author} 
                    style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center",}}
                  >
                        <small>Comment by 
                          <b> {comment.user}</b>
                        
                          <span> on</span> 
                          { moment(comment.published_date).format(" DD MMM YYYY")}</small>
                    </p>
                    
                    <hr />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </CardContent> */}
      {/* <CardActions>
      
          <IconButton aria-label="like count" className={classes.icon}>
           <FavoriteIcon color={item.like_count > 0 ? "error" : "disabled"} />
          </IconButton> 
           <p className={classes.count} style={{display: item.like_count < 1 ?  "none" : "block" }}>
           {item.like_count}
           </p>   

         <IconButton aria-label="view count" className={classes.icon}>
           < VisibilityIcon color={item.view_count > 0 ? "primary" : "disabled"} />           
         </IconButton>
         <p className={classes.count} style={{display: item.view_count < 1 ?  "none" : "block" }}>
           {item.view_count}
           </p>     

         <IconButton aria-label="comment count" className={classes.icon}>
           <ChatBubbleOutlineIcon color={item.comment_count > 0 ? "success" : "disabled"} />           
         </IconButton>
            <p className={classes.count} style={{display: item.comment_count < 1 ?  "none" : "block" }}>
               {item.comment_count}
            </p>
      </CardActions> */}
      






      {currentUser.displayName === item.author || currentUser.email.split("@")[0] === item.author ?
      (
        <div>
          <Button
            variant="contained"
            color="error"
            onClick={() => deleteHandler(item.id)}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => updateHandler(item.id)}
          >
            Update
          </Button>
        </div>
      ) : (
        <div></div>
      )}

          </Card>
          </div>
        ))
        ) : result === undefined ? (
          <img src={loadingGif} alt="loading" />
        ) : (
          <>
            <img src={noData} alt="no data" />
          </>
        )}
    </div>
  );
}


