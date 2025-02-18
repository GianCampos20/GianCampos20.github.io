
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 14533, hash: '9e4d6768e024e697262bb2ff6897e54428e3b6a271e4324ae01016e1bd1b85dd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8020, hash: 'e10b9ff9431d350f4ac32985376303b4524dbb0a51b59a39e351a0e2f08d9bc1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 42250, hash: 'd118ea2837077805f394fee49af1918f017b5ad391514dca80b52f3768557a0a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2DJ3J666.css': {size: 385296, hash: 'FHiG1IYi4s0', text: () => import('./assets-chunks/styles-2DJ3J666_css.mjs').then(m => m.default)}
  },
};
