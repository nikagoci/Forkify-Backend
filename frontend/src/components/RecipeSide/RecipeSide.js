import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";

import Spinner from "../../components/Spinner";

import RecipeIngredients from "./RecipeIngredients";
import RecipeDetails from "./RecipeDetails";
import RecipeCook from "./RecipeCook";

const RecipeSide = ({ recipeId }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (recipeId) {
      async function fetchData() {
        const response = await fetch(
          `http://localhost:5000/api/v1/recipes/${recipeId}`
        );
        const json = await response.json();
        setData(json.recipe);
        setIsLoading(false);
      }

      fetchData();
    }
  }, [recipeId]);

  return (
    <Stack flexBasis="70%">
      {!isLoading && recipeId && (
        <>
          <RecipeDetails data={data} isLoading={isLoading} />
          <RecipeIngredients data={data}  />
          <RecipeCook data={data} />
        </>
      )}

      {isLoading && recipeId && (
        <Stack marginTop="50px">
          <Spinner />
        </Stack>
      )}
    </Stack>
  );
};

export default RecipeSide;
