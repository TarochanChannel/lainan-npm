/* Lainan API
Create by Renorari */

const fetch = require('node-fetch');

module.exports = (text = String(), cb = Function()) => {
    return new Promise((resolve, reject) => {
        fetch("https://api.lainan.one/?msg=" + encodeURI(text))
            .then(res => {
                if (res.status == 200) {
                    res.json().then(json => {
                        if (json.version.startsWith("1")) {
                            if (typeof cb == "function") {
                                cb(json);
                                resolve(json);
                            } else {
                                resolve(json);
                            };
                        } else {
                            reject(`バージョンエラー: 互換性のないLainanAPIバージョンが指定されました。(${json.version})`);
                        }
                    });
                } else {
                    reject(`リクエストエラー: LainanAPIから返されたステータスが200ではありません。(${res.status})`);
                };
            });
    });
};