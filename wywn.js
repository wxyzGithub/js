/*
#网易蜗牛读书


 

*/

var body = $response.body;


body=body.replace(/"tradeEndTime":\d+/g,'"tradeEndTime":1970380277000');


$done({body});
