import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

import React from "react";
let fakeData = [
  {
    quantity: 4,
    ingredient:
      "1/2 cupunbleached high-gluten, bread, or all-purpose flour, chilled",
    id: 1,
  },
  { quantity: 1, ingredient: "1/2 cupunbleached high-gl", id: 2 },
  { quantity: 2, ingredient: "semolina flour or cornmeal for dusting", id: 3 },
  { quantity: 3, ingredient: "3/4tsp salt", id: 5 },
  { quantity: 3, ingredient: "3/4tsp salt", id: 6 },
  { quantity: 3, ingredient: "3/4tsp salt", id: 7 },
  { quantity: 3, ingredient: "3/4tsp salt", id: 8 },
  { quantity: 3, ingredient: "3/4tsp salt", id: 9 },
  { quantity: 3, ingredient: "3/4tsp salt", id: 10 },
  { quantity: 3, ingredient: "3/4tsp salt", id: 11 },
  { quantity: 3, ingredient: "3/4tsp salt", id: 12 },
  { quantity: 3, ingredient: "3/4tsp salt", id: 13 },
  { quantity: 3, ingredient: "3/4tsp salt", id: 14 },
];

const ShoppingSide = () => {
  return (
    <Stack flexBasis="25%" backgroundColor="#fff" padding="40px 0">
      <Typography
        variant="h6"
        component="h6"
        color="#F59A83"
        fontWeight={400}
        margin="0 auto"
        marginBottom='30px'
        sx={{ transform: "skewY(-3deg)" }}
      >
        MY SHOPPING LIST
      </Typography>
      <Stack height='750px' sx={{overflowY: 'auto'}}>
        {fakeData.map((data) => (
          <Stack key={data.id} direction="row" marginBottom='15px'>
            <Stack flexBasis='20%' justifyContent='center' alignItems='center'>
              <input
                style={{width: '30px', height: '30px'}}
                type="number"
                step={data.quantity}
                value={data.quantity}
                onChange={(e) => console.log("SHOPPINGSIDE Line 19~error")}
              />
            </Stack>
            <Typography variant="subtitle2" component="p" flexBasis='80%'>
              {data.ingredient}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ShoppingSide;
