<?php

namespace Tunna\UserPoints;

use Flarum\Discussion\Event\Started;

class AddPointsOnDiscussion
{
    public function handle(Started $event)
    {
        $event->discussion->user->increment('points', 10);
    }
}
