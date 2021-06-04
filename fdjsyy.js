#船长著作 2020.06.04

/*
樊登读书-解锁课程fdjske

MITM = gateway-api.dushu365.com

[rewrite_local]
^https:\/\/gateway-api\.dushu365\.com*

[rewrite_local]
#樊登读书解锁付费課程
^https:\/\/gateway-api\.dushu365\.com\/smart-orch\/program\/v100\/\* url script-response-body https://raw.githubusercontent.com/wxyzGithub/js/main/fdjsyy.js

*/

var body = $response.body;
body=body.replace(/free":\w+/g,'free":true');
$done({body});




