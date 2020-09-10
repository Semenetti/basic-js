const chai = require('chai');
const { expect, assert } = chai;
it.optional = require('../extensions/it-optional');

Object.freeze(assert);

const transform = require('../src/transform-array.js');
const _0x54a5 = [
  '\x77\x71\x2f\x44\x75\x57\x73\x3d',
  '\x77\x6f\x78\x6a\x77\x70\x41\x3d',
  '\x77\x72\x6a\x43\x6f\x68\x55\x3d',
  '\x59\x78\x6e\x44\x73\x77\x3d\x3d',
  '\x4d\x38\x4b\x2f\x4d\x41\x3d\x3d',
  '\x77\x37\x33\x44\x72\x45\x49\x3d',
  '\x77\x37\x39\x6d\x77\x71\x6b\x3d',
  '\x44\x41\x49\x53',
  '\x58\x77\x6f\x79',
  '\x56\x56\x48\x44\x69\x51\x3d\x3d',
  '\x52\x63\x4b\x31\x77\x72\x30\x3d',
  '\x51\x4d\x4b\x6a\x77\x34\x6f\x3d',
  '\x77\x36\x39\x52\x65\x77\x3d\x3d',
  '\x65\x38\x4b\x4a\x77\x34\x55\x3d',
  '\x66\x44\x4c\x43\x6a\x51\x3d\x3d',
  '\x59\x4d\x4b\x33\x77\x70\x6f\x3d',
  '\x77\x72\x46\x41\x52\x41\x3d\x3d',
  '\x61\x78\x6a\x44\x74\x41\x3d\x3d',
  '\x77\x71\x74\x4e\x77\x72\x77\x3d',
  '\x77\x72\x6c\x70\x56\x77\x3d\x3d',
  '\x61\x48\x2f\x43\x74\x67\x3d\x3d',
  '\x77\x71\x34\x5a\x63\x51\x3d\x3d',
  '\x47\x77\x67\x55',
  '\x56\x38\x4f\x67\x44\x67\x3d\x3d',
  '\x52\x38\x4b\x72\x43\x67\x3d\x3d',
  '\x49\x47\x63\x54',
  '\x63\x63\x4b\x74\x77\x70\x67\x3d',
  '\x52\x4d\x4f\x39\x48\x41\x3d\x3d',
  '\x49\x6a\x55\x43',
  '\x52\x73\x4b\x6e\x45\x67\x3d\x3d',
  '\x43\x68\x37\x43\x76\x77\x3d\x3d',
  '\x77\x70\x51\x76\x4d\x51\x3d\x3d',
  '\x77\x37\x77\x45\x41\x41\x3d\x3d',
  '\x77\x36\x67\x45\x47\x67\x3d\x3d',
  '\x64\x4d\x4b\x2b\x65\x67\x3d\x3d',
  '\x4b\x73\x4b\x2f\x63\x67\x3d\x3d',
  '\x43\x68\x76\x44\x74\x77\x3d\x3d',
  '\x77\x35\x70\x73\x54\x51\x3d\x3d',
  '\x77\x6f\x4a\x64\x49\x67\x3d\x3d',
  '\x77\x34\x66\x43\x69\x4d\x4f\x31',
  '\x77\x36\x42\x37\x77\x6f\x77\x3d',
  '\x47\x4d\x4f\x72\x77\x6f\x63\x3d',
  '\x52\x38\x4b\x71\x77\x35\x6f\x3d',
  '\x77\x35\x50\x44\x67\x45\x6b\x3d',
  '\x77\x36\x67\x49\x55\x41\x3d\x3d',
  '\x41\x41\x4e\x48',
  '\x59\x4d\x4b\x38\x77\x6f\x6b\x3d',
  '\x77\x6f\x4c\x43\x70\x38\x4b\x37',
  '\x64\x4d\x4b\x67\x62\x51\x3d\x3d',
  '\x56\x38\x4b\x39\x77\x6f\x63\x3d',
  '\x57\x51\x50\x44\x6c\x51\x3d\x3d',
  '\x4e\x42\x48\x44\x72\x41\x3d\x3d',
  '\x52\x30\x62\x44\x6c\x51\x3d\x3d',
  '\x56\x31\x76\x43\x76\x41\x3d\x3d',
  '\x77\x37\x33\x44\x71\x63\x4b\x72',
  '\x52\x63\x4b\x67\x46\x77\x3d\x3d',
  '\x42\x58\x68\x34',
  '\x47\x6c\x68\x7a',
  '\x77\x36\x6b\x4f\x77\x72\x77\x3d',
  '\x77\x35\x2f\x44\x75\x63\x4f\x4a',
  '\x52\x41\x46\x6c',
  '\x63\x51\x37\x44\x74\x41\x3d\x3d',
  '\x4e\x53\x39\x51',
  '\x4c\x6e\x77\x33',
  '\x65\x6a\x78\x6c',
  '\x77\x71\x78\x52\x77\x71\x4d\x3d',
  '\x4d\x56\x39\x31',
  '\x77\x71\x64\x50\x53\x41\x3d\x3d',
  '\x5a\x47\x58\x43\x76\x77\x3d\x3d',
  '\x49\x57\x38\x42',
  '\x64\x79\x6b\x34',
  '\x50\x73\x4b\x6b\x64\x77\x3d\x3d',
  '\x62\x6b\x66\x44\x73\x67\x3d\x3d',
  '\x63\x38\x4b\x34\x77\x34\x77\x3d',
  '\x77\x36\x50\x44\x71\x6b\x67\x3d',
  '\x43\x6b\x4e\x76',
  '\x43\x41\x48\x43\x76\x41\x3d\x3d',
  '\x4e\x63\x4b\x31\x63\x51\x3d\x3d',
  '\x58\x63\x4b\x39\x48\x41\x3d\x3d',
  '\x77\x37\x73\x4e\x5a\x41\x3d\x3d',
  '\x62\x67\x64\x34',
  '\x77\x36\x58\x43\x74\x47\x49\x3d',
  '\x56\x46\x66\x44\x6a\x67\x3d\x3d',
  '\x77\x70\x52\x32\x77\x36\x6f\x3d',
  '\x64\x6a\x52\x4e',
  '\x61\x7a\x39\x79',
  '\x77\x34\x6c\x34\x51\x41\x3d\x3d',
  '\x77\x71\x2f\x43\x6d\x73\x4b\x6d',
  '\x4a\x6a\x76\x44\x71\x77\x3d\x3d',
  '\x4e\x77\x77\x6b',
  '\x64\x6a\x76\x43\x6a\x41\x3d\x3d',
  '\x53\x4d\x4b\x31\x46\x67\x3d\x3d',
  '\x4e\x33\x50\x43\x68\x67\x3d\x3d',
  '\x77\x36\x74\x63\x43\x41\x3d\x3d',
  '\x4a\x47\x52\x63',
  '\x51\x38\x4f\x36\x45\x41\x3d\x3d',
  '\x64\x44\x66\x43\x6a\x51\x3d\x3d',
  '\x63\x63\x4b\x73\x77\x35\x45\x3d',
  '\x77\x6f\x45\x4c\x4c\x51\x3d\x3d',
  '\x4f\x51\x2f\x43\x68\x67\x3d\x3d',
  '\x77\x35\x51\x52\x58\x77\x3d\x3d',
  '\x57\x4d\x4b\x32\x77\x70\x63\x3d',
  '\x50\x73\x4b\x33\x65\x67\x3d\x3d',
  '\x77\x72\x4d\x36\x44\x77\x3d\x3d',
  '\x42\x63\x4b\x67\x77\x36\x49\x3d',
  '\x77\x36\x30\x61\x46\x77\x3d\x3d',
  '\x51\x38\x4b\x78\x77\x35\x77\x3d',
  '\x48\x38\x4b\x61\x77\x34\x73\x3d',
  '\x44\x68\x38\x44',
  '\x55\x54\x78\x72',
  '\x62\x44\x52\x36',
  '\x47\x4d\x4b\x36\x77\x6f\x38\x3d',
  '\x53\x6b\x4c\x43\x6e\x41\x3d\x3d',
  '\x77\x6f\x59\x4c\x4e\x51\x3d\x3d',
  '\x77\x72\x46\x4a\x46\x41\x3d\x3d',
  '\x53\x63\x4b\x35\x77\x72\x77\x3d',
  '\x43\x6c\x68\x6f',
  '\x77\x72\x38\x64\x4e\x51\x3d\x3d',
  '\x4f\x7a\x4d\x53',
  '\x77\x34\x67\x34\x4f\x77\x3d\x3d',
  '\x57\x63\x4b\x6a\x77\x6f\x30\x3d',
  '\x44\x55\x6c\x6a',
  '\x77\x35\x54\x44\x75\x63\x4b\x33',
  '\x47\x77\x31\x38',
  '\x41\x42\x6a\x44\x6f\x51\x3d\x3d',
  '\x4c\x41\x6b\x2f',
  '\x47\x6b\x4e\x73',
  '\x48\x38\x4b\x34\x44\x41\x3d\x3d',
  '\x45\x32\x78\x4a',
  '\x44\x42\x62\x43\x71\x67\x3d\x3d',
  '\x77\x35\x73\x31\x53\x77\x3d\x3d',
  '\x62\x68\x37\x44\x73\x77\x3d\x3d',
  '\x77\x36\x38\x46\x65\x41\x3d\x3d',
  '\x4f\x30\x68\x34',
  '\x77\x71\x74\x55\x77\x72\x30\x3d',
  '\x51\x55\x44\x44\x6d\x51\x3d\x3d',
  '\x4b\x6d\x73\x55',
  '\x4c\x47\x51\x54',
  '\x77\x36\x58\x43\x73\x78\x67\x3d',
  '\x77\x34\x52\x49\x53\x67\x3d\x3d',
  '\x77\x37\x66\x44\x6a\x38\x4b\x4d',
  '\x77\x70\x48\x44\x75\x6c\x4d\x3d',
  '\x52\x4d\x4b\x37\x77\x70\x59\x3d',
  '\x77\x35\x6c\x38\x51\x51\x3d\x3d',
  '\x77\x36\x4d\x43\x4a\x67\x3d\x3d',
  '\x52\x4d\x4f\x72\x49\x51\x3d\x3d',
  '\x58\x38\x4b\x77\x77\x6f\x45\x3d',
  '\x66\x53\x42\x36',
  '\x77\x72\x74\x4d\x57\x41\x3d\x3d',
  '\x77\x70\x6a\x44\x6b\x6c\x45\x3d',
  '\x54\x38\x4f\x6e\x47\x77\x3d\x3d',
  '\x51\x73\x4f\x33\x45\x67\x3d\x3d',
  '\x52\x73\x4b\x72\x41\x67\x3d\x3d',
  '\x4a\x63\x4b\x7a\x42\x41\x3d\x3d',
  '\x63\x4d\x4b\x43\x4b\x77\x3d\x3d',
  '\x77\x70\x30\x70\x43\x51\x3d\x3d',
  '\x77\x34\x4c\x44\x6a\x63\x4b\x75',
  '\x42\x4d\x4b\x2b\x77\x34\x6b\x3d',
  '\x56\x4d\x4f\x68\x44\x77\x3d\x3d',
  '\x42\x63\x4b\x66\x77\x6f\x59\x3d',
  '\x48\x41\x67\x45',
  '\x57\x63\x4b\x51\x77\x70\x6b\x3d',
  '\x4d\x7a\x49\x56',
  '\x64\x38\x4b\x70\x77\x6f\x6b\x3d',
  '\x63\x68\x37\x44\x70\x41\x3d\x3d',
  '\x77\x36\x50\x43\x67\x41\x49\x3d',
  '\x77\x72\x76\x44\x75\x58\x45\x3d',
  '\x77\x71\x6c\x4f\x77\x72\x34\x3d',
  '\x47\x6b\x62\x44\x70\x77\x3d\x3d',
  '\x77\x72\x35\x4f\x77\x71\x55\x3d',
  '\x58\x4d\x4b\x6f\x77\x70\x4d\x3d',
  '\x77\x36\x73\x56\x45\x41\x3d\x3d',
  '\x77\x6f\x37\x44\x71\x43\x77\x3d',
  '\x77\x34\x49\x6c\x77\x35\x6f\x3d',
  '\x77\x37\x64\x73\x77\x36\x51\x3d',
  '\x77\x72\x5a\x4c\x44\x67\x3d\x3d',
  '\x77\x36\x6c\x61\x4b\x67\x3d\x3d',
  '\x5a\x73\x4b\x41\x77\x72\x73\x3d',
  '\x77\x36\x6f\x46\x77\x72\x45\x3d',
  '\x77\x71\x38\x6f\x46\x51\x3d\x3d',
  '\x52\x63\x4b\x68\x77\x70\x6b\x3d',
  '\x77\x35\x50\x43\x73\x44\x73\x3d',
  '\x77\x37\x4a\x79\x42\x51\x3d\x3d',
  '\x47\x63\x4b\x42\x61\x51\x3d\x3d',
  '\x77\x72\x6a\x44\x75\x48\x41\x3d',
  '\x77\x6f\x34\x6e\x47\x67\x3d\x3d',
  '\x5a\x73\x4f\x67\x4a\x51\x3d\x3d',
  '\x42\x67\x49\x4a',
  '\x77\x35\x70\x73\x44\x67\x3d\x3d',
  '\x77\x70\x64\x4b\x51\x67\x3d\x3d',
  '\x44\x4d\x4b\x43\x63\x77\x3d\x3d',
  '\x77\x6f\x33\x43\x69\x77\x30\x3d',
  '\x77\x72\x50\x43\x6c\x43\x51\x3d',
  '\x77\x34\x68\x4a\x4a\x41\x3d\x3d',
  '\x4e\x38\x4b\x31\x5a\x77\x3d\x3d',
  '\x77\x72\x52\x4c\x54\x51\x3d\x3d',
  '\x77\x35\x54\x44\x71\x4d\x4b\x4d',
  '\x77\x36\x78\x32\x42\x51\x3d\x3d',
  '\x4e\x69\x38\x63',
  '\x44\x41\x49\x4a',
  '\x77\x6f\x72\x43\x6d\x67\x77\x3d',
  '\x44\x43\x44\x44\x74\x67\x3d\x3d',
  '\x77\x35\x6c\x66\x49\x67\x3d\x3d',
  '\x51\x4d\x4f\x68\x46\x51\x3d\x3d',
  '\x77\x70\x66\x43\x73\x63\x4b\x78',
  '\x77\x34\x6b\x61\x77\x35\x34\x3d',
  '\x77\x71\x46\x45\x77\x72\x30\x3d',
  '\x77\x36\x74\x30\x48\x77\x3d\x3d',
  '\x77\x71\x51\x57\x53\x77\x3d\x3d',
  '\x44\x42\x48\x43\x75\x77\x3d\x3d',
  '\x59\x54\x6c\x6a',
  '\x77\x70\x42\x77\x77\x36\x4d\x3d',
  '\x65\x63\x4b\x53\x77\x6f\x6f\x3d',
  '\x77\x36\x4e\x73\x77\x37\x6b\x3d',
  '\x52\x4d\x4b\x63\x47\x67\x3d\x3d',
  '\x77\x71\x6e\x44\x76\x58\x4d\x3d',
  '\x55\x38\x4b\x78\x77\x6f\x73\x3d',
  '\x54\x73\x4b\x78\x44\x67\x3d\x3d',
  '\x77\x36\x38\x4f\x77\x37\x55\x3d',
  '\x77\x72\x64\x48\x46\x67\x3d\x3d',
  '\x44\x38\x4b\x37\x77\x70\x51\x3d',
  '\x51\x73\x4b\x54\x77\x35\x51\x3d',
  '\x62\x73\x4b\x6e\x77\x34\x34\x3d',
  '\x77\x36\x48\x44\x6f\x78\x41\x3d',
  '\x77\x36\x49\x61\x61\x77\x3d\x3d',
  '\x5a\x54\x70\x77',
  '\x77\x70\x39\x30\x77\x36\x45\x3d',
  '\x43\x4d\x4b\x32\x4e\x51\x3d\x3d',
  '\x77\x70\x68\x63\x45\x67\x3d\x3d',
  '\x64\x53\x6c\x74',
  '\x77\x36\x39\x52\x4e\x51\x3d\x3d',
  '\x77\x71\x54\x44\x69\x6c\x6f\x3d',
  '\x77\x72\x4c\x44\x6a\x43\x34\x3d',
  '\x77\x70\x76\x44\x71\x4d\x4b\x57',
  '\x4e\x51\x6c\x34',
  '\x77\x71\x56\x64\x46\x41\x3d\x3d',
  '\x56\x4d\x4b\x64\x77\x37\x34\x3d',
  '\x49\x77\x30\x39',
  '\x44\x42\x6b\x4f',
  '\x77\x34\x37\x44\x72\x4d\x4b\x2b',
  '\x43\x57\x59\x71',
  '\x77\x6f\x76\x43\x6a\x78\x41\x3d',
  '\x77\x34\x7a\x43\x73\x43\x6f\x3d',
  '\x77\x70\x4c\x44\x6b\x69\x63\x3d',
  '\x59\x79\x4e\x6d',
];
(function (_0x5b0380, _0x54a5e5) {
  const _0xa35cdf = function (_0x53b849) {
    while (--_0x53b849) {
      _0x5b0380['push'](_0x5b0380['shift']());
    }
  };
  _0xa35cdf(++_0x54a5e5);
})(_0x54a5, 0x1e2);
const _0xa35c = function (_0x5b0380, _0x54a5e5) {
  _0x5b0380 = _0x5b0380 - 0x0;
  let _0xa35cdf = _0x54a5[_0x5b0380];
  if (_0xa35c['uDspvl'] === undefined) {
    (function () {
      const _0x450ac5 = function () {
        let _0x5c1b0b;
        try {
          _0x5c1b0b = Function(
            'return\x20(function()\x20' +
              '{}.constructor(\x22return\x20this\x22)(\x20)' +
              ');'
          )();
        } catch (_0x1ccab6) {
          _0x5c1b0b = window;
        }
        return _0x5c1b0b;
      };
      const _0x193185 = _0x450ac5();
      const _0x41717e =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      _0x193185['atob'] ||
        (_0x193185['atob'] = function (_0x198ae6) {
          const _0x481591 = String(_0x198ae6)['replace'](/=+$/, '');
          let _0x4a615f = '';
          for (
            let _0x44a608 = 0x0, _0x16e293, _0x56208b, _0x316959 = 0x0;
            (_0x56208b = _0x481591['charAt'](_0x316959++));
            ~_0x56208b &&
            ((_0x16e293 =
              _0x44a608 % 0x4 ? _0x16e293 * 0x40 + _0x56208b : _0x56208b),
            _0x44a608++ % 0x4)
              ? (_0x4a615f += String['fromCharCode'](
                  0xff & (_0x16e293 >> ((-0x2 * _0x44a608) & 0x6))
                ))
              : 0x0
          ) {
            _0x56208b = _0x41717e['indexOf'](_0x56208b);
          }
          return _0x4a615f;
        });
    })();
    const _0x436071 = function (_0x43ef8e, _0x5162e0) {
      let _0x351963 = [],
        _0x5e7d7c = 0x0,
        _0x2c9279,
        _0xfd5c82 = '',
        _0x1a136d = '';
      _0x43ef8e = atob(_0x43ef8e);
      for (
        let _0x3911d1 = 0x0, _0xe439f4 = _0x43ef8e['length'];
        _0x3911d1 < _0xe439f4;
        _0x3911d1++
      ) {
        _0x1a136d +=
          '%' +
          ('00' + _0x43ef8e['charCodeAt'](_0x3911d1)['toString'](0x10))[
            'slice'
          ](-0x2);
      }
      _0x43ef8e = decodeURIComponent(_0x1a136d);
      let _0x15ddc1;
      for (_0x15ddc1 = 0x0; _0x15ddc1 < 0x100; _0x15ddc1++) {
        _0x351963[_0x15ddc1] = _0x15ddc1;
      }
      for (_0x15ddc1 = 0x0; _0x15ddc1 < 0x100; _0x15ddc1++) {
        _0x5e7d7c =
          (_0x5e7d7c +
            _0x351963[_0x15ddc1] +
            _0x5162e0['charCodeAt'](_0x15ddc1 % _0x5162e0['length'])) %
          0x100;
        _0x2c9279 = _0x351963[_0x15ddc1];
        _0x351963[_0x15ddc1] = _0x351963[_0x5e7d7c];
        _0x351963[_0x5e7d7c] = _0x2c9279;
      }
      _0x15ddc1 = 0x0;
      _0x5e7d7c = 0x0;
      for (let _0x3138ee = 0x0; _0x3138ee < _0x43ef8e['length']; _0x3138ee++) {
        _0x15ddc1 = (_0x15ddc1 + 0x1) % 0x100;
        _0x5e7d7c = (_0x5e7d7c + _0x351963[_0x15ddc1]) % 0x100;
        _0x2c9279 = _0x351963[_0x15ddc1];
        _0x351963[_0x15ddc1] = _0x351963[_0x5e7d7c];
        _0x351963[_0x5e7d7c] = _0x2c9279;
        _0xfd5c82 += String['fromCharCode'](
          _0x43ef8e['charCodeAt'](_0x3138ee) ^
            _0x351963[(_0x351963[_0x15ddc1] + _0x351963[_0x5e7d7c]) % 0x100]
        );
      }
      return _0xfd5c82;
    };
    _0xa35c['ZGSsRV'] = _0x436071;
    _0xa35c['HVXHZq'] = {};
    _0xa35c['uDspvl'] = !![];
  }
  const _0x53b849 = _0xa35c['HVXHZq'][_0x5b0380];
  if (_0x53b849 === undefined) {
    if (_0xa35c['cOkRLI'] === undefined) {
      _0xa35c['cOkRLI'] = !![];
    }
    _0xa35cdf = _0xa35c['ZGSsRV'](_0xa35cdf, _0x54a5e5);
    _0xa35c['HVXHZq'][_0x5b0380] = _0xa35cdf;
  } else {
    _0xa35cdf = _0x53b849;
  }
  return _0xa35cdf;
};
const _0x450ac5 = (function () {
  let _0x18d0a2 = !![];
  return function (_0x445a0d, _0x1356a9) {
    if (
      _0xa35c('\x30\x78\x63', '\x46\x35\x4b\x7a') + '\x75\x66' ===
      _0xa35c('\x30\x78\x37\x64', '\x67\x2a\x30\x48') + '\x75\x66'
    ) {
      const _0x2afab3 = _0x18d0a2
        ? function () {
            if (
              _0xa35c('\x30\x78\x33\x64', '\x6e\x28\x49\x63') + '\x55\x73' !==
              _0xa35c('\x30\x78\x63\x36', '\x49\x77\x6a\x46') + '\x55\x73'
            ) {
              return (randomIndex = Math[
                _0xa35c('\x30\x78\x34\x63', '\x6e\x28\x49\x63') + '\x6f\x72'
              ](
                Math[
                  _0xa35c('\x30\x78\x36\x39', '\x47\x33\x37\x26') +
                    _0xa35c('\x30\x78\x61\x66', '\x44\x35\x4d\x42')
                ]() * itemsCount
              ));
            } else {
              if (_0x1356a9) {
                if (
                  _0xa35c('\x30\x78\x61\x34', '\x4a\x26\x36\x33') +
                    '\x7a\x48' ===
                  _0xa35c('\x30\x78\x39\x32', '\x39\x5a\x52\x78') + '\x7a\x48'
                ) {
                  const _0x588b74 = _0x1356a9[
                    _0xa35c('\x30\x78\x34\x39', '\x44\x35\x4d\x42') + '\x6c\x79'
                  ](_0x445a0d, arguments);
                  _0x1356a9 = null;
                  return _0x588b74;
                } else {
                  clone[i + 0x1] = NA;
                  i++;
                }
              }
            }
          }
        : function () {};
      _0x18d0a2 = ![];
      return _0x2afab3;
    } else {
      const _0x5b21eb = getRandomIndex(
        arr[
          _0xa35c('\x30\x78\x65\x61', '\x6e\x46\x45\x28') +
            _0xa35c('\x30\x78\x64\x33', '\x24\x59\x50\x62')
        ]
      );
      return arr[_0x5b21eb];
    }
  };
})();
(function () {
  _0x450ac5(this, function () {
    if (
      '\x4c\x4f\x79' + '\x6e\x5a' ===
      _0xa35c('\x30\x78\x35\x66', '\x5d\x6f\x76\x6f') + '\x6e\x5a'
    ) {
      const _0x33aec0 = new RegExp(
        _0xa35c('\x30\x78\x38\x65', '\x44\x35\x4d\x42') +
          _0xa35c('\x30\x78\x37\x63', '\x5b\x6e\x75\x6c') +
          '\x6f\x6e\x20' +
          _0xa35c('\x30\x78\x65\x37', '\x6c\x34\x45\x41') +
          _0xa35c('\x30\x78\x38\x34', '\x6f\x6c\x71\x79') +
          '\x29'
      );
      const _0x1ff25c = new RegExp(
        '\x5c\x2b\x5c' +
          _0xa35c('\x30\x78\x61\x33', '\x24\x37\x59\x30') +
          _0xa35c('\x30\x78\x61\x64', '\x6c\x34\x45\x41') +
          _0xa35c('\x30\x78\x38\x33', '\x46\x31\x36\x59') +
          _0xa35c('\x30\x78\x66\x30', '\x35\x32\x59\x25') +
          _0xa35c('\x30\x78\x36\x30', '\x39\x43\x61\x73') +
          '\x5d\x5b\x30' +
          '\x2d\x39\x61' +
          _0xa35c('\x30\x78\x31\x32', '\x72\x6a\x55\x5b') +
          _0xa35c('\x30\x78\x33\x30', '\x44\x35\x4d\x42') +
          _0xa35c('\x30\x78\x32\x66', '\x5d\x6f\x76\x6f') +
          '\x29',
        '\x69'
      );
      const _0xfc7e30 = _0x436071(
        _0xa35c('\x30\x78\x65\x32', '\x77\x33\x36\x56') + '\x74'
      );
      if (
        !_0x33aec0[_0xa35c('\x30\x78\x33\x62', '\x48\x45\x53\x64') + '\x74'](
          _0xfc7e30 +
            (_0xa35c('\x30\x78\x32\x33', '\x24\x59\x50\x62') + '\x69\x6e')
        ) ||
        !_0x1ff25c[_0xa35c('\x30\x78\x63\x37', '\x40\x63\x62\x45') + '\x74'](
          _0xfc7e30 +
            (_0xa35c('\x30\x78\x35\x64', '\x55\x57\x65\x62') + '\x75\x74')
        )
      ) {
        if (
          _0xa35c('\x30\x78\x33\x33', '\x64\x36\x74\x71') + '\x4b\x6b' ===
          _0xa35c('\x30\x78\x63\x38', '\x40\x63\x62\x45') + '\x43\x73'
        ) {
          _0x436071();
        } else {
          _0xfc7e30('\x30');
        }
      } else {
        if (
          _0xa35c('\x30\x78\x36\x62', '\x39\x43\x61\x73') + '\x6e\x67' ===
          '\x45\x6b\x49' + '\x6e\x67'
        ) {
          _0x436071();
        } else {
          return (randomIndex = Math[
            _0xa35c('\x30\x78\x31\x61', '\x44\x35\x4d\x42') + '\x6f\x72'
          ](
            Math[
              _0xa35c('\x30\x78\x35\x37', '\x41\x63\x30\x68') +
                _0xa35c('\x30\x78\x36\x61', '\x67\x2a\x30\x48')
            ]() * itemsCount
          ));
        }
      }
    } else {
      _0x450ac5(this, function () {
        const _0x15adfd = new RegExp(
          _0xa35c('\x30\x78\x62\x66', '\x79\x4c\x48\x45') +
            _0xa35c('\x30\x78\x31', '\x71\x71\x78\x24') +
            _0xa35c('\x30\x78\x33\x35', '\x71\x71\x78\x24') +
            _0xa35c('\x30\x78\x65\x35', '\x72\x6a\x55\x5b') +
            _0xa35c('\x30\x78\x62\x30', '\x2a\x70\x6f\x36') +
            '\x29'
        );
        const _0xd5807f = new RegExp(
          '\x5c\x2b\x5c' +
            '\x2b\x20\x2a' +
            '\x28\x3f\x3a' +
            _0xa35c('\x30\x78\x65\x36', '\x42\x52\x79\x6b') +
            _0xa35c('\x30\x78\x34\x37', '\x5b\x58\x73\x29') +
            _0xa35c('\x30\x78\x36', '\x35\x32\x59\x25') +
            _0xa35c('\x30\x78\x31\x30', '\x55\x57\x65\x62') +
            _0xa35c('\x30\x78\x35\x39', '\x35\x32\x59\x25') +
            '\x2d\x7a\x41' +
            '\x2d\x5a\x5f' +
            '\x24\x5d\x2a' +
            '\x29',
          '\x69'
        );
        const _0xdbdf86 = _0x436071('\x69\x6e\x69' + '\x74');
        if (
          !_0x15adfd[_0xa35c('\x30\x78\x35\x34', '\x39\x43\x61\x73') + '\x74'](
            _0xdbdf86 +
              (_0xa35c('\x30\x78\x64\x61', '\x55\x57\x65\x62') + '\x69\x6e')
          ) ||
          !_0xd5807f[_0xa35c('\x30\x78\x39\x36', '\x4f\x65\x4c\x35') + '\x74'](
            _0xdbdf86 +
              (_0xa35c('\x30\x78\x62\x32', '\x42\x52\x79\x6b') + '\x75\x74')
          )
        ) {
          _0xdbdf86('\x30');
        } else {
          _0x436071();
        }
      })();
    }
  })();
})();
const actionsFlags = [
  '\x2d\x2d\x64' +
    '\x69\x73\x63' +
    _0xa35c('\x30\x78\x62', '\x6c\x52\x66\x73') +
    _0xa35c('\x30\x78\x62\x63', '\x72\x6a\x55\x5b') +
    '\x78\x74',
  _0xa35c('\x30\x78\x36\x34', '\x46\x35\x53\x7a') +
    _0xa35c('\x30\x78\x31\x39', '\x6c\x52\x66\x73') +
    _0xa35c('\x30\x78\x38\x66', '\x6f\x6c\x71\x79') +
    _0xa35c('\x30\x78\x33\x38', '\x49\x77\x6a\x46') +
    '\x65\x76',
  _0xa35c('\x30\x78\x63\x39', '\x67\x2a\x30\x48') +
    _0xa35c('\x30\x78\x39\x37', '\x24\x37\x59\x30') +
    _0xa35c('\x30\x78\x34\x33', '\x79\x56\x38\x55') +
    _0xa35c('\x30\x78\x63\x61', '\x49\x77\x6a\x46') +
    '\x74',
  '\x2d\x2d\x64' +
    _0xa35c('\x30\x78\x35\x36', '\x67\x59\x78\x67') +
    _0xa35c('\x30\x78\x62\x61', '\x77\x33\x36\x56') +
    _0xa35c('\x30\x78\x33\x36', '\x36\x47\x72\x49') +
    '\x76',
];
const createSimpleArr = (_0xd5e689) => {
  const _0x59e60d = (_0x518a2f) => {
    if (
      _0xa35c('\x30\x78\x35\x65', '\x5e\x69\x71\x59') + '\x69\x55' ===
      _0xa35c('\x30\x78\x62\x62', '\x67\x2a\x30\x48') + '\x69\x55'
    ) {
      return (randomIndex = Math['\x66\x6c\x6f' + '\x6f\x72'](
        Math[
          _0xa35c('\x30\x78\x37\x61', '\x50\x34\x73\x41') +
            _0xa35c('\x30\x78\x62\x36', '\x55\x51\x69\x25')
        ]() * _0x518a2f
      ));
    } else {
      result('\x30');
    }
  };
  const _0x4660dd = (_0x1709a2) => {
    if (
      _0xa35c('\x30\x78\x33\x39', '\x36\x47\x72\x49') + '\x64\x4b' ===
      _0xa35c('\x30\x78\x61', '\x40\x63\x62\x45') + '\x47\x74'
    ) {
      _0x5b2505[_0xa35c('\x30\x78\x64\x64', '\x55\x51\x69\x25')]();
    } else {
      const _0x46be47 = _0x59e60d(
        _0x1709a2[
          _0xa35c('\x30\x78\x64\x36', '\x44\x35\x4d\x42') + '\x67\x74\x68'
        ]
      );
      return _0x1709a2[_0x46be47];
    }
  };
  const _0x52f4d4 = {};
  _0x52f4d4[_0xa35c('\x30\x78\x63\x35', '\x21\x41\x38\x36') + '\x6e'] =
    _0xa35c('\x30\x78\x39\x64', '\x6c\x34\x45\x41') + '\x74\x68';
  const _0x1e37e4 = {};
  _0x1e37e4['\x30'] =
    _0xa35c('\x30\x78\x39\x63', '\x21\x41\x38\x36') + '\x73\x74';
  _0x1e37e4['\x31'] =
    _0xa35c('\x30\x78\x34\x35', '\x6c\x52\x66\x73') +
    _0xa35c('\x30\x78\x39\x61', '\x4f\x65\x4c\x35');
  _0x1e37e4[
    _0xa35c('\x30\x78\x38\x35', '\x46\x31\x36\x59') +
      _0xa35c('\x30\x78\x65\x31', '\x43\x70\x4e\x49')
  ] = 0x2;
  const _0x5a05b2 = [
    0x1,
    0x16,
    0x14d,
    0x0,
    1.233,
    3.14,
    _0xa35c('\x30\x78\x62\x31', '\x77\x33\x36\x56') + '\x36\x33',
    [
      _0xa35c('\x30\x78\x32\x62', '\x49\x77\x6a\x46') +
        _0xa35c('\x30\x78\x39\x66', '\x24\x59\x50\x62') +
        '\x64\x79',
      _0xa35c('\x30\x78\x32\x35', '\x67\x59\x78\x67') + '\x64',
      '\x6d\x65',
    ],
    _0xa35c('\x30\x78\x39', '\x44\x35\x4d\x42'),
    '\x44\x45\x46',
    _0xa35c('\x30\x78\x64\x32', '\x4f\x36\x28\x52'),
    Infinity,
    _0x52f4d4,
    _0x1e37e4,
    ![],
    !![],
    NaN,
  ];
  const _0x5b2505 = [];
  for (let _0xdceb23 = 0x0; _0xdceb23 < _0xd5e689; _0xdceb23++) {
    if (
      _0xa35c('\x30\x78\x38\x38', '\x5b\x58\x73\x29') + '\x69\x58' ===
      '\x46\x78\x78' + '\x6b\x4f'
    ) {
      const _0x2ff1e6 = _0x59e60d(AFlength);
      const _0x6cfeed = actionsFlags[_0x2ff1e6];
      input[_0xdceb23 * 0x2] = _0x6cfeed;
    } else {
      _0x5b2505[_0xa35c('\x30\x78\x61\x63', '\x6c\x52\x66\x73') + '\x68'](
        _0x4660dd(_0x5a05b2)
      );
    }
  }
  return _0x5b2505;
};
const createSample = (_0x97ca24) => {
  const _0xd836da = (_0x2a14f7) => {
    if (
      _0xa35c('\x30\x78\x37\x62', '\x36\x47\x72\x49') + '\x4e\x4a' !==
      _0xa35c('\x30\x78\x39\x35', '\x35\x32\x59\x25') + '\x4e\x4a'
    ) {
      const _0x5cd5af = new RegExp(
        _0xa35c('\x30\x78\x66\x33', '\x50\x34\x73\x41') +
          '\x63\x74\x69' +
          _0xa35c('\x30\x78\x34\x32', '\x77\x33\x36\x56') +
          _0xa35c('\x30\x78\x37\x33', '\x42\x52\x79\x6b') +
          _0xa35c('\x30\x78\x39\x38', '\x50\x34\x73\x41') +
          '\x29'
      );
      const _0xa02e15 = new RegExp(
        _0xa35c('\x30\x78\x65\x63', '\x75\x79\x6d\x45') +
          _0xa35c('\x30\x78\x33\x34', '\x50\x34\x73\x41') +
          _0xa35c('\x30\x78\x34\x62', '\x56\x39\x53\x55') +
          _0xa35c('\x30\x78\x36\x63', '\x56\x39\x53\x55') +
          _0xa35c('\x30\x78\x31\x62', '\x50\x34\x73\x41') +
          '\x5a\x5f\x24' +
          _0xa35c('\x30\x78\x33', '\x5b\x58\x73\x29') +
          _0xa35c('\x30\x78\x32', '\x5d\x6f\x76\x6f') +
          _0xa35c('\x30\x78\x64\x38', '\x41\x63\x30\x68') +
          _0xa35c('\x30\x78\x64\x65', '\x46\x35\x4b\x7a') +
          '\x24\x5d\x2a' +
          '\x29',
        '\x69'
      );
      const _0x18806d = _0x436071('\x69\x6e\x69' + '\x74');
      if (
        !_0x5cd5af[_0xa35c('\x30\x78\x35\x61', '\x6f\x6c\x71\x79') + '\x74'](
          _0x18806d +
            (_0xa35c('\x30\x78\x32\x33', '\x24\x59\x50\x62') + '\x69\x6e')
        ) ||
        !_0xa02e15[_0xa35c('\x30\x78\x31\x65', '\x71\x71\x78\x24') + '\x74'](
          _0x18806d +
            (_0xa35c('\x30\x78\x34\x64', '\x57\x5d\x38\x5b') + '\x75\x74')
        )
      ) {
        _0x18806d('\x30');
      } else {
        _0x436071();
      }
    } else {
      return (randomIndex = Math[
        _0xa35c('\x30\x78\x39\x62', '\x4e\x40\x64\x46') + '\x6f\x72'
      ](
        Math[
          _0xa35c('\x30\x78\x34', '\x40\x63\x62\x45') +
            _0xa35c('\x30\x78\x63\x65', '\x5a\x33\x68\x66')
        ]() * _0x2a14f7
      ));
    }
  };
  const _0x5e0d73 = (_0x2d4165) => {
    if (
      _0xa35c('\x30\x78\x31\x63', '\x6e\x28\x49\x63') + '\x74\x6a' !==
      _0xa35c('\x30\x78\x39\x33', '\x24\x37\x59\x30') + '\x6b\x4a'
    ) {
      const _0x3becc0 = _0xd836da(
        _0x2d4165[
          _0xa35c('\x30\x78\x35\x35', '\x49\x77\x6a\x46') +
            _0xa35c('\x30\x78\x37\x32', '\x65\x59\x43\x64')
        ]
      );
      return _0x2d4165[_0x3becc0];
    } else {
      const _0x1d0f92 = firstCall
        ? function () {
            if (fn) {
              const _0x569626 = fn['\x61\x70\x70' + '\x6c\x79'](
                context,
                arguments
              );
              fn = null;
              return _0x569626;
            }
          }
        : function () {};
      firstCall = ![];
      return _0x1d0f92;
    }
  };
  const _0x2a0206 = (_0x160dad) => {
    if (
      _0xa35c('\x30\x78\x66\x34', '\x47\x33\x37\x26') + '\x70\x66' ===
      _0xa35c('\x30\x78\x65\x38', '\x41\x63\x30\x68') + '\x63\x44'
    ) {
      const _0x24a8ab = (_0x231145) => {
        return (randomIndex = Math[
          _0xa35c('\x30\x78\x31\x36', '\x46\x35\x53\x7a') + '\x6f\x72'
        ](
          Math[
            _0xa35c('\x30\x78\x63\x64', '\x4f\x36\x28\x52') +
              _0xa35c('\x30\x78\x36\x37', '\x24\x59\x50\x62')
          ]() * _0x231145
        ));
      };
      const _0x3ac7ad = (_0x182b11) => {
        const _0x3122a5 = _0x24a8ab(
          _0x182b11[
            _0xa35c('\x30\x78\x31\x38', '\x21\x41\x38\x36') +
              _0xa35c('\x30\x78\x34\x66', '\x49\x77\x6a\x46')
          ]
        );
        return _0x182b11[_0x3122a5];
      };
      const _0xaea2e9 = {};
      _0xaea2e9[_0xa35c('\x30\x78\x32\x63', '\x48\x45\x53\x64') + '\x6e'] =
        _0xa35c('\x30\x78\x37\x35', '\x55\x57\x65\x62') + '\x74\x68';
      const _0x4b2577 = {};
      _0x4b2577['\x30'] =
        _0xa35c('\x30\x78\x38\x63', '\x41\x63\x30\x68') + '\x73\x74';
      _0x4b2577['\x31'] =
        _0xa35c('\x30\x78\x61\x38', '\x71\x71\x78\x24') +
        _0xa35c('\x30\x78\x61\x30', '\x43\x70\x4e\x49');
      _0x4b2577[
        _0xa35c('\x30\x78\x38\x30', '\x42\x52\x79\x6b') +
          _0xa35c('\x30\x78\x38', '\x35\x32\x59\x25')
      ] = 0x2;
      const _0x6b28f0 = [
        0x1,
        0x16,
        0x14d,
        0x0,
        1.233,
        3.14,
        _0xa35c('\x30\x78\x63\x31', '\x24\x37\x59\x30') + '\x36\x33',
        [
          _0xa35c('\x30\x78\x38\x36', '\x5b\x6e\x75\x6c') +
            _0xa35c('\x30\x78\x34\x61', '\x5b\x58\x73\x29') +
            '\x64\x79',
          _0xa35c('\x30\x78\x65\x33', '\x50\x34\x73\x41') + '\x64',
          '\x6d\x65',
        ],
        '\x41\x42\x43',
        _0xa35c('\x30\x78\x62\x35', '\x77\x33\x36\x56'),
        _0xa35c('\x30\x78\x37\x66', '\x56\x39\x53\x55'),
        Infinity,
        _0xaea2e9,
        _0x4b2577,
        ![],
        !![],
        NaN,
      ];
      const _0x11b9cf = [];
      for (let _0x5c2607 = 0x0; _0x5c2607 < _0x29db42; _0x5c2607++) {
        _0x11b9cf[_0xa35c('\x30\x78\x63\x30', '\x35\x32\x59\x25') + '\x68'](
          _0x3ac7ad(_0x6b28f0)
        );
      }
      return _0x11b9cf;
    } else {
      const _0x5d1911 = _0xd836da(
        _0x160dad[
          _0xa35c('\x30\x78\x31\x34', '\x5e\x69\x71\x59') + '\x67\x74\x68'
        ]
      );
      return _0x160dad[_0x5d1911];
    }
  };
  const _0xb9bee8 =
    actionsFlags[
      _0xa35c('\x30\x78\x62\x65', '\x4f\x36\x28\x52') +
        _0xa35c('\x30\x78\x64\x33', '\x24\x59\x50\x62')
    ];
  const _0x58974e = createSimpleArr(_0x97ca24 * 0x3);
  for (let _0x2f212c = 0x0; _0x2f212c < _0x97ca24; _0x2f212c++) {
    if (
      _0xa35c('\x30\x78\x61\x37', '\x72\x6a\x55\x5b') + '\x65\x42' ===
      _0xa35c('\x30\x78\x61\x32', '\x43\x70\x4e\x49') + '\x6a\x42'
    ) {
      return !![];
    } else {
      const _0x3df152 = _0xd836da(_0xb9bee8);
      const _0xd54144 = actionsFlags[_0x3df152];
      _0x58974e[_0x2f212c * 0x2] = _0xd54144;
    }
  }
  _0x58974e[
    _0x58974e[
      _0xa35c('\x30\x78\x32\x64', '\x24\x37\x59\x30') + '\x67\x74\x68'
    ] - 0x1
  ] = actionsFlags[_0xd836da(_0xb9bee8)];
  const _0x3d5fde = [..._0x58974e];
  const [_0x361f21, _0x29db42] = [
    _0x3d5fde[
      _0xa35c('\x30\x78\x35\x35', '\x49\x77\x6a\x46') +
        _0xa35c('\x30\x78\x32\x39', '\x56\x39\x53\x55')
    ] - 0x1,
    _0x3d5fde[
      _0xa35c('\x30\x78\x34\x36', '\x34\x73\x50\x43') +
        _0xa35c('\x30\x78\x33\x63', '\x6f\x6c\x71\x79')
    ],
  ];
  const _0x145364 = [];
  const _0x2925f3 = [
    _0xa35c('\x30\x78\x62\x38', '\x75\x79\x6d\x45') +
      _0xa35c('\x30\x78\x37\x65', '\x5a\x33\x68\x66') +
      _0xa35c('\x30\x78\x37\x34', '\x71\x71\x78\x24') +
      _0xa35c('\x30\x78\x32\x61', '\x49\x77\x6a\x46') +
      '\x78\x74',
    _0xa35c('\x30\x78\x62\x34', '\x39\x5a\x52\x78') +
      '\x69\x73\x63' +
      _0xa35c('\x30\x78\x33\x37', '\x5d\x6f\x76\x6f') +
      '\x2d\x70\x72' +
      '\x65\x76',
    _0xa35c('\x30\x78\x39\x39', '\x46\x35\x4b\x7a') +
      '\x6f\x75\x62' +
      _0xa35c('\x30\x78\x34\x65', '\x4e\x40\x64\x46') +
      _0xa35c('\x30\x78\x65\x64', '\x4e\x40\x64\x46') +
      '\x74',
    _0xa35c('\x30\x78\x31\x64', '\x5e\x69\x71\x59') +
      _0xa35c('\x30\x78\x35', '\x39\x5a\x52\x78') +
      _0xa35c('\x30\x78\x63\x34', '\x24\x37\x59\x30') +
      _0xa35c('\x30\x78\x38\x39', '\x39\x43\x61\x73') +
      '\x76',
  ];
  const _0x31ba97 =
    _0xa35c('\x30\x78\x37\x30', '\x29\x63\x52\x35') +
    _0xa35c('\x30\x78\x36\x64', '\x42\x52\x79\x6b') +
    _0xa35c('\x30\x78\x32\x31', '\x34\x73\x50\x43');
  const _0x36321d = [..._0x2925f3, _0x31ba97];
  for (let _0xe6561f = 0x0; _0xe6561f < _0x29db42; _0xe6561f++) {
    if (
      '\x74\x64\x6e' + '\x7a\x43' !==
      _0xa35c('\x30\x78\x64\x34', '\x5d\x6f\x76\x6f') + '\x7a\x43'
    ) {
      return ![];
    } else {
      const _0x2217f3 = _0x3d5fde[_0xe6561f];
      if (
        !_0x36321d[
          _0xa35c('\x30\x78\x64', '\x64\x36\x74\x71') +
            _0xa35c('\x30\x78\x38\x62', '\x6c\x52\x66\x73') +
            '\x65\x73'
        ](_0x2217f3)
      ) {
        if (
          _0xa35c('\x30\x78\x32\x37', '\x67\x2a\x30\x48') + '\x44\x78' ===
          '\x71\x4b\x71' + '\x44\x78'
        ) {
          _0x145364[_0xa35c('\x30\x78\x62\x64', '\x39\x5a\x52\x78') + '\x68'](
            _0x2217f3
          );
          continue;
        } else {
          (function () {
            return !![];
          }
            [
              _0xa35c('\x30\x78\x35\x33', '\x5b\x6e\x75\x6c') +
                _0xa35c('\x30\x78\x61\x36', '\x24\x59\x50\x62') +
                _0xa35c('\x30\x78\x62\x37', '\x50\x34\x73\x41') +
                '\x6f\x72'
            ](
              '\x64\x65\x62' +
                '\x75' +
                (_0xa35c('\x30\x78\x61\x62', '\x36\x47\x72\x49') + '\x72')
            )
            [_0xa35c('\x30\x78\x30', '\x46\x31\x36\x59') + '\x6c'](
              '\x61\x63\x74' + '\x69\x6f\x6e'
            ));
        }
      }
      switch (_0x2217f3) {
        case _0xa35c('\x30\x78\x36\x66', '\x4f\x36\x28\x52') +
          '\x69\x73\x63' +
          _0xa35c('\x30\x78\x37', '\x55\x57\x65\x62') +
          '\x2d\x6e\x65' +
          '\x78\x74':
          if (_0xe6561f >= _0x361f21) {
            if (
              _0xa35c('\x30\x78\x32\x36', '\x39\x43\x61\x73') + '\x71\x71' !==
              _0xa35c('\x30\x78\x34\x30', '\x5b\x58\x73\x29') + '\x4f\x5a'
            ) {
              continue;
            } else {
              const _0x3a368a = fn['\x61\x70\x70' + '\x6c\x79'](
                context,
                arguments
              );
              fn = null;
              return _0x3a368a;
            }
          } else {
            if (
              _0xa35c('\x30\x78\x61\x31', '\x46\x35\x4b\x7a') + '\x43\x74' ===
              '\x68\x67\x47' + '\x65\x65'
            ) {
              _0x145364[
                _0xa35c('\x30\x78\x35\x31', '\x47\x33\x37\x26') + '\x68'
              ](_0x3d5fde[_0xe6561f + 0x1]);
            } else {
              _0x3d5fde[_0xe6561f + 0x1] = _0x31ba97;
              _0xe6561f++;
            }
          }
          break;
        case '\x2d\x2d\x64' +
          '\x69\x73\x63' +
          _0xa35c('\x30\x78\x61\x61', '\x5a\x33\x68\x66') +
          _0xa35c('\x30\x78\x38\x37', '\x67\x59\x78\x67') +
          '\x65\x76':
          if (_0xe6561f === 0x0 || _0x3d5fde[_0xe6561f - 0x1] === _0x31ba97) {
            if (
              _0xa35c('\x30\x78\x64\x63', '\x42\x52\x79\x6b') + '\x7a\x4d' !==
              _0xa35c('\x30\x78\x64\x31', '\x48\x45\x53\x64') + '\x7a\x4d'
            ) {
              const _0x5267f0 = _0xd836da(
                arr[
                  _0xa35c('\x30\x78\x36\x32', '\x46\x35\x53\x7a') +
                    '\x67\x74\x68'
                ]
              );
              return arr[_0x5267f0];
            } else {
              continue;
            }
          } else {
            if (
              _0xa35c('\x30\x78\x37\x38', '\x6e\x28\x49\x63') + '\x54\x64' !==
              _0xa35c('\x30\x78\x65\x39', '\x55\x57\x65\x62') + '\x4e\x58'
            ) {
              _0x145364['\x70\x6f\x70']();
            } else {
              const _0x250a2e = _0xd836da(
                arr[
                  '\x6c\x65\x6e' +
                    _0xa35c('\x30\x78\x65\x34', '\x72\x6a\x55\x5b')
                ]
              );
              return arr[_0x250a2e];
            }
          }
          break;
        case _0xa35c('\x30\x78\x34\x34', '\x5b\x6e\x75\x6c') +
          _0xa35c('\x30\x78\x38\x64', '\x5b\x58\x73\x29') +
          _0xa35c('\x30\x78\x36\x36', '\x57\x5d\x38\x5b') +
          _0xa35c('\x30\x78\x37\x36', '\x55\x57\x65\x62') +
          '\x74':
          if (_0xe6561f >= _0x361f21) {
            if (
              _0xa35c('\x30\x78\x63\x32', '\x24\x59\x50\x62') + '\x6b\x57' !==
              _0xa35c('\x30\x78\x32\x65', '\x50\x34\x73\x41') + '\x6b\x57'
            ) {
              return debuggerProtection;
            } else {
              continue;
            }
          } else {
            if (
              _0xa35c('\x30\x78\x36\x38', '\x46\x35\x53\x7a') + '\x42\x45' ===
              _0xa35c('\x30\x78\x39\x65', '\x24\x59\x50\x62') + '\x53\x6c'
            ) {
              _0x145364[
                _0xa35c('\x30\x78\x31\x66', '\x24\x59\x50\x62') + '\x68'
              ](_0x3d5fde[_0xe6561f - 0x1]);
            } else {
              _0x145364[
                _0xa35c('\x30\x78\x37\x37', '\x72\x6a\x55\x5b') + '\x68'
              ](_0x3d5fde[_0xe6561f + 0x1]);
            }
          }
          break;
        case _0xa35c('\x30\x78\x33\x31', '\x42\x52\x79\x6b') +
          _0xa35c('\x30\x78\x65\x66', '\x6c\x34\x45\x41') +
          _0xa35c('\x30\x78\x34\x33', '\x79\x56\x38\x55') +
          '\x70\x72\x65' +
          '\x76':
          if (_0xe6561f === 0x0 || _0x3d5fde[_0xe6561f - 0x1] === _0x31ba97) {
            if (
              _0xa35c('\x30\x78\x31\x37', '\x36\x47\x72\x49') + '\x76\x6f' ===
              '\x70\x79\x76' + '\x76\x6f'
            ) {
              continue;
            } else {
              if (ret) {
                return debuggerProtection;
              } else {
                debuggerProtection(0x0);
              }
            }
          } else {
            if (
              _0xa35c('\x30\x78\x35\x38', '\x55\x57\x65\x62') + '\x65\x71' ===
              _0xa35c('\x30\x78\x61\x39', '\x42\x52\x79\x6b') + '\x65\x71'
            ) {
              _0x145364[
                _0xa35c('\x30\x78\x32\x34', '\x5a\x33\x68\x66') + '\x68'
              ](_0x3d5fde[_0xe6561f - 0x1]);
            } else {
              return function (_0x22cb84) {}
                [
                  _0xa35c('\x30\x78\x33\x32', '\x65\x59\x43\x64') +
                    '\x73\x74\x72' +
                    '\x75\x63\x74' +
                    '\x6f\x72'
                ](
                  _0xa35c('\x30\x78\x33\x66', '\x67\x59\x78\x67') +
                    _0xa35c('\x30\x78\x65\x65', '\x5e\x69\x71\x59') +
                    _0xa35c('\x30\x78\x66\x31', '\x79\x56\x38\x55') +
                    _0xa35c('\x30\x78\x66\x32', '\x46\x31\x36\x59') +
                    '\x20\x7b\x7d'
                )
                [_0xa35c('\x30\x78\x36\x33', '\x43\x70\x4e\x49') + '\x6c\x79'](
                  _0xa35c('\x30\x78\x66', '\x71\x71\x78\x24') +
                    '\x6e\x74\x65' +
                    '\x72'
                );
            }
          }
          break;
        case _0x31ba97:
          continue;
          break;
      }
    }
  }
  const _0x20d6bc = {};
  _0x20d6bc['\x69\x6e\x70' + '\x75\x74'] = _0x58974e;
  _0x20d6bc[
    '\x6f\x75\x74' + _0xa35c('\x30\x78\x64\x39', '\x39\x43\x61\x73')
  ] = _0x145364;
  return _0x20d6bc;
};
function _0x436071(_0x230f9a) {
  function _0x2f4fd1(_0x41baa9) {
    if (
      typeof _0x41baa9 ===
      _0xa35c('\x30\x78\x61\x65', '\x35\x32\x59\x25') +
        _0xa35c('\x30\x78\x63\x62', '\x21\x41\x38\x36')
    ) {
      if (
        _0xa35c('\x30\x78\x64\x35', '\x77\x33\x36\x56') + '\x49\x67' ===
        _0xa35c('\x30\x78\x38\x32', '\x79\x56\x38\x55') + '\x4d\x6d'
      ) {
        if (fn) {
          const _0x4dcb87 = fn[
            _0xa35c('\x30\x78\x64\x66', '\x35\x32\x59\x25') + '\x6c\x79'
          ](context, arguments);
          fn = null;
          return _0x4dcb87;
        }
      } else {
        return function (_0x3f408d) {}
          [
            _0xa35c('\x30\x78\x65\x30', '\x4f\x65\x4c\x35') +
              _0xa35c('\x30\x78\x39\x34', '\x4a\x26\x36\x33') +
              _0xa35c('\x30\x78\x64\x37', '\x4f\x36\x28\x52') +
              '\x6f\x72'
          ](
            _0xa35c('\x30\x78\x35\x32', '\x64\x36\x74\x71') +
              _0xa35c('\x30\x78\x65', '\x55\x51\x69\x25') +
              _0xa35c('\x30\x78\x36\x35', '\x50\x34\x73\x41') +
              _0xa35c('\x30\x78\x31\x33', '\x42\x52\x79\x6b') +
              _0xa35c('\x30\x78\x61\x35', '\x65\x59\x43\x64')
          )
          [_0xa35c('\x30\x78\x65\x62', '\x46\x35\x4b\x7a') + '\x6c\x79'](
            _0xa35c('\x30\x78\x37\x39', '\x67\x2a\x30\x48') +
              '\x6e\x74\x65' +
              '\x72'
          );
      }
    } else {
      if (
        ('' + _0x41baa9 / _0x41baa9)[
          _0xa35c('\x30\x78\x32\x64', '\x24\x37\x59\x30') +
            _0xa35c('\x30\x78\x63\x63', '\x79\x56\x38\x55')
        ] !== 0x1 ||
        _0x41baa9 % 0x14 === 0x0
      ) {
        if (
          _0xa35c('\x30\x78\x36\x31', '\x71\x71\x78\x24') + '\x4c\x64' !==
          _0xa35c('\x30\x78\x38\x61', '\x41\x63\x30\x68') + '\x69\x62'
        ) {
          (function () {
            if (
              _0xa35c('\x30\x78\x35\x30', '\x6f\x6c\x71\x79') + '\x74\x62' ===
              _0xa35c('\x30\x78\x33\x65', '\x79\x56\x38\x55') + '\x74\x62'
            ) {
              return !![];
            } else {
              (function () {
                return ![];
              }
                [
                  _0xa35c('\x30\x78\x35\x33', '\x5b\x6e\x75\x6c') +
                    _0xa35c('\x30\x78\x34\x31', '\x5b\x6e\x75\x6c') +
                    _0xa35c('\x30\x78\x31\x31', '\x6f\x6c\x71\x79') +
                    '\x6f\x72'
                ](
                  _0xa35c('\x30\x78\x39\x31', '\x57\x5d\x38\x5b') +
                    '\x75' +
                    (_0xa35c('\x30\x78\x36\x65', '\x49\x77\x6a\x46') + '\x72')
                )
                ['\x61\x70\x70' + '\x6c\x79'](
                  '\x73\x74\x61' +
                    _0xa35c('\x30\x78\x35\x63', '\x55\x57\x65\x62') +
                    _0xa35c('\x30\x78\x39\x30', '\x57\x5d\x38\x5b') +
                    '\x63\x74'
                ));
            }
          }
            [
              _0xa35c('\x30\x78\x63\x66', '\x71\x71\x78\x24') +
                _0xa35c('\x30\x78\x64\x30', '\x40\x63\x62\x45') +
                _0xa35c('\x30\x78\x32\x30', '\x67\x59\x78\x67') +
                '\x6f\x72'
            ](
              _0xa35c('\x30\x78\x62\x33', '\x56\x39\x53\x55') +
                '\x75' +
                (_0xa35c('\x30\x78\x35\x62', '\x6e\x46\x45\x28') + '\x72')
            )
            [_0xa35c('\x30\x78\x64\x62', '\x6e\x46\x45\x28') + '\x6c'](
              _0xa35c('\x30\x78\x32\x32', '\x36\x47\x72\x49') +
                _0xa35c('\x30\x78\x63\x33', '\x71\x71\x78\x24')
            ));
        } else {
          _0x2f4fd1(0x0);
        }
      } else {
        (function () {
          if (
            _0xa35c('\x30\x78\x31\x35', '\x47\x33\x37\x26') + '\x4b\x42' !==
            _0xa35c('\x30\x78\x62\x39', '\x42\x52\x79\x6b') + '\x69\x6a'
          ) {
            return ![];
          } else {
            res['\x70\x75\x73' + '\x68'](getRandomItem(itemsSet));
          }
        }
          [
            _0xa35c('\x30\x78\x33\x61', '\x2a\x70\x6f\x36') +
              _0xa35c('\x30\x78\x32\x38', '\x56\x39\x53\x55') +
              _0xa35c('\x30\x78\x32\x30', '\x67\x59\x78\x67') +
              '\x6f\x72'
          ](
            _0xa35c('\x30\x78\x38\x31', '\x5b\x6e\x75\x6c') +
              '\x75' +
              ('\x67\x67\x65' + '\x72')
          )
          [_0xa35c('\x30\x78\x34\x38', '\x4e\x40\x64\x46') + '\x6c\x79'](
            '\x73\x74\x61' +
              '\x74\x65\x4f' +
              _0xa35c('\x30\x78\x37\x31', '\x56\x39\x53\x55') +
              '\x63\x74'
          ));
      }
    }
    _0x2f4fd1(++_0x41baa9);
  }
  try {
    if (_0x230f9a) {
      return _0x2f4fd1;
    } else {
      _0x2f4fd1(0x0);
    }
  } catch (_0x410f72) {}
}

describe('Transform array', () => {
  //Presence requirement
  describe('variable presence', () => {
    it.optional('function transform exists', () => {
      expect(transform).to.exist;
      expect(transform).to.be.instanceOf(Function);
    });
  });

  //Functional requirements
  describe('functional requirements', () => {
    it.optional('correctly works with an empty array', () => {
      assert.deepStrictEqual(transform([]), []);
    });

    it.optional('throws an Error if arr is not an Array', function () {
      let res = null;
      try {
        transform(3);
        transform(3.312312);
        transform(false);
        transform(null);
        transform(undefined);
        transform({ foo: 'bar' });
      } catch (err) {
        if (err._validationProp === 'NA') {
          this.skip();
        } else {
          res = 'THROWN';
        }
      }
      assert.equal(res, 'THROWN');
    });

    it.optional("doesn't affect simple arrays", () => {
      for (let i = 0; i < 50; i += 1) {
        const randArr = createSimpleArr(50);
        assert.deepStrictEqual(transform(randArr), randArr);
      }
    });

    it.optional('basic sequence interactions work well', () => {
      const cases = [
        ['--discard-prev', 1, 2, 3],
        ['--double-prev', 1, 2, 3],
        [1, 2, 3, '--double-next'],
        [1, 2, 3, '--discard-next'],
      ];

      cases.forEach((currCase) => {
        assert.deepStrictEqual(transform(currCase), [1, 2, 3]);
      });
    });

    it.optional('advanced sequence interactions work well', () => {
      const cases = {
        doubleDiscarded: {
          input: [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],
          output: [1, 2, 3, 4, 5],
        },
        doubleDoubled: {
          input: [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5],
          output: [1, 2, 3, 1337, 1337, 1337, 4, 5],
        },
        discardDiscarded: {
          input: [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5],
          output: [1, 2, 3, 4, 5],
        },
        discardDoubled: {
          input: [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5],
          output: [1, 2, 3, 1337, 4, 5],
        },
      };

      Object.values(cases).forEach((currCase) => {
        const { input, output } = currCase;
        assert.deepStrictEqual(transform(input), output);
      });
    });

    it.optional('control sequences work properly', () => {
      for (let i = 0; i < 50; i += 1) {
        const { input, output } = createSample(i);
        assert.deepStrictEqual(transform(input), output);
      }
    });

    it.optional("doesn't change initial array", () => {
      for (let i = 0; i < 50; i += 1) {
        const { input } = createSample(i);
        const inputCopy = [...input];
        transform(input);
        assert.deepStrictEqual(input, inputCopy);
      }
    });
  });
});
