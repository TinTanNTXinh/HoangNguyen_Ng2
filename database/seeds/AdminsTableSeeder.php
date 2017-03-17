<?php

use Illuminate\Database\Seeder;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        # USER SYSTEM
        // 1
        \App\User::create([
            'code'          => 'admin',
            'fullname'      => 'Admin',
            'username'      => 'admin',
            'password'      => Hash::make('123456'), //t1nt@n50ft.comA1
            'address'       => 'admin',
            'phone'         => '0987654321',
            'birthday'      => date('Y-m-d'),
            'sex'           => 'Nam',
            'email'         => 'admin@vsys.com',
            'note'          => 'admin',
            'created_by'    => 1,
            'updated_by'    => 1,
            'created_date'  => date('Y-m-d H:i:s'),
            'updated_date'  => date('Y-m-d H:i:s'),
            'active'        => true,
            'position_id'   => 1
        ]);
        // 2
        \App\User::create([
            'code'          => 'vsys',
            'fullname'      => 'Vsys Admin',
            'username'      => 'vsysadmin',
            'password'      => Hash::make('123456'),
            'address'       => 'vsys',
            'phone'         => '0987654321',
            'birthday'      => date('Y-m-d'),
            'sex'           => 'Nam',
            'email'         => 'vsys@vsys.com',
            'note'          => 'vsys',
            'created_by'    => 1,
            'updated_by'    => 1,
            'created_date'  => date('Y-m-d H:i:s'),
            'updated_date'  => date('Y-m-d H:i:s'),
            'active'        => true,
            'position_id'   => 2
        ]);
    }
}
