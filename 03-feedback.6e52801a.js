function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(e,t,n){var i,o,r,f,a,u,c=0,l=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,c=t,f=e.apply(r,n)}function j(e){return c=e,a=setTimeout(w,t),l?y(e):f}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=r}function w(){var e=p();if(h(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-u);return s?v(n,r-(e-c)):n}(e))}function O(e){return a=void 0,m&&i?y(e):(i=o=void 0,f)}function T(){var e=p(),n=h(e);if(i=arguments,o=this,u=e,n){if(void 0===a)return j(u);if(s)return a=setTimeout(w,t),y(u)}return void 0===a&&(a=setTimeout(w,t)),f}return t=g(t)||0,b(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(g(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=u=o=a=void 0},T.flush=function(){return void 0===a?f:O(p())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),m(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),j={};(()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(null!==e)for(const t in e)y.elements[t].value=e[t]})();y.addEventListener("input",e(t)((({target:e})=>{const t=e.name,n=e.value;j[t]=n,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.addEventListener("submit",(e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state"),y.reset()}));
//# sourceMappingURL=03-feedback.6e52801a.js.map
