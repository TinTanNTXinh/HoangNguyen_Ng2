<?php

use Illuminate\Database\Seeder;

class AdminFilesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array_name = [
            'admin',
            'vsysadmin'
        ];

        foreach($array_name as $key => $name){
            \App\File::create([
                'code'         => $name,
                'name'         => $name,
                'extension'    => 'jpg',
                'mime_type'    => 'image/jpeg',
                'path'         => 'assets/img/a'.$key.'.jpg',
                'size'         => 0,
                'note'         => '',
                'created_date' => date('Y-m-d H:i:s'),
                'updated_date' => null,
                'active'       => true,
                'table_name'   => 'users',
                'table_id'     => ++$key
            ]);
        }
    }
}
