import "@babel/polyfill";
import { toggleIn } from "./helpers/util";

/**
 * Main extension functionality
 *
 * @class Main
 */

class Main {
  constructor() {}
  init() {
    this.popUpClickSetup();
  }
  popUpClickSetup() {
    chrome.browserAction.onClicked.addListener(tab => {
      toggleIn({ id: tab.id });
    });
  }
}

const main = new Main();
main.init();
