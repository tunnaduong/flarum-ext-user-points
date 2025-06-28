<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasColumn('users', 'points')) {
            $schema->table('users', function (Blueprint $table) {
                $table->integer('points')->default(0);
            });
        }
    },

    'down' => function (Builder $schema) {
        if ($schema->hasColumn('users', 'points')) {
            $schema->table('users', function (Blueprint $table) {
                $table->dropColumn('points');
            });
        }
    },
];
