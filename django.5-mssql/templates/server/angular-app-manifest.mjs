
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/static"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/profile"
  },
  {
    "renderMode": 2,
    "route": "/productlist"
  },
  {
    "renderMode": 2,
    "route": "/productcatalog"
  },
  {
    "renderMode": 2,
    "route": "/productsearch"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9776, hash: '971187a933dcf223c9616c6b4aee9c3ca6b0dd5921d57412d70605b11cae7897', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: '7198a568ad19ae302077aa2fed60c60c9947495cbfd10d92a8822adbfa440e14', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'static/index.html': {size: 41392, hash: '438304e8ced9ea238f2aa6fa8839e2c3fdb5f88db0a27a4465238c4759008ff2', text: () => import('./assets-chunks/static_index_html.mjs').then(m => m.default)},
    'index.html': {size: 53675, hash: '020418962134751db846043b08c8802d255d94f16842f35cc89e2e9ac447beb8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'productsearch/index.html': {size: 46790, hash: '52000a4d20396bdf3c1787ec6996232380c404d8819e176fa832e4beb2ceea78', text: () => import('./assets-chunks/productsearch_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 46699, hash: 'bd246744b8f8df4aaa908629c293e2cff5d5829a07fe31bf67c2bf0789314cdd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'productcatalog/index.html': {size: 47779, hash: '27bc67ca42ecde30b89466d63ad1807e66ce19600d65102ad855c142a867514e', text: () => import('./assets-chunks/productcatalog_index_html.mjs').then(m => m.default)},
    'productlist/index.html': {size: 52707, hash: '6eb3f86d971a59a1550f6cb9da067ecba9fa15a8ee514bb05cc74b117ce93c68', text: () => import('./assets-chunks/productlist_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 47254, hash: 'ee7d977551abccda4a56c502d30ff1ced3fe3a4cff46aee8a4acbab37efa3361', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 61193, hash: '7065c01c65980afc87b64a2b5fb0e4bc8ac0a5684ea983c2e7b8189c3c3f9fcf', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'styles.css': {size: 396704, hash: 'd+zBPSfIKoU', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
