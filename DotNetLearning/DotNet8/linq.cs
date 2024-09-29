
//https://www.youtube.com/watch?v=7-P6Mxl5elg
IEmumerable<object> collection = [1,"sdfs",3,4,5];

collection.OfType<int>().Dump();//1,3,4,5
collection.OfType<string>().Dump();//"sdfs"
// //In .NET, the Dump() function is commonly associated with LINQPad, 
//a tool used to interactively query databases and test .NET code. 
//The Dump() method displays detailed information about objects in a human-readable format. 
//It’s especially useful for debugging, as it allows developers to easily inspect the contents of complex objects
// like collections or data structures, and it formats the output nicely for visual inspection in the LINQPad interface.
// In standard .NET development, Dump() is not a native method, but similar debugging can be achieved using tools 
//like Console.WriteLine() or Debug.WriteLine().

IEmumerable<int> collection = [1，2,3,4,5];

collection.skip(3).Dump();
//It will output
//WhereEnumerableIterator<int>
//4,5
collection.take(3).Dump();//1,2,3

collection.SkipLast(3).Dump("SkipLast");//1,2
collection.TakeLast(3).Dump("TakeLast");//3,4,5

collection.SkipWhile(x=> x < 2).Dump("SkipWhile");//2,3,4,5
collection.TakeWhile(x=> x < 2).Dump("TakeWhile");//1


collection.Select((x,index)=>x.ToString()).Dump();//"1","2","3","4","5"

//SelectMany
IEmumerable<List<int>> collection = [[1,2,3],[4,5,6]];
collection.SelectMany(x=>x).Dump(); //1,2,3,4,5,6

collection.SelectMany(x=>x.Select(x=>x.ToString())).Dump(); //"1","2","3","4","5","6"
//or
collection.SelectMany(x=>x).Select(x=>x.ToString()).Dump();


//Cast
IEmumerable<object> collection = [1,2,3,4,5,6];

collection.Cast<int>().Dump();//1,2,3,4,5,6 cast from type object to int

//Chunk 
IEmumerable<object> collection = [1,2,3,4,5,6];
collection.Chunk(3).Dump();//[[1,2,3],[4,5,6]];


//大多数linq extension方法都是懒执行的，如果
var result = collection.Chunk(3).SelectMany(x=>x); //这里只定义了linq query不会执行，只有在result被使用的时候才会执行chunk
//比如
result.Dump();//这里会执行一次
result.Dump();//这里也会执行一次

//那么如果返回IEnumerable集合的方法操作的DB这种耗时资源，我们应该尽早ToList让它执行，不然每次call ToList都会执行耗时操作
var result = collection.Chunk(3).SelectMany(x=>x).ToList();

//Any 方法
IEmumerable<object> collection = [1,2,3,4,5,6];
collection.Any(x=>x>2).Dump();//true 执行到3的时候就返回了，不会继续

//All 方法
collection.All(x=>x>2).Dump();//false 执行到1的时候就返回了，不会继续

//Contains 方法
collection.Contains(3).Dump();//true

//Append and Prepend 方法
collection.Append(7).Dump();//1,2,3,4,5,6,7
collection.Prepend(0).Dump();//0,1,2,3,4,5,6

//Count
IEmumerable<int> collection = [1,2,3,4,5,6];
collection.Count().Dump();//6 立即执行
// TODO, 了解下 TryGetNonEnumeratedCount() 方法
//collection.Where(x=>x>2).TryGetNonEnumeratedCount(out var count).Dump();//4 立即执行
// Count：用于获取集合中的元素数量。如果集合支持直接计数，它会立即返回计数值；但如果是枚举类型（如 IEnumerable），
//它会遍历集合，导致性能开销。

// TryGetNonEnumeratedCount：尝试在不遍历集合的情况下获取元素数量。如果集合支持直接计数，
//它返回 true 和计数值；如果不支持，则返回 false，不会遍历集合，避免性能损耗。

// 总结：TryGetNonEnumeratedCount 更高效，适用于需要避免枚举的情况。

//Max 方法

collection.Max(x => x*-1).Dump();//-1 返回执行条件后满足的值

collection.MaxBy(x => x*-1).Dump();//1 返回最大值的元素

record Person(string Name, int Age);
IEnumerable<Person> people = [
    new Person("You", 15),
    new Person("Me", 16)
];

people.MaxBy(x => x.Age).Dump();//Me 16
people.Max(x => x.Age).Dump();//16, 返回值被改变了，变成了Age的值


//Min和MinBy方法 和上面差不多

//Sum 方法
IEmumerable<int> collection = [1,2,3,4,5,6];

collection.Sum().Dump();//21

IEmumerable<object> collection = [1,2,3,4,5,6];
collection.Sum(x=>(int)x).Dump();//21
