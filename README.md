## Clean Axios

<details>
    <summary>addInstace</summary>

```javascript
const users = addInstace(backendAPI, {
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

export const {
  fetchUser, // 유저 조회
  createUser, // 유저 생성
  updateUser, // 유저 변경
  deleteUser, // 유저 삭제
} = users;
```

</details>

<details>
    <summary>addInstaceMethod</summary>

```javascript
const users = addInstaceMethod(backendAPI, {
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

export const {
  get: {
    fetchUser, // 유저 조회
  },
  post: {
    createUser, // 유저 생성
    updateUser, // 유저 변경
    deleteUser, // 유저 삭제
  },
} = addInstanceMethodUsers;
```

</details>

<details>
    <summary>addInstaceGroup</summary>

```javascript
const users = addInstaceGroup(backendAPI, {
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

export const {
  users: {
    fetchUser, // 유저 조회
    createUser, // 유저 생성
    updateUser, // 유저 변경
    deleteUser, // 유저 삭제
  },
} = users;
```

</details>

<details>
    <summary>addInstaceGroupMethod</summary>

```javascript
const users = addInstaceGroupMethod(backendAPI, {
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

export const {
  users: {
    get: {
      fetchUser, // 유저 조회
    },
    post: {
      createUser, // 유저 생성
      updateUser, // 유저 변경
      deleteUser, // 유저 삭제
    },
  },
} = users;
```

</details>
