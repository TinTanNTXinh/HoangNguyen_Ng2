<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Role;
use App\UserRole;
use Hash;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class AuthController extends Controller
{
    public function postAuthentication(Request $request)
    {
        $arr_datas = $this->authentication($request->input('user'));
        return response()->json($arr_datas, $arr_datas['status_code']);
    }

    public function getAuthorization()
    {
        $arr_datas = $this->authorization();
        return response()->json($arr_datas, $arr_datas['status_code']);
    }

    public function authentication($data)
    {
        if($data['username'] == null || $data['username'] == '' || $data['password'] == null || $data['password'] == '')
            return ['error' => 'username or password is empty', 'status_code' => 404];

        $user = User::whereActive(true)->where('username', $data['username'])->first();

        if ($user) {
            $password_check = Hash::check($data['password'], $user->password);
            if (!$password_check) {
                return ['error' => 'password is not correct', 'status_code' => 401];
            }

            try {
                if (!$token = JWTAuth::fromUser($user)) {
                    return ['error' => 'could_not_create_token', 'status_code' => 401];
                }
            } catch (JWTException $e) {
                return ['error' => 'could_not_create_token', 'status_code' => 500];
            }
        } else {
            return ['error' => 'user is not exist', 'status_code' => 401];
        }
        return ['token' => $token, 'status_code' => 200];
    }

    public function authorization()
    {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return ['error' => 'user_not_found', 'status_code' => 404];
            }
        } catch (TokenExpiredException $e) {
            return ['error' => 'token_expired', 'status_code' => $e->getStatusCode()];
        } catch (TokenInvalidException $e) {
            return ['error' => 'token_invalid', 'status_code' => $e->getStatusCode()];
        } catch (JWTException $e) {
            return ['error' => 'token_absent', 'status_code' => $e->getStatusCode()];
        }

        $user = User::where([['users.id', $user->id], ['users.active', true], ['positions.active', true], ['files.table_name', 'users']])
            ->leftJoin('positions', 'positions.id', '=', 'users.position_id')
            ->leftJoin('files', 'files.table_id', '=', 'users.id')
            ->select('users.*', 'positions.name as position_name', 'files.path as file_path')
            ->first();

        if (!$user)
            return ['error' => 'user is not exist', 'status_code' => 401];

        $user_roles = UserRole::where([['active', true], ['user_id', $user->id]])->pluck('role_id')->toArray();
        if (!$user_roles)
            return ['error' => 'user_role is not exist', 'status_code' => 401];

        $roles = Role::whereIn('id', $user_roles)->orderBy('index')->get()->toArray();
        if (!$roles)
            return ['error' => 'role is not exist', 'status_code' => 401];

        return ['user' => $user, 'roles' => $roles, 'status_code' => 201];
    }
}
