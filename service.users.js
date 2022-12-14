import { backendAPI } from "./instacnes";
import {
  addInstace,
  addInstaceGroup,
  addInstaceMethod,
  addInstaceGroupMethod,
} from "./axios.helpers";

const addInstanceUsers = addInstace(backendAPI, {
  fetchUser: () => ({
    method: "get",
    url: "/user/read",
  }),
  createUser: (userInfo) => ({
    method: "post",
    url: "/user/create",
    data: userInfo,
  }),
  updateUser: (userInfo) => ({
    method: "post",
    url: "/user/update",
    data: userInfo,
  }),
  deleteUser: (userInfo) => ({
    method: "post",
    url: "/user/delete",
    data: userInfo,
  }),
});

const addInstanceMethodUsers = addInstaceMethod(backendAPI, {
  get: {
    fetchUser: () => ({
      url: "/user/read",
    }),
  },
  post: {
    createUser: (userInfo) => ({
      url: "/user/create",
      data: userInfo,
    }),
    updateUser: (userInfo) => ({
      url: "/user/update",
      data: userInfo,
    }),
    deleteUser: (userInfo) => ({
      url: "/user/delete",
      data: userInfo,
    }),
  },
});

const addInstanceGroupUsers = addInstaceGroup(backendAPI, {
  users: {
    fetchUser: () => ({
      method: "get",
      url: "/user/read",
    }),
    createUser: (userInfo) => ({
      method: "post",
      url: "/user/create",
      data: userInfo,
    }),
    updateUser: (userInfo) => ({
      method: "post",
      url: "/user/update",
      data: userInfo,
    }),
    deleteUser: (userInfo) => ({
      method: "post",
      url: "/user/delete",
      data: userInfo,
    }),
  },
});

const addInstanceGroupMethodUsers = addInstaceGroupMethod(backendAPI, {
  users: {
    get: {
      fetchUser: () => ({
        url: "/user/read",
      }),
    },
    post: {
      createUser: (userInfo) => ({
        url: "/user/create",
        data: userInfo,
      }),
      updateUser: (userInfo) => ({
        url: "/user/update",
        data: userInfo,
      }),
      deleteUser: (userInfo) => ({
        url: "/user/delete",
        data: userInfo,
      }),
    },
  },
});

/* export const {
    fetchUser, // ์ ์  ์กฐํ
    createUser, // ์ ์  ์์ฑ
    updateUser, // ์ ์  ๋ณ๊ฒฝ
    deleteUser, // ์ ์  ์ญ์ 
} = addInstanceUsers; */

/* export const {
    get: {
        fetchUser, // ์ ์  ์กฐํ
    },
    post: {
        createUser, // ์ ์  ์์ฑ
        updateUser, // ์ ์  ๋ณ๊ฒฝ
        deleteUser, // ์ ์  ์ญ์ 
    },
} = addInstanceMethodUsers; */

/* export const {
    users: {
        fetchUser, // ์ ์  ์กฐํ
        createUser, // ์ ์  ์์ฑ
        updateUser, // ์ ์  ๋ณ๊ฒฝ
        deleteUser, // ์ ์  ์ญ์ 
    },
} = addInstanceGroupUsers; */

/* export const {
    users: {
        get: {
            fetchUser, // ์ ์  ์กฐํ
        },
        post: {
            createUser, // ์ ์  ์์ฑ
            updateUser, // ์ ์  ๋ณ๊ฒฝ
            deleteUser, // ์ ์  ์ญ์ 
        },
    },
} = addInstanceGroupMethodUsers; */
