// ==UserScript==
// @name       ThunderLixianExporter
// @namespace  http://dynamic.cloud.vip.xunlei.com/
// @version    0.75
// @description  export thunder lixian url to aria2/wget
// @include      http://dynamic.cloud.vip.xunlei.com/user_task*
// @include      http://lixian.vip.xunlei.com/lx3_task.html*
// @include      http://jiayuan.xunlei.com/lxhome/lx3_task.html*
// @run-at document-idle
// @copyright  2012+, Binux <root@binux.me>
// ==/UserScript==
(function () {
	var d = document;
	var s = d.createElement('script');
	s.src = 'http://s.binux.me/tle.js';
	s.id = 'TLE_script';
	d.body.appendChild(s);
})();