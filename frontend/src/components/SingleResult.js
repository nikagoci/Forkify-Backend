import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const SingleResult = ({title, publisher, img}) => {
  return (
    <Stack
      direction="row"
      paddingY="15px"
      paddingLeft='35px'
      sx={{
        cursor: "pointer",
        ":hover": {
          backgroundColor: "#F9F5F3",
          transform: "translateY(-5px)",
          transition: "0.3s all ease-in-out",
        },
      }}
    >
      <Stack width="50px" height="50px" marginRight="20px">
        <img
          width="100%"
          height="100%"
          style={{ borderRadius: "50%" }}
          src={img}
          alt={title}
        />
      </Stack>
      <Stack>
        <Typography
          variant="subtitle1"
          component="h6"
          fontSize="1.1rem"
          color="#F59A83"
          textTransform="capitalize"
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          component="h6"
          fontSize=".8rem"
          color="#968B87"
          textTransform="capitalize"
        >
          {publisher}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SingleResult;