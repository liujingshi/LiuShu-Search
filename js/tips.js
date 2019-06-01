
window.sogou = {
    sug: function (data, p2) {
        var res = data[1];
        if (res != undefined) {
            showTip(res);
        }
    }
};


var tip = {
    baidu: function (keyword) {
        var jsonpCallback = 'jQuery110205923550845390089_1559112413685';
        requestTip('https://www.baidu.com/sugrec', jsonpCallback, {
            pre: 1,
            p: 3,
            ie: 'utf-8',
            json: 1,
            prod: 'pc',
            from: 'pc_web',
            sugsid: '1435,28937,21090,19897,29063,28518,29099,28833,28585,26350,28702',
            wd: keyword,
            req: '2',
            csor: '5',
            pwd: '',
            cb: jsonpCallback,
            _: '1559112413692'
        }, function (data) {
            var res = data.g;
            if (res != undefined) {

                var ts = [];
                for (var i in res) {
                    ts.push(res[i].q)
                }

                showTip(ts);

            }
        });
    },
    s360: function (keyword) {
        var jsonpCallback = 'suggest_so';
        requestTip('https://sug.so.360.cn/suggest', jsonpCallback, {
            callback: jsonpCallback,
            encodein: 'utf-8',
            encodeout: 'utf-8',
            format: 'json',
            fields: 'word',
            word: keyword,
            huid: '11lFNRuAoViT8N+9CRb9r9S8KdsTkiLKfxEChWXlM6hFs='
        }, function (data) {
            var res = data.result;
            if (res != undefined) {

                var ts = [];
                for (var i in res) {
                    ts.push(res[i].word);
                }

                showTip(ts);

            }
        });
    },
    sogou: function (keyword) {
        var jsonpCallback = 'jsonp';
        requestTip('https://www.sogou.com/suggnew/ajajjson', jsonpCallback, {
            key: keyword,
            type: 'web',
            ori: 'yes',
            pr: 'web',
            abtestid: 8,
            ipn: '',
            t: '1559311064194',
            suguuid: '9c7c9282-c932-4d02-8f4f-f8b8ee2754e7',
            ip: '47.52.204.253',
            iploc: 2101,
            suid: 'B8B8C8B62208990A000000005CF132D2',
            yyid: null,
            pid: 'sogou',
            policyno: null,
            mfp: null,
            hs: 'https',
            mp: 1,
            prereq_a: 'a',
            sugsuv: '0047C07EB6C8C1035CF132D3E730D526',
            sugtime: '1559311088435'
        }, function (data) {
            // 在最上面 window.sogou.sug
        });
    },
    // bing: function (keyword) {
    //     var jsonpCallback = '';
    //     requestTip('https://cn.bing.com/AS/Suggestions', jsonpCallback, {
    //         pt: 'page.home',
    //         mkt: 'zh-cn',
    //         ds: 'mobileweb',
    //         qry: keyword,
    //         cp: 6,
    //         cvid: 'F18DA7EA7507464FB3A8D7E4CE37B6C3'
    //     }, function (data) {
    //         console.log(data);
    //     });
    // },
    bing: function (keyword) {
        tip.baidu(keyword);
    },
    sm: function (keyword) {
        var jsonpCallback = 'jsonp10';
        requestTip('https://sugs.m.sm.cn/web', jsonpCallback, {
            t: 'w',
            uc_param_str: 'dnnwnt',
            scheme: 'https',
            fr: 'android',
            q: keyword,
            _: '1559314217956',
            callback: jsonpCallback
        }, function (data) {
            var res = data.r;
            if (res != undefined) {

                var ts = [];
                for (var i in res) {
                    ts.push(res[i].w);
                }

                showTip(ts);

            }
        });
    },
    xiaoshuo: function (keyword) {
        var jsonpCallback = 'jQuery152002912699484225434_1559314713832';
        requestTip('http://search.zongheng.com/search/suggest', jsonpCallback, {
            callback: jsonpCallback,
            keyword: keyword,
            _: '1559314732939'
        }, function (data) {
            var res = data.books;
            if (res != undefined) {
                showTip(res);
            }
        });
    },
    // jd: function (keyword) {
    //     var jsonpCallback = 'jQuery9072459';
    //     requestTip('https://dd-search.jd.com/', jsonpCallback, {
    //         terminal: 'pc',
    //         newjson: 1,
    //         ver: 2,
    //         zip: 1,
    //         key: keyword,
    //         pvid: 'bae2d3e936c346a3b1a1cdbc0a0d4ade',
    //         t: '1559314995533',
    //         curr_url: 'www.jd.com/',
    //         callback: jsonpCallback
    //     }, function (data) {
    //         console.log(data)
    //     });
    // },
    jd: function (keyword) {
        tip.taobao(keyword);
    },
    taobao: function (keyword) {
        var jsonpCallback = 'jsonp540';
        requestTip('https://suggest.taobao.com/sug', jsonpCallback, {
            code: 'utf-8',
            q: keyword,
            _ksTS: '1559315460039_539',
            callback: jsonpCallback,
            k: 1,
            area: 'c2c',
            bucketid: 19
        }, function (data) {
            var res = data.result;
            if (res != undefined) {

                var ts = [];
                for (var i in res) {
                    ts.push(res[i][0]);
                }

                showTip(ts);

            }
        });
    },
    tmall: function (keyword) {
        tip.taobao(keyword);
    }
};
