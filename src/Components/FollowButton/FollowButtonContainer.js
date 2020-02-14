import React, { useState } from "react";
import PropTypes from "prop-types";
import FollowButtonPresenter from "./FollowButtonPresenter";
import { useMutation } from "react-apollo-hooks";
import { TOGGLE_FOLLOW } from "./FollowButtonQueries";

const FollowButtonContainer = ({ isFollowing, id }) => {
  const [isFollowingS, setIsFollowing] = useState(isFollowing);
  const [followMutation] = useMutation(TOGGLE_FOLLOW, { variables: { id } });

  const onClick = () => {
    followMutation();
    setIsFollowing(!isFollowingS);
  };

  return <FollowButtonPresenter onClick={onClick} isFollowing={isFollowingS} />;
};

FollowButtonContainer.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

export default FollowButtonContainer;
