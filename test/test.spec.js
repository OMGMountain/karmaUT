// describe('测试用例', function () {
//     it('1等于1', function () {
//         expect(1).to.equal(1);
//         console.log('logtest');
//     });
// });


// 两种引入方式都可以
import * as An from "../sdk/AnalysysAgent_JS_SDK.min.js"
// // var An = require('../sdk/AnalysysAgent_JS_SDK.min.js');

// // 尝试引入 微信SDK 测试API   wx is not defined 报错，执行不下去，单测API 也不行。
// // import * as An from "../sdk/AnalysysAgent_WX_SDK.min3.js" 
// // console.log(An)

// function checkURL (URL) {
//     var str = URL;
//     //判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
//     //下面的代码中应用了转义字符"\"输出一个字符"/"
//     var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
//     var objExp = new RegExp(Expression);
//     if (objExp.test(str) == true) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function getQueryString (name) {
//     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
//     var r = window.location.search.substr(1).match(reg);
//     if (r != null) return unescape(r[2]);
//     return null;
// }
// var appkey = getQueryString("appkey");
// if (!appkey) {
//     appkey = "ca715e78ae929a48" //"af0a9bbfdbebafce"
// }
// var uploadURL = getQueryString("uploadURL");
// if (!uploadURL || !checkURL(uploadURL)) {
//     uploadURL = 'https://arksdktest.analysys.cn:4069'//'http://192.168.220.167:8089'// 'https://arkpaastest.analysys.cn:4089'
// }

// (function (config) {
//     window.AnalysysAgent = window.AnalysysAgent || []
//     window.AnalysysAgent.methods = 'identify alias reset track profileSet profileSetOnce profileIncrement profileAppend profileUnset profileDelete registerSuperProperty registerSuperProperties unRegisterSuperProperty clearSuperProperties getSuperProperty getSuperProperties pageView debugMode auto appkey name uploadURL hash visitorConfigURL autoProfile autoWebstay encryptType pageProperty duplicatePost NPSConfigURL getDistinctId sendType'.split(' ');
//     function factory (b) {
//         return function () {
//             var a = Array.prototype.slice.call(arguments);
//             a.unshift(b);
//             window.AnalysysAgent.push(a);
//             return window.AnalysysAgent;
//         }
//     };
//     for (var i = 0; i < AnalysysAgent.methods.length; i++) {
//         var key = window.AnalysysAgent.methods[i];
//         AnalysysAgent[key] = factory(key);
//     }
//     for (var key in config) {
//         if (!AnalysysAgent[key]) {
//             AnalysysAgent[key] = factory(key);
//         }
//         AnalysysAgent[key](config[key])
//     }
// })({
//     appkey: appkey, //APPKEY
//     debugMode: 2,
//     sendType: 'post'
// })

describe('JS SDK', function () {
    it('注册超级属性 (a,1)', function () {
        expect(An.registerSuperProperty("a", 1)).to.equal(undefined);
    });
    it('注册超级属性 ([b,c],2)', function () {
        expect(An.registerSuperProperty(["b", "c"], 2)).to.equal(undefined);
        console.log("所有超级属性", An.getSuperProperties())
    });
    it('注册超级属性 ({d:5},4)', function () {
        expect(undefined).to.equal(An.registerSuperProperty({ "d": 5 }, 4));
        console.log("所有超级属性", An.getSuperProperties())
    });
    it('注册多个超级属性 ({e:6})', function () {
        expect(An.registerSuperProperties({ "e": 6 })).to.equal(undefined);
    });
    it('获取所有超级属性 { "a": 1, "b": "", "c": "", "d": 5, "e": 6 }', function () {
        expect(An.getSuperProperties()).to.deep.equal({ "a": 1, "b": "", "c": "", "d": 5, "e": 6 });
        console.log("所有超级属性", An.getSuperProperties())
    });
    // 超级属性 b的值 “” ，删除不掉。
    it('清除某个超级属性 (b)', function () {
        expect(An.unRegisterSuperProperty("b")).to.equal(undefined);
        console.log("所有超级属性111", An.getSuperProperties())
    });
    it('获取所有超级属性 {"a": 1, "c": "", "d": 5, "e": 6 }', function () {
        expect(An.getSuperProperties()).to.deep.equal({ "a": 1, "b": "", "c": "", "d": 5, "e": 6 });
        console.log("所有超级属性", An.getSuperProperties())
    });
    it('清除所有超级属性', function () {
        expect(An.clearSuperProperties()).to.equal(undefined);
    });
    it('获取所有超级属性 {}', function () {
        expect(An.getSuperProperties()).to.deep.equal({});
        console.log("所有超级属性", An.getSuperProperties())
    });
    // 获取 匿名id   getDistinctId
    it('getDistinctId', function () {
        expect(An.getDistinctId()).to.not.equal(undefined);
        console.log("getDistinctId", An.getDistinctId())
    });
    //页面浏览
    it('pageView', function () {
        expect(An.pageView('hhhh', { "c": 1 })).to.equal(undefined);
        console.log("pageView", An.pageView('hhhh', { "c": 1 }))
    });
    // 用户关联
    it('alias', function () {
        expect(An.alias('hhhh', 'aaas')).to.equal(undefined);
        console.log("alias", An.pageView('hhhh', 'aaa'))
    });
    // 获取预置属性  getPresetProperties
    it('getPresetProperties', function () {
        expect(An.getPresetProperties()).to.include.keys('$lib', '$lib_version', '$platform', '$debug', '$screen_width', '$screen_height', '$time_zone', '$language', '$first_visit_time');
        console.log("getPresetProperties", An.getPresetProperties())
    });
    // identify
    it('identify', function () {
        expect(An.identify('hhhh', '22222')).to.equal(undefined);
        console.log("identify", An.identify('hhhh', '22222'))
    });
    //  profileAppend profileDelete profileIncrement profileSet  profileSetOnce  profileUnset 
    it('profileSet', function () {
        expect(An.profileSet('aa', '11')).to.equal(undefined);
        console.log("profileSet", An.profileSet('aa', '11'))
    });
    // profileSetOnce (只写一个参数) 
    it('profileSetOnce', function () {
        expect(An.profileSetOnce('bb', '22')).to.equal(undefined);
        console.log("profileSetOnce", An.profileSetOnce('bb', '22'))
    });
    it('profileUnset', function () {
        expect(An.profileUnset('bb')).to.equal(undefined);
        console.log("profileUnset", An.profileUnset('bb'))
    });
    it('profileIncrement', function () {
        expect(An.profileIncrement('cc', "20")).to.equal(undefined);
        console.log("profileIncrement", An.profileIncrement('cc', '20'))
    });
    it('profileAppend', function () {
        expect(An.profileAppend('dd', 44)).to.equal(undefined);
        console.log("profileAppend", An.profileAppend('dd', 44))
    });
    it('profileDelete', function () {
        expect(An.profileDelete()).to.equal(undefined);
        console.log("profileDelete", An.profileDelete())
    });
    it('reset', function () {
        expect(An.reset()).to.equal(undefined);
        console.log("reset", An.reset())
    });
    it('track', function () {
        expect(An.track('payment', { 'ee': 11 })).to.equal(undefined);
        console.log("track", An.track('payment', { 'ee': 11 }))
    });
    it('freeApi', function () {
        expect(An.freeApi('track')).to.equal(undefined);
        console.log("freeApi", An.freeApi('track'))
    });
});
