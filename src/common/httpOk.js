import Api from './api'
import env from './env'
console.log(Api);
console.log(env);
const toUpperCase = (str = '') => String.prototype.toUpperCase.call(str);
const toLowerCase = (str = '') => String.prototype.toLowerCase.call(str);

const stringfy = (data = {}) => {
    const map = [];
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const item = `${key}=${data[key]}`;
            map.push(item);
        }
    }
    return map.join('&');
};

const merge = (target = {}, source = {}) => {
    for (const key in target) {
        if (Object.hasOwnProperty.call(target, key) && source[key]) {
            target[key] = source[key];
        }
    }
    return target;
};

const httpOk = async (options = {}) => {
    let url = Api[options.url] || '';
    options.method = toUpperCase(options.method);
    if (env.MOCK) {
        const urlArr = url.split('/');
        const urlName = urlArr[urlArr.length - 1];
        url = `../mock/${urlName}.json`;
        options.method = 'GET';
    }
    
    const defaultInit = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        mode: 'same-origin', // cors、 no-cors 或者 same-origin
        credentials: 'same-origin', // omit、same-origin 或者 include
        cache: 'default', // default、 no-store、 reload 、 no-cache 、 force-cache 或者 only-if-cached
        redirect: 'follow', //  可用的 redirect 模式: follow (自动重定向), error (如果产生重定向将自动终止并且抛出一个错误）, 或者 manual (手动处理重定向). 在Chrome中默认使用follow
        referrer: 'client', // 一个 USVString 可以是 no-referrer、client或一个 URL。默认是 client
        referrerPolicy: 'no-referrer', // 指定了HTTP头部referer字段的值。可能为以下值之一： no-referrer、 no-referrer-when-downgrade、 origin、 origin-when-cross-origin、 unsafe-url
        integrity: '', // 包括请求的  subresource integrity 值 （ 例如： sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=）
    };
    const init = merge(defaultInit, options);

    const contentType = init.headers['Content-Type'];

    if (contentType.indexOf('application/x-www-form-urlencoded') !== -1 ) {
        options.data = stringfy(options.data);
    }

    if (contentType.indexOf('application/json') !== -1) {
        options.data = JSON.stringify(options.data);
    }

    if (!(init.method==='GET' || init.method==='HEAD')) {
        init.body = options.data;
    }

    const result = await fetch(url, init).then(res=>{
        if (res.ok) {
            return res.json();
        }
    });
    return result;
};

export default httpOk;