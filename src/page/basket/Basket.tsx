import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  topBox: {
    flex: 1.5,
  },
  middleBox: {
    flex: 7.5,
    backgroundColor: "white",
  },
  bottomBox: {
    flex: 1,
    display:'flex',
    padding:'10px',
    justifyContent:'space-between'
  },
}));

const Basket = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.topBox}>
        <CloseIcon />
        <div>오승익</div>
        <div>2021.7.19. 오후 5:30</div>
        <Button>
          <AddCircleOutlineIcon />
          시술
        </Button>
        <Button>
          <AddCircleOutlineIcon />
          할인
        </Button>
      </Box>
      <Box className={classes.middleBox}>asdf</Box>
      <Box className={classes.bottomBox}>
        <div style={{ flex: 8, display: "flex", alignItems: "center" ,justifyContent:'space-between', padding: '0 100px 0 30px', fontSize: '30px'}}>
          <span>합계:</span>
          <span>1000 원</span>
        </div>
        <div style={{ flex: 2 }}>
          <button style={{ height: "100%", width: "100%" }}>다음</button>
        </div>
      </Box>
    </Box>
  );
};

export default Basket;
