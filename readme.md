a class is a blueprint or templete used to create an object
an object is a representation of a class
a contructor function is a function that is run once on creation of new object
methods are actions that an object can perform
inheritrance allows a classs to inherit the properties and method from another clalss
polymorphysm allows us call same mehod on diff type of object and allows them to behave differently
access modifiers are labels given to properties and method to specify what can access it
public can be accessed everywhere
private: a properety or a method labeled private can only be access within where it is created
protected: can only be accessed within the class and also subclass
read-only: can only be read but cannot be modified
static methods belongs to the class itself and not the instance. it is used when managing shared states

composition and aggregation:
- when a class is built by piecing up several classes this is known as composition
- Aggregation in oop refers to a special form of association where one class has a reference to another class but the both class can exist independently

Abstract Classes:
An abstract class is a blueprint that cannot be directly instantiated, it is meant to be extended. 
It can include:
 - concrete method (with full implementation)
 - abstract method (only the method signature, no implementation) because it is to be implemented by the child class
