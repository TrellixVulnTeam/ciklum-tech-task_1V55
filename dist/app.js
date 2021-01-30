(()=>{"use strict";var e={379:(e,t,n)=>{var a,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function l(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},a=[],r=0;r<e.length;r++){var d=e[r],i=t.base?d[0]+t.base:d[0],c=n[i]||0,u="".concat(i," ").concat(c);n[i]=c+1;var s=l(u),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==s?(o[s].references++,o[s].updater(m)):o.push({identifier:u,updater:v(m,t),references:1}),a.push(u)}return a}function i(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=n.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var l=r(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function s(e,t,n,a){var r=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var o=document.createTextNode(r),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(o,l[t]):e.appendChild(o)}}function m(e,t,n){var a=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,f=0;function v(e,t){var n,a,r;if(t.singleton){var o=f++;n=p||(p=i(t)),a=s.bind(null,n,o,!1),r=s.bind(null,n,o,!0)}else n=i(t),a=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var r=l(n[a]);o[r].references--}for(var i=d(e,t),c=0;c<n.length;c++){var u=l(n[c]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=i}}}}},t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={};function t(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,d=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return d=e.done,e},e:function(e){i=!0,l=e},f:function(){try{d||null==n.return||n.return()}finally{if(i)throw l}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t,n,a,r){var o=document.createElement("div"),l=document.createElement("span"),d=document.createElement(n);o.className="input-group",l.textContent=t,l.className="input-group-text","input"===n&&(d.className="form-control modal-inputs"),"select"===n&&(d.className="form-select modal-inputs",r&&d.setAttribute("multiple",!0),h(d,a)),e.appendChild(o),o.appendChild(l),o.appendChild(d)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var l,d=e[Symbol.iterator]();!(a=(l=d.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==d.return||d.return()}finally{if(r)throw o}}return n}}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=d(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){i=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(i)throw o}}}}function d(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.r(e);var c=["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],u=["Mon","Tue","Wed","Thu","Fri"],s=["Alina","Mark","Sumail","Kate"],m=document.createElement("div");m.className="container",document.body.appendChild(m),function(e){var t=document.createElement("div"),n=document.createElement("h1"),a=document.createElement("div"),r=document.createElement("select"),o=document.createElement("button"),l=document.createElement("option");t.className="row header",n.className="col",n.textContent="Calendar",a.className="col d-flex justify-content-between",r.className="filter-select",l.textContent="All members",l.selected=!0,o.className="btn btn-primary",o.type="button",o.setAttribute("data-target","#eventModal"),o.setAttribute("data-toggle","modal"),o.textContent="New Event +",e.appendChild(t),t.appendChild(n),t.appendChild(a),a.appendChild(r),r.appendChild(l),a.appendChild(o)}(m),function(e,t,n,a){var o=document.createElement("div"),l=document.createElement("div"),d=document.createElement("div"),i=document.createElement("div");o.className="modal fade",o.id="eventModal",l.className="modal-dialog modal-dialog-centered",l.setAttribute("role","document"),i.className="modal-content",d.className="modal-body",e.appendChild(o),o.appendChild(l),l.appendChild(i),function(e){var t=document.createElement("div"),n=document.createElement("h5"),a=document.createElement("button"),r=document.createElement("span");t.className="modal-header",n.textContent="Create event",a.type="button",a.className="close",a.setAttribute("data-dismiss","modal"),a.setAttribute("aria-label","Close"),r.setAttribute("aria-hidden",!0),r.textContent="X",e.appendChild(t),t.appendChild(n),t.appendChild(a),a.appendChild(r)}(i),i.appendChild(d),function(e,t,n,a){r(e,"Name of the event:","input"),r(e,"Participants:","select",t,!0),r(e,"Day:","select",n),r(e,"Time:","select",a)}(d,t,n,a),function(e){var t=document.createElement("div"),n=document.createElement("button"),a=document.createElement("button");t.className="modal-footer",n.type="button",n.className="btn btn-secondary",n.setAttribute("data-dismiss","modal"),n.textContent="Close",a.type="submit",a.className="btn btn-primary create-event",a.setAttribute("data-dismiss","modal"),a.textContent="Create",e.appendChild(t),t.appendChild(n),t.appendChild(a)}(i)}(m,s,u,c),function(e){var t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),o=document.createElement("p");t.className="modal fade",t.id="deleteModal",n.className="modal-dialog modal-dialog-centered",n.setAttribute("role","document"),r.className="modal-content",a.className="modal-body",o.id="deleteText",e.appendChild(t),t.appendChild(n),n.appendChild(r),function(e){var t=document.createElement("div"),n=document.createElement("h5"),a=document.createElement("button"),r=document.createElement("span");t.className="modal-header",n.textContent="Delete event",a.type="button",a.className="close",a.setAttribute("data-dismiss","modal"),a.setAttribute("aria-label","Close"),r.setAttribute("aria-hidden",!0),r.textContent="X",e.appendChild(t),t.appendChild(n),t.appendChild(a),a.appendChild(r)}(r),r.appendChild(a),a.appendChild(o),function(e){var t=document.createElement("div"),n=document.createElement("button"),a=document.createElement("button");t.className="modal-footer",n.type="button",n.className="btn btn-secondary",n.setAttribute("data-dismiss","modal"),n.textContent="No",a.type="submit",a.className="btn btn-primary",a.id="deleteBtn",a.setAttribute("data-dismiss","modal"),a.textContent="Yes",e.appendChild(t),t.appendChild(n),t.appendChild(a)}(r)}(m),function(e,n,a){var r=document.createElement("div"),o=document.createElement("table");o.className="table table-bordered",r.className="row",e.appendChild(r),r.appendChild(o),function(e,n){var a=document.createElement("thead"),r=document.createElement("tr"),o=document.createElement("th");o.textContent="Time",o.scope="col",r.appendChild(o);var l,d=t(n);try{for(d.s();!(l=d.n()).done;){var i=l.value,c=document.createElement("th");c.textContent=i,c.scope="col",r.appendChild(c)}}catch(e){d.e(e)}finally{d.f()}a.appendChild(r),e.appendChild(a)}(o,a),function(e,n,a){var r,o=document.createElement("tbody"),l=t(n);try{for(l.s();!(r=l.n()).done;){var d=r.value,i=document.createElement("tr"),c=document.createElement("th");o.appendChild(i),i.appendChild(c),c.textContent=d;for(var u=0;u<a.length;u++){var s=document.createElement("td");s.className="calendar-time",s.title=a[u]+d,i.appendChild(s)}}}catch(e){l.e(e)}finally{l.f()}e.appendChild(o)}(o,n,a)}(m,c,u);var p=document.querySelectorAll(".modal-inputs"),f=document.querySelector(".create-event"),v=document.querySelector(".filter-select"),y=document.getElementsByClassName("calendar-time");h(v,s);var b=new Map;function h(e,t){t.map((function(t){var n=document.createElement("option");return n.textContent=t,e.appendChild(n),n}))}function C(){var e,t=l(y);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.textContent="",n.classList.remove("event")}}catch(e){t.e(e)}finally{t.f()}}function g(e){C();var t,n=l(e);try{for(n.s();!(t=n.n()).done;){var a,r=o(t.value,2),d=r[0],i=r[1],c=l(y);try{for(c.s();!(a=c.n()).done;){var u=a.value;u.title===d&&E(u,d,i.eventName)}}catch(e){c.e(e)}finally{c.f()}}}catch(e){n.e(e)}finally{n.f()}}function E(e,t,n){var a=document.createElement("div"),r=document.createElement("span"),o=document.createElement("p");e.classList.add("event"),e.draggable=!0,r.textContent="×",r.style.cursor="pointer",r.setAttribute("data-target","#deleteModal"),r.setAttribute("data-toggle","modal"),r.addEventListener("click",(function(){!function(e,t,n){var a=document.querySelector("#deleteText"),r=document.querySelector("#deleteBtn");a.textContent='Are you sure that you want to delete "'.concat(n,'" event?'),r.addEventListener("click",(function(){b.delete(t),e.classList.remove("event"),e.textContent=""}))}(e,t,n)})),o.textContent=n,e.appendChild(a),a.appendChild(o),a.appendChild(r)}function N(e){var t,n=new Map,a=l(b);try{for(a.s();!(t=a.n()).done;){var r=o(t.value,2),d=r[0],i=r[1];i.members.includes(e.value)&&n.set(d,i)}}catch(e){a.e(e)}finally{a.f()}return n}f.addEventListener("click",(function(){var e,t=p[0],n=p[1],a=p[2],r=p[3],o=(e=n.options,function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(e){return e.selected})).map((function(e){return e.value}));0===o.length||0===t.value.length?alert("Failed to create event. Select participants and enter event name."):b.has(a.value+r.value)?alert("Failed to create event. Time slot is already booked."):(b.set(a.value+r.value,{members:o,eventName:t.value}),g(b))})),v.addEventListener("change",(function(){C(),"All members"===v.value&&g(b),"All members"!=v.value&&g(N(v))}));var A=null;document.addEventListener("dragstart",(function(e){"calendar-time event"===e.target.className?(A=e.target,e.target.style.opacity=.5):e.preventDefault()}),!1),document.addEventListener("dragend",(function(e){e.target.style.opacity=""}),!1),document.addEventListener("dragover",(function(e){e.preventDefault()}),!1),document.addEventListener("dragenter",(function(e){e.preventDefault(),"calendar-time"===e.target.className&&(e.target.style.background="#75D19D",e.target.style.opacity=.5)}),!1),document.addEventListener("dragleave",(function(e){"calendar-time"===e.target.className&&(e.target.style.background="",e.target.textContent="")}),!1),document.addEventListener("drop",(function(e){e.preventDefault(),"calendar-time"===e.target.className&&"All members"===v.value&&(e.target.style.background="",e.target.style.opacity=1,b.set(e.target.title,b.get(A.title)),b.delete(A.title),g(b)),"calendar-time"===e.target.className&&"All members"!=v.value&&(e.target.style.background="",e.target.style.opacity=1,b.set(e.target.title,b.get(A.title)),b.delete(A.title),g(N(v)))}));var x=n(379);n.n(x)()(e.default,{insert:"head",singleton:!1}),e.default.locals})()})();