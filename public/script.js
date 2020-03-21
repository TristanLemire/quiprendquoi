(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var _this=void 0;navigator.clipboard?document.querySelectorAll("[data-clipboard]").forEach(function(a){var b=document.createElement("button");b.innerHTML="Copier",b.addEventListener("click",copyToClipboard.bind(_this,a,b)),a.parentNode.append(b)}):console.warn("Pas de support :(");function copyToClipboard(a,b){navigator.clipboard.writeText(a.getAttribute("data-clipboard")).then(function(){b.innerHTML="Copi\xE9 !",setTimeout(function(){return b.innerHTML="Copier"},2e3)})["catch"](function(a){return console.warn(a)})}

},{}],2:[function(require,module,exports){
"use strict";function geoFindMe(){var a=document.querySelector("#status"),b=document.querySelector("#map-link");b.href="",b.textContent="",navigator.geolocation?(a.textContent="Chargement\u2026",navigator.geolocation.getCurrentPosition(function(c){var d=c.coords.latitude,e=c.coords.longitude;a.textContent="",b.href="    https://www.google.com/maps/search/?api=1&query=".concat(d,",").concat(e),b.textContent="voir sur google map"},function(){a.textContent="Impossible d'avoir votre geolocalisation"})):a.textContent="Geolocation est pas supporter par votre navigateur"}document.querySelector("#find-me")&&document.querySelector("#find-me").addEventListener("click",geoFindMe);

},{}],3:[function(require,module,exports){
"use strict";"undefined"!=typeof party&&localStorage.setItem(location.href,document.title);

},{}],4:[function(require,module,exports){
"use strict";var _this=void 0;navigator.share&&document.querySelectorAll("[data-share-url]").forEach(function(a){var b=document.createElement("button");b.innerHTML="Partager",a.parentNode.append(b),b.addEventListener("click",share.bind(_this,a))});function share(a){navigator.share({title:a.getAttribute("data-share-title"),text:a.getAttribute("data-share-text"),url:a.getAttribute("data-share-url")})}

},{}]},{},[1,2,3,4]);
