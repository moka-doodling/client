import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: sessionStorage,
});

export const loginState = atom({
  key: 'loginState',
  default: {
    isLogin: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export const loginInfo = atom({
  key: 'loginInfo',
  default: {
    memberId: '',
    username: '',
    role: '',
  },
  effects_UNSTABLE: [persistAtom],
});
