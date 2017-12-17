# gas-NullpoBot

Slackでの「ぬるぽ」発言に対して「ガッ」するBot。

## 準備

1. SlackでOutgoing Webhookを設定する
Trigger Wordに「ぬるぽ,ヌルポ,ﾇﾙﾎﾟ,NULLPO,nullpo,Nullpo,NullPo,NPE」など好みで指定
2. 1.で設定したOutgoing WebhookのTokenでコード.gsの23行目`var slashtoken = ['xxxxxxxxxxxxxxxxx'];` のxxxを置き換える
3. GASのメニューから「公開」→「Webアプリケーションとして導入」を選択。「現在のウェブ アプリケーションの URL」を1.のWebhookのURL(s)に貼り付ける
4. GASにSlackAppをインストールする [link](https://qiita.com/soundTricker/items/43267609a870fc9c7453)
5. SlackのAPIトークンをGASの「ファイル」→「プロジェクトのプロパティ」→「スクリプトのプロパティ」にプロパティ名:token、値:APIトークンの値で指定する
使ったことないけどOAuth対応の新しいAPIトークン使うほうがセキュア。
6. (option):nullpo:で呼び出せるSlack emojiを登録しておく
