function doPost(e) {

  if (!e) {

    //for Test. Slackからは以下のパラメータで飛んできます。
    e = {
      parameter : {
        team_id : "T0001",
        channel_id : "Cxxxxxx",
        channel_name : "xxxxxxxx",
        timestamp : "1355517523.000005",
        user_id : "Uxxxxxxxxx",
        user_name : "wataru-kurashima",
        text : "hello, world",
        trigger_word : "MyFirstBot:",
        command : "",
        token : "xxxxxxxxxxxxxxxxx"
      }
    };
  }

  //slackのスラッシュコマンドのtoken。ここに含まれていない場合はErrorにする。
  var slashtoken = ['xxxxxxxxxxxxxxxxx'];
  if (!slashtoken.some(function(v){ return v === e.parameter.token })) {
    throw new Error("invalid token.");
  }

  postSlack(e.parameter.channel_id,e.parameter.user_name);
  return null;
}

function postSlack(channel_id, user_name) {
  var prop = PropertiesService.getScriptProperties().getProperties();
  var slackApp = SlackApp.create(prop.token);
  var postChannelId = channel_id
  var option = {
    username: "NullpoBot",
    icon_emoji: ":nullpo:",
    link_names: 1,
    unfurl_media: true
  };
  
  var text = "```\n"+
             "　　 （　・∀・）　　　|　|　ｶﾞｯ\n"+
             "　　と　　　　）　 　 |　|\n"+
             "　　　 Ｙ　/ノ　　　 人\n"+
             "　　　　 /　）　 　 < 　>__Λ∩\n"+
             "　　 ＿/し'　／／. Ｖ｀Д´）/ ←>>"+user_name+"\n　　（＿フ彡　　　　　 　　/\n"+
             "```";

  var response = slackApp.postMessage(postChannelId, text, option);
  Logger.log(response);

}