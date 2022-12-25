import { Box, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

const RecipeDetails = ({ data, isLoading }) => {
  return (
    <Stack marginBottom="20px">
      <Box
        width="100%"
        height="300px"
        position="relative"
        marginBottom="70px"
        top={0}
        left={0}
        className="img-container"
      >
        {isLoading && (
          <Skeleton variant="rect" width="100%" height="100%" >
            <img
              width="100%"
              height="100%"
              src={data?.image_url}
              alt="random"
            />
          </Skeleton>
        )}

        {!isLoading && (
          <img width="100%" height="100%" src={data?.image_url} alt="random" />
        )}

        <Stack
          position="absolute"
          alignItems="center"
          left="25%"
          bottom="-20px"
          width="300px"
          sx={{
            backgroundImage:
              "linear-gradient(to right bottom, #FBDB89, #F48982)",
            padding: "15px 0",
            transform: "skewY(-6deg)",
          }}
        >
          <Typography
            variant="h5"
            component="span"
            color="#fff"
            fontWeight={700}
            textTransform="uppercase"
            textAlign="center"
          >
            {data?.title}
          </Typography>
        </Stack>
      </Box>
      <Stack direction="row" padding="0 30px">
        <Stack direction="row" alignItems="center" marginRight="35px">
          <AccessTimeIcon
            sx={{ color: "#f38e82", fontSize: "25px", marginRight: "10px" }}
          />
          <Typography variant="h6" component="p" fontWeight={300}>
            <span style={{ fontWeight: 900 }}>75</span> Minutes
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" marginRight="25px">
          <PeopleOutlineIcon
            sx={{ color: "#f38e82", fontSize: "25px", marginRight: "10px" }}
          />
          <Typography variant="h6" component="p" fontWeight={300}>
            <span style={{ fontWeight: 900 }}>4</span> Servings
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" marginRight="85px">
          <RemoveCircleOutlineIcon
            sx={{
              color: "#f38e82",
              fontSize: "25px",
              cursor: "pointer",
              ":hover": {
                transform: "translateY(-3px)",
                transition: "all 0.3s ease-in-out",
              },
            }}
          />
          <AddCircleOutlineIcon
            sx={{
              color: "#f38e82",
              fontSize: "25px",
              cursor: "pointer",
              ":hover": {
                transform: "translateY(-3px)",
                transition: "all 0.3s ease-in-out",
              },
            }}
          />
        </Stack>
        <Stack
          sx={{
            backgroundImage: "linear-gradient(to right bottom,#fbdb89,#f48982)",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            ":hover": {
              transform: "scale(1.1)",
              transition: "all .3s ease-in-out",
            },
          }}
          alignItems="center"
          justifyContent="center"
        >
          <BookmarksIcon sx={{ color: "#fff" }} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RecipeDetails;
