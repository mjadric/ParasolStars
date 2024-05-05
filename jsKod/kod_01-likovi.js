//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

// ovdje pišete svoje klase


// GLAVNI LIK

class Bobby extends Sprite {

  constructor(x, y, layer) {
    super(x, y, 60, 60); // Poziva konstruktor nadklase "Sprite" s argumentima x, y, širina i visina
    this.frame_sets = { // Deklaracija objekta "frame_sets" s nizovima okvira za različite animacije
      "up": [2],
      "walk-up": [2],
      "right": [2],
      "walk-right": [2, 3, 4, 5],
      "down": [2],
      "walk-down": [2],
      "left": [17],
      "walk-left": [17, 18, 19, 20],
    };

    this.layer = layer; // Postavljanje svojstva "layer" na vrijednost argumenta "layer"
    this.visible = true; // Postavljanje svojstva "visible" na true (objekt je vidljiv)
    this.kisobran = 5; // Postavljanje svojstva "kisobran" na 5
    this.bodovi = 0; // Postavljanje svojstva "bodovi" na 0
  }

  moveRight() {
    this.direction = 90; // Postavljanje smjera objekta na desno (90 stupnjeva)
    this.velocity_x += 1.5; // Povećanje horizontalne brzine objekta za 1.5
  }

  moveLeft() {
    this.direction = 270; // Postavljanje smjera objekta na lijevo (270 stupnjeva)
    this.velocity_x -= 1.5; // Smanjivanje horizontalne brzine objekta za 1.5
  }

  fly() {
    this.velocity_y -= 5; // Smanjivanje vertikalne brzine objekta za 5 (objekt "leti" prema gore)
  }

  collect(c) {
    switch (true) {
      case c instanceof Kisobran: // Ako je objekt "c" instanca klase "Kisobran"
        c.visible = false; // Postavljanje svojstva "visible" objekta "c" na false (čini ga nevidljivim)
        this.kisobran += c.value; // Povećanje svojstva "kisobran" za vrijednost svojstva "value" objekta "c"
        c.postavi2(); // Pozivanje metode "postavi2()" na objektu "c"
        break;
      case c instanceof Bod: // Ako je objekt "c" instanca klase "Bod"
        c.visible = false; // Postavljanje svojstva "visible" objekta "c" na false (čini ga nevidljivim)
        this.bodovi += c.value; // Povećanje svojstva "bodovi" za vrijednost svojstva "value" objekta "c"
        break;
      case c instanceof Fruit: // Ako je objekt "c" instanca klase "Fruit"
        this.bodovi += c.value; // Povećanje svojstva "bodovi" za vrijednost svojstva "value" objekta "c"
        c.visible = false; // Postavljanje svojstva "visible" objekta "c" na false (čini ga nevidljivim)
        break;
      default:
        throw new TypeError("Moguće je skupiti samo objekte klase Kisobran, Bod i Voce"); // Bacanje greške ako objekt "c" nije odgovarajuće klase
    }
  }

  pucaj(p) {
    p.put = 0; // Postavljanje svojstva "put" objekta "p" na 0
    p.x = this.x; // Postavljanje svojstva "x" objekta "p" na vrijednost svojstva "x" ovog objekta ("Bobby")
    p.y = this.y; // Postavljanje svojstva "y" objekta "p" na vrijednost svojstva "y" ovog objekta ("Bobby")
    p.visible = true; // Postavljanje svojstva "visible" objekta "p" na true (objekt je vidljiv)
    p.move = true; // Postavljanje svojstva "move" objekta "p" na true (objekt se kreće)
  }
}

// STUPANJ 1 NEPRIJATELJI
class MusicEnemy extends Sprite {
  constructor(x, y, layer) {
    super(x, y, 60, 60); // Poziva konstruktor nadklase "Sprite" s argumentima x, y, širina i visina
    this.frame_sets = { // Deklaracija objekta "frame_sets" s nizovima okvira za različite animacije
      "up": [2],
      "walk-up": [2],
      "right": [2],
      "walk-right": [2, 3, 4],
      "down": [2],
      "walk-down": [2],
      "left": [17],
      "walk-left": [17, 18, 19]
    };

    this.layer = layer; // Postavljanje svojstva "layer" na vrijednost argumenta "layer"
    this.visible = true; // Postavljanje svojstva "visible" na true (objekt je vidljiv)
    this.desno = true; // Postavljanje svojstva "desno" na true (objekt se kreće udesno)
    this.brzina = 0.5; // Postavljanje svojstva "brzina" na 0.5 (brzina kretanja objekta)
  }

  moveRight() {
    this.direction = 90; // Postavljanje smjera objekta na desno (90 stupnjeva)
    this.velocity_x += this.brzina; // Povećanje horizontalne brzine objekta za svojstvo "brzina"
  }

  moveLeft() {
    this.direction = 270; // Postavljanje smjera objekta na lijevo (270 stupnjeva)
    this.velocity_x -= this.brzina; // Smanjivanje horizontalne brzine objekta za svojstvo "brzina"
  }

  pucaj(p) {
    p.put = 0; // Postavljanje svojstva "put" objekta "p" na 0
    p.x = this.x; // Postavljanje svojstva "x" objekta "p" na vrijednost svojstva "x" ovog objekta ("MusicEnemy")
    p.y = this.y; // Postavljanje svojstva "y" objekta "p" na vrijednost svojstva "y" ovog objekta ("MusicEnemy")
    p.visible = true; // Postavljanje svojstva "visible" objekta "p" na true (objekt je vidljiv)
    p.move = true; // Postavljanje svojstva "move" objekta "p" na true (objekt se kreće)
  }

  stopMovement() {
    this.velocity_x = 0; // Postavljanje horizontalne brzine objekta na 0 (zaustavljanje kretanja)
  }
}

class Vjestica extends MusicEnemy {
  constructor(x, y, layer) {
    super(x, y, layer); // Poziva konstruktor nadklase "MusicEnemy" s argumentima x, y i layer
  }
}

// STUPANJ 2 NEPRIJATELJI

class Octo extends Sprite {
  constructor(x, y, layer) {
    super(x, y, 60, 60); // Poziva konstruktor nadklase "Sprite" s argumentima x, y, širina i visina
    this.frame_sets = { // Deklaracija objekta "frame_sets" s nizovima okvira za različite animacije
      "up": [2],
      "walk-up": [2],
      "right": [2],
      "walk-right": [2, 3],
      "down": [2],
      "walk-down": [2],
      "left": [2],
      "walk-left": [2, 3]
    };

    this.layer = layer; // Postavljanje svojstva "layer" na vrijednost argumenta "layer"
    this.visible = true; // Postavljanje svojstva "visible" na true (objekt je vidljiv)
    this.desno = true; // Postavljanje svojstva "desno" na true (objekt se kreće udesno)
  }

  moveUp(up) {
    this.y -= up; // Smanjenje vrijednosti svojstva "y" za vrijednost argumenta "up" (pomiče objekt prema gore)
  }
}

class Gljivar extends Octo {
  constructor(x, y, layer) {
    super(x, y, layer); // Poziva konstruktor nadklase "Octo" s argumentima x, y i layer
  }
}

class Fly extends Gljivar {
  constructor(x, y, layer) {
    super(x, y, layer); // Poziva konstruktor nadklase "Gljivar" s argumentima x, y i layer
    this.frame_sets = { // Deklaracija objekta "frame_sets" s nizovima okvira za različite animacije
      "up": [1],
      "walk-up": [1],
      "right": [1],
      "walk-right": [1],
      "down": [1],
      "walk-down": [1],
      "left": [1],
      "walk-left": [1]
    };
  }
}

// STUPANJ 3 NEPRIJATELJI

class Dinosaur extends Sprite {
  constructor(x, y, layer) {
    super(x, y, 60, 60); // Poziva konstruktor nadklase "Sprite" s argumentima x, y, širina i visina
    this.frame_sets = { // Deklaracija objekta "frame_sets" s nizovima okvira za različite animacije
      "up": [1],
      "walk-up": [1],
      "right": [1],
      "walk-right": [1],
      "down": [1],
      "walk-down": [1],
      "left": [1],
      "walk-left": [1]
    };

    this.layer = layer; // Postavljanje svojstva "layer" na vrijednost argumenta "layer"
    this.visible = true; // Postavljanje svojstva "visible" na true (objekt je vidljiv)
  }

  pucaj(p) {
    p.put = 0; // Postavljanje svojstva "put" objekta p na 0
    p.x = this.x; // Postavljanje svojstva "x" objekta p na vrijednost svojstva "x" ovog objekta Dinosaur
    p.y = this.y - 5; // Postavljanje svojstva "y" objekta p na vrijednost svojstva "y" ovog objekta Dinosaur pomaknuto za 5 prema gore
    p.visible = true; // Postavljanje svojstva "visible" objekta p na true (objekt je vidljiv)
    p.move = true; // Postavljanje svojstva "move" objekta p na true (objekt se kreće)
  }
}

// COLLECTANJE

class Collectable extends Item {
  constructor(layer) {
    super(layer); // Poziva konstruktor nadklase "Item" s argumentom "layer"
    if (this.constructor == Collectable) {
      throw new Error("Apstraktna klasa se ne može instancirati");
    }
    this.value = 1; // Postavlja svojstvo "value" na 1 (pretpostavljena vrijednost)
    this.visible = true; // Postavlja svojstvo "visible" na true (objekt je vidljiv)
  }

  getType() {
    return this.constructor.name; // Vraća ime trenutne klase (tip objekta)
  }
}



class Kisobran extends Collectable {
  constructor(layer) {
    super(layer); // Poziva konstruktor nadklase "Collectable" s argumentom "layer"
  }

  postavi2() {
    this.x = Postavke.random(1, 13 * 64); // Generira slučajnu vrijednost između 1 i 13 * 64 za x koordinatu kisobrana
    this.y = Postavke.random(1, 8 * 64); // Generira slučajnu vrijednost između 1 i 8 * 64 za y koordinatu kisobrana
    this.visible = true; // Postavlja svojstvo "visible" kisobrana na true
  }
}

class Bod extends Collectable {
  constructor(layer) {
    super(layer); // Poziva konstruktor nadklase "Collectable" s argumentom "layer"
  }
}

class Fruit extends Bod {
  constructor(layer) {
    super(layer); // Poziva konstruktor nadklase "Bod" s argumentom "layer"
    this.visible = false; // Postavljanje svojstva "visible" na false, što znači da je voće nevidljivo
    this.value = 2; // Postavljanje svojstva "value" na 2, što predstavlja vrijednost voća
  }
}

class Hammer extends Item {
  constructor(layer) {
    super(layer); // Poziva konstruktor nadklase "Item" s argumentom "layer"
    this.visible = false; // Postavljanje svojstva "visible" na false, što znači da je čekić nevidljiv
  }
}

class Sunball extends Hammer {
  constructor(layer) {
    super(layer); // Poziva konstruktor nadklase "Hammer" s argumentom "layer"
  }
}

// PROJEKTILI

class Projektil extends Item {
  #put; // Privatno svojstvo klase "Projektil"
  constructor(layer) {
    super(layer); // Poziva konstruktor nadklase "Item" s argumentom "layer"
    this.visible = false; // Postavljanje svojstva "visible" na false, što znači da je projektil nevidljiv
    this.#put = 0; // Inicijalizacija privatnog polja "#put" na 0
    this.move = true; // Postavljanje svojstva "move" na true, što označava da se projektil kreće
  }

  get put() {
    return this.#put; // Getter za privatno polje "#put", omogućuje pristup vrijednosti polja izvan klase
  }
  set put(v) {
    if (v >= 200) {
      this.#put = 0; // Ako je vrijednost svojstva "#put" veća od ili jednaka 200, resetira se na 0
      this.move = false; // Postavljanje svojstva "move" na false, što zaustavlja kretanje projektila
      this.visible = false; // Postavljanje svojstva "visible" na false, što čini projektil nevidljivim
    } else {
      this.#put = v; // Inače, postavlja se vrijednost polja "#put" na v
    }
  }

  updatePosition() {
    if (this.move) {
      this.x += 5; // Pomiče projektil za 5 piksela u desno
      this.put += 5; // Povećava vrijednost polja "#put" za 5
    }
  }

  stop() {
    this.visible = false; // Postavljanje svojstva "visible" na false, što čini projektil nevidljivim
    this.move = false; // Postavljanje svojstva "move" na false, što zaustavlja kretanje projektila
  }
}

class Projektill extends Projektil {
  constructor(layer) {
    super(layer); // Poziva konstruktor nadklase "Projektil" s argumentom "layer"
  }

  updatePosition() {
    if (this.move) {
      this.x -= 5; // Pomiče projektil za 5 piksela ulijevo
      this.put += 5; // Povećava vrijednost polja "#put" za 5
    }
  }
}
class VatraL extends Projektill {
  #put; // Privatno svojstvo za praćenje puta projektila
  constructor(layer) {
    super(layer); // Poziva konstruktor nadklase "Projektill" s argumentom "layer"
    this.put = 0; // Postavlja početnu vrijednost puta projektila na 0
  }
  
  get put() {
    return this.#put; // Getter za pristup privatnom polju "#put"
  }
  
  set put(v) {
    if (v >= 400) { // Ako je put veći ili jednak 400
      this.#put = 0; // Resetira put projektila na 0
      this.move = false; // Zaustavlja kretanje projektila postavljanjem "move" na false
      this.visible = false; // Čini projektil nevidljivim postavljanjem "visible" na false
    } else {
      this.#put = v; // Postavlja put projektila na vrijednost v
    }
  }
  
  updatePosition() {
    if (this.move) {
      this.x -= 10; // Pomiče projektil za 10 piksela ulijevo
      this.put += 10; // Povećava vrijednost puta projektila za 10
    }
  }
}
class VatraR extends VatraL {
  constructor(layer) {
    super(layer); // Poziva konstruktor nadklase "VatraL" s argumentom "layer"
  }
  
  updatePosition() {
    if (this.move) {
      this.x += 10; // Pomiče projektil za 10 piksela udesno
      this.put += 10; // Povećava vrijednost puta projektila za 10
    }
  }
}



