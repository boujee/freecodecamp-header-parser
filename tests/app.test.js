'use strict';

import app from 'freecodecamp-header-parser';
import request from 'supertest';

describe('GET /api/whoami', () => {
  test('receive json', () => {
    const ipaddress = '1.2.3.4';
    const language = 'en-US';
    const software = 'Sample';
    return request(app().enable('trust proxy'))
      .get('/api/whoami')
      .set('X-Forwarded-For', ipaddress)
      .set('Accept-Language', 'en-US,en;q=0.5')
      .set('User-Agent', 'Mozilla/3 (Sample) sss')
      .expect(200, {ipaddress, language, software})
    ;
  });
});