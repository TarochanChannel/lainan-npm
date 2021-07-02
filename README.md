# lainan-npm

## インストール
```shell
npm install lainan
```
これだけで簡単にインストールできます。

## 使い方
app.js
```js
const lainan = require("lainan");

lainan("こんにちは", (data) => {
    console.log(data);
});

lainan("こんにちは").then((data) => {
    console.log(data);
});

(async () => {
    console.log(await lainan("こんにちは"));
})();

//どれもconsole.logに渡しているものは同じ
/*
{
  reaction: 'こんにちにゃんにゃん',
  responder: 'Lainan',
  search_word: null,
  jishin: '',
  version: '1.2.2',
  ips: 1,
  responder_bool: {
    IsLainan: true,
    IsWiki: false,
    IsCustomWiki: false,
    IsAuto_search: false,
    IsNone: false
  },
  extensions: {
    timer: {
      IsMsgTimer: false,
      timer_ms: null,
      timer_end: null,
      timer_start: null
    },
    discord_emojis: { IsMsgDiscordEmojis: false, DiscordEmoji: null }
  }
}
*/
```

### その他
このモジュールを利用する前に[LainanAPI利用規約](https://lainan.one/teams.html)をご覧ください。