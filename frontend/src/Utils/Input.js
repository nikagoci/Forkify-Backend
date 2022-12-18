import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

import SearchIcon from "@mui/icons-material/Search";

const Input = () => {
  return (
    <Stack direction="row" position='relative' width='500px' height='55px' >
      <input placeholder="Search over 1,000,000 recipes" style={{width: '100%', fontSize: '1rem', border: 'none', borderRadius:'10rem', paddingLeft: '30px'}} />
      <Stack direction='row' position='absolute' top={0} right={0} height='100%' justifyContent='space-between' >
        <Button variant="contained" color="primary" sx={{padding:'10px 45px', borderRadius:'10rem', backgroundImage: 'linear-gradient(to right bottom, #FBDB89, #F48982)'}}>
          <SearchIcon sx={{position: 'absolute', top: '25%', left: '10%', color: '#fff'}} />
          Search
        </Button>
      </Stack>
    </Stack>
  );
};

export default Input;
