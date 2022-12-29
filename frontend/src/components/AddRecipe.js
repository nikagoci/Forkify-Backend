import { Stack } from "@mui/system";
import React from "react";

import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Typography } from "@mui/material";

const AddRecipe = () => {
  return (
    <Stack direction="row" alignItems="center" sx={{ cursor: "pointer", marginRight: '20px' }}>
      <ControlPointIcon sx={{ color: "#f38e82", marginRight: '5px' }} />
      <Typography variant="h6" component="h5" color="grey">
        ADD RECIPE
      </Typography>
    </Stack>
  );
};

export default AddRecipe;
