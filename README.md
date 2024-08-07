## Clean Axios

<details>
    <summary>addInstance</summary>

```javascript
const users = addInstance(backendAPI, {
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
    <summary>addInstanceMethod</summary>

```javascript
const users = addInstanceMethod(backendAPI, {
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
    <summary>addInstanceGroup</summary>

```javascript
const users = addInstanceGroup(backendAPI, {
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
    <summary>addInstanceGroupMethod</summary>

```javascript
const users = addInstanceGroupMethod(backendAPI, {
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
