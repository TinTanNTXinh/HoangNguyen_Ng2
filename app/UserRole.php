<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\UserRole
 *
 * @property int $id
 * @property int $user_id
 * @property int $role_id
 * @property int $created_by
 * @property int $updated_by
 * @property string $created_date
 * @property string $updated_date
 * @property bool $active
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @method static \Illuminate\Database\Query\Builder|\App\UserRole whereActive($value)
 * @method static \Illuminate\Database\Query\Builder|\App\UserRole whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\UserRole whereCreatedBy($value)
 * @method static \Illuminate\Database\Query\Builder|\App\UserRole whereCreatedDate($value)
 * @method static \Illuminate\Database\Query\Builder|\App\UserRole whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\UserRole whereRoleId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\UserRole whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\UserRole whereUpdatedBy($value)
 * @method static \Illuminate\Database\Query\Builder|\App\UserRole whereUpdatedDate($value)
 * @method static \Illuminate\Database\Query\Builder|\App\UserRole whereUserId($value)
 * @mixin \Eloquent
 */
class UserRole extends Model
{
    //
}
