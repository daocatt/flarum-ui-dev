<?php

namespace Gtdxyz\Uidev;

use Flarum\Extend;

return [
  (new Extend\Frontend('forum'))
      ->js(__DIR__.'/js/dist/forum.js')
      ->css(__DIR__.'/less/forum.less'),

  // new Extend\Locales(__DIR__ . '/locale'),
];
