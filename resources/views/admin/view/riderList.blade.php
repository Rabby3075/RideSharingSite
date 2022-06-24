
<table class="table table-border">
    <tr>
        <th class="fs-4">Name</th>
        <th class="fs-4">Phone</th>
        <th class="fs-4">Email</th>
        <th class="fs-4">id</th>
    </tr>
    @foreach($riders as $rider)
        <tr >
            <td ><a class="text-decoration-none text-dark fs-4" href="/{{$rider->id}}">{{$rider->name}}</a></td>
            <td class="fs-4">{{$rider->phone}}</td>
            <td class="fs-4">{{$rider->email}}</td>
            <td class="fs-4">{{$rider->id}}</td>
            <td><a class="text-decoration-none text-white bg-success p-1 m-3 rounded" href="/updateRider/{{$rider->id}}">Edit</a></td>
            <td><a class="text-decoration-none text-white bg-dark p-1 m-3 rounded" href="/riderDelete/{{$rider->id}}">Delete</a></td>

        </tr>
    @endforeach
</table>


