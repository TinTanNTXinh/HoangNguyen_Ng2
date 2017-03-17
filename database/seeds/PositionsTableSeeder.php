<?php

use Illuminate\Database\Seeder;

class PositionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array_name = [
            'System Admin',
            'System Vsys',
            'Quản trị viên',
            'Nhân viên nhập hàng',
            'Nhân viên xuất hàng'
        ];

        $array_code = [
            'SA',
            'SV',
            'QTV',
            'NVNH',
            'NVXH'
        ];

        foreach($array_name as $key => $name){
            \App\Position::create([
                'code'		  => $array_code[$key],
                'name'        => $array_name[$key],
                'description' => $array_name[$key],
                'active'      => true
            ]);
        }
    }
}
