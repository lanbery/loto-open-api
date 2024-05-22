export const LotoModuleRoutes: Record<string, LotoModuleRouteType> = {
  auth: {
    name: 'Authentication API',
    modulePath: 'auth',
    desc: '登录鉴权模块',
  },
  comm: {
    name: 'Common API',
    modulePath: 'comm',
    desc: '公共模块',
  },
  fanwen: {
    name: '凡闻 API Proxy',
    modulePath: 'fw',
    desc: '凡闻API 转发',
  },
  mock: {
    name: 'Mock API',
    modulePath: 't',
    desc: '测试模块,只有在STAGE= dev 模式下可以调用',
  },
};
