import React from "react";
import { useRecoilValue } from "recoil";
import { Box, makeStyles } from "@material-ui/core";
import { basketUserDataState } from "../../states/basketState";
import TwoButtonGroup from "../../layout/TwoButtonGroup";
import BasketHeader from "../../components/basket/BasketHeader";

const useStyles = makeStyles(() => ({
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
  const basketUserData = useRecoilValue(basketUserDataState);
  
  return (
    <Box className={classes.root}>
      <Box className={classes.topBox}>
        <BasketHeader name={basketUserData.name} date={basketUserData.date}/>
        <TwoButtonGroup
          left={["시술","rgba(211, 211, 224, 0.3)"]}
          right={['할인',"rgb(253,240,245)"]}
        />
      </Box>
      <Box className={classes.middleBox}>asdf</Box>
      <Box className={classes.bottomBox}>
        <div
          style={{
            flex: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 100px 0 30px",
            fontSize: "30px",
          }}
        >
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
