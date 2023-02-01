const assert = require("assert")
const jsonAccountUpdater = require("../jsonAccountUpdater")
const _ = require("lodash")

describe("updateAccounts()", function (){

  function doTest(accounts, logons, expected, msg){
    it(`arguments: accounts: ${JSON.stringify(accounts)} 
        logons: ${JSON.stringify(logons)}\n function ${msg}\n ` +
      `expected: ${JSON.stringify(expected)}\n `, function () {
      /*
      console.log("---------------------------------------------------------")
      console.log(JSON.stringify(jsonAccountUpdater.update(accounts, logons)))
      console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      console.log(jsonAccountUpdater.update(accounts, logons))
      console.log("---------------------------------------------------------")

       */
      assert.ok(_.isEqual(jsonAccountUpdater.update(accounts, logons), expected))
      //assert.equal(jsonAccountUpdater.update(accounts, logons), expected)
    });
  }

  let logons = {
    "Logons": [
      {
        "Id": 21,
        "Name": "John F. Shepherd",
        "Date": new Date(2017, 1, 24, 22, 13, 16, 241)
      }
    ]
  };

  let accounts = {
    "Accounts": [
      {
        "Id": 21,
        "Name": "John Shepherd",
        "LogonCount": 13,
        "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
      }
    ]
  };
  let expected = {
    "Accounts": [
      {
        "Id": 21,
        "Name": "John F. Shepherd",
        "LogonCount": 14,
        "LastLogon": new Date(2017, 1, 24, 22, 13, 16, 241)
      }
    ]
  }

  doTest(accounts, logons, expected, "should change date and name")
  let accountsSecond = {
    "Accounts": [
      {
        "Id": 21,
        "Name": "John Shepherd",
        "LogonCount": 13,
        "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
      }
    ]
  };
  let logonsSecond = {
    "Logons": [
      {
        "Id": 23,
        "Name": "roman kukla",
        "Date": new Date(2017, 1, 24, 22, 13, 16, 241)
      }
    ]
  };
  let expectedSecond = {
    "Accounts": [
      {
        "Id": 21,
        "Name": "John Shepherd",
        "LogonCount": 13,
        "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
      },
      {
        "Id": 23,
        "Name": "roman kukla",
        "LastLogon": new Date(2017, 1, 24, 22, 13, 16, 241),
        "LogonCount": 1
      }]
  }

  doTest(accountsSecond, logonsSecond, expectedSecond, "should add from logons  new user")
  let accountsThird = {
    "Accounts": [
      {
        "Id": 30,
        "Name": "Nikolay",
        "LogonCount": 2,
        "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
      },
      {
        "Id": 21,
        "Name": "John Shepherd",
        "LogonCount": 13,
        "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
      }
    ]
  };
  let logonsThird = {
    "Logons": [
      {
        "Id": 23,
        "Name": "roman kukla",
        "Date": new Date(2017, 1, 24, 22, 13, 16, 241)
      }
    ]
  };
  let expectedThird = {
    "Accounts": [
      {
        "Id": 21,
        "Name": "John Shepherd",
        "LogonCount": 13,
        "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
      },
      {
        "Id": 23,
        "Name": "roman kukla",
        "LastLogon": new Date(2017, 1, 24, 22, 13, 16, 241),
        "LogonCount": 1
      },{
        "Id": 30,
        "Name": "Nikolay",
        "LogonCount": 2,
        "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
      }]
  }

  doTest(accountsThird, logonsThird, expectedThird, "result should be sorted by id")
  let accountsFourth = {
    "Accounts": [
      {
        "Id": 21,
        "Name": "John Shepherd",
        "LogonCount": 13,
        "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
      }
    ]
  };
  let logonsFourth ={
    "Logons": [
    {
      "Id": 21,
      "Name": "John F. Shepherd",
      "Date": new Date(2016, 9, 23, 11, 13, 16, 541)
    }
  ]
};
  let expectedFourth = {
    "Accounts": [
      {
        "Id": 21,
        "Name": "John Shepherd",
        "LogonCount": 14,
        "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
      }
    ]
  };

  doTest(accountsFourth, logonsFourth, expectedFourth,
    "should only updates last logon date and name when a logon is later")

})


/*
  let accounts = {
    "Accounts": [
      {
        "Id": 30,
        "Name": "Nikolay",
        "LogonCount": 2,
        "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
      },
      {
        "Id": 21,
        "Name": "John Shepherd",
        "LogonCount": 13,
        "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
      }
    ]
  };
  let logons = {
    "Logons": [
      {
        "Id": 23,
        "Name": "roman kukla",
        "Date": new Date(2017, 1, 24, 22, 13, 16, 241)
      }
    ]
  };
  let expected= {
    "Accounts": [
      {
        "Id": 21,
        "Name": "John Shepherd",
        "LogonCount": 13,
        "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
      },
      {
        "Id": 23,
        "Name": "roman kukla",
        "Date": new Date(2017, 1, 24, 22, 13, 16, 241),
        "LogonCount": 1
      },{
        "Id": 30,
        "Name": "Nikolay",
        "LogonCount": 2,
        "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
      }]
  }

  doTest(accounts, logons, expected, "should")
  */