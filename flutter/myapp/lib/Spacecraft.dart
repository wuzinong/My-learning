import 'dart:io';

class Spacecraft {
  String name;
  DateTime launchDate;
  
  Spacecraft(this.name,this.launchDate){

  }

  Spacecraft.unlaunched(String name):this(name,null);

  int get launchYear => launchDate?.year;

  void describe(){
    print('Spacecraft:$name');
    if(launchDate != null){
      int years = DateTime.now().difference(launchDate).inDays ~/ 365;
      print('Launched: $launchYear ($years years ago)');
    }else{
      print('Unlaunched');
    }
  }
}

// var voyager = Spacecraft('Voyager',DateTime(1977,5,6));
// voyager.describe();

// var voyager3 = Spacecraft.unlaunched('Voyager III');
// voyager3.describe();

class Piloted {
  int astronauts = 1;
  void describeCrew(){
    print('Number of astronauts:$astronauts');
  }
}

abstract class Describe {
  void describe();
  void describeWithEmphasis(){
    print('====');
    describe();
  }
}

const oneSecond = Duration(seconds:1);
Future<void> p(String message) async{
  await Future.delayed(oneSecond);
}

Future<void> createDescriptions(Iterable<String> objects) async{
  for(var object in objects){
    try {
      var file = File('$object.txt');
      if(await file.exists()){
        var modified =await file.lastModified();
        print('File for $object already exists. It was modified on $modified');
        continue;
      }
      await file.create();
      await file.writeAsString('Start describing $object in this file.')
    } catch (e) {
    }
  }
}

final aListOfStrings = ['one', 'two', 'three'];
final aSetOfStrings = {'one', 'two', 'three'};
final aMapOfStringsToInts = {
  'one': 1,
  'two': 2,
  'three': 3,
};

class MyClass{
  int _aProperty = 0;
  int get aPrpperty => _aProperty;
  set aProperty(int value){
    if(value >= 0){
      _aProperty = value;
    }
  }
}
 

class Square extends Shape {}

class Circle extends Shape {}

class Shape {
  Shape();

  factory Shape.fromTypeName(String typeName) {
    if (typeName == 'square') return Square();
    if (typeName == 'circle') return Circle();

    print('I don\'t recognize $typeName');
    return null;
  }
}