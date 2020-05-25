function fullScreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
}

//退出全屏
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

window.onload = function () {
  document.addEventListener("click", (e) => {
    const className = e.target.className;
    console.log(e);
    const container = e.target.parentElement.parentElement;
    if (/three/.test(className)) {
      // fullscreen
      if (document.fullscreen) {
        exitFullscreen();
      } else {
        fullScreen(container);
      }
    }
    if (/two/.test(className)) {
      // min
      if (!/code-min/.test(container.className)) {
        container.className += " code-min";
      } else {
        container.className = container.className.replace(/code-min/, "");
      }
    }
    if (/one/.test(className)) {
      // close
      container.style.display = "none";
    }
  });
};
