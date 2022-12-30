import { Stack } from "@mui/system";
import React from "react";

const FormData = () => {
  return (
    <form>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="title" style={style.label}>
            Title
        </label>
        <input
          type="text"
          placeholder={`Type Title`}
          name="title"
          id="title"
          className="input-data"
          style={style.input}
        />
      </Stack>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="URL" style={style.label}>
            URL
        </label>
        <input
          type="text"
          placeholder={`Type URL`}
          name="URL"
          id="URL"
          className="input-data"
          style={style.input}
        />
      </Stack>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="image url" style={style.label}>
            image url
        </label>
        <input
          type="text"
          placeholder={`Type image url`}
          name="image url"
          id="image url"
          className="input-data"
          style={style.input}
        />
      </Stack>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="publisher" style={style.label}>
            publisher
        </label>
        <input
          type="text"
          placeholder={`Type publisher name`}
          name="publisher"
          id="publisher"
          className="input-data"
          style={style.input}
        />
      </Stack>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="prep time" style={style.label}>
            prep time
        </label>
        <input
          type="text"
          placeholder={`Type prep time`}
          name="prep time"
          id="prep time"
          className="input-data"
          style={style.input}
        />
      </Stack>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="servings" style={style.label}>
            servings
        </label>
        <input
          type="text"
          placeholder={`Type servings`}
          name="servings"
          id="servings"
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

export default FormData;
