import React, { useContext, useEffect, useState } from "react";
import ReactDom from "react-dom";

import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import Context from "../context/Context";

const recipeData = [
  "title",
  "URL",
  "image URL",
  "publisher",
  "prep time",
  "servings",
];

const ingredientData = [
  "ingredient 1",
  "ingredient 2",
  "ingredient 3",
  "ingredient 4",
  "ingredient 5",
  "ingredient 6",
];

const Input = ({ name }) => {
  return (
    <Stack direction="row" marginBottom="30px" alignItems="center">
      <label
        htmlFor={name}
        style={{ textTransform: "capitalize", width: "100px" }}
      >
        {name}
      </label>
      <input
        type="text"
        placeholder={`type ${name}`}
        name={name}
        id={name}
        className="input-data"
        style={{
          width: "300px",
          height: "35px",
          borderRadius: "10px",
          paddingLeft: "10px",
          border: "1px solid #ddd",
        }}
      />
    </Stack>
  );
};

const Modal = ({close}) => {
  const [isClicked, setIsClicked] = useState(false);
  const ctx = useContext(Context)
  useEffect(() => {
    if(isClicked) {
      ctx.closeModal()
    }
  }, [isClicked])

  return ReactDom.createPortal(
    <>
      <Stack sx={style.overlay} onClick={() => setIsClicked(true)} />
      <Stack sx={style.modal}>
        <Stack direction="row">
          <Stack flex={1}>
            <Typography
              variant="h5"
              component="h2"
              marginBottom="40px"
              fontWeight={700}
            >
              RECIPE DATA
            </Typography>
            {recipeData.map((name, index) => (
              <Input key={index} name={name} />
            ))}
          </Stack>
          <Stack flex={1}>
            <Typography
              variant="h5"
              component="h2"
              marginBottom="40px"
              fontWeight={700}
            >
              INGREDIENTS
            </Typography>
            {ingredientData.map((name, index) => (
              <Input key={index} name={name} />
            ))}
          </Stack>
        </Stack>
        <Stack
          direction="row"
          height="100%"
          justifyContent="center"
          position="relative"
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "10px 25px 10px 70px",
              borderRadius: "10rem",
              backgroundImage:
                "linear-gradient(to right bottom, #FBDB89, #F48982)",
            }}
          >
            <CloudUploadIcon
              sx={{
                position: "absolute",
                top: "25%",
                left: "20%",
                color: "#fff",
              }}
            />
            Upload
          </Button>
        </Stack>
        <CloseIcon
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }}
          onClick={() => setIsClicked(true)}
        />
      </Stack>
    </>,
    document.getElementById("portal")
  );
};

const style = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1000,
  },
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    backgroundColor: "#fff",
    transform: "translate(-50%, -50%)",
    width: "1000px",
    height: "600px",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "19px 17px 4px 3px rgba(0,0,0,0.1)",
    zIndex: 1000,
  },
};

export default Modal;
