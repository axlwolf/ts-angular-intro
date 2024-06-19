export class Person {
  // public name: string;
  // private address: string;

  constructor(
    public name: string,
    public lastName: string,
    private address: string
  ) {}
}

// export class Hero extends Person {

//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, 'New York');
//   }
// }

export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    const { name, lastName, address } = person;
    super(name, lastName, address);
  }
}
