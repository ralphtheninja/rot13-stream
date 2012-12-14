var rot13 = require('..');

exports['lower case'] = function (test) {
  var s = rot13();
  s.on('data', function(data) {
    test.equal(data.toString(), 'nopqrstuvwxyzabcdefghijklm');
    test.done();
  });
  s.write('abcdefghijklmnopqrstuvwxyz');
};

exports['upper case'] = function (test) {
  var s = rot13();
  s.on('data', function(data) {
    test.equal(data.toString(), 'NOPQRSTUVWXYZABCDEFGHIJKLM');
    test.done();
  });
  s.write('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
};

exports['non alphabetical'] = function (test) {
  var s = rot13();
  var nonAlpha = '0123456789;:/!@#$%^&*()_+=-';
  s.on('data', function(data) {
    test.equal(data.toString(), nonAlpha);
    test.done();
  });
  s.write(nonAlpha);
};
