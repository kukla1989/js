let assert = require('assert');
let RGBtoHEX = require('../RGBtoHEX');
describe("rgbToHex", function() {

  function makeTest(rgb, hexExpected) {
    it(` rgb(${rgb})  should convert in hex #${hexExpected}`, function () {
      assert.equal(RGBtoHEX.convert(rgb[0], rgb[1], rgb[2]), hexExpected);
    });
  }

  let rgbAndCorrespondHex = {'EDFFFF': [237,255,255], 'EEFFFF': [238,255,255],
                             '000104': [0, 1, 4] ,    '78A0DE': [120, 160, 222],
                             '000000': [0, 0, 0],     '010A64': [1, 10, 100]    }
  for(const hex in rgbAndCorrespondHex){
    makeTest(rgbAndCorrespondHex[hex], hex)
  }

  it("if argument less then zero or more then 255 than hexadecimal should be" +
    "00 or FF correspond, here rgb(-1,555,-777) should be equal 00FF00", function (){
    assert.equal(RGBtoHEX.convert(-1, 555, -777), '00FF00')
  })
});

