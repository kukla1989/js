const _ = require("lodash")
let assert = require("assert")
let searchJSONForAnyKeyValuePair = require("../searchJSONForAnyKeyValuePair")

describe("findCharacters", function (){

  function doTest(inputs, expected){
    it(`function findCharacters with args: ${JSON.stringify(inputs.obj)}
        and (${inputs.key}: "${inputs.value}") should find: 
        ${JSON.stringify(expected)}`, function (){
      assert.ok(_.isEqual(searchJSONForAnyKeyValuePair.find(inputs.obj, inputs.key, inputs.value),
                    expected))
    })
  }

  let input1 = {
    characters: [
      { name: "Dipper Pines", age: "12", speciality: "adventurer" },
      {
        name: "Mabel Pines",
        age: "12",
        speciality: "energetic optimist"
      },
      { name: "Grunkle Stan", age: "Unknown", speciality: "shyster" },
      {
        name: "Soos Ramirez",
        age: "22",
        speciality: " lovable man-child"
      },
      {
        name: "Wendy Corduroy",
        age: "15",
        speciality: "sociable and nonchalant"
      },
      { name: "Waddles", age: "Unknown", speciality: "pig stuff" },
      {
        name: "Tambry",
        age: "15",
        speciality: "sociable and nonchalant"
      }
    ]
  }
  
  let tambry = [{
    name: "Tambry",
    age: "15",
    speciality: "sociable and nonchalant"
  }]

  let dipper = [{ name: 'Dipper Pines', age: '12', speciality: 'adventurer' }]

  doTest({obj: input1, key: "name", value: "Tambry"}, tambry)
  doTest({obj: input1, key: "name", value: "tambry"}, tambry)
  doTest({obj: input1, key: "favColour", value: "Grey"}, [])
  doTest({obj: input1, key: "name", value: "Dipper Pines"}, dipper)
  doTest({obj: input1, key: "name", value: "Not valid val"}, [])
})