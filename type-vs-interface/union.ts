type TPetType = IIDog | IICat;
interface IIDog {}
interface IICat {}

interface IPet extends TPetType {

}

/*
 you can't really do this if the type you're implementing is a union of one type or the other. That's because both interfaces and classes need to have a shape locked down at the moment of declaration.
 */
class Pet implements TPetType {

}

