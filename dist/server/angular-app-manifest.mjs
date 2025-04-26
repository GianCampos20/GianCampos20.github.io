
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
    'index.csr.html': {size: 14549, hash: '5aeecaea7cf4ed817f996b3cbf22e4b4dc5e5a86ddf5c7d8a8ebdb7eb24442f5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8036, hash: 'ab6d4641c9401cdc47c491af2e3e445f4ebffdea1674ce2239ce993fa1b90a61', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 47528, hash: '5d7f5fafc11844d62ef3ecfb095ebd7f98d4a59c4d72e6d40c7f37b8f92ed665', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2DJ3J666.css': {size: 385296, hash: 'FHiG1IYi4s0', text: () => import('./assets-chunks/styles-2DJ3J666_css.mjs').then(m => m.default)}
  },
};
