<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
	public function index()
	{
		$employees = Employee::all();

		return response(
			$employees,
			200,
		);
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
}
