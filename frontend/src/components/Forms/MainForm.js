import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React from "react";
import FormData from "./FormData";
import FormIngredients from "./FormIngredients";

import axios from 'axios'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const MainForm = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    source_url: yup.string().required("Source is required"),
    image_url: yup.string().required("Image is required"),
    publisher: yup.string().required("Publisher is required"),
    publisher_url: yup.string().required("Publisher image is required"),
    social_rank: yup
      .number()
      .positive("Social rank should be positive")
      .integer("Social rank should be integer")
      .min(1, "Social rank should be more than 1")
      .max(100, "Socail rank should be less than 100")
      .typeError("Social rank should be a number"),
    ingredient1: yup.string().required("ingredient1 is required"),
    ingredient2: yup.string(),
    ingredient3: yup.string(),
    ingredient4: yup.string(),
    ingredient5: yup.string(),
    ingredient6: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const completedData = (data) => {
    let ingredients = [];

    for(let i = 1; i <= 6; i++){
      const ingredient = data[`ingredient${i}`]

      delete data[`ingredient${i}`]

      if(ingredient){
        ingredients.push(ingredient);
      }

    }
    data.ingredients =ingredients;

    return data
  }

  const addRecipe = async(data) => {
      try {
        const response = await axios.post('http://localhost:5000/api/v1/recipes', data);
        return response
      } catch (error) {
        console.log(error)
      }
  }
  

  const onSubmit = (data) => {
    const fullData = completedData(data);
    
    addRecipe(fullData)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" columnGap={10}>
        <FormData register={register} errors={errors} />
        <FormIngredients register={register} errors={errors} />
      </Stack>
      <Stack direction="row" justifyContent="center" position="relative">
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: "10px 25px 10px 70px",
            borderRadius: "10rem",
            backgroundImage:
              "linear-gradient(to right bottom, #FBDB89, #F48982)",
          }}
          type="submit"
        >
          <CloudUploadIcon
            sx={{
              position: "absolute",
              top: "25%",
              left: "20%",
              color: "#fff",
            }}
            type="submit"
          />
          Upload
        </Button>
      </Stack>
    </form>
  );
};

export default MainForm;
