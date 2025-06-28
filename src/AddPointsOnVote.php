<?php

namespace Tunna\UserPoints;

use FoF\Vote\Event\PostWasVoted;

class AddPointsOnVote
{
    public function handle(PostWasVoted $event)
    {
        if ($event->post->user && $event->vote > 0) {
            $event->post->user->increment('points', 5);
        }
    }
}
