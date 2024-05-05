class Postavke {
  constructor() {
    throw new Error("Statička klasa nema instance!"); // Konstruktor koji baca grešku ako se pokuša instancirati klasa
  }

  static projektil; // Statičko polje za projektil
  static missile;

  static projektill;
  static missilel;

  static bobby; // Statičko polje za lika Bobbyja

  static hammer; // Statičko polje za čekić

  static kisobran; // Statičko polje za kišobran

  static sunball; // Statičko polje za sunball

  static musicenemy; // Statičko polje za glazbenog neprijatelja
  static musicenemy2;
  static musicenemy3;
  static musicenemy4;

  static brojKisobrana = 0; // varijabla služi za prenošenje broja kisobrana iz prethodnih levela
  static brojBodova = 0;

  static dinosaur; // Statičko polje za dinosaura
  static dinosaur2; // Statičko polje za dinosaura

  static octo;
  static octo2;

  static f1;
  static f2;
  static f3;
  static f4;
  static f5;
  static f6;

  static vatral; // Statičko polje za vatru (lijevo)
  static vatrall; // Statičko polje za vatru (lijevo)
  static vatrar; // Statičko polje za vatru (desno)

  static bod1; // Statičko polje za bod 1
  static bod2; // Statičko polje za bod 2
  static bod3; // Statičko polje za bod 3
  static bod4; // Statičko polje za bod 4
  static bod5; // Statičko polje za bod 5

  static vjestica;

  static gljivar1;
  static gljivar2;

  static fly1;
  static fly2;

  static dno = 9 * 64;

  static random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; // Statička metoda koja generira slučajan broj između min i max
  }
}