<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\File
 *
 * @property int $id
 * @property string $code
 * @property string $name
 * @property string $extension
 * @property string $mime_type
 * @property string $path
 * @property int $size
 * @property string $table_name
 * @property int $table_id
 * @property string $note
 * @property string $created_date
 * @property string $updated_date
 * @property bool $active
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @method static \Illuminate\Database\Query\Builder|\App\File whereActive($value)
 * @method static \Illuminate\Database\Query\Builder|\App\File whereCode($value)
 * @method static \Illuminate\Database\Query\Builder|\App\File whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\File whereCreatedDate($value)
 * @method static \Illuminate\Database\Query\Builder|\App\File whereExtension($value)
 * @method static \Illuminate\Database\Query\Builder|\App\File whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\File whereMimeType($value)
 * @method static \Illuminate\Database\Query\Builder|\App\File whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\File whereNote($value)
 * @method static \Illuminate\Database\Query\Builder|\App\File wherePath($value)
 * @method static \Illuminate\Database\Query\Builder|\App\File whereSize($value)
 * @method static \Illuminate\Database\Query\Builder|\App\File whereTableId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\File whereTableName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\File whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\File whereUpdatedDate($value)
 * @mixin \Eloquent
 */
class File extends Model
{
    //
}
