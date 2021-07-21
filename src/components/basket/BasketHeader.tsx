import React, { FC } from 'react'
import CloseIcon from "@material-ui/icons/Close";
import { Box, makeStyles } from '@material-ui/core';

interface Props {
  name: string;
  date: string;
}

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  }
}));

const BasketHeader: FC<Props> = ({ name, date }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CloseIcon />
      <div>
        <div>{name}</div>
        <div>{date}</div>
      </div>
    </Box>
  );
};

export default BasketHeader
