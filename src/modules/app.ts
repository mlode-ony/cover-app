"use strict";

import "../stylesheets/_style.scss";
import onDomContentLoaded from "./events/onDomContentLoaded";

// an event wrapper for the whole app
try {
  onDomContentLoaded();
} catch (error) {
} finally {
}
