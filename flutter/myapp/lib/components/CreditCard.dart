import 'package:flutter/material.dart';
import 'package:flutter_credit_card/credit_card_form.dart';
import 'package:flutter_credit_card/credit_card_model.dart';
import 'package:flutter_credit_card/flutter_credit_card.dart';

class CreditCard extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return MySampleState();
  }
}

class MySampleState extends State<CreditCard> {
  String cardNumber = '';
  String expiryDate = '';
  String cardHolderName = '';
  String cvvCode = '';
  bool isCvvFocused = false;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Credit Card View Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        resizeToAvoidBottomInset: true,
        floatingActionButton: new FloatingActionButton(
              onPressed: () {
                           print(cardNumber);
                           print(expiryDate);
                           print(cardHolderName);
                           print(cvvCode);
                           print(isCvvFocused);
               },
              tooltip: 'Increment',
              child: new Icon(Icons.send),
         ), 
        body: SafeArea(
          child: Column(
            children: <Widget>[
              CreditCardWidget(
                cardNumber: cardNumber,
                expiryDate: expiryDate,
                cardHolderName: cardHolderName,
                cvvCode: cvvCode,
                showBackView: isCvvFocused,
              ),
              Expanded(
                child: SingleChildScrollView(
                  child: CreditCardForm(
                    onCreditCardModelChange: onCreditCardModelChange,
                  ),
                ),
              ),
              // Row(
              //   mainAxisSize: MainAxisSize.max,
              //   mainAxisAlignment: MainAxisAlignment.center,
              //   crossAxisAlignment: CrossAxisAlignment.center,
              //   children:<Widget>[
              //     RaisedButton(
              //           padding: EdgeInsets.all(15.0),
              //           child: Text("确认付款"),
              //           color: Theme
              //               .of(context)
              //               .primaryColor,
              //           textColor: Colors.white,
              //           onPressed: () {
              //              print(cardNumber);
              //              print(expiryDate);
              //              print(cardHolderName);
              //              print(cvvCode);
              //              print(isCvvFocused);
              //           },
              //         )
              //   ]
              // )
            ],
          ),
        ),
      ),
    );
  }

  void onCreditCardModelChange(CreditCardModel creditCardModel) {
    setState(() {
      cardNumber = creditCardModel.cardNumber;
      expiryDate = creditCardModel.expiryDate;
      cardHolderName = creditCardModel.cardHolderName;
      cvvCode = creditCardModel.cvvCode;
      isCvvFocused = creditCardModel.isCvvFocused;
    });
  }
}