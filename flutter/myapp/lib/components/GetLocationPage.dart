import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong/latlong.dart';
import 'package:location/location.dart';
import 'package:fluttertoast/fluttertoast.dart';

class GetLocationPage extends StatefulWidget {
  @override
  _GetLocationPageState createState() => _GetLocationPageState();
}

class _GetLocationPageState extends State<GetLocationPage> {

  var location = new Location();
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
//  Map<String, double> userLocation;
  LatLng userLocation;

  void initState(){
    super.initState();
    _getLocation().then((value) {
      setState(() {
        userLocation = new LatLng(value["latitude"], value["longitude"]);
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    var markers = <Marker>[
              new Marker(
                width: 80.0,
                height: 80.0,
                point: userLocation,
                 builder: (ctx) => Container(
                     child: GestureDetector(
                       onTap: () {
                         Fluttertoast.showToast(
                             msg: "Your current location: latitude:"+userLocation.toString(),
                             gravity: ToastGravity.CENTER,
                             textColor: Colors.grey);
                       },
                       child: FlutterLogo(),
                 ))
              ),
   ];

    return Scaffold(
      appBar: AppBar(),
      body: userLocation==null? Text("Loading"):new FlutterMap(
        options: new MapOptions(
          center: userLocation,
          zoom: 13.0,
          onTap:_handleTap
        ),
        layers: [
          new TileLayerOptions(
            urlTemplate: "https://api.mapbox.com/v4/"
                "{id}/{z}/{x}/{y}@2x.png?access_token={accessToken}",
//            urlTemplate: "https://api.tiles.mapbox.com/v4/"
//                "{id}/{z}/{x}/{y}@2x.png?access_token={accessToken}",
//            urlTemplate: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//            subdomains: ['a', 'b', 'c'],

            additionalOptions: {
              'accessToken': 'sk.eyJ1IjoiYnJhbmd1IiwiYSI6ImNrMDR3Nm00NjA4ajQzY3BjYnY4NGRvazAifQ.UvtV5yEIHkKAv90wdGu6Wg',
              'id': 'mapbox.streets',
            },
          ),
          new MarkerLayerOptions(
            markers: markers,
          ),
        ],
      ),
    );
  }

  void _handleTap(LatLng latlng) {
     setState((){
       userLocation = latlng;
     });
  }

  Future<Map<String, double>> _getLocation() async {
    var currentLocation = <String, double>{};
    try {
      currentLocation = await location.getLocation();
    } catch (e) {
      currentLocation = null;
    }
    return currentLocation;
  }
}