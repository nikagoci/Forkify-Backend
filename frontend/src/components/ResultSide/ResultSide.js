import { Stack } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import SingleResult from "./SingleResult";
import Pagination from "./Pagination";
import axios from "axios";

import Spinner from "../Spinner";
import Context from "../../context/Context";
import { Typography } from "@mui/material";

const ResultSide = ({ setRecipeId, setIsDataLoaded }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allRecipe, setAllRecipe] = useState(0);
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const ctx = useContext(Context);

  useEffect(() => {
    async function fetchData() {
      if (ctx.query) {
        const response = await axios.get(
          `http://localhost:5000/api/v1/recipes?limit=9&page=${page}&recipe=${ctx.query}`
        );
        const allData = response.data;
        setData(allData.recipes);
        setAllRecipe(allData.length);
        setLoading(false);
        setIsDataLoaded(true);
      }
    }
    fetchData();
  }, [page, setIsDataLoaded, ctx.query]);

  useEffect(() => {
    if (
      ctx.query === "pizza" ||
      ctx.query === "burger" ||
      ctx.query === "salad"
    ) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [isError, ctx.query]);

  let totalPages;
  if (allRecipe !== 0) {
    totalPages = Math.ceil(allRecipe / 9);
  }

  let checkItems;
  if (page === totalPages) {
    checkItems = allRecipe % 9 !== 0 && "860px";
  }

  if (isError) {
    return (
      <Stack
        flexBasis="30%"
        backgroundColor="#fff"
        padding="40px 0"
        height='860px'
        alignItems="center"
      >
        <Typography variant="h5" component='h4' color='#f38e82' marginBottom={4}>Please Search Valid Recipe</Typography>
        <Typography variant="h6" component='h5' color='#ff9319'>Current Recipes: Pizza, Burger, Salad</Typography>
      </Stack>
    );
  }

  return (
    <>
      <Stack
        flexBasis="30%"
        backgroundColor="#fff"
        padding="40px 0"
        height={checkItems}
      >
        {loading && ctx.query && <Spinner />}
        <Stack marginBottom="15px">
          {data.map((recipe, ind) => (
            <SingleResult
              key={ind}
              setRecipeId={setRecipeId}
              id={recipe._id}
              title={recipe.title}
              publisher={recipe.publisher}
              img={recipe.image_url}
            />
          ))}
        </Stack>
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </Stack>
    </>
  );
};

export default ResultSide;
