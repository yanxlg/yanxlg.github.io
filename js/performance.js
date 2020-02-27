window.addEventListener("load",function () {
    const performance = window.performance;
    if (performance) {
        let e = performance.getEntriesByType('navigation')[0];
        let r = 0;
        e || (r = (e = performance.timing).navigationStart);
        const n = [{
            key: 'Redirect',
            desc: '\u7f51\u9875\u91cd\u5b9a\u5411\u7684\u8017\u65f6',
            value: e.redirectEnd - e.redirectStart
        }, {
            key: 'AppCache',
            desc: '\u68c0\u67e5\u672c\u5730\u7f13\u5b58\u7684\u8017\u65f6',
            value: e.domainLookupStart - e.fetchStart
        }, {
            key: 'DNS',
            desc: 'DNS\u67e5\u8be2\u7684\u8017\u65f6',
            value: e.domainLookupEnd - e.domainLookupStart
        }, {
            key: 'TCP',
            desc: 'TCP\u8fde\u63a5\u7684\u8017\u65f6',
            value: e.connectEnd - e.connectStart
        }, {
            key: 'Waiting(TTFB)',
            desc: '\u4ece\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\u5230\u63a5\u6536\u5230\u54cd\u5e94\u7684\u65f6\u95f4 / Time To First Byte',
            value: e.responseStart - e.requestStart
        }, {
            key: 'Content Download',
            desc: '\u4e0b\u8f7d\u670d\u52a1\u7aef\u8fd4\u56de\u6570\u636e\u7684\u65f6\u95f4',
            value: e.responseEnd - e.responseStart
        }, {
            key: 'HTTP Total Time',
            desc: 'http\u8bf7\u6c42\u603b\u8017\u65f6',
            value: e.responseEnd - e.requestStart
        }, {
            key: 'DOMContentLoaded',
            desc: 'dom\u52a0\u8f7d\u5b8c\u6210\u7684\u65f6\u95f4',
            value: e.domContentLoadedEventEnd - r
        }, {
            key: 'Loaded',
            desc: '\u9875\u9762load\u7684\u603b\u8017\u65f6',
            value: e.loadEventEnd - r
        }];
        console && console.table && console.table(n)
    }
});
