/* Lainan API
Create by Renorari */

const fetch = require('node-fetch');

module.exports = (text = String(), cb = Function()) => {
    return new Promise((resolve, reject) => {
        fetch("https://api.lainan.one/?msg=" + encodeURI(text))
            .then(res => {
                if (res.status == 200) {
                    res.json().then(json => {
                        if (typeof cb == "function") {
                            cb(json);
                            resolve(json);
                        }else{
                            resolve(json);
                        };
                    });
                } else {
                    reject(`リクエストエラー: LainanAPIから返されたステータスが200ではありません。(${res.status})`);
                };
            });
    });
};