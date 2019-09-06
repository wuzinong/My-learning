import 'dart:convert';

import 'package:flutter/material.dart';
import 'components/RatingBar.dart';

class Comments extends StatefulWidget {
  Comments({Key key}) : super(key: key);

  @override
  CommentsState createState() => new CommentsState();
}

class CommentsState extends State<Comments> {
  final TextEditingController _controller = new TextEditingController();
  double speed;
  double attitude;
  double quality;
  void initState() {
    super.initState();
    setState(() {
         speed=3.4;
         attitude=4.5;
         quality=5.9;
    });
  }

  submitScores(){
      print(speed);
      print(attitude);
      print(speed);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: Text("评分")),
        body: Padding(
            padding:
                const EdgeInsets.symmetric(vertical: 16.0, horizontal: 24.0),
            child: Column(
              //主轴上设置居中
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              //交叉轴(水平方向)设置从左开始
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                Column(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Container(
                        child: Row(
                          children: <Widget>[
                            Container(
                              margin: EdgeInsets.only(bottom:20.0),
                              child: Text(
                                "上门速度:",
                                style: TextStyle(
                                  color:Colors.black,
                                  fontSize: 18.0
                                ),
                              ),
                            ),
                            Container(
                              margin: EdgeInsets.fromLTRB(10.0, 0, 10,20),
                              child: Text(
                                speed.toString(),
                                style: TextStyle(
                                  color:Colors.black,
                                  fontSize: 18.0
                                ),
                              ),
                            ),
                            Container(
                              margin: EdgeInsets.only(bottom:20.0),
                              child: Text(
                                "分",
                                style: TextStyle(
                                  color:Colors.black,
                                  fontSize: 18.0
                                ),
                              ),
                            )
                          ],
                        )
                    ),
                    Row(children: <Widget>[
                      RatingBar(
                        value: speed,
                        size: 30,
                        padding: 25,
                        nomalImage: 'images/star_nomal.png',
                        selectImage: 'images/star.png',
                        selectAble: true,
                        onRatingUpdate: (value) {
                          setState(() {
                            speed = double.parse(value);
                          });
                          submitScores();
                        },
                        maxRating: 10,
                        count: 5,
                      ),
                    ])
                  ],
                ),
                Column(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Container(
                        child: Row(
                          children: <Widget>[
                            Container(
                              margin: EdgeInsets.only(bottom:20.0),
                              child: Text(
                                "服务态度:",
                                style: TextStyle(
                                  color:Colors.black,
                                  fontSize: 18.0
                                ),
                              ),
                            ),
                            Container(
                              margin: EdgeInsets.fromLTRB(10.0, 0, 10,20),
                              child: Text(
                                attitude.toString(),
                                style: TextStyle(
                                  color:Colors.black,
                                  fontSize: 18.0
                                ),
                              ),
                            ),
                            Container(
                              margin: EdgeInsets.only(bottom:20.0),
                              child: Text(
                                "分",
                                style: TextStyle(
                                  color:Colors.black,
                                  fontSize: 18.0
                                ),
                              ),
                            )
                          ],
                        )
                    ),
                    Row(children: <Widget>[
                      RatingBar(
                        value: attitude,
                        size: 30,
                        padding: 25,
                        nomalImage: 'images/star_nomal.png',
                        selectImage: 'images/star.png',
                        selectAble: true,
                        onRatingUpdate: (value) {
                          attitude =double.parse(value);
                          setState(() {});
                        },
                        maxRating: 10,
                        count: 5,
                      ),
                    ])
                  ],
                ),
                Column(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Container(
                        child: Row(
                          children: <Widget>[
                            Container(
                              margin: EdgeInsets.only(bottom:20.0),
                              child: Text(
                                "工作质量，可在保质期后评:",
                                style: TextStyle(
                                  color:Colors.black,
                                  fontSize: 18.0
                                ),
                              ),
                            ),
                            Container(
                              margin: EdgeInsets.fromLTRB(10.0, 0, 10,20),
                              child: Text(
                                quality.toString(),
                                style: TextStyle(
                                  color:Colors.black,
                                  fontSize: 18.0
                                ),
                              ),
                            ),
                            Container(
                              margin: EdgeInsets.only(bottom:20.0),
                              child: Text(
                                "分",
                                style: TextStyle(
                                  color:Colors.black,
                                  fontSize: 18.0
                                ),
                              ),
                            )
                          ],
                        )
                    ),
                    Row(children: <Widget>[
                      RatingBar(
                        value: quality,
                        size: 30,
                        padding: 25,
                        nomalImage: 'images/star_nomal.png',
                        selectImage: 'images/star.png',
                        selectAble: true,
                        onRatingUpdate: (value) {
                          setState(() {
                            quality = double.parse(value);
                          });
                        },
                        maxRating: 10,
                        count: 5,
                      ),
                    ])
                  ],
                )
              ],
            )));
  }
}
