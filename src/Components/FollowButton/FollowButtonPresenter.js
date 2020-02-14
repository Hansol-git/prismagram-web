import React from "react";
import Button from "../Button";

export default ({ isFollowing, id, onClick }) => (
  <Button text={isFollowing ? "Unfollow" : "Follow"} onClick={onClick} />
);
