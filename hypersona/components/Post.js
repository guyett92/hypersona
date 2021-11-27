import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20,
  },
  image: {
    minWidth: 200,
  },
  content: {
    padding: 25,
    objectFit: "cover",
  },
};

const Post = (props) => {
  const {
    post: {
      body,
      createdAt,
      userImage,
      userHandle,
      postId,
      likeCount,
      commentCount,
    },
  } = props;
  dayjs.extend(relativeTime);
  return (
    <Card style={styles.card}>
      <CardMedia image={userImage} title="Profile image" style={styles.image} />
      <CardContent style={styles.content}>
        <Link href={`/users/${userHandle}`} passHref>
          <Typography variant="h5" component="a" color="secondary">
            {userHandle}
          </Typography>
        </Link>
        <Typography variant="body2" color="textSecondary">
          {dayjs(createdAt).fromNow()}
        </Typography>
        <Typography variant="body1">{body}</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
