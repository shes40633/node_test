var sqlcon = require('../mysql');
var fs = require('fs');
const jwt = require('jsonwebtoken');
// con.connect();

    
const SqlConnect = () => {
    return new Promise((resolve,reject) => {
        con = sqlcon.SQLConnection();
        con.connect((err) => {
            if (err) {
                reject(err);
            } else {
                resolve('success');
            }
        });
    });
  }

const SelectSql = (value) =>{
    return new Promise((resolve,reject)=>{
        var post = [value.body.Account, value.body.Password];
        con.query('SELECT * FROM userdata WHERE Account=? AND Password=?', post,
        (err, results) => {
            if (err) {
                reject(err);
                console.error('SQL', err);
            };
            if (results) {
                resolve(results);
            };
            con.end();
        });
    });
}

const SelectUser = async (Value) =>{
    await SqlConnect();
    const SelectData = await SelectSql(Value);
    var user = { Account: SelectData[0].Account, Password : SelectData[0].Password}
    var token = jwt.sign(user, 'shhhhh');
    return token;
}


const Authtoken = (user,token) =>{
    var decoded = jwt.verify(token, 'shhhhh');
    if(decoded.username == user.username){
        return user
    }else{
        res.sendStatus(403);
    }
}


// var SqlConnect = new Promise((resolve, reject) => {
//     con.connect((err) => {
//         if (err) {
//             reject(err);
//         } else {
//             resolve('success');
//         }
//     });
// });


// var SelectUser = async (value) => {

//     let a = [];
//     await SqlConnect
//         .then(() => {
//             return new Promise((resolve, reject) => {
//                 var post = [value.body.Account, value.body.Password];
//                 con.query('SELECT * FROM userdata WHERE Account=? AND Password=?', post,
//                     (err, results) => {
//                         if (err) {
//                             console.error('SQL', err);
//                         };
//                         if (results) {
//                             resolve(results);
//                             a = results;
//                             // console.log(a);
//                             // console.log(results);
//                             // return results;
//                         };
//                     });
//             })

//         }).then((error) => {
//             // return error;
//         });

//     return a;
// }


  
module.exports = {
    SelectUser,
    Authtoken
}; 



  
