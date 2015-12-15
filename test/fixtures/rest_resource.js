var nock = require('nock');

nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones')
  .reply(200, [{"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}], { date: 'Tue, 15 Dec 2015 00:10:18 GMT',
  'content-type': 'application/json',
  'content-length': '387',
  connection: 'close',
  'x-ratelimit-remaining': '899',
  etag: '"4ef222708f0b5d95d39da3c0c78b6a1ade4ade25"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test')
  .reply(200, {"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"ttl":3600,"tier":1,"type":"NS","id":"566f3f069f782d2e420a0546"}],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}, { date: 'Tue, 15 Dec 2015 00:10:18 GMT',
  'content-type': 'application/json',
  'content-length': '592',
  connection: 'close',
  'x-ratelimit-remaining': '898',
  etag: '"b8417696de93bb23c150c7ff4ec4bb4d81caf613"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test')
  .reply(200, {"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"ttl":3600,"tier":1,"type":"NS","id":"566f3f069f782d2e420a0546"}],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}, { date: 'Tue, 15 Dec 2015 00:10:18 GMT',
  'content-type': 'application/json',
  'content-length': '592',
  connection: 'close',
  'x-ratelimit-remaining': '897',
  etag: '"b8417696de93bb23c150c7ff4ec4bb4d81caf613"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/zones/testdomain.test', {"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":false,"secondaries":[]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"ttl":3600,"tier":1,"type":"NS","id":"566f3f069f782d2e420a0546"}],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"})
  .reply(200, {"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":false,"secondaries":[]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"ttl":3600,"tier":1,"type":"NS","id":"566f3f069f782d2e420a0546"}],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}, { date: 'Tue, 15 Dec 2015 00:10:19 GMT',
  'content-type': 'application/json',
  'content-length': '590',
  connection: 'close',
  'x-ratelimit-remaining': '299',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '300',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test')
  .reply(200, {"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":false,"secondaries":[]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"ttl":3600,"tier":1,"type":"NS","id":"566f3f069f782d2e420a0546"}],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}, { date: 'Tue, 15 Dec 2015 00:10:19 GMT',
  'content-type': 'application/json',
  'content-length': '590',
  connection: 'close',
  'x-ratelimit-remaining': '897',
  etag: '"e6104e7fd4ef38ebe54fae47a04e87484f84e22b"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test')
  .reply(200, {"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":false,"secondaries":[]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"ttl":3600,"tier":1,"type":"NS","id":"566f3f069f782d2e420a0546"}],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}, { date: 'Tue, 15 Dec 2015 00:10:19 GMT',
  'content-type': 'application/json',
  'content-length': '590',
  connection: 'close',
  'x-ratelimit-remaining': '897',
  etag: '"e6104e7fd4ef38ebe54fae47a04e87484f84e22b"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/zones/testdomain.test', {"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"ttl":3600,"tier":1,"type":"NS","id":"566f3f069f782d2e420a0546"}],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"})
  .reply(200, {"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"ttl":3600,"tier":1,"type":"NS","id":"566f3f069f782d2e420a0546"}],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}, { date: 'Tue, 15 Dec 2015 00:10:19 GMT',
  'content-type': 'application/json',
  'content-length': '592',
  connection: 'close',
  'x-ratelimit-remaining': '298',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '300',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/zones/newtestdomain.test', {"zone":"newtestdomain.test"})
  .reply(200, {"nx_ttl":3600,"retry":7200,"zone":"newtestdomain.test","network_pools":["p03"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"newtestdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"ttl":3600,"tier":1,"type":"NS","id":"566f5a6b2db156594e6628d9"}],"meta":{},"link":null,"ttl":3600,"id":"566f5a6b2db156594e6628d4","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}, { date: 'Tue, 15 Dec 2015 00:10:19 GMT',
  'content-type': 'application/json',
  'content-length': '598',
  connection: 'close',
  'x-ratelimit-remaining': '99',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '100',
  'x-ratelimit-period': '200',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones')
  .reply(200, [{"nx_ttl":3600,"retry":7200,"zone":"newtestdomain.test","network_pools":["p03"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"meta":{},"link":null,"ttl":3600,"id":"566f5a6b2db156594e6628d4","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"},{"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}], { date: 'Tue, 15 Dec 2015 00:10:19 GMT',
  'content-type': 'application/json',
  'content-length': '775',
  connection: 'close',
  'x-ratelimit-remaining': '896',
  etag: '"807e36ce2adaed4b4f6245a2a1b7b8f89bba6c22"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/zones/newtestdomain.test')
  .reply(200, {}, { date: 'Tue, 15 Dec 2015 00:10:19 GMT',
  'content-type': 'application/json',
  'content-length': '3',
  connection: 'close',
  'x-ratelimit-remaining': '99',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '100',
  'x-ratelimit-period': '200',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones')
  .reply(200, [{"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}], { date: 'Tue, 15 Dec 2015 00:10:19 GMT',
  'content-type': 'application/json',
  'content-length': '387',
  connection: 'close',
  'x-ratelimit-remaining': '896',
  etag: '"4ef222708f0b5d95d39da3c0c78b6a1ade4ade25"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });
