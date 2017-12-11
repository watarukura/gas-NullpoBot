# gas-NullpoBot

Slackでの「ぬるぽ」発言に対して「ガッ」するBot。

## 準備

1. SlackでOutgoing Webhookを設定する
2. 1.で設定したOutgoing Webhookのtokenでコード.gsの23行目`var slashtoken = ['xxxxxxxxxxxxxxxxx'];` のxxxを置き換える
3. GASにSlackAppをインストールする [link](https://qiita.com/soundTricker/items/43267609a870fc9c7453)
4. (option):nullpo:で呼び出せるSlack emojiを登録しておく
