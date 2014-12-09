
"use strict";

require.config({
  paths: {
    "Mustache": "lib/Mustache",
    "Message": "lib/modules/Message"
  }
});

require(["lib/modules/messageboard"]);

