(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{626:function(s,n,t){"use strict";t.r(n);var a=t(7),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_443-问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_443-问题"}},[s._v("#")]),s._v(" 443 问题")]),s._v(" "),t("p",[s._v("现象：\n打开clashx之后，github 相关操作失败，pull/push 报错")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Failed to connect to github.com port 443: Timed out\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("原因：用了代理，而git没有设置")]),s._v(" "),t("p",[s._v("如果是本地开的vpn，比如clash，7890是clash的一个默认端口，如果不同需要更换")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.proxy http://127.0.0.1:7890\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("完美解决。")]),s._v(" "),t("h2",{attrs:{id:"补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[s._v("#")]),s._v(" "),s._v("\n补充")]),s._v(" "),t("p",[s._v("没有VPN 的时候GitHub 不稳定怎么办\nhosts文件追加GitHub 的节点")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\n140.82.112.4 github.com\n140.82.112.10 nodeload.github.com\n140.82.114.5 api.github.com\n140.82.113.10 codeload.github.com\n185.199.108.133 raw.github.com\n185.199.108.153 training.github.com\n185.199.108.153 assets-cdn.github.com\n185.199.108.153 documentcloud.github.com\n185.199.108.154 help.github.com\n\n# domain: githubstatus.com\n185.199.108.153 githubstatus.com\n\n# domain: fastly.net\n199.232.69.194 github.global.ssl.fastly.net\n\n# domain: githubusercontent.com\n185.199.108.133 raw.githubusercontent.com\n185.199.108.154 pkg-containers.githubusercontent.com\n185.199.108.133 cloud.githubusercontent.com\n185.199.108.133 gist.githubusercontent.com\n185.199.108.133 marketplace-screenshots.githubusercontent.com\n185.199.108.133 repository-images.githubusercontent.com\n185.199.108.133 user-images.githubusercontent.com\n185.199.108.133 desktop.githubusercontent.com\n185.199.108.133 avatars.githubusercontent.com\n185.199.108.133 avatars0.githubusercontent.com\n185.199.108.133 avatars1.githubusercontent.com\n185.199.108.133 avatars2.githubusercontent.com\n185.199.108.133 avatars3.githubusercontent.com\n185.199.108.133 avatars4.githubusercontent.com\n185.199.108.133 avatars5.githubusercontent.com\n185.199.108.133 avatars6.githubusercontent.com\n185.199.108.133 avatars7.githubusercontent.com\n185.199.108.133 avatars8.githubusercontent.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);