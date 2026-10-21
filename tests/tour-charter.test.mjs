import test from 'node:test';
import assert from 'node:assert/strict';
import {render, paths, metadata} from '../dist/ssr/entry-server.js';

test('tour pages are discoverable in every existing website language', () => {
  for (const prefix of ['', '/zh', '/es', '/ja', '/ko']) {
    const path = `${prefix}/tour-charter/`;
    assert.ok(paths.includes(path), `${path} must be prerendered`);
    assert.doesNotMatch(metadata(path).title, /Page not found|机场接送|Airport Ride/);
    const html = render(path);
    assert.match(html, /\$530/);
    assert.match(html, /\$60/);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
    assert.ok(html.includes(`${prefix}/book/`));
    assert.match(html, /wa\.me\/16267042786/);
    assert.doesNotMatch(html, /<form|booking-pending/);
  }
});

test('Chinese tourism quote distinguishes regular parking, event parking and overtime', () => {
  const html = render('/zh/tour-charter/');
  assert.match(html, /10小时/);
  assert.match(html, /车内饮用水/);
  assert.match(html, /普通停车费/);
  assert.match(html, /小费和活动停车费不含/);
  assert.match(html, /超时每小时/);
  assert.match(html, /洛杉矶/);
  assert.match(html, /预订确认/);
  assert.doesNotMatch(html, /导游服务已含|门票已含|无限里程|每15分钟/);
});
