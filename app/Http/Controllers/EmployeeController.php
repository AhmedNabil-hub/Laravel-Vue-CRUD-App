<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
	public function index()
	{
		$employees = Employee::all();

		return view('employee.index')
			->with('employees', $employees);
	}

	public function create()
	{
		$data = [
			'scope' => 'create',
		];

		return view('employee.create')
			->with('data', $data);
	}

	public function store(Request $request)
	{
		$validated_data = $request->all();

		$employee = Employee::create($validated_data);

		return response(
			$employee,
			201,
		);
	}

	public function apiIndex()
	{
		$employees = Employee::all();

		return response(
			['data' => $employees],
			200,
		);
	}
}
