<?php

use Flarum\Extend;
use Tunna\UserPoints\AddPointsOnComment;
use Tunna\UserPoints\AddPointsOnDiscussion;
use Tunna\UserPoints\AddPointsOnVote;
use Tunna\UserPoints\PointsController;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),

    (new Extend\Routes('forum'))
        ->get('/ranking', 'user.points.ranking', PointsController::class),

    (new Extend\Event())
        ->listen(\Flarum\Post\Event\Posted::class, AddPointsOnComment::class)
        ->listen(\Flarum\Discussion\Event\Started::class, AddPointsOnDiscussion::class)
        ->listen(\Flarum\Post\Event\Posted::class, AddPointsOnComment::class)
        ->listen(\Flarum\Discussion\Event\Started::class, AddPointsOnDiscussion::class)
        ->listen(\Flarum\Likes\Event\PostWasLiked::class, AddPointsOnVote::class)
        ->listen(\Flarum\Likes\Event\PostWasUnliked::class, AddPointsOnVote::class)
        ->listen(\FoF\Reactions\Event\PostReacted::class, AddPointsOnVote::class)
        ->listen(\FoF\Reactions\Event\PostUnreacted::class, AddPointsOnVote::class),
];
