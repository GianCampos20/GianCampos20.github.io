
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 14549, hash: '22bf49145cf9ea14d7271e7320a83ebe2bb500b581921b67b819ac3cd23a00dd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8036, hash: '8242db4cf1b473541dde07410ec973e759959d0cb102815a43712e71dfb890fc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 47522, hash: '8408f5339830b15677f6baad9eea08a5c2e9609b33c2d72afac91e7ad1c8773b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2DJ3J666.css': {size: 385296, hash: 'FHiG1IYi4s0', text: () => import('./assets-chunks/styles-2DJ3J666_css.mjs').then(m => m.default)}
  },
};
