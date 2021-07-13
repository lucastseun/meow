const env = import.meta.env;

if (env.DEV) {
    env.MOCK = true; // mock本地json数据，跟后端联调时设置为false
}

export default env;