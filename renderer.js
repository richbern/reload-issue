// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

(function() {
    var btns = document.getElementsByTagName("button");
    for(const b of btns)
    {
      b.addEventListener("click", () => {
        const fnName = b.getAttribute("data-fn");
        if(fnName){
          window.location[fnName](".");
        }
      }, false);
    }
    document.getElementById("histLen").textContent = history.length;
  })();