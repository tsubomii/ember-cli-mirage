/* globals Pretender */
if (typeof FastBoot === 'undefined') {
  define('pretender', [], function() {
    "use strict";

    return {
      'default': Pretender
    };
  });
}
