!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.FileCloudSystem=o():e.FileCloudSystem=o()}(this,(()=>{return e={969:function(e){var o;"undefined"!=typeof window&&window,o={init:function(e){if(e&&e.container){var o=document.querySelector(e.container);o?(fetch("https://cloudexplorer.techfeature.in/FileManager/Index",{method:"GET",headers:{"Content-Type":"text/html"}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok: "+e.statusText);return e.text()})).then((e=>{o.innerHTML=e})).catch((e=>{console.error("Error fetching the HTML file:",e)})),"dark"===e.theme&&(o.style.backgroundColor="#333",o.style.color="#fff"),"function"==typeof e.onFileUpload?o.addEventListener("click",(function(){e.onFileUpload({fileName:"example.txt",size:"10KB"})})):console.warn("onFileUpload callback is not a function or not provided")):console.error("Container element not found")}else console.error("Configuration object or container selector is missing")}},"undefined"!=typeof window&&(window.FileCloudSystem=o),e.exports&&(e.exports=o)}},o={},function t(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}(969);var e,o}));