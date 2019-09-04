
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong/latlong.dart';

// class Map extends StatelessWidget{
  
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//         appBar:AppBar(
//           title:Text("我的地址")
//         ),
//          body:Padding(
//           padding: const EdgeInsets.symmetric(vertical: 16.0, horizontal: 24.0),  
//           child: Column(
//             children: <Widget>[
//               new FlutterMap(
//                 options: new MapOptions(
//                   center: new LatLng(51.5, -0.09),
//                   zoom: 13.0,
//                 ),
//                 layers: [
//                   new TileLayerOptions(
//                     urlTemplate: "https://api.tiles.mapbox.com/v4/"
//                         "{id}/{z}/{x}/{y}@2x.png?access_token={accessToken}",
//                     additionalOptions: {
//                       'accessToken': 'sk.eyJ1IjoiYnJhbmd1IiwiYSI6ImNrMDR3Nm00NjA4ajQzY3BjYnY4NGRvazAifQ.UvtV5yEIHkKAv90wdGu6Wg',
//                       'id': 'mapbox.streets',
//                     },
//                   ),
//                   new MarkerLayerOptions(
//                     markers: [
//                       new Marker(
//                         width: 80.0,
//                         height: 80.0,
//                         point: new LatLng(51.5, -0.09),
//                         builder: (ctx) =>
//                         new Container(
//                           child: new FlutterLogo(),
//                         ),
//                       ),
//                     ],
//                   ),
//                 ],
//               )
//             ],
//           ),
//          )
//       );
//   }
// }

class Map extends StatefulWidget {
  @override
  _TestAppState createState() => _TestAppState();
}

class _TestAppState extends State<Map> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Container(
            width: 200,
            height: 200,
            child: FlutterMap(
              options: MapOptions(
                center: LatLng(45.5231, -122.6765),
                zoom: 13.0,
              ),
              layers: [
                TileLayerOptions(
                    urlTemplate:
                        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    subdomains: ['a', 'b', 'c']),
              ],
            ),
          ),
        ),
      ),
    );
  }
}