<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->increments('id');
            $table->string('code')->nullable();
            $table->string('name', 200)->nullable();
            $table->string('extension');
            $table->string('mime_type');
            $table->string('path');
            $table->integer('size')->unsigned();
            $table->string('table_name');
            $table->integer('table_id')->unsigned();
            $table->text('note')->nullable();
            $table->dateTime('created_date')->default(date('Y-m-d H:i:s'));
            $table->dateTime('updated_date')->nullable();
            $table->boolean('active')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('files');
    }
}
