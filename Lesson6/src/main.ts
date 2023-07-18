class Coder {
  // name: string;
  // music: string;
  // age: number;
  // lang: string;
  // constructor(name: string, music: string, age: number, lang: string) {
  //   this.name = name;
  //   this.music = music;
  //   this.age = age;
  //   this.lang = lang;
  // }

  constructor(
    public readonly name: string,
    readonly music: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public getAge() {
    return this.age;
  }
}

const Aayush = new Coder("Aayush", "POP", 21, "JS");
const Rabindra = new Coder("Aayush", "POP", 21);

console.log(Aayush.getAge());

//gives error
// console.log(Aayush.age);
// console.log(Aayush.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getaLang() {
    return `I am ${this.lang} developer`;
  }
}

const AayushWebDev = new WebDev("Mac", "Aayush", "POP", 21);
console.log(AayushWebDev.getaLang());

//gives error as protected is accessible within the class and its subclasses
// console.log(AayushWebDev.age)
// console.log(AayushWebDev.lang)

////////////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  constructor(public name: string, public instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  public play(action: string) {
    return `${this.name} is playing ${this.instrument} by ${action}`;
  }
}

const Page = new Guitarist("Jimmy Page", "Guitar");
console.log(Page.play("Led Zeppelin"));
////////////////////////////////////

class Peeps {
  static count: number = 0; //

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    Peeps.count++;
    this.id = Peeps.count;
  }
}

const John = new Peeps("John");
const Paul = new Peeps("Paul");
const George = new Peeps("George");

console.log(Peeps.getCount());
console.log(John.id);
console.log(Paul.id);
console.log(George.id);
////////////////////////////////////

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((element) => typeof element === "string")
    ) {
      this.dataState = value;
    } else {
      throw new Error("Invalid data type");
    }
  }
}

const band = new Bands();
band.data = ["Led Zeppelin", "The Beatles", "The Rolling Stones"];
console.log(band.data);

band.data = [...band.data, "Pink Floyd"];
console.log(band.data);
