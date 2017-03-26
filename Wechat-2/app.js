'use strict'
const Koa = require('koa');
const app = new Koa();
var util = require('./util/util')
var path = require('path')
var weChat = require('./weChat/weChat')
var fpath = path.join(__dirname, './config/wechat.txt')

var config = {
    wechat: {
        appID: 'wx5b71b0f7a4dac611',
        appSecret: 'e0eac8fcaca226c23d94ca379aab77aa',
        token: 'gufanyuanyingbikongjin',
        getAccessToken: function() {
            return util.readFileAsync(fpath);
        },
        saveAccessToken: function(fcontent) {
            return util.writeFileAsync(fpath, fcontent);
        }
    }
}
app.use(async function (ctx, next) {
    // var p = new Promise(function (resovle, reject) {
    //     resolve(ctx, config.wechat);
    // });
    // p.then(weChat())
    // .catch(function (err) {
    //     console.log(err);
    // })
    weChat(ctx, config.wechat);
    //await next(weChat(ctx, next, config.wechat));
    
});

app.listen(1234)
console.log('listening: 1234')