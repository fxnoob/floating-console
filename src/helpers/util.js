const state = {
  loaded: {},
  injected: {}
};

const toggleIn = ({ id: tab_id }) => {
  // toggle out: it's currently loaded and injected
  if (state.loaded[tab_id] && state.injected[tab_id]) {
    chrome.tabs.executeScript(tab_id, { file: "content_script.bundle.js" });
    state.injected[tab_id] = false;
  }

  // toggle in: it's loaded and needs injected
  else if (state.loaded[tab_id] && !state.injected[tab_id]) {
    chrome.tabs.executeScript(tab_id, { file: "remove_script.bundle.js" });
    state.injected[tab_id] = true;
  }

  // fresh start in tab
  else {
    chrome.tabs.executeScript(tab_id, {
      file: "custom_web_components.bundle.js"
    });
    chrome.tabs.executeScript(tab_id, { file: "content_script.bundle.js" });
    state.loaded[tab_id] = true;
    state.injected[tab_id] = true;
  }

  chrome.tabs.onUpdated.addListener(function(tabId) {
    if (tabId === tab_id) state.loaded[tabId] = false;
  });
};

export { toggleIn };
