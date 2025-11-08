
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/demo_app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/demo_app/login",
    "route": "/demo_app"
  },
  {
    "renderMode": 2,
    "route": "/demo_app/login"
  },
  {
    "renderMode": 2,
    "route": "/demo_app/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 439, hash: 'a565826d47110b2fc506e268ea4ceb9c19e549eafba073b0fac93f4e89f5f7e2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 952, hash: '92b5d85684366db9f045c4402fb606558115d4f91659a5d444859f9d5137cb0c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 4174, hash: '14429134feb450330b6f80303df4017e9e48dfca95f454c41bcd84d5548d1531', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 1639, hash: '6b2f70df661021be0291c451f2c80bc4ff7b0d8a5b3aabedf8b40c934b9caee8', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
