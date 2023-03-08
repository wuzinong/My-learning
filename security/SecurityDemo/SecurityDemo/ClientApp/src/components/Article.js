import {
  Box,
  Button,
  Container,
  Grid,
  Item,
  TextareaAutosize,
  Input,
  Rating,
  Alert,
  Avatar,
} from "@mui/material";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "../App";
import { useState, useEffect } from "react";
import { getCoookie } from "../utils";
import DOMPurify from "dompurify";

const client = axios.create({
  headers: {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": getCoookie("XSRF-TOKEN"),
  },
});

const Article = () => {
  const [ratingValue, setRating] = useState(0);
  const [errorMsg, setErrorMsg] = useState(false);
  const [commentObj, setComment] = useState({
    name: "",
    message: "",
  });
  const { data, isSuccess } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      client.get("weatherforecast").then((res) => {
        return res.data;
      }),
  });
  // Mutations
  const postComment = useMutation({
    mutationFn: (newTodo) => {
      return client.post("weatherforecast", newTodo);
    },
    onSuccess: () => {
      setComment({
        name: "",
        message: "",
      });
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
    onError: (err) => {
      setErrorMsg(err.message);
    },
  });

  useEffect(() => {
    setTimeout(() => {
      const script = document.createElement("script");
      script.append(
        "console.log('unexpected cookie leak which might be with some sensitive information:  ',document.cookie)"
      );
      document.querySelector("body").append(script);
    }, 2000);
  }, []);

  //<img onerror="alert(cookie)" src="noimg.png"> , sanitize
  //never trust FE, wirte logic in BE checing the data (demo postman)
  // CSRF
  //talking about reCAPTCHA for anonymous forms: https://developers.google.com/recaptcha/
  //csp
  return (
    <Container>
      <Box fontSize={24} textAlign="center" mt={2}>
        Introduction to Veracity Data Fabric
      </Box>
      <Grid container spacing={2} mt={3}>
        <Grid item xs={6}>
          <Box fontSize={18} p={2}>
            Manage all types of data
          </Box>
          <Box p={2}>
            Veracity Data Fabric is a secure data management space for cloud and
            on-premise. It allows you to collect all your information; from data
            streams to separate data objects in one place with secure sharing
            mechanisms. Work on your own data or share and combine with other
            data sets, the decision is yours. We provide the secure technology
            and access to multiple industry-relevant data and analytics
            providers; if and how you want to use them is your decision.
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            alt="data"
            src="https://cdn.sanity.io/images/yk5gp8um/marketplace-prod/b47f17f75cc81d7b849137961a21d67c8d254895-940x549.png?w=508"
          />
        </Grid>
        <Grid item xs={6} mt={2}>
          <img
            alt="data"
            src="https://cdn.sanity.io/images/yk5gp8um/marketplace-prod/c530bcc9de12a106f424d95597c1757f4b466fbc-530x310.png?w=508"
          />
        </Grid>
        <Grid item xs={6} mt={2}>
          <Box fontSize={18} p={2}>
            Control your data
          </Box>
          <Box p={2}>
            <p>
              We offer three data management roles within Veracity Data Fabric.
            </p>
            <p>
              Data Manager: Can create and manage the data lake. Can give access
              to Data Stewards.{" "}
            </p>
            <p>
              Data Steward: Can share and manage accesses on behalf of the Data
              Manager.
            </p>
            <p>
              Data Consumer: The access level is defined at the time of sharing.
              Options: read, write, delete and list.
            </p>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box fontSize={18} p={2}>
            Combine your data
          </Box>
          <Box p={2}>
            Data managers on Veracity have secure access to an eco-system of
            data providers and a wide variety of analytics technologies,
            available from the Veracity Marketplace. It allows you to securely
            share data for advanced analytics with tools like Arundo Fabric,
            Azure Databricks, Azure HDInsight, Azure Machine Learning Studio and
            others.
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            alt="data"
            src="https://cdn.sanity.io/images/yk5gp8um/marketplace-prod/dff4c9b071bacb8f04cd705f1bd85d2435ca8520-940x555.png?w=508"
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={8}>
        <Box mb={3} fontSize={"18"}>
          Comments and feedbacks
        </Box>
        <Grid item xs={12} mb={3}>
          <Input
            value={commentObj.name}
            placeholder="Please input your nick name"
            onChange={(e) => {
              setComment({ ...commentObj, name: e.target.value });
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextareaAutosize
            style={{
              color: "rgb(26, 32, 39)",
              transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              border: "2px solid rgb(0, 127, 255)",
              padding: "12px",
              borderRadius: "10px",
              width: "80%",
              minHeight: "60px",
            }}
            value={commentObj.message}
            placeholder="please write your comments"
            onChange={(e) => {
              setComment({ ...commentObj, message: e.target.value });
            }}
          ></TextareaAutosize>
          <Box width="80%" display="flex" justifyContent="flex-end">
            <Button
              onClick={() => {
                if (commentObj.name && commentObj.name.length > 2) {
                  if (commentObj.message) {
                    setErrorMsg("");
                    postComment.mutate(commentObj);
                  } else {
                    setErrorMsg("Please input your comments");
                  }
                } else {
                  setErrorMsg(
                    "Please make sure your name is longer than 2 characters"
                  );
                }
              }}
            >
              Post test
            </Button>
          </Box>
          {errorMsg && (
            <Box width="80%">
              <Alert severity="error">{errorMsg}</Alert>
            </Box>
          )}
        </Grid>
        <Grid item xs={12}>
          <Box
            width={"80%"}
            mt={2}
            display={"flex"}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Box>Is this article useful?</Box>
            <Rating
              mt={1}
              name="simple-controlled"
              value={ratingValue}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </Box>
        </Grid>

        <Grid mt={2} width="100%">
          {isSuccess ? (
            <Box>
              {data.map((comment, i) => {
                return (
                  <Box borderBottom={"1px solid grey"} pb={2} mb={3} key={i}>
                    <Box mb={1} display={"flex"} alignItems="center">
                      <Avatar>
                        {comment.name.split("")[0].toUpperCase()}
                        {comment.name.split("")[1].toUpperCase()}
                      </Avatar>
                      &nbsp;&nbsp;&nbsp;&nbsp;commented:
                    </Box>
                    <Box
                      dangerouslySetInnerHTML={{
                        __html: comment.message,
                        // __html: DOMPurify.sanitize(comment.message, {
                        //   ALLOWED_TAGS: ["b", "i"],
                        // }),
                      }}
                    ></Box>
                  </Box>
                );
              })}
            </Box>
          ) : (
            "failed"
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Article;
