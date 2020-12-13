import React from "react";

const Like = ({ liked, onClick }) => {
  let classes = "clickable fa fa-heart";
  classes += liked ? "" : "-o";
  return <i onClick={onClick} className={classes} aria-hidden="true"></i>;
};

export default Like;
