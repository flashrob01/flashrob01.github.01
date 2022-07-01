import React, { useState, useEffect } from "react";
import "./../styles/Post.css";
import axios from "axios";
import moment from "moment";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const Post = ({ post }) => {
  const [posts, getPosts] = useState([]);

  const [img, setImg] = useState([]);

  useEffect(() => {
    const fetchImage = async () => {
      await axios(
        "https://public-api.wordpress.com/wp/v2/sites/robliou.wordpress.com/posts"
      )
        .then((res) => setImg(res.data.media_details.sizes.medium.source_url))
        .catch((err) => console.log(err));
    };
  }, []);

  console.log(posts);

  return (
    <>
      <Col>
        <Card id="postContainer">
          <CardBody>
            <CardTitle
              tag="h5"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <CardSubtitle tag="h6" classname="mb-2 text-muted">
              <br></br>
              {moment(post.modified).format("MMMM Do YYYY, h:mm:ss a")}
            </CardSubtitle>
            <br></br>
            <CardText
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            ></CardText>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Post;
