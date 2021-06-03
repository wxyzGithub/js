圈X
[rewrite_local]
#樊登读书解锁付费課程
^https:\/\/api.*.com\/* url script-response-body https://raw.githubusercontent.com/wxyzGithub/js/main/fdjsyy.js
^https:\/\/gateway-api.*.com(\/resource-orchestration-system\/knowledge\/v100\/mainList|\/resource-orchestration-system\/program\/content) url script-response-body https://raw.githubusercontent.com/wxyzGithub/js/main/fdjsyy.js

[mitm]
hostname= gateway-api.*.com,api.*.com
 



*/

body = $response.body.replace(/isBuyed":\w+/g, 'isBuyed":true').replace(/buyed":\w+/g, 'buyed":true').replace(/trial":\w+/g, 'trial":true').replace(/free":\w+/g, 'free":true').replace(/hasBuy":\w+/g, 'hasBuy":1')                   ;
$done({body});
