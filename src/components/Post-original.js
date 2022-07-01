import React, { useState, useEffect } from "react";
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
        <Card>
          <CardImg top width="100%" src={img} alt="post image" />
          <CardBody>
            <CardTitle tag="h5"> {post.title.rendered}</CardTitle>
            <CardSubtitle tag="h6" classname="mb-2 text-muted">
              {moment(post.modified).format("MMMM Do YYYY, h:mm:ss a")}
            </CardSubtitle>
            <CardText
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></CardText>
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
