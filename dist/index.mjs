// src/index.ts
import { AllStak as AllStak2 } from "@allstak/core";

// src/helpers.ts
import { AllStak } from "@allstak/core";
function captureException(error, context) {
  try {
    AllStak.captureException(error, context);
  } catch {
  }
}
function captureMessage(message, level = "info") {
  try {
    AllStak.captureMessage(message, level);
  } catch {
  }
}
function setUser(user) {
  try {
    AllStak.setUser(user);
  } catch {
  }
}
function setTag(key, value) {
  try {
    AllStak.setTag(key, value);
  } catch {
  }
}
export {
  AllStak2 as AllStak,
  captureException,
  captureMessage,
  setTag,
  setUser
};
//# sourceMappingURL=index.mjs.map