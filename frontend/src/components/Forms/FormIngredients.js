import { Stack } from "@mui/material";
import React from "react";

const FormIngredients = () => {
  return (
    <form>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="ingredient 1" style={style.label}>
            ingredient 1
        </label>
        <input
          type="text"
          placeholder={`Type ingredient 1`}
          name="ingredient 1"
          id="ingredient 1"
          className="input-data"
          style={style.input}
        />
      </Stack>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="ingredient 2" style={style.label}>
            ingredient 2
        </label>
        <input
          type="text"
          placeholder={`Type ingredient 2`}
          name="ingredient 2"
          id="ingredient 2"
          className="input-data"
          style={style.input}
        />
      </Stack>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="ingredient 3" style={style.label}>
            ingredient 3
        </label>
        <input
          type="text"
          placeholder={`Type ingredient 3`}
          name="ingredient 3"
          id="ingredient 3"
          className="input-data"
          style={style.input}
        />
      </Stack>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="ingredient 4" style={style.label}>
            ingredient 4
        </label>
        <input
          type="text"
          placeholder={`Type ingredient 4`}
          name="ingredient 4"
          id="ingredient 4"
          className="input-data"
          style={style.input}
        />
      </Stack>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="ingredient 5" style={style.label}>
            ingredient 5
        </label>
        <input
          type="text"
          placeholder={`Type ingredient 5`}
          name="ingredient 5"
          id="ingredient 5"
          className="input-data"
          style={style.input}
        />
      </Stack>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="ingredient 6" style={style.label}>
            ingredient 6
        </label>
        <input
          type="text"
          placeholder={`Type ingredient 6`}
          name="ingredient 6"
          id="ingredient 6"
          className="input-data"
          style={style.input}
        />
      </Stack>
    </form>
  );
};

const style = {
    label: { textTransform: "capitalize", width: "100px" },
    input: {
      width: "300px",
      height: "35px",
      borderRadius: "10px",
      paddingLeft: "10px",
      border: "1px solid #ddd",
    },
  };

export default FormIngredients;
