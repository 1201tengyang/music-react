webpackJsonp([2,5],{193:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function a(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),t.d(e,"default",function(){return y});var i,s,l=t(0),c=t.n(l),f=t(10),m=t(29),p=t(204),g=t(65),d=t(222),u=(t.n(d),function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}()),h=function(n){return c.a.createElement("div",{className:"cover-img"},c.a.createElement("img",{src:n.coverImgUrl,alt:"pic"}),c.a.createElement("p",{className:"play-count"},c.a.createElement("i",{className:"icon-headphones"}),n.playCount))},b=function(n){return c.a.createElement("div",{className:"creator"},c.a.createElement("div",{className:"creator-avatar"},c.a.createElement("img",{src:n.creator.avatarUrl,alt:"creator-avatar"})),c.a.createElement("div",{className:"creator-nickname"},n.creator.nickname),c.a.createElement("div",{className:"create-time"},Object(g.c)(n.createTime),"\u521b\u5efa"))},x=function(n){var e=JSON.parse(localStorage.getItem("allStarredList"));if(e)for(var t=0;t<e.length;t+=1){var o=e[t];if(o.id===n)return!0}return!1},y=(i=Object(f.b)(function(n){return{starredlist:n.starredlist}},{star:m.c,cancelStar:m.a}))(s=function(n){function e(){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.toggleDesc=function(){n.setState({showDesc:!n.state.showDesc})},n.beforeStar=function(){var e=n.props.playlist,t=e.id,o=e.name,r=e.coverImgUrl,a={id:t,name:o,coverImgUrl:r};n.props.star(a)},n.beforeCancelStar=function(){var e=n.props.playlist,t=e.id;n.props.cancelStar(t)},n.state={showDesc:!1},n}return a(e,n),u(e,[{key:"render",value:function(){var n=this.props.playlist,e=n.id;return c.a.createElement("div",null,c.a.createElement(p.a,{title:"\u6b4c\u5355"}),c.a.createElement("div",{className:"info-header"},h(n),c.a.createElement("div",{className:"info-header-right"},c.a.createElement("p",{className:"title"},n.name),b(n),c.a.createElement("div",{className:"operation-buttons"},x(e)?c.a.createElement("a",{onClick:this.beforeCancelStar},"\u2764\ufe0f \u53d6\u6d88\u6536\u85cf"):c.a.createElement("a",{onClick:this.beforeStar},"\u2661 \u6536\u85cf")),c.a.createElement("div",{className:"tags"},"\u6807\u7b7e\uff1a",n.tags.map(function(n){return c.a.createElement("span",{key:n},n)})),c.a.createElement("div",{className:"playlist-desc",onClick:this.toggleDesc},c.a.createElement("p",{className:this.state.showDesc?"show":"more"},n.description)))))}}]),e}(l.Component))||s},201:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function a(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),t.d(e,"default",function(){return x});var i,s,l=t(0),c=t.n(l),f=t(10),m=t(193),p=t(211),g=t(64),d=t(68),u=t(232),h=(t.n(u),function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}()),b=function(n){if(!n)return null;var e=n.tracks,t=n.coverImgUrl;return[c.a.createElement("img",{src:t,alt:"blur background",key:"bgc"}),c.a.createElement("div",{className:"playlist-info",key:"playlist"},c.a.createElement(m.default,{playlist:n}),c.a.createElement(p.a,{tracks:e}))]},x=(i=Object(f.b)(function(n){return{playlistinfo:n.playlistinfo}},{fetchPlaylist:d.a}))(s=function(n){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,n),h(e,[{key:"componentDidMount",value:function(){var n=this.props.match.params.id;this.props.fetchPlaylist(n)}},{key:"componentWillReceiveProps",value:function(n){var e=n.match.params.id;e!==this.props.match.params.id&&n.fetchPlaylist(e)}},{key:"render",value:function(){var n=this.props.playlistinfo,e=n.isFetching,t=n.playlist;return c.a.createElement("div",{className:"playlist-wrapper"},e?c.a.createElement(g.a,null):b(t))}}]),e}(l.Component))||s},204:function(n,e,t){"use strict";var o=t(0),r=t.n(o),a=t(205),i=(t.n(a),function(n){return r.a.createElement("h4",{className:"subtitle"},n.title)});e.a=i},205:function(n,e,t){var o=t(206);"string"===typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0};r.transform=void 0;t(6)(o,r);o.locals&&(n.exports=o.locals)},206:function(n,e,t){e=n.exports=t(5)(void 0),e.push([n.i,".subtitle {\n  color: #666;\n  font-size: 12px;\n  margin-bottom: 20px;\n}\n",""])},211:function(n,e,t){"use strict";var o=t(0),r=t.n(o),a=t(7),i=t(10),s=t(16),l=t(65),c=t(212),f=(t.n(c),function(n){return r.a.createElement("div",{className:"song-artist"},n.ar.map(function(n){return r.a.createElement(a.b,{key:Math.random()+n.id,to:{pathname:"/artistinfo/"+n.id}}," ",n.name)}))}),m=function(n){var e=n.tracks,t=n.isShowAr,o=void 0===t||t;return console.log("===================================="),console.log("render songlist"),console.log("===================================="),r.a.createElement("div",{className:"songList"},r.a.createElement("p",{className:"play-all-btn"},"\u64ad\u653e\u5168\u90e8(",e.length,")"),r.a.createElement("ul",{className:"song-container"},e.map(function(e,t){return r.a.createElement("li",{className:"song-item",key:e.id},r.a.createElement("div",{className:"section-one"},r.a.createElement("span",{className:"song-index"},Object(l.d)(t)),r.a.createElement("i",{className:"icon-heart"}),r.a.createElement("span",{className:"song-name"},e.name)),r.a.createElement("div",{className:"section-two"},r.a.createElement("i",{className:"icon-plus",onClick:function(){return n.addSong2Que(e)}}),r.a.createElement("i",{className:"icon-play3",onClick:function(){return n.playSong2Que(e)}}),o?f(e):null),r.a.createElement("span",{className:"song-album"},e.al.name),r.a.createElement("span",{className:"song-duration"},Object(l.b)(e.dt)))})))},p=function(){return{state:null}},g={addSong2Que:s.a,playSong2Que:s.e};e.a=Object(i.b)(p,g)(m)},212:function(n,e,t){var o=t(213);"string"===typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0};r.transform=void 0;t(6)(o,r);o.locals&&(n.exports=o.locals)},213:function(n,e,t){e=n.exports=t(5)(void 0),e.push([n.i,"@-moz-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.songList .play-all-btn {\n  display: inline-block;\n  font-size: 14px;\n  margin-left: 12px;\n  margin-bottom: 15px;\n  cursor: pointer;\n}\n.songList .song-container {\n  font-size: 12px;\n  color: #b0b0b1;\n  text-align: left;\n}\n.songList .song-container .song-item {\n  display: -webkit-box;\n  display: -moz-box;\n  display: flex;\n  height: 45px;\n  line-height: 45px;\n  padding-left: 15px;\n}\n.songList .song-container .song-item .section-one,\n.songList .song-container .song-item .section-two {\n  -webkit-box-flex: 2;\n  -moz-box-flex: 2;\n  flex: 2;\n  box-flex: 2;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.songList .song-container .song-item .section-one .song-index,\n.songList .song-container .song-item .section-two .song-index,\n.songList .song-container .song-item .section-one .song-name,\n.songList .song-container .song-item .section-two .song-name {\n  color: #333;\n}\n.songList .song-container .song-item .section-one .song-artist,\n.songList .song-container .song-item .section-two .song-artist {\n  display: inline-block;\n}\n.songList .song-container .song-item .section-one > i,\n.songList .song-container .song-item .section-two > i {\n  margin: 0 12px;\n}\n.songList .song-container .song-item .song-album {\n  -webkit-box-flex: 2;\n  -moz-box-flex: 2;\n  flex: 2;\n  box-flex: 2;\n  min-width: 0;\n}\n.songList .song-container .song-item .song-duration {\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  flex: 1;\n  box-flex: 1;\n  min-width: 0;\n}\n.songList .song-container .song-item:nth-child(odd) {\n  background-color: #f4f4f6;\n}\n.songList .song-container .song-item:nth-child(even) {\n  background-color: #fafafc;\n}\n",""])},222:function(n,e,t){var o=t(223);"string"===typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0};r.transform=void 0;t(6)(o,r);o.locals&&(n.exports=o.locals)},223:function(n,e,t){e=n.exports=t(5)(void 0),e.push([n.i,"@-moz-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.info-header {\n  display: -webkit-box;\n  display: -moz-box;\n  display: flex;\n  margin-bottom: 40px;\n}\n.info-header .cover-img {\n  flex: 0 0 200px;\n  width: 200px;\n  height: 200px;\n  margin-right: 20px;\n  position: relative;\n}\n.info-header .cover-img > img {\n  width: 100%;\n  height: 100%;\n}\n.info-header .cover-img .play-count {\n  background-color: rgba(7,17,27,0.3);\n  font-size: 12px;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  right: 0;\n  text-align: right;\n  width: 100%;\n}\n.info-header .info-header-right {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  flex: 1;\n  box-flex: 1;\n  min-width: 0;\n}\n.info-header .info-header-right .title {\n  font-size: 20px;\n  color: #000;\n  margin-bottom: 12px;\n}\n.info-header .info-header-right .creator > div {\n  display: inline-block;\n  margin-bottom: 20px;\n  margin-right: 12px;\n  vertical-align: middle;\n}\n.info-header .info-header-right .creator .creator-avatar {\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  overflow: hidden;\n}\n.info-header .info-header-right .creator .creator-avatar > img {\n  width: 100%;\n  height: 100%;\n}\n.info-header .info-header-right .creator .creator-nickname {\n  color: #666;\n}\n.info-header .info-header-right .creator .create-time {\n  color: #aeaeaf;\n}\n.info-header .info-header-right .operation-buttons {\n  margin-bottom: 20px;\n}\n.info-header .info-header-right .operation-buttons > a {\n  background-color: rgba(249,249,249,0.82);\n  border-radius: 5px;\n  cursor: pointer;\n  display: inline-block;\n  height: 18px;\n  line-height: 18px;\n  font-size: 12px;\n  color: #000;\n  padding: 8px;\n  letter-spacing: 1px;\n}\n.info-header .info-header-right .tags {\n  font-size: 12px;\n  color: #7e8c8d;\n}\n.info-header .info-header-right .tags > span {\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-block;\n  height: 18px;\n  line-height: 18px;\n  margin: 0 10px 4px 0;\n  padding: 4px;\n}\n.info-header .info-header-right .playlist-desc > p {\n  color: #666;\n  cursor: pointer;\n  font-weight: 600;\n  line-height: 20px;\n  margin-top: 4px;\n  height: 40px;\n  overflow: hidden;\n  padding: 0 30px;\n  transition: all 0.5s;\n}\n.info-header .info-header-right .playlist-desc > p.more {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.info-header .info-header-right .playlist-desc > p.show {\n  height: auto;\n}\n",""])},232:function(n,e,t){var o=t(233);"string"===typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0};r.transform=void 0;t(6)(o,r);o.locals&&(n.exports=o.locals)},233:function(n,e,t){e=n.exports=t(5)(void 0),e.push([n.i,"@-moz-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.playlist-wrapper {\n  height: 250px;\n  overflow: visible;\n  position: relative;\n}\n.playlist-wrapper > img {\n  filter: blur(50px);\n  width: 100%;\n  height: 100%;\n  opacity: 0.3;\n}\n.playlist-wrapper .playlist-info {\n  margin: 20px 30px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n",""])}});
//# sourceMappingURL=2.b447b1b0.chunk.js.map