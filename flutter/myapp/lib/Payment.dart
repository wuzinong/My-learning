import 'package:flutter/material.dart';
import 'components/Alipay.dart';
import 'components/Wechatpay.dart';
import 'components/CreditCard.dart';

class Payment extends StatelessWidget{
  
   @override
   Widget build(BuildContext context) {
     return Scaffold(
        appBar:AppBar(
          title:Text("支付")
        ),
        body:Padding(
          padding: const EdgeInsets.symmetric(vertical: 16.0, horizontal: 24.0),
          child:Row(
              //主轴上设置居中
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              //交叉轴(水平方向)设置从左开始
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                 RaisedButton(
                        padding: EdgeInsets.all(15.0),
                        child: Text("信用卡"),
                        color: Theme
                            .of(context)
                            .primaryColor,
                        textColor: Colors.white,
                        onPressed: () {
                           Navigator.push( context,
                            new MaterialPageRoute(builder: (context) {
                                  return new CreditCard();
                            }));
                        },
                      ),
                 RaisedButton(
                        padding: EdgeInsets.all(15.0),
                        child: Text("Paynow"),
                        color: Theme
                            .of(context)
                            .primaryColor,
                        textColor: Colors.white,
                        onPressed: () {
                        },
                      ),
                RaisedButton(
                        padding: EdgeInsets.all(15.0),
                        child: Text("Alipay"),
                        color: Theme
                            .of(context)
                            .primaryColor,
                        textColor: Colors.white,
                        onPressed: () {
                          Navigator.push( context,
                          new MaterialPageRoute(builder: (context) {
                                  return new Alipay();
                            }));
                
                        },
                ),
                RaisedButton(
                        padding: EdgeInsets.all(15.0),
                        child: Text("WechatPay"),
                        color: Theme
                            .of(context)
                            .primaryColor,
                        textColor: Colors.white,
                        onPressed: () {
                          Navigator.push( context,
                          new MaterialPageRoute(builder: (context) {
                                  return new Wechatpay();
                            }));
                
                        },
                )
              ],
           )
        )
     );
   }
}
