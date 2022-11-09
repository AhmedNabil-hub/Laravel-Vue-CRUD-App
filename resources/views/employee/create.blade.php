@extends('layouts.app')

@section('content')
  <div id="app">
    <employee-form scope="{{ $data['scope'] }}" :id="{{ $data['id'] ?? 0 }}"></employee-form>
  </div>
@endsection
