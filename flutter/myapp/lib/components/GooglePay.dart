import 'package:flutter/material.dart';


class GooglePay extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return GooglePayState();
  }
}

class GooglePayState extends State<GooglePay> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Credit Card View Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar:AppBar(
            title:Text("google pay")
        ),
        body: Center(
          child:
          RaisedButton(
            padding: EdgeInsets.all(15.0),
            child: Text("信用卡"),
            color: Theme
                .of(context)
                .primaryColor,
            textColor: Colors.white,
            onPressed: () {
            },
          ),
        ),
      ),
    );
  }
}