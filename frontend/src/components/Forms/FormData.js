import { Stack } from "@mui/system";
import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../../context/Context";

const FormData = () => {
  const [data, setData] = useState({
    title: '',
    source_url: '',
    image_url: '',
    publisher: '',
    publisher_url: '',
    social_rank: '',
  })

  const btnRef = useRef(null);
  const ctx = useContext(Context)

  useEffect(() => {
    const {title, source_url, image_url, publisher, publisher_url, social_rank} = data;
    if(title && source_url && image_url && publisher && publisher_url && social_rank){
      btnRef.current.click();
    }
  }, [data])


  const handleSubmit = (e) => {
    e.preventDefault();
    ctx.addRecipe('title', data.title)
    ctx.addRecipe('source_url', data.source_url)
    ctx.addRecipe('image_url', data.image_url)
    ctx.addRecipe('publisher', data.publisher)
    ctx.addRecipe('publisher_url', data.publisher_url)
    ctx.addRecipe('social_rank ', data.social_rank)
  }
  return (
    <form onSubmit={handleSubmit}>
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
          onChange={(e) => setData({...data, title: e.target.value })}
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
          onChange={(e) => setData({...data, source_url: e.target.value })}
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
          onChange={(e) => setData({...data, image_url: e.target.value })}
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
          onChange={(e) => setData({...data, publisher: e.target.value })}
        />
      </Stack>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="prep time" style={style.label}>
            publisher URL
        </label>
        <input
          type="text"
          placeholder={`Type prep time`}
          name="prep time"
          id="prep time"
          className="input-data"
          style={style.input}
          onChange={(e) => setData({...data, publisher_url: e.target.value })}
        />
      </Stack>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="servings" style={style.label}>
            social rank
        </label>
        <input
          type="text"
          placeholder={`Type servings`}
          name="servings"
          id="servings"
          className="input-data"
          style={style.input}
          onChange={(e) => setData({...data, social_rank: e.target.value })}
        />
      </Stack>
      <input type="submit" style={{visibility: 'hidden'}} ref={btnRef} />
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
