//seek(data, find) from FindObjByKeyValueInAnyObj find all object
// that contain key/value (find arg) from any data object
//
exports.FindObj = class FindObjByKeyValueInAnyObj {
   seek(data, find){
    this.output = []
     return this.findObj(data, find)
   }

   findObj(data, find) {
    if (!this.isObjectWithProperty(data)) {
      return this.output;
    }

    for (let key in data) {
      if (key === find[0] && data[key] === find[1]) {
        this.output.push(data)
      }
      if (this.isObjectWithProperty(data[key])) {
        this.findObj(data[key], find)
      }
    }

    return this.output
  }

  isObjectWithProperty(obj) {
    if (typeof obj === "object" && obj !== null && Object.keys(obj).length !== 0) {
      return true;
    }
  }
}


//let findObj = new this.FindObj()
//console.log(findObj.seek({a: "some val", b: {findMe: "pc"}}, ["findMe", "pc"]))/// [{findMe: "pc"}])

