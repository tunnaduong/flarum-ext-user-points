<?php

namespace Tunna\UserPoints;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\User\User;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Flarum\Api\Controller\AbstractListController;
use Flarum\Api\Serializer\UserSerializer;

class PointsController extends AbstractListController
{
    public $serializer = UserSerializer::class;

    protected function data(ServerRequestInterface $request, Document $document)
    {
        return User::whereVisibleTo($request->getAttribute('actor'))
            ->orderByDesc('points')
            ->take(50)
            ->get();
    }
}
