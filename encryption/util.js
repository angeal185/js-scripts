//util
var _0xd9b5 = ["\x26\x71\x75\x6F\x74\x3B", "\x72\x65\x70\x6C\x61\x63\x65", "\x26\x67\x74\x3B", "\x26\x6C\x74\x3B", "\x26\x61\x6D\x70\x3B", "\x6A\x6F\x69\x6E", "\x73\x70\x6C\x69\x74", "\x6C\x65\x6E\x67\x74\x68", "\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74", "", "\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65", "\x70\x75\x73\x68", "\x73\x75\x62\x73\x74\x72", "\x72\x61\x6E\x64\x6F\x6D", "\x66\x6C\x6F\x6F\x72", "\x30", "\x25\x34\x30", "\x25\x32\x46", "\x25\x32\x41", "\x2B", "\x25\x32\x42", "\x20", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x73\x6C\x69\x63\x65", "\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4A\x4B\x4C\x4D\x4E\x4F\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5A\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2B\x2F\x3D", "\x63\x68\x61\x72\x41\x74", "\x3D\x3D\x3D", "\x69\x6E\x64\x65\x78\x4F\x66", "\x25\x32\x39", "\x25\x32\x38", "\x25\x32\x37", "\x25\x32\x31", "\x77\x68\x69\x63\x68", "\x6B\x65\x79\x43\x6F\x64\x65", "\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65", "\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65", "\x61\x70\x70\x6C\x79", "\x74\x6F\x53\x74\x72\x69\x6E\x67", "\x70\x72\x6F\x74\x6F\x74\x79\x70\x65", "\x5B\x6F\x62\x6A\x65\x63\x74\x20\x41\x72\x72\x61\x79\x5D", "\x6F\x62\x6A\x65\x63\x74", "\x22", "\x22\x3A", "\x6E\x75\x6D\x62\x65\x72", "\x66\x61\x6C\x73\x65", "\x74\x72\x75\x65", "\x2C", "\x5B", "\x5D", "\x7B", "\x7D", "\x7B\x0D\x0A", "\x73\x74\x72\x69\x6E\x67", "\x3A\x20", "\x3B\x20\x0D\x0A", "\x3A\x20\x7B\x20\x0D\x0A"];

function _htmlEntities(_0xd186x2) {
    return String(_0xd186x2)[_0xd9b5[1]](/&/g, _0xd9b5[4])[_0xd9b5[1]](/</g, _0xd9b5[3])[_0xd9b5[1]](/>/g, _0xd9b5[2])[_0xd9b5[1]](/"/g, _0xd9b5[0]);
};

function str_replace(_0xd186x4, _0xd186x5, _0xd186x2) {
    return _0xd186x2[_0xd9b5[6]](_0xd186x4)[_0xd9b5[5]](_0xd186x5);
};

function _fromStringToBytes(_0xd186x7) {
    var _0xd186x8 = 28;
    var _0xd186x9 = 1 << _0xd186x8,
        _0xd186x4 = _0xd186x9 - 1,
        _0xd186xa = _0xd186x9 >> 1,
        _0xd186xb = _0xd186x8 >> 1,
        _0xd186xc = (1 << _0xd186xb) - 1;
    var _0xd186x5 = 1,
        _0xd186x2 = [0],
        _0xd186xd = 0,
        _0xd186xe = 0,
        _0xd186xf = 256;
    var _0xd186x10 = _0xd186x7[_0xd9b5[7]] * 8;
    for (var _0xd186x11 = 0; _0xd186x11 < _0xd186x10; _0xd186x11++) {
        if ((_0xd186xf <<= 1) > 255) {
            _0xd186xf = 1;
            c = _0xd186x7[_0xd9b5[8]](_0xd186xe++);
        };
        ifx(_0xd186x5 > _0xd186x4);
        _0xd186x5 = 1;
        _0xd186x2[++_0xd186xd] = 0;
        if (c & _0xd186xf) {
            _0xd186x2[_0xd186xd] |= _0xd186x5;
        };
        _0xd186x5 <<= 1;
    };
    return _0xd186x2;
};

function _fromBytesToString(_0xd186x8) {
    var _0xd186x13 = 28;
    var _0xd186xb = 1 << _0xd186x13,
        _0xd186xe = _0xd186xb - 1,
        _0xd186x10 = _0xd186xb >> 1,
        _0xd186xf = _0xd186x13 >> 1,
        _0xd186x7 = (1 << _0xd186xf) - 1;
    var _0xd186x11 = 1,
        _0xd186xc = 0,
        _0xd186x2 = [0],
        _0xd186x4 = 1,
        _0xd186xa = 0;
    var _0xd186x14 = _0xd186x8[_0xd9b5[7]] * _0xd186x13;
    var _0xd186x9, _0xd186xd = _0xd9b5[9];
    for (_0xd186x9 = 0; _0xd186x9 < _0xd186x14; _0xd186x9++) {
        if (_0xd186x8[_0xd186xc] & _0xd186x11) {
            _0xd186x2[_0xd186xa] |= _0xd186x4;
        };
        if ((_0xd186x4 <<= 1) > 255) {
            _0xd186x4 = 1;
            _0xd186x2[++_0xd186xa] = 0;
        };
        if ((_0xd186x11 <<= 1) > _0xd186xe) {
            _0xd186x11 = 1;
            _0xd186xc++;
        };
    };
    while (_0xd186xa >= 0 && _0xd186x2[_0xd186xa] === 0) {
        _0xd186xa--;
    };
    for (_0xd186x9 = 0; _0xd186x9 <= _0xd186xa; _0xd186x9++) {
        _0xd186xd += String[_0xd9b5[10]](_0xd186x2[_0xd186x9]);
    };
    return _0xd186xd;
};

function _byteArray2String(_0xd186x2) {
    var _0xd186x11 = _0xd9b5[9];
    for (var _0xd186x4 = 0; _0xd186x4 < _0xd186x2[_0xd9b5[7]]; _0xd186x4++) {
        _0xd186x11 += String[_0xd9b5[10]](_0xd186x2[_0xd186x4]);
    };
    return _0xd186x11;
};

function _bytesToHex(_0xd186x2) {
    for (var _0xd186x4 = [], _0xd186x5 = 0; _0xd186x5 < _0xd186x2[_0xd9b5[7]]; _0xd186x5++) {
        _0xd186x4[_0xd9b5[11]]((_0xd186x2[_0xd186x5] >>> 4).toString(16));
        _0xd186x4[_0xd9b5[11]]((_0xd186x2[_0xd186x5] & 15).toString(16));
    };
    return _0xd186x4[_0xd9b5[5]](_0xd9b5[9]);
};

function _hexToBytes(_0xd186x5) {
    for (var _0xd186x2 = [], _0xd186x4 = 0; _0xd186x4 < _0xd186x5[_0xd9b5[7]]; _0xd186x4 += 2) {
        _0xd186x2[_0xd9b5[11]](parseInt(_0xd186x5[_0xd9b5[12]](_0xd186x4, 2), 16));
    };
    return _0xd186x2;
};

function _getRandomBytes(_0xd186x2) {
    if (!_0xd186x2) {
        _0xd186x2 = 8;
    };
    var _0xd186x5 = new Array(_0xd186x2);
    var _0xd186x11 = [],
        _0xd186x4 = 0;
    for (_0xd186x4 = 0; _0xd186x4 < 256; _0xd186x4++) {
        _0xd186x11[_0xd186x4] = _0xd186x4;
    };
    for (_0xd186x4 = 0; _0xd186x4 < _0xd186x5[_0xd9b5[7]]; _0xd186x4++) {
        _0xd186x5[_0xd186x4] = _0xd186x11[Math[_0xd9b5[14]](Math[_0xd9b5[13]]() * _0xd186x11[_0xd9b5[7]])];
    };
    return _0xd186x5;
};

function _fromHexToString(_0xd186x5) {
    var _0xd186x4 = _0xd9b5[9];
    for (var _0xd186x2 = 0; _0xd186x2 < _0xd186x5[_0xd9b5[7]]; _0xd186x2 += 2) {
        _0xd186x4 += String[_0xd9b5[10]](parseInt(_0xd186x5[_0xd9b5[12]](_0xd186x2, 2), 16));
    };
    return _0xd186x4;
};

function _fromStringToHex(_0xd186x11) {
    if (!_0xd186x11) {
        _0xd186x11 = _0xd9b5[9];
    };
    var _0xd186x4 = 0,
        _0xd186x5 = _0xd9b5[9],
        _0xd186x2 = _0xd9b5[9];
    for (_0xd186x4 = 0; _0xd186x4 < _0xd186x11[_0xd9b5[7]]; _0xd186x4++) {
        _0xd186x2 = _0xd186x11[_0xd9b5[8]](_0xd186x4).toString(16);
        _0xd186x5 += (_0xd186x2[_0xd9b5[7]] === 1) ? _0xd9b5[15] + _0xd186x2 : _0xd186x2;
    };
    return _0xd186x5;
};

function urlencode(_0xd186x2) {
    return escape(_0xd186x2)[_0xd9b5[1]](/\+/g, _0xd9b5[20])[_0xd9b5[1]](/%20/g, _0xd9b5[19])[_0xd9b5[1]](/\*/g, _0xd9b5[18])[_0xd9b5[1]](/\//g, _0xd9b5[17])[_0xd9b5[1]](/@/g, _0xd9b5[16]);
};

function urldecode(_0xd186x2) {
    return unescape(_0xd186x2[_0xd9b5[1]](/\+/g, _0xd9b5[21]));
};

function utf8_encode(_0xd186x2) {
    if (_0xd186x2 === null || typeof _0xd186x2 === _0xd9b5[22]) {
        return _0xd9b5[9];
    };
    var _0xd186xb = (_0xd186x2 + _0xd9b5[9]);
    var _0xd186xa = _0xd9b5[9],
        _0xd186x5, _0xd186xe, _0xd186x4 = 0;
    _0xd186x5 = _0xd186xe = 0;
    _0xd186x4 = _0xd186xb[_0xd9b5[7]];
    for (var _0xd186x11 = 0; _0xd186x11 < _0xd186x4; _0xd186x11++) {
        var _0xd186xd = _0xd186xb[_0xd9b5[8]](_0xd186x11);
        var _0xd186x9 = null;
        if (_0xd186xd < 128) {
            _0xd186xe++;
        } else {
            if (_0xd186xd > 127 && _0xd186xd < 2048) {
                _0xd186x9 = String[_0xd9b5[10]]((_0xd186xd >> 6) | 192) + String[_0xd9b5[10]]((_0xd186xd & 63) | 128);
            } else {
                _0xd186x9 = String[_0xd9b5[10]]((_0xd186xd >> 12) | 224) + String[_0xd9b5[10]](((_0xd186xd >> 6) & 63) | 128) + String[_0xd9b5[10]]((_0xd186xd & 63) | 128);
            };
        };
        if (_0xd186x9 !== null) {
            if (_0xd186xe > _0xd186x5) {
                _0xd186xa += _0xd186xb[_0xd9b5[23]](_0xd186x5, _0xd186xe);
            };
            _0xd186xa += _0xd186x9;
            _0xd186x5 = _0xd186xe = _0xd186x11 + 1;
        };
    };
    if (_0xd186xe > _0xd186x5) {
        _0xd186xa += _0xd186xb[_0xd9b5[23]](_0xd186x5, _0xd186x4);
    };
    return _0xd186xa;
};

function utf8_decode(_0xd186x2) {
    var _0xd186x4 = [],
        _0xd186xe = 0,
        _0xd186xd = 0,
        _0xd186x9 = 0,
        _0xd186x11 = 0,
        _0xd186x5 = 0;
    _0xd186x2 += _0xd9b5[9];
    while (_0xd186xe < _0xd186x2[_0xd9b5[7]]) {
        _0xd186x9 = _0xd186x2[_0xd9b5[8]](_0xd186xe);
        if (_0xd186x9 < 128) {
            _0xd186x4[_0xd186xd++] = String[_0xd9b5[10]](_0xd186x9);
            _0xd186xe++;
        } else {
            if (_0xd186x9 > 191 && _0xd186x9 < 224) {
                _0xd186x11 = _0xd186x2[_0xd9b5[8]](_0xd186xe + 1);
                _0xd186x4[_0xd186xd++] = String[_0xd9b5[10]](((_0xd186x9 & 31) << 6) | (_0xd186x11 & 63));
                _0xd186xe += 2;
            } else {
                _0xd186x11 = _0xd186x2[_0xd9b5[8]](_0xd186xe + 1);
                _0xd186x5 = _0xd186x2[_0xd9b5[8]](_0xd186xe + 2);
                _0xd186x4[_0xd186xd++] = String[_0xd9b5[10]](((_0xd186x9 & 15) << 12) | ((_0xd186x11 & 63) << 6) | (_0xd186x5 & 63));
                _0xd186xe += 3;
            };
        };
    };
    return _0xd186x4[_0xd9b5[5]](_0xd9b5[9]);
};

function base64_encode(_0xd186xf) {
    var _0xd186xe = _0xd9b5[24];
    var _0xd186x11, _0xd186x4, _0xd186x5, _0xd186x8, _0xd186x20, _0xd186x10, _0xd186xc, _0xd186x7, _0xd186xa = 0,
        _0xd186x14 = 0,
        _0xd186xd = _0xd9b5[9],
        _0xd186x9 = [];
    if (!_0xd186xf) {
        return _0xd186xf;
    };
    do {
        _0xd186x11 = _0xd186xf[_0xd9b5[8]](_0xd186xa++);
        _0xd186x4 = _0xd186xf[_0xd9b5[8]](_0xd186xa++);
        _0xd186x5 = _0xd186xf[_0xd9b5[8]](_0xd186xa++);
        _0xd186x7 = _0xd186x11 << 16 | _0xd186x4 << 8 | _0xd186x5;
        _0xd186x8 = _0xd186x7 >> 18 & 63;
        _0xd186x20 = _0xd186x7 >> 12 & 63;
        _0xd186x10 = _0xd186x7 >> 6 & 63;
        _0xd186xc = _0xd186x7 & 63;
        _0xd186x9[_0xd186x14++] = _0xd186xe[_0xd9b5[25]](_0xd186x8) + _0xd186xe[_0xd9b5[25]](_0xd186x20) + _0xd186xe[_0xd9b5[25]](_0xd186x10) + _0xd186xe[_0xd9b5[25]](_0xd186xc);
    } while (_0xd186xa < _0xd186xf[_0xd9b5[7]]);;
    _0xd186xd = _0xd186x9[_0xd9b5[5]](_0xd9b5[9]);
    var _0xd186x2 = _0xd186xf[_0xd9b5[7]] % 3;
    return (_0xd186x2 ? _0xd186xd[_0xd9b5[23]](0, _0xd186x2 - 3) : _0xd186xd) + _0xd9b5[26][_0xd9b5[23]](_0xd186x2 || 3);
};

function base64_decode(_0xd186xa) {
    var _0xd186x11 = _0xd9b5[24];
    var _0xd186x4, _0xd186x5, _0xd186x2, _0xd186x20, _0xd186x10, _0xd186xc, _0xd186xf, _0xd186x8, _0xd186xd = 0,
        _0xd186x7 = 0,
        _0xd186xe = _0xd9b5[9],
        _0xd186x9 = [];
    if (!_0xd186xa) {
        return _0xd186xa;
    };
    _0xd186xa += _0xd9b5[9];
    do {
        _0xd186x20 = _0xd186x11[_0xd9b5[27]](_0xd186xa[_0xd9b5[25]](_0xd186xd++));
        _0xd186x10 = _0xd186x11[_0xd9b5[27]](_0xd186xa[_0xd9b5[25]](_0xd186xd++));
        _0xd186xc = _0xd186x11[_0xd9b5[27]](_0xd186xa[_0xd9b5[25]](_0xd186xd++));
        _0xd186xf = _0xd186x11[_0xd9b5[27]](_0xd186xa[_0xd9b5[25]](_0xd186xd++));
        _0xd186x8 = _0xd186x20 << 18 | _0xd186x10 << 12 | _0xd186xc << 6 | _0xd186xf;
        _0xd186x4 = _0xd186x8 >> 16 & 255;
        _0xd186x5 = _0xd186x8 >> 8 & 255;
        _0xd186x2 = _0xd186x8 & 255;
        if (_0xd186xc === 64) {
            _0xd186x9[_0xd186x7++] = String[_0xd9b5[10]](_0xd186x4);
        } else {
            if (_0xd186xf === 64) {
                _0xd186x9[_0xd186x7++] = String[_0xd9b5[10]](_0xd186x4, _0xd186x5);
            } else {
                _0xd186x9[_0xd186x7++] = String[_0xd9b5[10]](_0xd186x4, _0xd186x5, _0xd186x2);
            };
        };
    } while (_0xd186xd < _0xd186xa[_0xd9b5[7]]);;
    _0xd186xe = _0xd186x9[_0xd9b5[5]](_0xd9b5[9]);
    return _0xd186xe;
};

function rawurlencode(_0xd186x2) {
    _0xd186x2 = (_0xd186x2 + _0xd9b5[9]).toString();
    return encodeURIComponent(_0xd186x2)[_0xd9b5[1]](/!/g, _0xd9b5[31])[_0xd9b5[1]](/'/g, _0xd9b5[30])[_0xd9b5[1]](/\(/g, _0xd9b5[29])[_0xd9b5[1]](/\)/g, _0xd9b5[28])[_0xd9b5[1]](/\*/g, _0xd9b5[18]);
};

function rawurldecode(_0xd186x2) {
    return decodeURIComponent(_0xd186x2 + _0xd9b5[9]);
};

function rand(_0xd186x2) {
    return (Math[_0xd9b5[14]](Math[_0xd9b5[13]]() * _0xd186x2 + 1));
};

function isNumberKey(_0xd186x5) {
    var _0xd186x2 = (_0xd186x5[_0xd9b5[32]]) ? _0xd186x5[_0xd9b5[32]] : event[_0xd9b5[33]];
    if ((_0xd186x2 > 31) && (_0xd186x2 < 48 || _0xd186x2 > 57)) {
        return false;
    };
    return true;
};

function toupper(_0xd186x2) {
    return _0xd186x2[_0xd9b5[34]]();
};

function tolower(_0xd186x2) {
    return _0xd186x2[_0xd9b5[35]]();
};

function array2json(_0xd186x2) {
    var _0xd186x9 = [];
    var _0xd186x5 = (Object[_0xd9b5[38]][_0xd9b5[37]][_0xd9b5[36]](_0xd186x2) === _0xd9b5[39]);
    for (var _0xd186x11 in _0xd186x2) {
        var _0xd186xe = _0xd186x2[_0xd186x11];
        if (typeof _0xd186xe === _0xd9b5[40]) {
            if (_0xd186x5) {
                _0xd186x9[_0xd9b5[11]](array2json(_0xd186xe));
            } else {
                _0xd186x9[_0xd186x11] = array2json(_0xd186xe);
            };
        } else {
            var _0xd186xd = _0xd9b5[9];
            if (!_0xd186x5) {
                _0xd186xd = _0xd9b5[41] + _0xd186x11 + _0xd9b5[42];
            };
            if (typeof _0xd186xe === _0xd9b5[43]) {
                _0xd186xd += _0xd186xe;
            } else {
                if (_0xd186xe === false) {
                    _0xd186xd += _0xd9b5[44];
                } else {
                    if (_0xd186xe === true) {
                        _0xd186xd += _0xd9b5[45];
                    } else {
                        _0xd186xd += _0xd9b5[41] + _0xd186xe + _0xd9b5[41];
                    };
                };
            };
            _0xd186x9[_0xd9b5[11]](_0xd186xd);
        };
    };
    var _0xd186x4 = _0xd186x9[_0xd9b5[5]](_0xd9b5[46]);
    if (_0xd186x5) {
        return _0xd9b5[47] + _0xd186x4 + _0xd9b5[48];
    };
    return _0xd9b5[49] + _0xd186x4 + _0xd9b5[50];
};

function printObj(_0xd186x4) {
    var _0xd186x5 = _0xd9b5[51];
    for (var _0xd186x2 in _0xd186x4) {
        if (typeof _0xd186x4[_0xd186x2] === _0xd9b5[52]) {
            _0xd186x5 += _0xd186x2 + _0xd9b5[53] + _0xd186x4[_0xd186x2] + _0xd9b5[54];
        } else {
            _0xd186x5 += _0xd186x2 + _0xd9b5[55] + printObj(_0xd186x4[_0xd186x2]) + _0xd9b5[50];
        };
    };
    _0xd186x5 += _0xd9b5[50];
    return _0xd186x5;
};
//form
var _keySizeInBits = 128;
var _keySize = _keySizeInBits / 8;
var _text = 'Type text here, then click "Encrypt"...';
var en_time, de_time;

function cmdEncryptClick() {
    $("#cmdEncrypt").attr("disabled", true);
    var b = 0,
        a = 1,
        d = false;
    var c = setInterval(function() {
        if (!d) {
            d = true;
            if (b === 0) {
                b++;
                _cmdEncryptClick()
            } else {
                if (b === a) {
                    b++;
                    clearInterval(c);
                    $("#cmdEncrypt").attr("disabled", false)
                }
            }
            d = false
        }
    }, 100)
}

function _cmdEncryptClick() {
    $("#txtVerification").css({
        border: ""
    });
    $("#txtCiphertext").css({
        border: ""
    });
    $("#div_save").hide();
    $("#save_test").hide();
    $("#success_test").hide();
    if ((document.getElementById("txtPlaintext") === null) || (document.getElementById("txtCiphertext") === null) || (document.getElementById("txtVerification") === null) || (document.getElementById("txtMessages") === null) || (document.getElementById("passphrase") === null)) {
        alert("form non valid!");
        return false
    }
    document.getElementById("txtCiphertext").value = "";
    document.getElementById("txtVerification").value = "";
    en_time = "";
    de_time = "";
    var c = document.getElementById("txtPlaintext").value;
    if (c.length === 0) {
        alert("Insert plaintext please!");
        return false
    }
    var h = document.getElementById("passphrase").value;
    if (h.length === 0) {
        alert("Insert passphrase please!");
        return false
    }
    document.getElementById("txtMessages").value = "Encrypting. Please wait...";
    try {
        var b = _encrypt(c.trim(), h.trim());
        var a = b.status;
        var f = b.time;
        en_time = f;
        if (a === "success") {
            json_string = array2json(b);
            document.getElementById("txtCiphertext").value = json_string;
            $("#div_save").show();
            $("#save_test").show();
            $("#success_test").hide()
        } else {
            $("#div_save").hide();
            $("#save_test").hide();
            $("#success_test").hide();
            $("#txtCiphertext").css({
                border: "2px solid red"
            })
        }
        document.getElementById("txtMessages").value = "Done. Encryption took " + (f) + " milliseconds."
    } catch (d) {
        var f = 0;
        var g = "* " + d.message;
        document.getElementById("txtMessages").value = "Done. Encryption took " + (f) + " milliseconds.\r\n" + g;
        $("#txtCiphertext").css({
            border: "2px solid red"
        });
        en_time = ""
    }
    return true
}

function cmdVerifyClick() {
    $("#cmdVerify").attr("disabled", true);
    var b = 0,
        a = 1,
        d = false;
    var c = setInterval(function() {
        if (!d) {
            d = true;
            if (b === 0) {
                b++;
                _cmdVerifyClick()
            } else {
                if (b === a) {
                    b++;
                    clearInterval(c);
                    $("#cmdVerify").attr("disabled", false)
                }
            }
            d = false
        }
    }, 100)
}

function _cmdVerifyClick() {
    $("#txtVerification").css({
        border: ""
    });
    $("#div_save").hide();
    $("#save_test").hide();
    $("#success_test").hide();
    if ((document.getElementById("txtPlaintext") === null) || (document.getElementById("txtCiphertext") === null) || (document.getElementById("txtVerification") === null) || (document.getElementById("txtMessages") === null) || (document.getElementById("passphrase") === null)) {
        alert("form non valid!");
        return false
    }
    document.getElementById("txtVerification").value = "";
    var c = document.getElementById("txtCiphertext").value;
    var i = document.getElementById("passphrase").value;
    if (c.length === 0) {
        alert("Insert ciphertext please!");
        $("#txtCiphertext").css({
            border: "2px solid red"
        });
        return false
    }
    if (i.length === 0) {
        alert("Insert passphrase please!");
        return false
    }
    document.getElementById("txtMessages").value = "Decrypting. Please wait...";
    try {
        var h = _decrypt(c.trim(), i.trim());
        var d = h.status;
        var b = h.time;
        de_time = b;
        if (d === "success") {
            var a = h.plaintext;
            if (a !== undefined) {
                document.getElementById("txtVerification").value = a;
                $("#div_save").show();
                $("#save_test").show();
                $("#success_test").hide()
            }
        } else {
            $("#div_save").hide();
            $("#save_test").hide();
            $("#success_test").hide();
            $("#txtVerification").css({
                border: "2px solid red"
            })
        }
        document.getElementById("txtMessages").value = "Done. Decryption took " + (b) + " milliseconds.";
        var j = document.getElementById("txtPlaintext").value;
        if (j.length !== a.length) {
            $("#txtVerification").css({
                border: "2px solid red"
            });
            var g = "ERROR: the plaintext does not match.\r\n";
            g += "--> " + j.length + " - " + a.length + " bytes";
            document.getElementById("txtMessages").value = "Done. Decryption took " + (b) + " milliseconds.\r\n" + g;
            g += "\r\n--> " + a;
            console.log(g)
        } else {
            $("#txtVerification").css({
                border: "2px solid green"
            })
        }
    } catch (f) {
        var b = 0;
        var g = "* " + f.message;
        document.getElementById("txtMessages").value = "Done. Decryption took " + (b) + " milliseconds.\r\n" + g;
        $("#txtVerification").css({
            border: "2px solid red"
        });
        de_time = ""
    }
    return true
}

function selKeySizeChange(a) {
    a = parseInt(a);
    if ((a === 128) || (a === 192) || (a === 256)) {
        _keySizeInBits = a;
        _keySize = _keySizeInBits / 8;
        return true
    }
    return false
};

//openssl-base64
var END_OF_INPUT = -1;
var base64Chars = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/");
var reverseBase64Chars = new Array();
for (var i = 0; i < base64Chars.length; i++) {
    reverseBase64Chars[base64Chars[i]] = i
}
var base64Str;
var base64Count;

function setBase64Str(a) {
    base64Str = a;
    base64Count = 0
}

function readBase64() {
    if (!base64Str) {
        return END_OF_INPUT
    }
    if (base64Count >= base64Str.length) {
        return END_OF_INPUT
    }
    var a = base64Str.charCodeAt(base64Count) & 255;
    base64Count++;
    return a
}

function openssl_base64_encode(f) {
    var d = utf8_encode(f);
    setBase64Str(d);
    var a = "";
    var e = new Array(3);
    var c = 0;
    var b = false;
    while (!b && (e[0] = readBase64()) !== END_OF_INPUT) {
        e[1] = readBase64();
        e[2] = readBase64();
        a += (base64Chars[e[0] >> 2]);
        if (e[1] !== END_OF_INPUT) {
            a += (base64Chars[((e[0] << 4) & 48) | (e[1] >> 4)]);
            if (e[2] !== END_OF_INPUT) {
                a += (base64Chars[((e[1] << 2) & 60) | (e[2] >> 6)]);
                a += (base64Chars[e[2] & 63])
            } else {
                a += (base64Chars[((e[1] << 2) & 60)]);
                a += ("=");
                b = true
            }
        } else {
            a += (base64Chars[((e[0] << 4) & 48)]);
            a += ("=");
            a += ("=");
            b = true
        }
        c += 4;
        if (c >= 76) {
            a += ("\n");
            c = 0
        }
    }
    return a.trim()
}

function readReverseBase64() {
    if (!base64Str) {
        return END_OF_INPUT
    }
    while (true) {
        if (base64Count >= base64Str.length) {
            return END_OF_INPUT
        }
        var a = base64Str.charAt(base64Count);
        base64Count++;
        if (reverseBase64Chars[a]) {
            return reverseBase64Chars[a]
        }
        if (a === "A") {
            return 0
        }
    }
    return END_OF_INPUT
}

function ntos(a) {
    a = a.toString(16);
    if (a.length === 1) {
        a = "0" + a
    }
    a = "%" + a;
    return unescape(a)
}

function openssl_base64_decode(d) {
    setBase64Str(d);
    var a = "";
    var c = new Array(4);
    var b = false;
    while (!b && (c[0] = readReverseBase64()) !== END_OF_INPUT && (c[1] = readReverseBase64()) !== END_OF_INPUT) {
        c[2] = readReverseBase64();
        c[3] = readReverseBase64();
        a += ntos((((c[0] << 2) & 255) | c[1] >> 4));
        if (c[2] !== END_OF_INPUT) {
            a += ntos((((c[1] << 4) & 255) | c[2] >> 2));
            if (c[3] !== END_OF_INPUT) {
                a += ntos((((c[2] << 6) & 255) | c[3]))
            } else {
                b = true
            }
        } else {
            b = true
        }
    }
    return utf8_decode(a.trim())
};
var END_OF_INPUT = -1;
var base64Chars = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/");
var reverseBase64Chars = new Array();
for (var i = 0; i < base64Chars.length; i++) {
    reverseBase64Chars[base64Chars[i]] = i
}
var base64Str;
var base64Count;

function setBase64Str(a) {
    base64Str = a;
    base64Count = 0
}

function readBase64() {
    if (!base64Str) {
        return END_OF_INPUT
    }
    if (base64Count >= base64Str.length) {
        return END_OF_INPUT
    }
    var a = base64Str.charCodeAt(base64Count) & 255;
    base64Count++;
    return a
}

function openssl_base64_encode(f) {
    var d = utf8_encode(f);
    setBase64Str(d);
    var a = "";
    var e = new Array(3);
    var c = 0;
    var b = false;
    while (!b && (e[0] = readBase64()) !== END_OF_INPUT) {
        e[1] = readBase64();
        e[2] = readBase64();
        a += (base64Chars[e[0] >> 2]);
        if (e[1] !== END_OF_INPUT) {
            a += (base64Chars[((e[0] << 4) & 48) | (e[1] >> 4)]);
            if (e[2] !== END_OF_INPUT) {
                a += (base64Chars[((e[1] << 2) & 60) | (e[2] >> 6)]);
                a += (base64Chars[e[2] & 63])
            } else {
                a += (base64Chars[((e[1] << 2) & 60)]);
                a += ("=");
                b = true
            }
        } else {
            a += (base64Chars[((e[0] << 4) & 48)]);
            a += ("=");
            a += ("=");
            b = true
        }
        c += 4;
        if (c >= 76) {
            a += ("\n");
            c = 0
        }
    }
    return a.trim()
}

function readReverseBase64() {
    if (!base64Str) {
        return END_OF_INPUT
    }
    while (true) {
        if (base64Count >= base64Str.length) {
            return END_OF_INPUT
        }
        var a = base64Str.charAt(base64Count);
        base64Count++;
        if (reverseBase64Chars[a]) {
            return reverseBase64Chars[a]
        }
        if (a === "A") {
            return 0
        }
    }
    return END_OF_INPUT
}

function ntos(a) {
    a = a.toString(16);
    if (a.length === 1) {
        a = "0" + a
    }
    a = "%" + a;
    return unescape(a)
}

function openssl_base64_decode(d) {
    setBase64Str(d);
    var a = "";
    var c = new Array(4);
    var b = false;
    while (!b && (c[0] = readReverseBase64()) !== END_OF_INPUT && (c[1] = readReverseBase64()) !== END_OF_INPUT) {
        c[2] = readReverseBase64();
        c[3] = readReverseBase64();
        a += ntos((((c[0] << 2) & 255) | c[1] >> 4));
        if (c[2] !== END_OF_INPUT) {
            a += ntos((((c[1] << 4) & 255) | c[2] >> 2));
            if (c[3] !== END_OF_INPUT) {
                a += ntos((((c[2] << 6) & 255) | c[3]))
            } else {
                b = true
            }
        } else {
            b = true
        }
    }
    return utf8_decode(a.trim())
};
//enc
var _0x7ee7 = ["\x37\x36\x63\x65\x39\x62\x62\x61\x39\x34\x38\x37\x32\x36\x36\x37\x33\x38\x65\x33\x63\x34\x66\x30\x62\x33\x63\x66\x61\x34\x62\x65", "\x65\x6E\x63\x72\x79\x70\x74", "\x43\x74\x72", "\x74\x72\x69\x6D", "\x64\x65\x63\x72\x79\x70\x74"];

function myencrypt(_0xd94ax2) {
    if (_0xd94ax2 === undefined) {
        return false;
    };
    var _0xd94ax3 = _0x7ee7[0];
    var _0xd94ax4 = 128;
    try {
        var _0xd94ax5 = Aes[_0x7ee7[2]][_0x7ee7[1]](_0xd94ax2, _0xd94ax3, _0xd94ax4);
    } catch (c) {
        return false;
    };
    return myencode(_0xd94ax5);
};

function mydecrypt(_0xd94ax7) {
    if (_0xd94ax7 === undefined) {
        return false;
    };
    var _0xd94ax3 = _0x7ee7[0];
    var _0xd94ax5 = 128;
    _0xd94ax7 = mydecode(_0xd94ax7[_0x7ee7[3]]());
    try {
        var _0xd94ax2 = Aes[_0x7ee7[2]][_0x7ee7[4]](_0xd94ax7, _0xd94ax3, _0xd94ax5);
    } catch (d) {
        return false;
    };
    return _0xd94ax2;
};

function myencode(_0xd94ax5) {
    return base64_encode(urlencode(utf8_encode(_0xd94ax5)));
};

function mydecode(_0xd94ax5) {
    return utf8_decode(urldecode(base64_decode(_0xd94ax5)));
};
//aes
(typeof Crypto === "undefined" || !Crypto.util) && function() {
    var d = window.Crypto = {},
        a = d.util = {
            rotl: function(c, f) {
                return c << f | c >>> 32 - f
            },
            rotr: function(c, f) {
                return c << 32 - f | c >>> f
            },
            endian: function(c) {
                if (c.constructor === Number) {
                    return a.rotl(c, 8) & 16711935 | a.rotl(c, 24) & 4278255360
                }
                for (var f = 0; f < c.length; f++) {
                    c[f] = a.endian(c[f])
                }
                return c
            },
            randomBytes: function(c) {
                for (var f = []; c > 0; c--) {
                    f.push(Math.floor(Math.random() * 256))
                }
                return f
            },
            bytesToWords: function(g) {
                for (var h = [], c = 0, f = 0; c < g.length; c++, f += 8) {
                    h[f >>> 5] |= (g[c] & 255) << 24 - f % 32
                }
                return h
            },
            wordsToBytes: function(f) {
                for (var g = [], c = 0; c < f.length * 32; c += 8) {
                    g.push(f[c >>> 5] >>> 24 - c % 32 & 255)
                }
                return g
            },
            bytesToHex: function(f) {
                for (var g = [], c = 0; c < f.length; c++) {
                    g.push((f[c] >>> 4).toString(16)), g.push((f[c] & 15).toString(16))
                }
                return g.join("")
            },
            hexToBytes: function(f) {
                for (var g = [], c = 0; c < f.length; c += 2) {
                    g.push(parseInt(f.substr(c, 2), 16))
                }
                return g
            },
            bytesToBase64: function(h) {
                if (typeof btoa === "function") {
                    return btoa(b.bytesToString(h))
                }
                for (var i = [], c = 0; c < h.length; c += 3) {
                    for (var f = h[c] << 16 | h[c + 1] << 8 | h[c + 2], g = 0; g < 4; g++) {
                        c * 8 + g * 6 <= h.length * 8 ? i.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(f >>> 6 * (3 - g) & 63)) : i.push("=")
                    }
                }
                return i.join("")
            },
            base64ToBytes: function(g) {
                if (typeof atob === "function") {
                    return b.stringToBytes(atob(g))
                }
                for (var g = g.replace(/[^A-Z0-9+\/]/ig, ""), h = [], c = 0, f = 0; c < g.length; f = ++c % 4) {
                    f !== 0 && h.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(g.charAt(c - 1)) & Math.pow(2, -2 * f + 8) - 1) << f * 2 | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(g.charAt(c)) >>> 6 - f * 2)
                }
                return h
            }
        },
        d = d.charenc = {};
    d.UTF8 = {
        stringToBytes: function(c) {
            return b.stringToBytes(unescape(encodeURIComponent(c)))
        },
        bytesToString: function(c) {
            return decodeURIComponent(escape(b.bytesToString(c)))
        }
    };
    var b = d.Binary = {
        stringToBytes: function(f) {
            for (var g = [], c = 0; c < f.length; c++) {
                g.push(f.charCodeAt(c) & 255)
            }
            return g
        },
        bytesToString: function(f) {
            for (var g = [], c = 0; c < f.length; c++) {
                g.push(String.fromCharCode(f[c]))
            }
            return g.join("")
        }
    }
}();
(function() {
    var l = Crypto,
        g = l.util,
        h = l.charenc,
        i = h.UTF8,
        k = h.Binary,
        a = l.SHA1 = function(b, c) {
            var d = g.wordsToBytes(a._sha1(b));
            return c && c.asBytes ? d : c && c.asString ? k.bytesToString(d) : g.bytesToHex(d)
        };
    a._sha1 = function(D) {
        D.constructor === String && (D = i.stringToBytes(D));
        var C = g.bytesToWords(D),
            w = D.length * 8,
            D = [],
            A = 1732584193,
            x = -271733879,
            B = -1732584194,
            z = 271733878,
            F = -1009589776;
        C[w >> 5] |= 128 << 24 - w % 32;
        C[(w + 64 >>> 9 << 4) + 15] = w;
        for (w = 0; w < C.length; w += 16) {
            for (var y = A, t = x, e = B, u = z, q = F, j = 0; j < 80; j++) {
                if (j < 16) {
                    D[j] = C[w + j]
                } else {
                    var E = D[j - 3] ^ D[j - 8] ^ D[j - 14] ^ D[j - 16];
                    D[j] = E << 1 | E >>> 31
                }
                E = (A << 5 | A >>> 27) + F + (D[j] >>> 0) + (j < 20 ? (x & B | ~x & z) + 1518500249 : j < 40 ? (x ^ B ^ z) + 1859775393 : j < 60 ? (x & B | x & z | B & z) - 1894007588 : (x ^ B ^ z) - 899497514);
                F = z;
                z = B;
                B = x << 30 | x >>> 2;
                x = A;
                A = E
            }
            A += y;
            x += t;
            B += e;
            z += u;
            F += q
        }
        return [A, x, B, z, F]
    };
    a._blocksize = 16;
    a._digestsize = 20
})();
(function() {
    var i = Crypto,
        a = i.util,
        b = i.charenc,
        g = b.UTF8,
        h = b.Binary;
    i.HMAC = function(d, f, j, e) {
        f.constructor === String && (f = g.stringToBytes(f));
        j.constructor === String && (j = g.stringToBytes(j));
        j.length > d._blocksize * 4 && (j = d(j, {
            asBytes: !0
        }));
        for (var n = j.slice(0), j = j.slice(0), m = 0; m < d._blocksize * 4; m++) {
            n[m] ^= 92, j[m] ^= 54
        }
        d = d(n.concat(d(j.concat(f), {
            asBytes: !0
        })), {
            asBytes: !0
        });
        return e && e.asBytes ? d : e && e.asString ? h.bytesToString(d) : a.bytesToHex(d)
    }
})();
(function() {
    var i = Crypto,
        a = i.util,
        b = i.charenc,
        g = b.UTF8,
        h = b.Binary;
    i.PBKDF2 = function(x, y, p, o) {
        function z(f, k) {
            return i.HMAC(t, k, f, {
                asBytes: !0
            })
        }
        x.constructor === String && (x = g.stringToBytes(x));
        y.constructor === String && (y = g.stringToBytes(y));
        for (var t = o && o.hasher || i.SHA1, w = o && o.iterations || 1, d = [], A = 1; d.length < p;) {
            for (var v = z(x, y.concat(a.wordsToBytes([A]))), e = v, c = 1; c < w; c++) {
                for (var e = z(x, e), j = 0; j < v.length; j++) {
                    v[j] ^= e[j]
                }
            }
            d = d.concat(v);
            A++
        }
        d.length = p;
        return o && o.asBytes ? d : o && o.asString ? h.bytesToString(d) : a.bytesToHex(d)
    }
})();
(function(i) {
    function a(c, d) {
        var e = c._blocksize * 4;
        return e - d.length % e
    }
    var b = i.pad = {},
        g = function(c) {
            for (var d = c.pop(), e = 1; e < d; e++) {
                c.pop()
            }
        };
    b.NoPadding = {
        pad: function() {},
        unpad: function() {}
    };
    b.ZeroPadding = {
        pad: function(c, d) {
            var f = c._blocksize * 4,
                j = d.length % f;
            if (j !== 0) {
                for (j = f - j; j > 0; j--) {
                    d.push(0)
                }
            }
        },
        unpad: function() {}
    };
    b.iso7816 = {
        pad: function(c, d) {
            var f = a(c, d);
            for (d.push(128); f > 1; f--) {
                d.push(0)
            }
        },
        unpad: function(c) {
            for (; c.pop() !== 128;) {}
        }
    };
    b.ansix923 = {
        pad: function(c, f) {
            for (var j = a(c, f), k = 1; k < j; k++) {
                f.push(0)
            }
            f.push(j)
        },
        unpad: g
    };
    b.iso10126 = {
        pad: function(c, f) {
            for (var j = a(c, f), k = 1; k < j; k++) {
                f.push(Math.floor(Math.random() * 256))
            }
            f.push(j)
        },
        unpad: g
    };
    b.pkcs7 = {
        pad: function(c, f) {
            for (var j = a(c, f), k = 0; k < j; k++) {
                f.push(j)
            }
        },
        unpad: g
    };
    var i = i.mode = {},
        h = i.Mode = function(c) {
            if (c) {
                this._padding = c
            }
        };
    h.prototype = {
        encrypt: function(c, d, f) {
            this._padding.pad(c, d);
            this._doEncrypt(c, d, f)
        },
        decrypt: function(c, d, f) {
            this._doDecrypt(c, d, f);
            this._padding.unpad(d)
        },
        _padding: b.iso7816
    };
    g = (i.ECB = function() {
        h.apply(this, arguments)
    }).prototype = new h;
    g._doEncrypt = function(c, f) {
        for (var j = c._blocksize * 4, k = 0; k < f.length; k += j) {
            c._encryptblock(f, k)
        }
    };
    g._doDecrypt = function(c, f) {
        for (var j = c._blocksize * 4, k = 0; k < f.length; k += j) {
            c._decryptblock(f, k)
        }
    };
    g.fixOptions = function(c) {
        c.iv = []
    };
    g = (i.CBC = function() {
        h.apply(this, arguments)
    }).prototype = new h;
    g._doEncrypt = function(f, j, l) {
        for (var m = f._blocksize * 4, n = 0; n < j.length; n += m) {
            if (n === 0) {
                for (var k = 0; k < m; k++) {
                    j[k] ^= l[k]
                }
            } else {
                for (k = 0; k < m; k++) {
                    j[n + k] ^= j[n + k - m]
                }
            }
            f._encryptblock(j, n)
        }
    };
    g._doDecrypt = function(j, k, n) {
        for (var o = j._blocksize * 4, p = 0; p < k.length; p += o) {
            var l = k.slice(p, p + o);
            j._decryptblock(k, p);
            for (var m = 0; m < o; m++) {
                k[p + m] ^= n[m]
            }
            n = l
        }
    };
    g = (i.CFB = function() {
        h.apply(this, arguments)
    }).prototype = new h;
    g._padding = b.NoPadding;
    g._doEncrypt = function(j, m, n) {
        for (var o = j._blocksize * 4, n = n.slice(0), l = 0; l < m.length; l++) {
            var k = l % o;
            k === 0 && j._encryptblock(n, 0);
            m[l] ^= n[k];
            n[k] = m[l]
        }
    };
    g._doDecrypt = function(o, k, p) {
        for (var q = o._blocksize * 4, p = p.slice(0), n = 0; n < k.length; n++) {
            var m = n % q;
            m === 0 && o._encryptblock(p, 0);
            var l = k[n];
            k[n] ^= p[m];
            p[m] = l
        }
    };
    g = (i.OFB = function() {
        h.apply(this, arguments)
    }).prototype = new h;
    g._padding = b.NoPadding;
    g._doEncrypt = function(m, n, o) {
        for (var l = m._blocksize * 4, o = o.slice(0), k = 0; k < n.length; k++) {
            k % l === 0 && m._encryptblock(o, 0), n[k] ^= o[k % l]
        }
    };
    g._doDecrypt = g._doEncrypt;
    i = (i.CTR = function() {
        h.apply(this, arguments)
    }).prototype = new h;
    i._padding = b.NoPadding;
    i._doEncrypt = function(o, p, q) {
        for (var n = o._blocksize * 4, q = q.slice(0), k = 0; k < p.length;) {
            var m = q.slice(0);
            o._encryptblock(m, 0);
            for (var l = 0; k < p.length && l < n; l++, k++) {
                p[k] ^= m[l]
            }++q[n - 1] === 256 && (q[n - 1] = 0, ++q[n - 2] === 256 && (q[n - 2] = 0, ++q[n - 3] === 256 && (q[n - 3] = 0, ++q[n - 4])))
        }
    };
    i._doDecrypt = i._doEncrypt
})(Crypto);
(function() {
    function J(h, j) {
        for (var f = 0, g = 0; g < 8; g++) {
            j & 1 && (f ^= h);
            var k = h & 128,
                h = h << 1 & 255;
            k && (h ^= 27);
            j >>>= 1
        }
        return f
    }
    for (var D = Crypto, G = D.util, H = D.charenc.UTF8, I = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], K = [], L = 0; L < 256; L++) {
        K[I[L]] = L
    }
    for (var C = [], B = [], i = [], E = [], p = [], x = [], L = 0; L < 256; L++) {
        C[L] = J(L, 2), B[L] = J(L, 3), i[L] = J(L, 9), E[L] = J(L, 11), p[L] = J(L, 13), x[L] = J(L, 14)
    }
    var v = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        F = [
            [],
            [],
            [],
            []
        ],
        z, w, A, y = D.AES = {
            encrypt: function(h, e, f) {
                var f = f || {},
                    g = f.mode || new D.mode.OFB;
                g.fixOptions && g.fixOptions(f);
                var h = h.constructor === String ? H.stringToBytes(h) : h,
                    j = f.iv || G.randomBytes(y._blocksize * 4),
                    e = e.constructor === String ? D.PBKDF2(e, j, 32, {
                        asBytes: !0
                    }) : e;
                y._init(e);
                g.encrypt(y, h, j);
                h = f.iv ? h : j.concat(h);
                return f && f.asBytes ? h : G.bytesToBase64(h)
            },
            decrypt: function(h, e, f) {
                var f = f || {},
                    g = f.mode || new D.mode.OFB;
                g.fixOptions && g.fixOptions(f);
                var h = h.constructor === String ? G.base64ToBytes(h) : h,
                    j = f.iv || h.splice(0, y._blocksize * 4),
                    e = e.constructor === String ? D.PBKDF2(e, j, 32, {
                        asBytes: !0
                    }) : e;
                y._init(e);
                g.decrypt(y, h, j);
                return f && f.asBytes ? h : H.bytesToString(h)
            },
            _blocksize: 4,
            _encryptblock: function(o, g) {
                for (var d = 0; d < y._blocksize; d++) {
                    for (var l = 0; l < 4; l++) {
                        F[d][l] = o[g + l * 4 + d]
                    }
                }
                for (d = 0; d < 4; d++) {
                    for (l = 0; l < 4; l++) {
                        F[d][l] ^= A[l][d]
                    }
                }
                for (var q = 1; q < w; q++) {
                    for (d = 0; d < 4; d++) {
                        for (l = 0; l < 4; l++) {
                            F[d][l] = I[F[d][l]]
                        }
                    }
                    F[1].push(F[1].shift());
                    F[2].push(F[2].shift());
                    F[2].push(F[2].shift());
                    F[3].unshift(F[3].pop());
                    for (l = 0; l < 4; l++) {
                        var d = F[0][l],
                            n = F[1][l],
                            m = F[2][l],
                            k = F[3][l];
                        F[0][l] = C[d] ^ B[n] ^ m ^ k;
                        F[1][l] = d ^ C[n] ^ B[m] ^ k;
                        F[2][l] = d ^ n ^ C[m] ^ B[k];
                        F[3][l] = B[d] ^ n ^ m ^ C[k]
                    }
                    for (d = 0; d < 4; d++) {
                        for (l = 0; l < 4; l++) {
                            F[d][l] ^= A[q * 4 + l][d]
                        }
                    }
                }
                for (d = 0; d < 4; d++) {
                    for (l = 0; l < 4; l++) {
                        F[d][l] = I[F[d][l]]
                    }
                }
                F[1].push(F[1].shift());
                F[2].push(F[2].shift());
                F[2].push(F[2].shift());
                F[3].unshift(F[3].pop());
                for (d = 0; d < 4; d++) {
                    for (l = 0; l < 4; l++) {
                        F[d][l] ^= A[w * 4 + l][d]
                    }
                }
                for (d = 0; d < y._blocksize; d++) {
                    for (l = 0; l < 4; l++) {
                        o[g + l * 4 + d] = F[d][l]
                    }
                }
            },
            _decryptblock: function(q, o) {
                for (var g = 0; g < y._blocksize; g++) {
                    for (var r = 0; r < 4; r++) {
                        F[g][r] = q[o + r * 4 + g]
                    }
                }
                for (g = 0; g < 4; g++) {
                    for (r = 0; r < 4; r++) {
                        F[g][r] ^= A[w * 4 + r][g]
                    }
                }
                for (var n = 1; n < w; n++) {
                    F[1].unshift(F[1].pop());
                    F[2].push(F[2].shift());
                    F[2].push(F[2].shift());
                    F[3].push(F[3].shift());
                    for (g = 0; g < 4; g++) {
                        for (r = 0; r < 4; r++) {
                            F[g][r] = K[F[g][r]]
                        }
                    }
                    for (g = 0; g < 4; g++) {
                        for (r = 0; r < 4; r++) {
                            F[g][r] ^= A[(w - n) * 4 + r][g]
                        }
                    }
                    for (r = 0; r < 4; r++) {
                        var g = F[0][r],
                            m = F[1][r],
                            h = F[2][r],
                            b = F[3][r];
                        F[0][r] = x[g] ^ E[m] ^ p[h] ^ i[b];
                        F[1][r] = i[g] ^ x[m] ^ E[h] ^ p[b];
                        F[2][r] = p[g] ^ i[m] ^ x[h] ^ E[b];
                        F[3][r] = E[g] ^ p[m] ^ i[h] ^ x[b]
                    }
                }
                F[1].unshift(F[1].pop());
                F[2].push(F[2].shift());
                F[2].push(F[2].shift());
                F[3].push(F[3].shift());
                for (g = 0; g < 4; g++) {
                    for (r = 0; r < 4; r++) {
                        F[g][r] = K[F[g][r]]
                    }
                }
                for (g = 0; g < 4; g++) {
                    for (r = 0; r < 4; r++) {
                        F[g][r] ^= A[r][g]
                    }
                }
                for (g = 0; g < y._blocksize; g++) {
                    for (r = 0; r < 4; r++) {
                        q[o + r * 4 + g] = F[g][r]
                    }
                }
            },
            _init: function(b) {
                z = b.length / 4;
                w = z + 6;
                y._keyexpansion(b)
            },
            _keyexpansion: function(d) {
                A = [];
                for (var c = 0; c < z; c++) {
                    A[c] = [d[c * 4], d[c * 4 + 1], d[c * 4 + 2], d[c * 4 + 3]]
                }
                for (c = z; c < y._blocksize * (w + 1); c++) {
                    d = [A[c - 1][0], A[c - 1][1], A[c - 1][2], A[c - 1][3]], c % z === 0 ? (d.push(d.shift()), d[0] = I[d[0]], d[1] = I[d[1]], d[2] = I[d[2]], d[3] = I[d[3]], d[0] ^= v[c / z]) : z > 6 && c % z === 4 && (d[0] = I[d[0]], d[1] = I[d[1]], d[2] = I[d[2]], d[3] = I[d[3]]), A[c] = [A[c - z][0] ^ d[0], A[c - z][1] ^ d[1], A[c - z][2] ^ d[2], A[c - z][3] ^ d[3]]
                }
            }
        }
})();
//md5
(typeof Crypto === "undefined" || !Crypto.util) && function() {
    var a = window.Crypto = {},
        b = a.util = {
            rotl: function(d, e) {
                return d << e | d >>> 32 - e
            },
            rotr: function(d, e) {
                return d << 32 - e | d >>> e
            },
            endian: function(d) {
                if (d.constructor === Number) {
                    return b.rotl(d, 8) & 16711935 | b.rotl(d, 24) & 4278255360
                }
                for (var e = 0; e < d.length; e++) {
                    d[e] = b.endian(d[e])
                }
                return d
            },
            randomBytes: function(d) {
                for (var e = []; d > 0; d--) {
                    e.push(Math.floor(Math.random() * 256))
                }
                return e
            },
            bytesToWords: function(f) {
                for (var j = [], e = 0, d = 0; e < f.length; e++, d += 8) {
                    j[d >>> 5] |= f[e] << 24 - d % 32
                }
                return j
            },
            wordsToBytes: function(e) {
                for (var f = [], d = 0; d < e.length * 32; d += 8) {
                    f.push(e[d >>> 5] >>> 24 - d % 32 & 255)
                }
                return f
            },
            bytesToHex: function(e) {
                for (var f = [], d = 0; d < e.length; d++) {
                    f.push((e[d] >>> 4).toString(16)), f.push((e[d] & 15).toString(16))
                }
                return f.join("")
            },
            hexToBytes: function(e) {
                for (var f = [], d = 0; d < e.length; d += 2) {
                    f.push(parseInt(e.substr(d, 2), 16))
                }
                return f
            },
            bytesToBase64: function(j) {
                if (typeof btoa === "function") {
                    return btoa(c.bytesToString(j))
                }
                for (var k = [], f = 0; f < j.length; f += 3) {
                    for (var e = j[f] << 16 | j[f + 1] << 8 | j[f + 2], d = 0; d < 4; d++) {
                        f * 8 + d * 6 <= j.length * 8 ? k.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e >>> 6 * (3 - d) & 63)) : k.push("=")
                    }
                }
                return k.join("")
            },
            base64ToBytes: function(f) {
                if (typeof atob === "function") {
                    return c.stringToBytes(atob(f))
                }
                for (var f = f.replace(/[^A-Z0-9+\/]/ig, ""), j = [], e = 0, d = 0; e < f.length; d = ++e % 4) {
                    d !== 0 && j.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(f.charAt(e - 1)) & Math.pow(2, -2 * d + 8) - 1) << d * 2 | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(f.charAt(e)) >>> 6 - d * 2)
                }
                return j
            }
        },
        a = a.charenc = {};
    a.UTF8 = {
        stringToBytes: function(d) {
            return c.stringToBytes(unescape(encodeURIComponent(d)))
        },
        bytesToString: function(d) {
            return decodeURIComponent(escape(c.bytesToString(d)))
        }
    };
    var c = a.Binary = {
        stringToBytes: function(e) {
            for (var f = [], d = 0; d < e.length; d++) {
                f.push(e.charCodeAt(d) & 255)
            }
            return f
        },
        bytesToString: function(e) {
            for (var f = [], d = 0; d < e.length; d++) {
                f.push(String.fromCharCode(e[d]))
            }
            return f.join("")
        }
    }
}();
(function() {
    var a = Crypto,
        e = a.util,
        f = a.charenc,
        c = f.UTF8,
        d = f.Binary,
        b = a.MD5 = function(i, g) {
            var j = e.wordsToBytes(b._md5(i));
            return g && g.asBytes ? j : g && g.asString ? d.bytesToString(j) : e.bytesToHex(j)
        };
    b._md5 = function(B) {
        B.constructor === String && (B = c.stringToBytes(B));
        for (var A = e.bytesToWords(B), v = B.length * 8, B = 1732584193, y = -271733879, x = -1732584194, z = 271733878, w = 0; w < A.length; w++) {
            A[w] = (A[w] << 8 | A[w] >>> 24) & 16711935 | (A[w] << 24 | A[w] >>> 8) & 4278255360
        }
        A[v >>> 5] |= 128 << v % 32;
        A[(v + 64 >>> 9 << 4) + 14] = v;
        for (var v = b._ff, u = b._gg, t = b._hh, s = b._ii, w = 0; w < A.length; w += 16) {
            var r = B,
                o = y,
                i = x,
                h = z,
                B = v(B, y, x, z, A[w + 0], 7, -680876936),
                z = v(z, B, y, x, A[w + 1], 12, -389564586),
                x = v(x, z, B, y, A[w + 2], 17, 606105819),
                y = v(y, x, z, B, A[w + 3], 22, -1044525330),
                B = v(B, y, x, z, A[w + 4], 7, -176418897),
                z = v(z, B, y, x, A[w + 5], 12, 1200080426),
                x = v(x, z, B, y, A[w + 6], 17, -1473231341),
                y = v(y, x, z, B, A[w + 7], 22, -45705983),
                B = v(B, y, x, z, A[w + 8], 7, 1770035416),
                z = v(z, B, y, x, A[w + 9], 12, -1958414417),
                x = v(x, z, B, y, A[w + 10], 17, -42063),
                y = v(y, x, z, B, A[w + 11], 22, -1990404162),
                B = v(B, y, x, z, A[w + 12], 7, 1804603682),
                z = v(z, B, y, x, A[w + 13], 12, -40341101),
                x = v(x, z, B, y, A[w + 14], 17, -1502002290),
                y = v(y, x, z, B, A[w + 15], 22, 1236535329),
                B = u(B, y, x, z, A[w + 1], 5, -165796510),
                z = u(z, B, y, x, A[w + 6], 9, -1069501632),
                x = u(x, z, B, y, A[w + 11], 14, 643717713),
                y = u(y, x, z, B, A[w + 0], 20, -373897302),
                B = u(B, y, x, z, A[w + 5], 5, -701558691),
                z = u(z, B, y, x, A[w + 10], 9, 38016083),
                x = u(x, z, B, y, A[w + 15], 14, -660478335),
                y = u(y, x, z, B, A[w + 4], 20, -405537848),
                B = u(B, y, x, z, A[w + 9], 5, 568446438),
                z = u(z, B, y, x, A[w + 14], 9, -1019803690),
                x = u(x, z, B, y, A[w + 3], 14, -187363961),
                y = u(y, x, z, B, A[w + 8], 20, 1163531501),
                B = u(B, y, x, z, A[w + 13], 5, -1444681467),
                z = u(z, B, y, x, A[w + 2], 9, -51403784),
                x = u(x, z, B, y, A[w + 7], 14, 1735328473),
                y = u(y, x, z, B, A[w + 12], 20, -1926607734),
                B = t(B, y, x, z, A[w + 5], 4, -378558),
                z = t(z, B, y, x, A[w + 8], 11, -2022574463),
                x = t(x, z, B, y, A[w + 11], 16, 1839030562),
                y = t(y, x, z, B, A[w + 14], 23, -35309556),
                B = t(B, y, x, z, A[w + 1], 4, -1530992060),
                z = t(z, B, y, x, A[w + 4], 11, 1272893353),
                x = t(x, z, B, y, A[w + 7], 16, -155497632),
                y = t(y, x, z, B, A[w + 10], 23, -1094730640),
                B = t(B, y, x, z, A[w + 13], 4, 681279174),
                z = t(z, B, y, x, A[w + 0], 11, -358537222),
                x = t(x, z, B, y, A[w + 3], 16, -722521979),
                y = t(y, x, z, B, A[w + 6], 23, 76029189),
                B = t(B, y, x, z, A[w + 9], 4, -640364487),
                z = t(z, B, y, x, A[w + 12], 11, -421815835),
                x = t(x, z, B, y, A[w + 15], 16, 530742520),
                y = t(y, x, z, B, A[w + 2], 23, -995338651),
                B = s(B, y, x, z, A[w + 0], 6, -198630844),
                z = s(z, B, y, x, A[w + 7], 10, 1126891415),
                x = s(x, z, B, y, A[w + 14], 15, -1416354905),
                y = s(y, x, z, B, A[w + 5], 21, -57434055),
                B = s(B, y, x, z, A[w + 12], 6, 1700485571),
                z = s(z, B, y, x, A[w + 3], 10, -1894986606),
                x = s(x, z, B, y, A[w + 10], 15, -1051523),
                y = s(y, x, z, B, A[w + 1], 21, -2054922799),
                B = s(B, y, x, z, A[w + 8], 6, 1873313359),
                z = s(z, B, y, x, A[w + 15], 10, -30611744),
                x = s(x, z, B, y, A[w + 6], 15, -1560198380),
                y = s(y, x, z, B, A[w + 13], 21, 1309151649),
                B = s(B, y, x, z, A[w + 4], 6, -145523070),
                z = s(z, B, y, x, A[w + 11], 10, -1120210379),
                x = s(x, z, B, y, A[w + 2], 15, 718787259),
                y = s(y, x, z, B, A[w + 9], 21, -343485551),
                B = B + r >>> 0,
                y = y + o >>> 0,
                x = x + i >>> 0,
                z = z + h >>> 0
        }
        return e.endian([B, y, x, z])
    };
    b._ff = function(i, h, j, m, l, n, k) {
        i = i + (h & j | ~h & m) + (l >>> 0) + k;
        return (i << n | i >>> 32 - n) + h
    };
    b._gg = function(i, h, j, m, l, n, k) {
        i = i + (h & m | j & ~m) + (l >>> 0) + k;
        return (i << n | i >>> 32 - n) + h
    };
    b._hh = function(i, h, j, m, l, n, k) {
        i = i + (h ^ j ^ m) + (l >>> 0) + k;
        return (i << n | i >>> 32 - n) + h
    };
    b._ii = function(i, h, j, m, l, n, k) {
        i = i + (j ^ (h | ~m)) + (l >>> 0) + k;
        return (i << n | i >>> 32 - n) + h
    };
    b._blocksize = 16;
    b._digestsize = 16
})();
//sha1
(function() {
    var f = Crypto,
        a = f.util,
        b = f.charenc,
        e = b.UTF8,
        d = b.Binary;
    var c = f.SHA1 = function(i, g) {
        var h = a.wordsToBytes(c._sha1(i));
        return g && g.asBytes ? h : g && g.asString ? d.bytesToString(h) : a.bytesToHex(h)
    };
    c._sha1 = function(o) {
        if (o.constructor === String) {
            o = e.stringToBytes(o)
        }
        var v = a.bytesToWords(o),
            x = o.length * 8,
            p = [],
            r = 1732584193,
            q = -271733879,
            k = -1732584194,
            h = 271733878,
            g = -1009589776;
        v[x >> 5] |= 128 << (24 - x % 32);
        v[((x + 64 >>> 9) << 4) + 15] = x;
        for (var z = 0; z < v.length; z += 16) {
            var E = r,
                D = q,
                C = k,
                B = h,
                A = g;
            for (var y = 0; y < 80; y++) {
                if (y < 16) {
                    p[y] = v[z + y]
                } else {
                    var u = p[y - 3] ^ p[y - 8] ^ p[y - 14] ^ p[y - 16];
                    p[y] = (u << 1) | (u >>> 31)
                }
                var s = ((r << 5) | (r >>> 27)) + g + (p[y] >>> 0) + (y < 20 ? (q & k | ~q & h) + 1518500249 : y < 40 ? (q ^ k ^ h) + 1859775393 : y < 60 ? (q & k | q & h | k & h) - 1894007588 : (q ^ k ^ h) - 899497514);
                g = h;
                h = k;
                k = (q << 30) | (q >>> 2);
                q = r;
                r = s
            }
            r += E;
            q += D;
            k += C;
            h += B;
            g += A
        }
        return [r, q, k, h, g]
    };
    c._blocksize = 16;
    c._digestsize = 20
})();
//sha256
(function() {
    var g = Crypto,
        b = g.util,
        c = g.charenc,
        f = c.UTF8,
        e = c.Binary;
    var a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
    var d = g.SHA256 = function(j, h) {
        var i = b.wordsToBytes(d._sha256(j));
        return h && h.asBytes ? i : h && h.asString ? e.bytesToString(i) : b.bytesToHex(i)
    };
    d._sha256 = function(q) {
        if (q.constructor === String) {
            q = f.stringToBytes(q)
        }
        var y = b.bytesToWords(q),
            z = q.length * 8,
            r = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
            s = [],
            K, J, I, G, F, E, D, C, B, A, p, o;
        y[z >> 5] |= 128 << (24 - z % 32);
        y[((z + 64 >> 9) << 4) + 15] = z;
        for (var B = 0; B < y.length; B += 16) {
            K = r[0];
            J = r[1];
            I = r[2];
            G = r[3];
            F = r[4];
            E = r[5];
            D = r[6];
            C = r[7];
            for (var A = 0; A < 64; A++) {
                if (A < 16) {
                    s[A] = y[A + B]
                } else {
                    var n = s[A - 15],
                        u = s[A - 2],
                        M = ((n << 25) | (n >>> 7)) ^ ((n << 14) | (n >>> 18)) ^ (n >>> 3),
                        L = ((u << 15) | (u >>> 17)) ^ ((u << 13) | (u >>> 19)) ^ (u >>> 10);
                    s[A] = M + (s[A - 7] >>> 0) + L + (s[A - 16] >>> 0)
                }
                var t = F & E ^ ~F & D,
                    k = K & J ^ K & I ^ J & I,
                    x = ((K << 30) | (K >>> 2)) ^ ((K << 19) | (K >>> 13)) ^ ((K << 10) | (K >>> 22)),
                    v = ((F << 26) | (F >>> 6)) ^ ((F << 21) | (F >>> 11)) ^ ((F << 7) | (F >>> 25));
                p = (C >>> 0) + v + t + (a[A]) + (s[A] >>> 0);
                o = x + k;
                C = D;
                D = E;
                E = F;
                F = G + p;
                G = I;
                I = J;
                J = K;
                K = p + o
            }
            r[0] += K;
            r[1] += J;
            r[2] += I;
            r[3] += G;
            r[4] += F;
            r[5] += E;
            r[6] += D;
            r[7] += C
        }
        return r
    };
    d._blocksize = 16;
    d._digestsize = 32
})();
//endform
var spadding = "iso7816";
var block = "OFB";

function get_json() {
    var b = getUserAgent();
    var e = new Object();
    var d = document.getElementById("txtPlaintext").value;
    var a = d.length;
    if (a === 0) {
        return false
    }
    e = [{
        id: "0",
        libreria: "cryptojs",
        algoritmo: "aes",
        user_agent: b,
        keySizeInBits: _keySizeInBits,
        block_modes: block,
        padding_schemes: spadding,
        message_length: a,
        encrypt: en_time,
        decrypt: de_time
    }];
    var c = JSON.stringify(e);
    return (c)
}

function _encrypt(i, n) {
    var y, c;
    var d, b, z, p, a, r;
    var k, j, h;
    var A;
    var x = "success",
        l = 0;
    if (l === 0) {
        c = document.getElementById("selKeySize");
        var o = selKeySizeChange(c.value);
        if (o === false) {
            alert("Can't encrypt: CORRUPT: invalid 'keySize'");
            l = 1
        }
        c = document.getElementById("selPad");
        var w = selPadChange(c.value);
        if (w === null) {
            alert("Can't encrypt: INVALID: padding: invalid parameters");
            l = 1
        }
        p = getMode(w);
        if (p === null) {
            alert("Can't encrypt: INVALID: mode block: " + p);
            l = 1
        }
    }
    if (l === 0) {
        var q = document.getElementById("salt").value;
        if (q.length === 0) {
            b = generate_salt(8)
        } else {
            b = q
        }
        var B = Crypto.PBKDF2(n, b, _keySize);
        var t = document.getElementById("iv").value;
        if (t.length === 0) {
            d = generate_iv(16)
        } else {
            d = t
        }
        try {
            k = new Date().getTime();
            i = utf8_encode(i);
            A = Crypto.AES.encrypt(i, B, {
                iv: d,
                mode: p
            });
            j = new Date().getTime();
            h = (j - k)
        } catch (v) {
            alert("Can't encrypt (cryptojs): Crypto.AES.encrypt: " + v.message);
            l = 1
        }
    }
    if (A === undefined) {
        l = 1
    }
    if (h === undefined) {
        h = 0
    }
    if (l !== 0) {
        x = "failure"
    }
    var u;
    u = {
        iv: d,
        mode: block,
        padding: spadding,
        keySize: _keySizeInBits,
        cipher: "aes",
        salt: b,
        ciphertext: base64_encode(A),
        time: h,
        status: x
    };
    var m = Crypto.util.hexToBytes(d);
    var s = Crypto.util.hexToBytes(b);
    var f = document.getElementById("txtPlaintext").value;
    var g;
    g = {
        passphrase: n,
        iv: "",
        ivInBytes: m,
        ivInHex: d,
        ivInBase64: base64_encode(d),
        salt: "",
        saltInBytes: s,
        saltInHex: b,
        saltInBase64: base64_encode(b),
        key: "",
        keyInBytes: "",
        keyInHex: B,
        keyInBase64: "",
        plaintext: f.trim(),
        ciphertext: A,
    };
    log_encrypt(u, g);
    return u
}

function _decrypt(json_ciphertext, passphrase) {
    var jsObject, objKey;
    var iv, salt, keySize, mode, cipher, status;
    var ivb, saltb;
    var t1, t2, time;
    var plaintext, ciphertext;
    var msg_status = "success",
        flag_status = 0;
    try {
        jsObject = eval("(" + json_ciphertext + ")");
        if (jsObject === null) {
            alert("Can't decrypt: INVALID: json decrypt: invalid object");
            flag_status = 1
        }
    } catch (e) {
        alert("Can't decrypt: INVALID: json decrypt: " + e.message);
        flag_status = 1
    }
    if (flag_status === 0) {
        status = jsObject.status;
        cipher = jsObject.cipher;
        ciphertext = base64_decode(jsObject.ciphertext);
        iv = jsObject.iv;
        salt = jsObject.salt;
        keySize = jsObject.keySize;
        mode = jsObject.mode;
        if (status !== "success") {
            alert("Can't decrypt: INVALID: json decrypt: invalid parameters");
            flag_status = 1
        }
        if ((flag_status === 0) && (cipher !== "aes")) {
            alert("Can't decrypt: INVALID: json decrypt: invalid parameters");
            flag_status = 1
        }
        if ((flag_status === 0) && (ciphertext === undefined)) {
            alert("Can't decrypt: CORRUPT: doesn't match 'ciphertext'");
            flag_status = 1
        }
        var flag_size = selKeySizeChange(keySize);
        if ((flag_status === 0) && (flag_size === false)) {
            alert("Can't decrypt: INVALID: json decrypt: invalid parameters");
            flag_status = 1
        }
        var pad = selPadChange(jsObject.padding);
        if (pad === null) {
            alert("Can't decrypt: INVALID: padding: invalid parameters");
            flag_status = 1
        }
        mode = getMode(pad);
        if (mode === null) {
            alert("Can't encrypt: INVALID: mode block: " + mode);
            flag_status = 1
        }
    }
    if (flag_status === 0) {
        var key = Crypto.PBKDF2(passphrase, salt, _keySize);
        try {
            t1 = new Date().getTime();
            plaintext = Crypto.AES.decrypt(ciphertext, key, {
                iv: iv,
                mode: mode
            });
            plaintext = utf8_decode(plaintext);
            t2 = new Date().getTime();
            time = (t2 - t1)
        } catch (e) {
            alert("Can't decrypt (cryptojs): Crypto.AES.decrypt: " + e.message);
            flag_status = 1
        }
    }
    if (plaintext === undefined) {
        flag_status = 1
    }
    if (time === undefined) {
        time = 0
    }
    if (flag_status !== 0) {
        msg_status = "failure"
    }
    var str = "<br/><label style='font-weight:bold'>* Decrypt: </label><br/>";
    str += "decryption took " + time + " milliseconds.<br/>";
    str += "length plaintext: " + plaintext.length + "<br/>";
    $("#ldec").html(str);
    var json;
    json = {
        iv: iv,
        mode: block,
        padding: spadding,
        keySize: _keySizeInBits,
        cipher: "aes",
        salt: salt,
        plaintext: plaintext,
        time: time,
        status: msg_status
    };
    return json
}

function generate_salt(b) {
    var c = Crypto.util.randomBytes(b);
    var a = Crypto.util.bytesToHex(c);
    return a
}

function generate_iv(c) {
    var b = Crypto.util.randomBytes(c);
    var a = Crypto.util.bytesToHex(b);
    return a
}

function getMode(a) {
    var b = null;
    if (block === "CBC") {
        b = new Crypto.mode.CBC(a)
    } else {
        if (block === "ECB") {
            b = new Crypto.mode.ECB(a)
        } else {
            if (block === "CFB") {
                b = new Crypto.mode.CFB(a)
            } else {
                if (block === "OFB") {
                    b = new Crypto.mode.OFB(a)
                } else {
                    if (block === "CTR") {
                        b = new Crypto.mode.CTR(a)
                    }
                }
            }
        }
    }
    return b
}

function cmdResetFormClick() {
    if ((document.getElementById("txtPlaintext") === null) || (document.getElementById("txtCiphertext") === null) || (document.getElementById("txtVerification") === null) || (document.getElementById("txtMessages") === null) || (document.getElementById("passphrase") === null)) {
        alert("form non valid!");
        return false
    }
    document.getElementById("txtPlaintext").value = _text;
    document.getElementById("lenPlaintext").innerHTML = _text.length;
    document.getElementById("txtCiphertext").value = "";
    document.getElementById("txtVerification").value = "";
    document.getElementById("txtMessages").value = "";
    document.getElementById("passphrase").value = "";
    document.getElementById("iv").value = "";
    document.getElementById("salt").value = "";
    if ((document.getElementById("selKeySize") === null) || (document.getElementById("selMode") === null) || (document.getElementById("selPad") === null)) {
        alert("select invalid!");
        return false
    }
    objK = document.getElementById("selKeySize");
    objK.value = 128;
    objM = document.getElementById("selMode");
    objM.value = "OFB";
    objP = document.getElementById("selPad");
    objP.value = "iso7816";
    spadding = "iso7816";
    block = "OFB";
    _keySizeInBits = 128;
    _keySize = _keySizeInBits / 8;
    en_time = "";
    de_time = "";
    resetDivAndButton()
}

function selBlockChange(a) {
    if ((a === "OFB") || (a === "CBC") || (a === "CFB") || (a === "CTR") || (a === "ECB")) {
        block = a;
        return true
    }
    return false
}

function selPadChange(b) {
    spadding = b;
    var a = null;
    if (b === "iso7816") {
        a = Crypto.pad.iso7816
    } else {
        if (b === "ansix923") {
            a = Crypto.pad.ansix923
        } else {
            if (b === "iso10126") {
                a = Crypto.pad.iso10126
            } else {
                if (b === "pkcs7") {
                    a = Crypto.pad.pkcs7
                } else {
                    if (b === "ZeroPadding") {
                        a = Crypto.pad.ZeroPadding
                    } else {
                        if (b === "NoPadding") {
                            a = Crypto.pad.NoPadding
                        }
                    }
                }
            }
        }
    }
    return a
};
//fin