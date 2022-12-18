import Input from "../Utils/Input";
import { Stack } from "@mui/system";
import React from "react";

import Logo from "../img/logo.png";
import FavoriteIcon from '@mui/icons-material/Favorite';

const TopForkify = () => {
  return (
    <Stack direction="row" justifyContent='space-between' padding='20px 40px'>
      <Stack width="150px">
        <img src={Logo} alt="logo" width="100%" height="100%" />
      </Stack>
      <Stack>
        <Input />
      </Stack>
      <Stack direction='row' position='relative' top={0} left={0}>
        <FavoriteIcon sx={{color: 'red', fontSize: '40px'}} />
        <Stack position='absolute' bottom='5px' right='-1px' width='20px' height='20px' backgroundColor='rgba(0,0,0,0.4)' color='#fff' borderRadius='20px' justifyContent='center' alignItems='center' >0</Stack>
      </Stack>
    </Stack>
  );
};

export default TopForkify;
