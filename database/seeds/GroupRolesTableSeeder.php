<?php

use Illuminate\Database\Seeder;

class GroupRolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array_code = [
            'MD',
            'DLBD',
            'GD',
            'BC'
        ];
        
        $array_name = [
            'Mặc định',
            'Dữ liệu ban đầu',
            'Giao dịch',
            'Báo cáo'
        ];

        foreach($array_name as $key => $name){
            \App\GroupRole::create([
                'code'        => $array_code[$key],
                'name'        => $array_name[$key],
                'description' => $array_name[$key],
                'active'      => true
            ]);
        }
    }
}
