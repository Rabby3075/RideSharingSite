<?php

namespace App\Http\Controllers;
use App\Models\Location;
use App\Models\Ride;
use App\Http\Requests\StoreRideRequest;
use App\Http\Requests\UpdateRideRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
        return round($earthRadius*$angle);
    }

    public function rideRequestSubmit(Request $request)
    {
        $validate = $request->validate([
            "pickLocation" => "required",
            'dropLocation' => 'required'
        ]);

        $pickLocation = Location::where('location', $request->pickLocation)->first();
        $dropLocation = Location::where('location', $request->dropLocation)->first();


             if($pickLocation){

                if($dropLocation){


             /*$ride = new Ride();
               $ride->customerName = $request->session()->get('name');
               $ride->customerId = $request->session()->get('id');
               $ride->customerPhone = $request->session()->get('phone');
               $ride->pickupPoint = $request->pickLocation;
               $ride->destination = $request->droplocation;
               $ride->length = $distance;
               $ride->cost = $bill;
               $result = $ride->save();*/
                $lat1 = $pickLocation->latitude;
              $long1 = $pickLocation->longitude;

              $lat2 = $dropLocation->latitude;
              $long2 = $dropLocation->longitude;

              $distance = $this->getDistance($lat1, $long1, $lat2, $long2);
              $status = "Waiting for rider...";

              $baseBill = 50;
              $perKiloBill = 10;
              $bill = $baseBill + $perKiloBill * $distance;
              //date_default_timezone_set('Asia/Dhaka');
               // $date = date('d-m-y h:i:s');
               date_default_timezone_set('Asia/Dhaka');
               $time =  date('d F Y, h:i:s A');
              $ride = new Ride();
               $ride->customerName = $request->session()->get('name');
               $ride->customerId = $request->session()->get('id');
               $ride->customerPhone = $request->session()->get('phone');
               $ride->pickupPoint = $request->pickLocation;
               $ride->destination = $request->dropLocation;
               $ride->length = $distance;
               $ride->cost = $bill;
               $ride->customerStatus = $status;
               $ride->rideRequestTime = $time;
               $result = $ride->save();
               if($result){
                $success = "Congratulations your ride request confirm successfully";

                return redirect()->back()->with('success', $success)
                ->with('destination',$distance.'kilo')
                ->with('price','Bill: '.$bill.'Tk');
               }

                }
                else{
                    return redirect()->back()->with('failed', 'Drop Location is not correct.Please check correct location from your suggestion box');
                }
              }
              else{
                return redirect()->back()->with('failed', 'Pickup location is not correct.Please check correct location from your suggestion box');
              }









    }

    public function rideList(){
        $rideList = Ride::where('customerId',session()->get('id'))->get();
        return view('customer.ride.rideList')->with('rideList', $rideList);
    }

    public function rideCancelConfirmation(Request $request){
        $rideCancel = Ride::where('id',$request->id)->first();
        return $rideCancel;
    }
    public function rideCancel(Request $request){
        $validate = $request->validate([
            "rideid" => "required"

        ]);
        $rideCancel = Ride::where('id',$request->rideid)->first();

        date_default_timezone_set('Asia/Dhaka');
       $time =  date('d F Y, h:i:s A');

        $rideCancel->customerStatus = "Cancel";
        $rideCancel->cancelTime = $time;
        $result = $rideCancel->save();
        if($result){
            return redirect()->back()->with('success', 'Ride Cancel');
        }

    }



}
