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
			['data' => $employee],
			201,
		);
	}

	public function show(Employee $employee)
	{
		$data = [
			'scope' => 'show',
			'id' => $employee->id,
		];

		return view('employee.show')
			->with('data', $data)
			->with('employee', $employee);
	}

	public function edit(Employee $employee)
	{
		$data = [
			'scope' => 'edit',
			'id' => $employee->id,
		];

		return view('employee.edit')
			->with('data', $data)
			->with('employee', $employee);
	}

	public function update(Request $request, Employee $employee)
	{
		$validated_data = $request->all();

		$employee->update($validated_data);

		return response(
			['data' => $employee],
			201,
		);
	}

	public function destroy(Employee $employee)
	{
		$employee->delete();

		return response(
			['message' => 'Employee deleted successfully'],
			200
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

	public function apiShow(Employee $employee)
	{
		return response(
			['data' => $employee],
			200,
		);
	}
}
