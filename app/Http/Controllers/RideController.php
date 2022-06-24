<?php

namespace App\Http\Controllers;
use App\Models\Location;
use App\Models\Ride;
use App\Http\Requests\StoreRideRequest;
use App\Http\Requests\UpdateRideRequest;

class RideController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreRideRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRideRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ride  $ride
     * @return \Illuminate\Http\Response
     */
    public function show(Ride $ride)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ride  $ride
     * @return \Illuminate\Http\Response
     */
    public function edit(Ride $ride)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateRideRequest  $request
     * @param  \App\Models\Ride  $ride
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRideRequest $request, Ride $ride)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ride  $ride
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ride $ride)
    {
        //
    }
    public function rideRequestDisplay(){
        $locations = Location::all();
        return view('customer.ride.rideRequest')->with('locations', $locations);
    }
    public function getDistance($latitude1,$longitude1,$latitude2,$longitude2){
        $earthRadius = 6371;
        $latform = deg2rad($latitude1);
        $lonform =deg2rad($longitude2);
        $latTo = deg2rad($latitude2);
        $lonTo = deg2rad($longitude2);
        $latDelta = $latTo - $latform;
        $lonDelta = $lonTo - $lonform;

        $angle = 2*asin(sqrt(pow(sin($latDelta/2),2)+cos($latform)*cos($latTo)*pow(sin($lonDelta/2),2)));
        return $earthRadius*$angle;
    }
}
