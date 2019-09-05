import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_alipay/flutter_alipay.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class Alipay extends StatefulWidget {
  @override
  _MyAppState createState() => new _MyAppState();
}

class _MyAppState extends State<Alipay> {
  String _payInfo = "";
  AlipayResult _payResult;

  final myController = new TextEditingController();

  void _loadData(){
    _payInfo = "";
    _payResult = null;

    http
        .post("http://120.79.190.42:8071/pay/test_pay/create",
        body: json.encode({"fee": 1, "title": "test pay"}))
        .then((http.Response response) {
      if (response.statusCode == 200) {
        print(response.body);
        var map = json.decode(response.body);
        int flag = map["flag"];
        if (flag == 0) {
          var result = map["result"];
          setState(() {
            _payInfo = result["credential"]["payInfo"];
            myController.text = _payInfo;
          });
          return;
        }
      }
      throw new Exception("创建订单失败");
    }).catchError((e) {
      setState(() {
        _payInfo = e.toString();
        myController.text = _payInfo;
      });
    });

    setState(() {

    });
  }

  @override
  initState() {
    super.initState();

    _loadData();
  }

  onChanged(String value) {
    _payInfo = value;
  }

  callAlipay() async {
    dynamic payResult;
    try {
      print("The pay info is : " + _payInfo);
      payResult = await FlutterAlipay.pay(_payInfo);
    } on Exception catch (e) {
      payResult = null;
    }

    if (!mounted) return;

    setState(() {
      _payResult = payResult;
    });
  }

  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      home: new Scaffold(
        appBar: new AppBar(
          title: new Text('Alipay example'),
        ),
        body: new SingleChildScrollView(
          child: new Column(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              new Text("输入调用字符串,如何生成请查阅支付宝官方文档:https://docs.open.alipay.com/"),
              new TextField(
                  maxLines: 15, onChanged: onChanged, controller: myController),
              new RaisedButton(onPressed: callAlipay, child: new Text("调用支付宝")),
              new RaisedButton(onPressed: (){

                _loadData();

              }, child: new Text("重新下单")),
              new Text(_payResult == null ? "" : _payResult.toString())
            ],
          ),
        ),
      ),
    );
  }
}