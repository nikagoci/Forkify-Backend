import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import SingleResult from "./SingleResult";
import Pagination from "./Pagination";

import Spinner from "../Spinner";

const ResultSide = ({setRecipeId, setIsDataLoaded}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allRecipe, setAllRecipe] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `http://localhost:5000/api/v1/recipes?limit=9&page=${page}`
      );
      const json = await res.json();
      setData(json.recipes);
      setAllRecipe(json.length);
      setLoading(false);
      setIsDataLoaded(true)
    }

    fetchData();
  }, [page]);

  let totalPages;
  if (allRecipe !== 0) {
    totalPages = Math.ceil(allRecipe / 10);
  }

  return (
    <Stack flexBasis="30%" backgroundColor="#fff" padding="40px 0">
      {loading && <Spinner />}
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
  );
};

export default ResultSide;
