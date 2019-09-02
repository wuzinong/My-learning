
import 'package:flutter/material.dart';

import './MyDrawer.dart';

class MyTab extends StatelessWidget{
  
  Widget build(BuildContext context){
     return new DefaultTabController(
       length:2,
       child: Scaffold(
          appBar: AppBar(
              backgroundColor: Colors.lightBlue,
              title: TabBar(
              tabs: [
                Padding(
                  padding: EdgeInsets.all(12),
                  child:Text(
                    "水",
                    textAlign: TextAlign.center,
                    style: new TextStyle(
                      fontSize: 17.0,
                    ),
                  ),
                ),
                Text(
                  "电",
                  textAlign: TextAlign.center,
                  style: new TextStyle(
                    fontSize: 17.0,
                  ),
                ),
                // new Tab(icon: new Icon(Icons.directions_transit))
              ],
              indicatorColor: Colors.white,
            ),
          ),
        drawer: new Drawer(     //侧边栏按钮Drawer
          child: new MyDrawer(),
        ),
          body:Padding(
             padding:EdgeInsets.fromLTRB(10, 10, 10, 5),
            child:new TabBarView(
            children: [
              WaterDetail(),
              ElectricityDetail()
            ],
          ),
       )
       )
     );
  }
}


class WaterDetail extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: <Widget>[
          Text(
            "维修-80"
          ),
          Text(
            "安装-80"
          ),
          Text(
            "水管-80"
          ),
          Text(
            "水龙头-80"
          ),
        ],
      ),
    );
  }
}

class ElectricityDetail extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: <Widget>[
          Text(
            "灯泡-80"
          ),
          Text(
            "电表-80"
          ),
          Text(
            "电管-80"
          ),
          Text(
            "空调电器-80"
          ),
        ],
      ),
    );
  }
}