<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Position
 *
 * @property int $id
 * @property string $code
 * @property string $name
 * @property string $description
 * @property bool $active
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @method static \Illuminate\Database\Query\Builder|\App\Position whereActive($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Position whereCode($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Position whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Position whereDescription($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Position whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Position whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Position whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Position extends Model
{
    //
}
