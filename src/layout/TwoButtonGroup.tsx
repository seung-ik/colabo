import React, { FC } from "react";
import { Box, Button, makeStyles, Theme } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

interface StyleProps {
  left: [string, string];
  right: [string, string];
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    display: "flex",
    padding: "2%",
    justifyContent: "space-evenly",
  },
  leftButton: {
    flex: 1,
    backgroundColor: ({ left }) => left[1],
    marginRight: "10px",
    padding:"20px 0 ",
    borderRadius:'10px'
  },
  rightButton:{
    flex:1,
    backgroundColor: ({right})=> right[1],
    padding:"20px 0 ",
    borderRadius:'10px'
  }
}));

const TwoButtonGroup: FC<StyleProps> = ({ left, right }) => {
  const classes = useStyles({left,right});

  return (
    <Box className={classes.root}>
      <Button className={classes.leftButton}>
        <AddCircleOutlineIcon />
        &nbsp;{left[0]}
      </Button>
      <Button className={classes.rightButton}>
        <AddCircleOutlineIcon />
        &nbsp;{right[0]}
      </Button>
    </Box>
  );
};

export default TwoButtonGroup;
