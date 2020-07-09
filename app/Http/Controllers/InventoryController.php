<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inventories;
class InventoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $inventory = Inventories::all();

        $inventory = Inventories::all();
        return response()->json($inventory);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $inventory = new Inventories();

            $name = $request->inventoryname;
            $categories = $request->inventorycategoris;
    
            $inventory->inventory_name = $name;
            $inventory->inventory_categories = $categories;
    
            if($inventory->save())
            {
                return response()->json($inventory);
            }
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'error' => 'invalid'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $inventory = Inventories::find($id);
        try {
            return response()->json($inventory);
        } catch (\Throwable $th) {
            //throw $th;
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $name = $request->inventoryname;
        $categories = $request->inventorycategoris;

        $inventory = Inventories::find($id);

        $inventory->inventoryname = $name;
        $inventory->inventorycategoris = $categories;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = Inventories::find($id);
        $delete->delete();
        return response()->json($delete);
    }


    public function destroyAll($id) {
        try {
            $deleteAll = \DB::table('table_name')->truncate();
            return response()->json($deleteAll);
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'errors' => 'invalid'
            ]);
        }
    }
}
