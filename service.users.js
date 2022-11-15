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
    todos: {
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
    todos: {
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
    fetchUser, // 유저 조회
    createUser, // 유저 생성
    updateUser, // 유저 변경
    deleteUser, // 유저 삭제
} = addInstanceUsers; */

/* export const {
    get: {
        fetchUser, // 유저 조회
    },
    post: {
        createUser, // 유저 생성
        updateUser, // 유저 변경
        deleteUser, // 유저 삭제
    },
} = addInstanceMethodUsers; */

/* export const {
    users: {
        fetchUser, // 유저 조회
        createUser, // 유저 생성
        updateUser, // 유저 변경
        deleteUser, // 유저 삭제
    },
} = addInstanceGroupUsers; */

/* export const {
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
} = addInstanceGroupMethodUsers; */
