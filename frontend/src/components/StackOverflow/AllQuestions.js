// import { Avatar } from "@material-ui/core";
// import React, { useState } from "react";
// import "./css/AllQuestions.css";
 import ReactHtmlParser from "react-html-parser";
// import { Link } from "react-router-dom";
// import { stringAvatar } from "../../utils/Avatar";
import React from "react";

import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import './css/AllQuestions.css';

function AllQuestions({question}) {
 console.log(question?.tags[0]);
  //let tags=JSON.parse(question?.tags[0]);
  function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"...":str
  }
  const tags=[];
  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              <p>{question?.answerDetails?.length}</p>
              <span>answers</span>
            </div>
            <div className="all-option">
              <small>0 views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link to={`/question?q=${question?._id}`}>{question?.title}</Link>

          {/* <a href=>{data.title}</a> */}

          <div style={{ maxWidth: "90%" }}>
            <div> {ReactHtmlParser(truncate(question?.body,200))} </div>
          </div>

          {
            tags.map((_tag)=>(<><div style={{display:"flex",}}>
              <span className="question-tags">{_tag}</span>
              </div>
              </>
              ))}
       
        
         
      
         
          
          
        
        <div className="author">
          <small>{new Date(question?.created_at).toLocaleString()}</small>
          <div className="auth-details">
            <Avatar src={question?.user?.photo} />
            <p>{question?.user?.displayName?question?.user?.displayName:String(question?.user?.email).split('@')[0]}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
   
   
  );
}

export default AllQuestions;
