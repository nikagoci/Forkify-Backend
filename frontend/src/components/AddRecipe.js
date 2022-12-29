import { Stack } from "@mui/system";
import React, { useState } from "react";

import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Typography } from "@mui/material";

import Modal from './Modal'

const AddRecipe = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        cursor: "pointer",
        transition: "all .3s ease-in-out",
        marginRight: "20px",
        ":hover": { transform: "translateY(-5px)" },
      }}
      onClick={() => setOpenModal(true)}
    >
      <ControlPointIcon sx={{ color: "#f38e82", marginRight: "5px" }} />
      <Typography variant="h6" component="h5" color="grey">
        ADD RECIPE
      </Typography>
      {openModal && (
        <Modal />
      )}
    </Stack>
  );
};

export default AddRecipe;
