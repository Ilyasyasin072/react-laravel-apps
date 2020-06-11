<?php

use Illuminate\Database\Seeder;
class InventorySeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // inventories
        \DB::table('inventories')
        ->insert([
            'inventory_name' => 'Laptop',
            'inventory_categories' => 'Computer',
        ]);
        \DB::table('inventories')
        ->insert([
            'inventory_name' => 'PC',
            'inventory_categories' => 'Computer',
        ]);
        \DB::table('inventories')
        ->insert([
            'inventory_name' => 'Hardist',
            'inventory_categories' => 'Computer',
        ]);
    }
}
