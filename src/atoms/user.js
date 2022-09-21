import { atom } from "recoil";

export const firstTimeOpened = atom ({
  key: 'firstTimeOpened',
  default: true,
})

export const login = atom({
  key: 'login',
  default: '',
});

export const email = atom({
  key: 'email',
  default: '',
});
