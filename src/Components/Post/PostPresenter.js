import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import { Link } from "react-router-dom";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartFull, HeartEmpty, MessageEmpty } from "../Icon";

const Post = styled.div`
  ${props => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  margin-bottom: 25px;
  user-select: none;
  a {
    color: inherit;
  }
`;

const Header = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const File = styled.img`
  width: 100%;
  max-width: 100%;
  height: 600px;
  position: absolute;
  top: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const Buttons = styled.div`
  margin-bottom: 10px;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  padding: 15px;
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  margin: 10px 0px;
  font-size: 12px;
  padding-bottom: 10px;
  border-bottom: ${props => props.theme.lightGreyColor} 1px solid;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 12px;
  &:focus {
    outline: none;
  }
`;

const CommentBox = styled.ul`
  margin-top: 10px;
`;

const Comment = styled.li`
  margin-bottom: 7px;
  span {
    margin-right: 5px;
  }
`;

export default ({
  user: { username, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  currentItem,
  toggleLike,
  onKeyPress,
  comment,
  selfComments
}) => (
  <Post>
    <Header>
      <Avatar size="sm" url={avatar} />
      <UserColumn>
        <Link to={`/${username}`}>
          <FatText text={username} />
          <Location>{location}</Location>
        </Link>
      </UserColumn>
    </Header>
    <Files>
      {files &&
        files.map((file, index) => (
          <File
            key={file.id}
            id={file.id}
            src={file.url}
            showing={index === currentItem}
          />
        ))}
    </Files>
    <Meta>
      <Buttons>
        <Button onClick={toggleLike}>
          {isLiked ? <HeartFull /> : <HeartEmpty />}
        </Button>
        <Button>
          <MessageEmpty />
        </Button>
      </Buttons>
      <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
      {comment && (
        <CommentBox>
          {comment.map(cmt => (
            <Comment key={cmt.id}>
              <FatText text={cmt.user.username} />
              {cmt.text}
            </Comment>
          ))}
        </CommentBox>
      )}
      {selfComments && (
        <CommentBox>
          {selfComments.map(cmt => (
            <Comment key={cmt.id}>
              <FatText text={cmt.user.username} />
              {cmt.text}
            </Comment>
          ))}
        </CommentBox>
      )}
      <Timestamp>{createdAt}</Timestamp>
      <Textarea
        placeholder={"Add a comment.."}
        value={newComment.value}
        onChange={newComment.onChange}
        onKeyPress={onKeyPress}
      />
    </Meta>
  </Post>
);
