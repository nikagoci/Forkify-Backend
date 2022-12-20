import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import CheckIcon from "@mui/icons-material/Check";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const fakeIngredients = [
  "1 medium head cauliflower cut into florets",
  "1 egg",
  "1/2 teaspoon baking dish",
  "1/2 teaspoon salt",
  "3/4 cup mozarella shredded",
  "Red onion to taste thinly sliced",
];

const RecipeSide = () => {
  return (
    <Stack flexBasis="50%">
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
          <img
            width="100%"
            height="100%"
            src="https://i.picsum.photos/id/767/300/300.jpg?hmac=rB66ZMECHOCnIoIexwBxTm2NvjXv9JkHTLYxfmPbPfY"
            alt="random"
          />
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
            >
              Best Pizza Dough
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
              backgroundImage:
                "linear-gradient(to right bottom,#fbdb89,#f48982)",
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
      <Stack backgroundColor="#f2efee" padding="60px 0">
        <Typography
          variant="h5"
          component="h6"
          fontWeight={600}
          color="#f38e82"
          align="center"
          marginBottom="30px"
        >
          RECIPE INGREDIENTS
        </Typography>
        <Stack
          flexWrap="wrap"
          direction="row"
          padding="0 20px"
          justifyContent="center"
        >
          {fakeIngredients.map((ingredient) => (
            <Stack direction="row" flexBasis="50%" marginBottom="15px">
              <CheckIcon sx={{ color: "#f38e82", marginRight: "8px" }} />
              <Typography variant="subtitle2" component="h6">
                {ingredient}
              </Typography>
            </Stack>
          ))}
          <Stack
            direction="row"
            justifyContent="space-between"
            marginTop="20px"
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: "12px 35px 12px 55px",
                borderRadius: "10rem",
                backgroundImage:
                  "linear-gradient(to right bottom, #FBDB89, #F48982)",
              }}
            >
              <ShoppingCartIcon
                sx={{
                  position: "absolute",
                  top: "25%",
                  left: "8%",
                  color: "#fff",
                }}
              />
              ADD TO SHOPPING LIST
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack padding="40px 0" alignItems='center'>
        <Typography
          variant="h5"
          component="h6"
          fontWeight={600}
          color="#f38e82"
          align="center"
          marginBottom="30px"
        >
          HOW TO COOK IT
        </Typography>
        <Typography
          variant="subtitle1"
          component="h6"
          fontWeight={500}
          color="#918581"
          align="center"
          padding='0 60px'
          marginBottom="20px"
        >
          This recipe was carefully designed and tested by <span style={{fontWeight: 700}}>Closet Cooking</span>. Please check out directions at their website.
        </Typography>
        <Stack
            direction="row"
            justifyContent="space-between"
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: "12px 55px 12px 35px",
                borderRadius: "10rem",
                backgroundImage:
                  "linear-gradient(to right bottom, #FBDB89, #F48982)",
              }}
            >
              <ArrowForwardIcon
                sx={{
                  position: "absolute",
                  top: "21%",
                  right: "13%",
                  color: "#fff",
                }}
              />
              Directions
            </Button>
          </Stack>
      </Stack>
    </Stack>
  );
};

export default RecipeSide;
