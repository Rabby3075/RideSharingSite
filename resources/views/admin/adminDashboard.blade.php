@extends('admin.layouts.app')
@section('content')
<head>
<style type="text/css">
	#btn:checked ~ .menu-btn{
  left: 100px;
}
a{
	color: white;
	text-decoration: none;
}
div.b{
	margin-right: 800px;
	margin-left: 500px;
	margin-top: 200px;
}
table.table{
	margin-top: 20%;
	margin-left: 30px;
	
}

col-lg-8{
	margin-top: 30%;
}

</style>
</head>
<body>
<div  class="col col-lg-8"> 
	<table class="table" border="1">
		<tr>
			<td>
	<div class="container2">
	<table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
</td>
<td>

	<div class=" container1">
	<table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
</td>
</tr>
</table>
</div>
</body>

@endsection