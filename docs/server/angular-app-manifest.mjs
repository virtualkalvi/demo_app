
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-angular-new2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/my-angular-new2/login",
    "route": "/my-angular-new2"
  },
  {
    "renderMode": 2,
    "route": "/my-angular-new2/login"
  },
  {
    "renderMode": 2,
    "route": "/my-angular-new2/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 446, hash: 'fcfb023dcde69715b8c9ec22f8f1b884d390d9ce7ad094a09393fbb72de5e3cf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 959, hash: '38e131e169823f0763fb0753081d0ab2b632c50564f7bcd90a088e5b680c6eef', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 1646, hash: '3e60b29da71ea410d69d455b1b447b676e51d3073be55a66f681031ba2a0e0dd', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 4181, hash: '4cd018d1b7bd611230bf2011cc24d9893e848e4ebbb5226eb4901668b8bade9b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
