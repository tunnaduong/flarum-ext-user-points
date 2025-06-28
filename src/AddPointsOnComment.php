<?php

namespace Tunna\UserPoints;

use Flarum\Post\Event\Posted;

class AddPointsOnComment
{
    public function handle(Posted $event)
    {
        $event->post->user->increment('points', 2);
    }
}
