!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-start]"),a=document.querySelector("body");var n=null;t.addEventListener("click",(function(){n=setInterval((function(){t.disabled=!0,e.disabled=!1,a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),2e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.94c2b06e.js.map
