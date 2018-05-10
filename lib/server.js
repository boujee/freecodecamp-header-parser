'use strict';

import app from '..';

const port = process.env.PORT || 8080;
const trustProxy = !!process.env.TRUST_PROXY;

app()
  .set('trust proxy', trustProxy)
  .listen(port, () => console.log(`listening on ${port}, trust proxy: ${trustProxy}`));