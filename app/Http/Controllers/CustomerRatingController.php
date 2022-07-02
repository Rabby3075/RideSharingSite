<?php

namespace App\Http\Controllers;

use App\Models\customerRating;
use App\Models\Ride;
use App\Http\Requests\StorecustomerRatingRequest;
use App\Http\Requests\UpdatecustomerRatingRequest;

class CustomerRatingController extends Controller
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
     * @param  \App\Http\Requests\StorecustomerRatingRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorecustomerRatingRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\customerRating  $customerRating
     * @return \Illuminate\Http\Response
     */
    public function show(customerRating $customerRating)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\customerRating  $customerRating
     * @return \Illuminate\Http\Response
     */
    public function edit(customerRating $customerRating)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatecustomerRatingRequest  $request
     * @param  \App\Models\customerRating  $customerRating
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatecustomerRatingRequest $request, customerRating $customerRating)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\customerRating  $customerRating
     * @return \Illuminate\Http\Response
     */
    public function destroy(customerRating $customerRating)
    {
        //
    }
    public function discountList(){
        $discount = customerRating::all();
        return view('customer.ride.discount')->with('discount', $discount);
    }
}
