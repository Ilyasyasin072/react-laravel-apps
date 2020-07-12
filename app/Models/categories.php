<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class categories extends Model
{
    protected $table = 'categories';

    protected $rules = 'category_name';

    protected $fillabel = ['id','category_name'];
}