export function addInstace(instance, instanceObjectAPI) {
    const instanceMap = ([key, callback]) => [
        key,
        (...parameters) => instance(callback(...parameters)),
    ];
    return Object.fromEntries(
        Object.entries(instanceObjectAPI).map(instanceMap)
    );
}

export function addInstaceGroup(instance, instanceObjectAPI) {
    return Object.fromEntries(
        Object.entries(instanceObjectAPI).map(([key, value]) => [
            key,
            addInstace(instance, value),
        ])
    );
}

export function addInstaceMethod(instance, instanceObjectAPI) {
    return Object.fromEntries(
        Object.entries(instanceObjectAPI)
            .filter(([method]) =>
                ["get", "post", "put", "delete"].includes(
                    method.toLocaleLowerCase()
                )
            )
            .map(([method, value]) => {
                const instanceMap = ([key, callback]) => [
                    key,
                    (...parameters) =>
                        instance({ ...callback(...parameters), method }),
                ];
                return [
                    method,
                    Object.fromEntries(Object.entries(value).map(instanceMap)),
                ];
            })
    );
}

export function addInstaceGroupMethod(instance, instanceObjectAPI) {
    return Object.fromEntries(
        Object.entries(instanceObjectAPI).map(([key, value]) => [
            key,
            addInstaceMethod(instance, value),
        ])
    );
}
