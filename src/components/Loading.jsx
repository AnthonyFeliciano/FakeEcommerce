import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import style from './Loading.module.css'

export default function LinearIndeterminate() {
  return (
    <Box className={style.boxLoading}>
      <LinearProgress />
    </Box>
  );
}
