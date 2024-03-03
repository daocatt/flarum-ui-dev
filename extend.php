<?php

namespace Gtdxyz\Uidev;

use Flarum\Extend;
use Gtdxyz\Uidev\Listeners\LoadHeadTagFromDatabase;

// use Flarum\Api\Controller\ShowDiscussionController;

return [

  (new Extend\Frontend('admin'))
      ->js(__DIR__.'/js/dist/admin.js'),

  (new Extend\Frontend('forum'))
      ->js(__DIR__.'/js/dist/forum.js')
      ->css(__DIR__.'/less/_variables.less')
      ->css(__DIR__.'/less/forum.less')
      ->content(LoadHeadTagFromDatabase::class),
      
  // new Extend\Locales(__DIR__ . '/locale'),

  // (new Extend\ApiController(ShowDiscussionController::class))
  //       ->addInclude('firstPost'),
];
