import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';
import './Login.dart';
import './Registration.dart';
import './Payment.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Flutter Demo',
      theme: new ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: new MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => new _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text(widget.title),
      ),
      body: new Center(
        child: new Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            new Text(
              'You have pushed the button this many times:',
            ),
            new Text(
              '$_counter',
              style: Theme.of(context).textTheme.display1,
            ),
            FlatButton(
              child: Text("Login page"),
              textColor: Colors.blue,
              onPressed: () {
                //导航到新路由   
                Navigator.push( context,
                new MaterialPageRoute(builder: (context) {
                        return new LoginRoute();
                  }));
                },
              ),
            FlatButton(
              child: Text("Registration page"),
              textColor: Colors.blue,
              onPressed: () {
                Navigator.push( context,
                new MaterialPageRoute(builder: (context) {
                        return new RegistrationRoute();
                  }));
                },
              ),
            FlatButton(
              child: Text("Payment"),
              textColor: Colors.blue,
              onPressed: () {
                Navigator.push( context,
                new MaterialPageRoute(builder: (context) {
                        return new Payment();
                  }));
                },
              ),
            RandomWordsWidget(),
            GetImages()
          ],
        ),
      ),
      floatingActionButton: new FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: new Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}



//english_words
class RandomWordsWidget extends StatelessWidget{
  @override 
  Widget build(BuildContext context){
    //生成随机字符串
    final wordPair = new WordPair.random();
    return Padding(
      padding:const EdgeInsets.all(8.0),
      child:new Text(wordPair.toString())
    );
  }
}

//images
class GetImages extends StatelessWidget{
  @override 
  Widget build(BuildContext context){
    //  return new DecoratedBox(
    //     decoration: new BoxDecoration(
    //       image: new DecorationImage(
    //         image: new AssetImage('images/test.jpg')
    //       )
    //     )
    //  );
     return Image.asset('images/text.jpg');
  }
}