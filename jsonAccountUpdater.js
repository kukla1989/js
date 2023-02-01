// https://www.codewars.com/kata/588d5898277e86e2ce000070/train/javascript

exports.update = function updateAccounts(accounts, logons){
  sortByEmptyName(logons.Logons) // rearrange accounts with empty name in the end
  let userAccount;
  logons.Logons.forEach((userLog) => {
    userAccount = findUserById(accounts, userLog.Id);
    if(userAccount){
      updateUser(userAccount, userLog);
    } else {
      addUserToAccounts(accounts, userLog);
    }
  })
  sortById(accounts);
  return accounts;
}

function sortByEmptyName(logons){
  for(let i = 0; i < logons.length - 1; i++){
    if(logons[i].Name === ""){
      logons.push(...logons.splice(i, 1));
    }
  }
}

function sortById(accounts){
  accounts.Accounts.sort((a, b) => {
    if(a.Id > b.Id) return 1;
    if(a.Id < b.Id) return -1;
    return 0
  })
}

function addUserToAccounts(accounts, user){
  user.LogonCount = 1;
  user.LastLogon = user.Date;
  delete user.Date;
  accounts.Accounts.push(user);
}
//args: userAcc: user from Accounts array, it will be updated
//      userUpdate: from this object take info to update userAcc
function updateUser(userAcc, userUpdate){
  if(userAcc.LastLogon < userUpdate.Date) {
    userAcc.LastLogon = userUpdate.Date;
    if (userUpdate.Name) userAcc.Name = userUpdate.Name;
  }
  userAcc.LogonCount += 1;
}

function findUserById(accounts, userId){
  for(let user of accounts.Accounts){
    if(user.Id === userId) return user;
  }
}
/*
var logons = {
  "Logons": [
    {
      "Id": 5,
      "Name": "Sarah Miller",
      "Date": new Date(2017, 1, 23, 10, 12, 4, 545)
    },
    {
      "Id": 5,
      "Name": "",
      "Date": new Date(2017, 1, 25, 10, 12, 4, 545)
    },
    {
      "Id": 5,
      "Name": "Sarah Parker-Miller",
      "Date": new Date(2017, 1, 24, 10, 12, 4, 545)
    }
  ]
};
var accounts = {
  "Accounts": [
    {
      "Id": 21,
      "Name": "John Shepherd",
      "LogonCount": 13,
      "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
    }
  ]
};
const expected = {
  "Accounts": [
    {
      "Id": 5,
      "Name": "Sarah Parker-Miller",
      "LogonCount": 3,
      "LastLogon": new Date(2017, 1, 25, 10, 12, 4, 545)
    },
    {
      "Id": 21,
      "Name": "John Shepherd",
      "LogonCount": 13,
      "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
    }
  ]
};

console.log(this.update(accounts, logons))
*/

