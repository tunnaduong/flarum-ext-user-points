<?php

namespace Tunna\UserPoints;

use Flarum\User\User;
use Flarum\Post\Post;
use Flarum\Likes\Event\PostWasLiked;
use Flarum\Likes\Event\PostWasUnliked;
use FoF\Reactions\Event\PostReacted;
use FoF\Reactions\Event\PostUnreacted;

class AddPointsOnVote
{
    /**
     * @param mixed $event
     */
    public function handle($event)
    {
        // Lấy post và tác giả
        /** @var Post $post */
        $post = $event->post;
        /** @var User $author */
        $author = $post->user;

        if (!$author) {
            return;
        }

        // Nếu được like
        if ($event instanceof PostWasLiked) {
            $author->increment('points', 5);
            return;
        }

        // Nếu bị unlike (nếu bạn muốn trừ điểm)
        if ($event instanceof PostWasUnliked) {
            $author->decrement('points', 5);
            return;
        }

        // Nếu được reaction
        if ($event instanceof PostReacted) {
            $reaction = $event->reaction;
            $identifier = $reaction->identifier ?? null;

            if ($identifier === '👍') {
                $author->increment('points', 5);
            }

            return;
        }

        // Nếu remove reaction
        if ($event instanceof PostUnreacted) {
            $reaction = $event->reaction;
            $identifier = $reaction->identifier ?? null;

            if ($identifier === '👍') {
                $author->decrement('points', 5);
            }
        }
    }
}
