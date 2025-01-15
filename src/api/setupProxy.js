const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',  // '/api'로 시작하는 경로를 프록시 처리
        createProxyMiddleware({
            target: 'https://openapi.naver.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',  // '/api'는 실제 요청 경로에서 제거됨
            },
            followRedirects: false,  // 리디렉션을 따라가지 않도록 설정
            secure: false,  // HTTPS 보안 설정
        })
    );
};
