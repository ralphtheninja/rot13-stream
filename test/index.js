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

exports['inverse'] = function (test) {
  var a = rot13();
  var b = rot13();
  var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  a.on('data', function(data) {
    b.write(data);
  });
  b.on('data', function(data) {
    test.equal(data.toString(), input);
    test.done();
  });
  a.write(input);
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
