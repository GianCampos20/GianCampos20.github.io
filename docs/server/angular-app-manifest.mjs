
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
    'index.csr.html': {size: 14549, hash: 'a4a70d72f70a6359babdbf67a5eb3edbc259abae018ad3ea2b51655f8e3cbe57', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8036, hash: '4709aa65c0b0c5fc1183c2583622d708171718f2dd7640bef7cafcaf49686a98', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 47552, hash: '490861632ff5ba8e4c079468c6af6e9207ea9e1d3c778b9e650fe827d600ee9a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2DJ3J666.css': {size: 385296, hash: 'FHiG1IYi4s0', text: () => import('./assets-chunks/styles-2DJ3J666_css.mjs').then(m => m.default)}
  },
};
