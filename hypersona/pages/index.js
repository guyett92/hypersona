import React, { useEffect, useState } from "react";
import axios from "axios";
//Components
import Layout from "../components/Layout";
import Post from "../components/Post";

import { Grid } from "@material-ui/core";

export default function Home() {
  const [posts, setPosts] = useState(null);

  let recentPostsMarkup = posts ? (
    posts.map((post) => <Post key={post.postId} post={post} />)
  ) : (
    <p>Loading...</p>
  );

  useEffect(() => {
    axios
      .get("https://us-central1-intersona-5c0dd.cloudfunctions.net/api/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Layout title="Home">
        <Grid container spacing={8}>
          <Grid item sm={8} xs={12}>
            {recentPostsMarkup}
          </Grid>
          <Grid item sm={4} xs={12}>
            <p>Profile...</p>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}
