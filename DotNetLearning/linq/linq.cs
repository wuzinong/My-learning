int numbers  = {5,4,1,3,9,8,6,7,2,0};
int i = 0;
var q = from numbers
        select i++;

foreach(var v in q){
    Console.WriteLine($"v = {v}, i = {i}");
}
//output
// v = 1, i = 1
// v =2 , i = 2
// v = 3, i = 3
// v = 4, i = 4
// v = 5, i = 5
// v = 6, i = 6
// v = 7, i = 7
// v = 8, i = 8
// v = 9, i = 9
// v = 10, i = 10

int numbers2  = {5,4,1,3,9,8,6,7,2,0};
int i2 = 0;
var q = (from numbers2
        select i++).ToList();

foreach(var v in q){
    Console.WriteLine($"v = {v}, i = {i2}");
}
//output
// v = 1, i = 10
// v =2 , i = 10
// v = 3, i = 10
// v = 4, i = 10
// v = 5, i = 10
// v = 6, i = 10
// v = 7, i = 10
// v = 8, i = 10
// v = 9, i = 10
// v = 10, i = 10
