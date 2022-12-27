// Q 1.Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
// Answer 1.:
const parent={
    calc(){
        console.log(`${this.firstname} ${this.lastname}`)
    }
}
const child1=Object.create(parent);
child1.firstname="Priyanka";
child1.lastname="nidebane";
child1.calc();
const child2=Object.create(child1);
child2.firstname="Mayuri"
child2.calc();
// Output:
// Priyanka nidebane
// Mayuri nidebane
// Q 2.Write code to explain prototype chaining
// Answer 2.
const obj = {
    a: 1,
    b: 2,
    d: 8,
    __proto__: {
      b: 3,
      c: 4,
      __proto____proto__:{
        b:5,
        d:6,
      }
    },
  };
  console.log(obj.a);
  console.log(obj.b);
  console.log(obj.c);
  console.log(obj.d);
//   Output:
//   1
//   2
//   4
//   8
// Q 3.Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
// Answer 3.:
 const Addsum={
    add:function(a){
        let sum=0;
        for(let i=0;i<a.length;i++){
            sum=sum+a[i];
        }
        console.log(sum);
    }
 }
 Addsum.add([1,2,3,4,5]);
//  Answer 3.
//  15

// Q 4.Write a JavaScript function to retrieve all the names of object's own and inherited properties.
// Answer 4.
const obj1 = {
    a: 1,
    toString(){
       return `[object obj1]`;
    }
   
  };
  
  console.log(Object.getOwnPropertyNames(obj1));
  obj1.toString();
// Answer 4:
// output:
//  ['a', 'toString']
