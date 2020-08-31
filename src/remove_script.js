import constants from "../constants";

const { mountId } = constants.appConfig.contentScript;
const app = document.getElementById(mountId);
document.body.removeChild(app);
