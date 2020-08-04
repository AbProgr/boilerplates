import config from 'config';

import app from './app';
import { IServerConfig } from './model/interface';
import { logger } from './utils';

const { host, port }: IServerConfig = config.get('server');

// start express server
app.listen(port, host, (err) => {
  if (err) {
    logger.error(`An Error occurred while starting the server: ${err}`);
  } else {
    logger.info(`Server started successfully at: http://${host}:${port}`);
  }
});
