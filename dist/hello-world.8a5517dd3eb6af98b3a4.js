(()=>{"use strict";function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const n=function(){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n)}var t,r;return t=n,(r=[{key:"render",value:function(){var e=document.createElement("h1"),n=document.querySelector("body");e.innerHTML="this is a heading",e.classList.add("h1-class"),n.appendChild(e)}}])&&e(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const r=function(){function e(){var n,t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),t="hello-world-button",(n="buttonCssClass")in this?Object.defineProperty(this,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[n]=t}var n,r;return n=e,(r=[{key:"render",value:function(){console.log("Using an index of ".concat(2," the item returned is ").concat([5,12,8,130,44].at(2))),console.log("hello");var e=document.createElement("button");e.innerHTML="Hello World",e.classList.add(this.buttonCssClass);var n=document.querySelector("body");e.onclick=function(){var e=document.createElement("p");e.innerHTML="Hello world",e.classList.add("hello-world-text"),n.appendChild(e)},n.appendChild(e)}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();(new n).render(),(new r).render()})();