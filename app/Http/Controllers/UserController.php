<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use JWTAuth;
use Illuminate\Support\Facades\Hash;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller
{
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
        // dd($request->all());
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
        ]);

        $token = JWTAuth::fromUser($user);
        return response()->json(compact('user', 'token'), 201);
    }


    public function login(Request $request) {
        $credentials = $request->only(['name', 'password']);
        try {
            if($token = JWTAuth::attempt($credentials)) {
                $users = auth()->user()->id;
                $updateToken = User::find($users)->update(['token' => $token]);
                return response()->json(compact('updateToken'));
            }
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'errors' => 'Invalid Users',
            ]);
        }
    }
}
