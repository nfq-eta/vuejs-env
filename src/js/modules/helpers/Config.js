
export default {

  API_URL: "http://localhost:4000",

  SERVER_URL: "http://localhost:3000",

  BACKGROUND_COLOR: "#fff",

  PixelRatio: (function() {
    let ratio = 1;
    if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
      ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
    }
    else if (window.devicePixelRatio !== undefined) {
      ratio = window.devicePixelRatio;
    }
    return ratio;
  })()

};
