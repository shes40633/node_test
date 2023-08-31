
var path = require('path');
var con = require('../mysql');
var fs = require('fs');
const {SelectUser,Authtoken} = require('../config/auth');
const jwt = require('jsonwebtoken');
var app = require('../app');



// 與資料庫建立連線
// con.connect();
// if(con){
//   console.log('success');
// }




class IndexController {

    index(req, res) {
        // add1(10).then(v => {
        //     res.json(v);
        // });
    }

    connect(req, res) {
        res.sendFile(path.join(__dirname, '../views', 'index.html'));
    }

    rescookie(req, res) {
        res.sendFile(path.join(__dirname, '../views', 'index.html'));
    }

    CheckData(req, res) {


        if (req.body.Account != null && req.body.Password != null) {
            var Account = req.body.Account;
            var Password = req.body.Password;
        } else {
            res.json('error');
        }
        console.log(req.body)
        
        SelectUser(req).then(results=>{
            // res.cookie('token',results);
            // tt = authuser.Authtoken(req.body.Account,results);
            console.log(results);
            res.send('success');
        });
        

        
    }

    Create(req, res) {
        res.sendFile(path.join(__dirname, '../views', 'create.html'));
    }

    CreateData(req, res) {
        var Method = req.method;
        if (Method == "POST") {

            if (req.body.Account != null && req.body.Password != null) {
                var Account = req.body.Account;
                var Password = req.body.Password;
                var CreateSql = `INSERT INTO userdata (Account,Password) VALUES ('${Account}','${Password}')`;

            } else {
                res.json('error');
            }


            con.query(CreateSql, function (err, data) {
                if (err) {
                    throw err
                };
                if (data) {
                    res.json('success');
                };
            });


        }

    }
}



// con.end();

module.exports = IndexController;