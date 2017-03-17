<?php

use Illuminate\Database\Seeder;

class AdminRolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roleLength = \App\Role::all()->count();
        //admin
        for ($i = 1; $i <= $roleLength; $i++) {
            if ($i == 3) continue; //Collection
            if ($i == 5) continue; //ProductType
            if ($i == 10) continue; //Producer
            if ($i == 14) continue; //Position
            if ($i == 17) continue; //ReportStaffInput
            if ($i == 18) continue; //ReportStaffOutput
            \App\UserRole::create([
                'user_id'      => 1,
                'role_id'      => $i,
                'created_by'   => 1,
                'updated_by'   => 0,
                'created_date' => date('Y-m-d H:i:s'),
                'updated_date' => date('Y-m-d H:i:s'),
                'active'       => true
            ]);
        }

        //vsys
        for ($i = 1; $i <= $roleLength; $i++) {
            if ($i == 3) continue; //Collection
            if ($i == 5) continue; //ProductType
            if ($i == 10) continue; //Producer
            if ($i == 14) continue; //Position
            if ($i == 17) continue; //ReportStaffInput
            if ($i == 18) continue; //ReportStaffOutput
            \App\UserRole::create([
                'user_id'      => 2,
                'role_id'      => $i,
                'created_by'   => 1,
                'updated_by'   => 0,
                'created_date' => date('Y-m-d H:i:s'),
                'updated_date' => date('Y-m-d H:i:s'),
                'active'       => true
            ]);
        }
    }
}
