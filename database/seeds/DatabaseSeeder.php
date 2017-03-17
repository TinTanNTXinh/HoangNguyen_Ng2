<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(GroupRolesTableSeeder::class);
        $this->call(RolesTableSeeder::class);
        $this->call(PositionsTableSeeder::class);

        $this->call(AdminsTableSeeder::class);
        $this->call(AdminRolesTableSeeder::class);
        $this->call(AdminFilesTableSeeder::class);

//        $this->call(UsersTableSeeder::class);
//        $this->call(UserRolesTableSeeder::class);
//        $this->call(FilesTableSeeder::class);
    }
}
