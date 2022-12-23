import Input from "../Utils/Input";
import { Stack } from "@mui/system";
import React from "react";

import Logo from "../img/logo.png";
import FavoriteIcon from '@mui/icons-material/Favorite';

const TopForkify = () => {
  return (
    <Stack direction="row" justifyContent='space-between' padding='30px 40px'>
      <Stack width="150px">
        <img src={Logo} alt="logo" width="100%" height="100%" />
      </Stack>
      <Stack>
        <Input />
      </Stack>
      <Stack direction='row' position='relative' top={0} left={0}>
        <FavoriteIcon sx={{color: '#F59A83', fontSize: '40px'}} />
      </Stack>
    </Stack>
  );
};

export default TopForkify;
