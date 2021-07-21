import { atom } from "recoil";

interface BasketUserData {
  name: string;
  date: string;
}

export const basketUserDataState = atom<BasketUserData>({
  key: 'basket/basketUserData',
  default : {
    name: '오승익',
    date: "2020. 07. 07. 오후 4:30"
  }
})