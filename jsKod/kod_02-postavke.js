//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion
/// <reference path="kod_01-likovi.js"/>
// Dohvaćanje gumba s ID-om "btnGame"
const btnGame = document.getElementById("btnGame");

// Kreiranje događaja "levelup" i "levelup2"
const levelupEvent = new Event("levelup");
const levelupEvent2 = new Event("levelup2");

// Kreiranje događaja "gameover"
const gameover = new Event("gameover");

// Dodavanje slušatelja događaja "levelup" i "levelup2" na gumb
btnGame.addEventListener("levelup", level2);
btnGame.addEventListener("levelup2", level3);

// Kreiranje prilagođenog događaja "gameover" s detaljima
const gameoverEvent = new CustomEvent("gameover", {
  detail: {
    win: false
  }
});

// Kreiranje prilagođenog događaja "gameover" za pobjedu
const winEvent = new CustomEvent("gameover", {
  detail: {
    win: true
  }
});

function resetirajLevel1() {
  GAME.clearSprites();
  GAME.setActiveWorldMap("parasol");
  GAME.activeWorldMap.setCollisions("platforma");
  levl1();
  setup();
}

// Funkcija koja se poziva pri kraju igre
function kraj(event) {
  // Pozivanje funkcije btnStop_click
  btnStop_click();

  // Provjera je li igra završena s pobjedom
  if (event.detail.win) {
    // Ako je igra završena s pobjedom, čišćenje spriteova i prikazivanje poruke "Pobjeda!"
    GAME.clearSprites();
    alert("Pobjeda!");
  } else {
    // Ako je igra završena s porazom, prikazivanje poruke "GAME OVER", ponovno postavljanje igre i pokretanje prvog levela
    alert("GAME OVER");
    setup();
    btnStart_click();
    resetirajLevel1();
  }
}

// Dodavanje slušatelja događaja "gameover" na gumb
btnGame.addEventListener("gameover", kraj);

// Dohvaćanje gumba s ID-om "btnSetupGame" i dodavanje slušatelja za događaj klika
let btnSetupGame = document.getElementById("btnSetupGame");
btnSetupGame.addEventListener("click", setup);

// Funkcija koja se pokreće prilikom postavljanja igre
function setup() {
  // Čišćenje spriteova
  GAME.clearSprites();

  // Dohvaćanje odabranog svijeta mape
  let odabrana = GAME.activeWorldMap.name;

  // Ispisivanje odabranog svijeta mape
  GameSettings.output(odabrana);

  // Odabir akcije ovisno o odabranom svijetu mape
  switch (odabrana) {
    case "parasol":
      levl1();
      break;

    case "parasol_level2":
      level2();
      break;

    case "parasol_level3":
      level3();
      break;

    default:
      // Greška ukoliko ne postoji setup za odabrani svijet mape
      throw "Ne postoji setup za " + GAME.activeWorldMap.name;
      break;
  }
}
/* LEVELS */

function levl1() {

  GAME.clearSprites();
// KOLIZIJA

// Postavljanje kolizija na aktivnoj mapi svijeta s nazivom "platforma"
GAME.activeWorldMap.setCollisions("platforma");

// LIKOVI

// Stvaranje i dodavanje instance lika Bobby na odgovarajući sloj
Postavke.bobby = new Bobby(64, 8 * 64, GAME.getSpriteLayer("bobby"));
GAME.addSprite(Postavke.bobby);

// Stvaranje i dodavanje instance glazbenog neprijatelja na odgovarajući sloj
Postavke.musicenemy = new MusicEnemy(12 * 64, 6 * 64, GAME.getSpriteLayer("musicenemy"));
GAME.addSprite(Postavke.musicenemy);

Postavke.musicenemy2 = new MusicEnemy(1 * 64, 4 * 64, GAME.getSpriteLayer("musicenemy2"));
GAME.addSprite(Postavke.musicenemy2);

Postavke.musicenemy3 = new MusicEnemy(9 * 64, 2 * 64, GAME.getSpriteLayer("musicenemy3"));
GAME.addSprite(Postavke.musicenemy3);

Postavke.musicenemy4 = new MusicEnemy(64, 0, GAME.getSpriteLayer("musicenemy4"));
GAME.addSprite(Postavke.musicenemy4);

// PROJEKTILI

// Stvaranje i dodavanje instance projektila na odgovarajući sloj (kisobran desno)
Postavke.projektil = new Projektil(GAME.getSpriteLayer("kisobran_right"));
GAME.addSprite(Postavke.projektil);

// Stvaranje i dodavanje instance projektila na odgovarajući sloj (kisobran lijevo)
Postavke.projektill = new Projektill(GAME.getSpriteLayer("kisobran_left"));
GAME.addSprite(Postavke.projektill);

// Stvaranje i dodavanje instance projektila na odgovarajući sloj (missile desno)
Postavke.missile = new Projektil(GAME.getSpriteLayer("missile"));
GAME.addSprite(Postavke.missile);

// Stvaranje i dodavanje instance projektila na odgovarajući sloj (missile lijevo)
Postavke.missilel = new Projektill(GAME.getSpriteLayer("missilel"));
GAME.addSprite(Postavke.missilel);

// COLLECTALE I LEVEL-UPOVI

// Stvaranje i dodavanje instance kišobrana kao skupljive stavke na odgovarajući sloj
Postavke.kisobran = new Kisobran(GAME.getSpriteLayer("kisobran_collect"));
GAME.addSprite(Postavke.kisobran);
Postavke.kisobran.postavi2();

// Stvaranje i dodavanje instance čekića kao skupljive stavke na odgovarajući sloj
Postavke.hammer = new Hammer(GAME.getSpriteLayer("hammer"));
GAME.addSprite(Postavke.hammer);

// Stvaranje i dodavanje instanci voća kao skupljivih stavki na odgovarajući sloj
Postavke.f1 = new Fruit(GAME.getSpriteLayer("f1"));
GAME.addSprite(Postavke.f1);
Postavke.f2 = new Fruit(GAME.getSpriteLayer("f2"));
GAME.addSprite(Postavke.f2);
Postavke.f3 = new Fruit(GAME.getSpriteLayer("f3"));
GAME.addSprite(Postavke.f3);
Postavke.f4 = new Fruit(GAME.getSpriteLayer("f4"));
GAME.addSprite(Postavke.f4);
Postavke.f5 = new Fruit(GAME.getSpriteLayer("f5"));
GAME.addSprite(Postavke.f4);
Postavke.f6 = new Fruit(GAME.getSpriteLayer("f4"));
GAME.addSprite(Postavke.f4)

}


function level2() 
{

  GAME.setActiveWorldMap("parasol_level2");
  GAME.clearSprites();
  GAME.activeWorldMap.setCollisions("platforma");
  
  // Postavljanje aktivne mape svijeta na "parasol_level2" i postavljanje kolizija na "platforma"
  
  Postavke.bobby = new Bobby(64, 8 * 63, GAME.getSpriteLayer("bobby"));
  GAME.addSprite(Postavke.bobby);
  // Stvaranje i dodavanje instance lika Bobby na odgovarajući sloj
  
  Postavke.kisobran = new Kisobran(GAME.getSpriteLayer("kisobran_collect"));
  GAME.addSprite(Postavke.kisobran);
  Postavke.kisobran.postavi2();
  // Stvaranje i dodavanje instance kišobrana kao skupljive stavke na odgovarajući sloj
  
  Postavke.projektil = new Projektil(GAME.getSpriteLayer("kisobran_r"));
  GAME.addSprite(Postavke.projektil);
  // Stvaranje i dodavanje instance projektila (kisobran desno) na odgovarajući sloj
  
  Postavke.projektill = new Projektill(GAME.getSpriteLayer("kisobran_l"));
  GAME.addSprite(Postavke.projektill);
  // Stvaranje i dodavanje instance projektila (kisobran lijevo) na odgovarajući sloj
  
  Postavke.dinosaur = new Dinosaur(0, 5 * 64, GAME.getSpriteLayer("dinosaur"));
  GAME.addSprite(Postavke.dinosaur);
  // Stvaranje i dodavanje instance dinosaura na odgovarajući sloj
  
  Postavke.dinosaur2 = new Dinosaur(14 * 64, 5 * 64, GAME.getSpriteLayer("dinosaur2"));
  GAME.addSprite(Postavke.dinosaur2);
  // Stvaranje i dodavanje instance dinosaura na odgovarajući sloj
  
  Postavke.vatrar = new VatraR(GAME.getSpriteLayer("firer"));
  GAME.addSprite(Postavke.vatrar);
  // Stvaranje i dodavanje instance vatre (desno) na odgovarajući sloj
  
  Postavke.vatral = new VatraL(GAME.getSpriteLayer("firel"));
  GAME.addSprite(Postavke.vatral);
  // Stvaranje i dodavanje instance vatre (lijevo) na odgovarajući sloj
  
  Postavke.bod1 = new Bod(GAME.getSpriteLayer("bod1"));
  GAME.addSprite(Postavke.bod1);
  Postavke.bod2 = new Bod(GAME.getSpriteLayer("bod2"));
  GAME.addSprite(Postavke.bod2);
  Postavke.bod3 = new Bod(GAME.getSpriteLayer("bod3"));
  GAME.addSprite(Postavke.bod3);
  Postavke.bod4 = new Bod(GAME.getSpriteLayer("bod4"));
  GAME.addSprite(Postavke.bod4);
  Postavke.bod5 = new Bod(GAME.getSpriteLayer("bod5"));
  GAME.addSprite(Postavke.bod5);
  // Stvaranje i dodavanje instanci bodova na odgovarajući sloj
  
  Postavke.octo = new Octo(7 * 64, 64, GAME.getSpriteLayer("octo"));
  GAME.addSprite(Postavke.octo);
  // Stvaranje i dodavanje instance octo neprijatelja na odgovarajući sloj
  
  Postavke.octo2 = new Octo(8 * 64, 7 * 64, GAME.getSpriteLayer("octo2"));
  GAME.addSprite(Postavke.octo2);
  // Stvaranje i dodavanje instance octo2 neprijatelja na odgovarajući sloj
  
  Postavke.hammer = new Hammer(GAME.getSpriteLayer("hammer"));
  GAME.addSprite(Postavke.hammer);
  // Stvaranje i dodavanje instance čekića na odgovarajući sloj
  
  Postavke.f1 = new Fruit(GAME.getSpriteLayer("f1"));
  GAME.addSprite(Postavke.f1);
  Postavke.f2 = new Fruit(GAME.getSpriteLayer("f2"));
  GAME.addSprite(Postavke.f2);
  Postavke.f3 = new Fruit(GAME.getSpriteLayer("f3"));
  GAME.addSprite(Postavke.f3);
  Postavke.f4 = new Fruit(GAME.getSpriteLayer("f4"));
  GAME.addSprite(Postavke.f4);
  // Stvaranje i dodavanje instanci voća na odgovarajući sloj
  
  Postavke.bobby.kisobran = Postavke.brojKisobrana;
  Postavke.bobby.bodovi = Postavke.brojBodova;
  // Postavljanje broja kišobrana i bodova lika Bobby na prethodno spremljene vrijednosti
  
  render_main();
  // Pokretanje glavne funkcije za renderiranje igre
}


function level3() {
  
  GAME.setActiveWorldMap("parasol_level3");
  GAME.clearSprites();
  GAME.activeWorldMap.setCollisions("platforma");
  
  // Postavljanje aktivne mape svijeta na "parasol_level3" i postavljanje kolizija na "platforma"
  
  Postavke.projektil = new Projektil(GAME.getSpriteLayer("kisobran_right"));
  GAME.addSprite(Postavke.projektil);
  // Stvaranje i dodavanje instance projektila (kisobran desno) na odgovarajući sloj
  
  Postavke.projektill = new Projektill(GAME.getSpriteLayer("kisobran_left"));
  GAME.addSprite(Postavke.projektill);
  // Stvaranje i dodavanje instance projektila (kisobran lijevo) na odgovarajući sloj
  
  Postavke.kisobran = new Kisobran(GAME.getSpriteLayer("kisobran_collect"));
  GAME.addSprite(Postavke.kisobran);
  Postavke.kisobran.postavi2();
  // Stvaranje i dodavanje instance kišobrana kao skupljive stavke na odgovarajući sloj
  
  Postavke.vjestica = new Vjestica(6 * 64, 8 * 64, GAME.getSpriteLayer("vjestica"));
  GAME.addSprite(Postavke.vjestica);
  // Stvaranje i dodavanje instance vještice na odgovarajući sloj
  
  Postavke.gljivar1 = new Gljivar(5 * 64, 0, GAME.getSpriteLayer("gljivar"));
  GAME.addSprite(Postavke.gljivar1);
  // Stvaranje i dodavanje instance gljivara 1 na odgovarajući sloj
  
  Postavke.gljivar2 = new Gljivar(12 * 64, 4 * 64, GAME.getSpriteLayer("gljivar2"));
  GAME.addSprite(Postavke.gljivar2);
  // Stvaranje i dodavanje instance gljivara 2 na odgovarajući sloj
  
  Postavke.fly1 = new Fly(2 * 64, 3 * 64, GAME.getSpriteLayer("zujalica"));
  GAME.addSprite(Postavke.fly1);
  // Stvaranje i dodavanje instance muhe 1 na odgovarajući sloj
  
  Postavke.fly2 = new Fly(8 * 64, 6 * 64, GAME.getSpriteLayer("zujalica2"));
  GAME.addSprite(Postavke.fly2);
  // Stvaranje i dodavanje instance muhe 2 na odgovarajući sloj
  
  Postavke.bobby = new Bobby(0, 8 * 64, GAME.getSpriteLayer("bobby"));
  GAME.addSprite(Postavke.bobby);
  // Stvaranje i dodavanje instance lika Bobby na odgovarajući sloj
  
  Postavke.missile = new VatraR(GAME.getSpriteLayer("magic"));
  GAME.addSprite(Postavke.missile);
  // Stvaranje i dodavanje instance projektila (vatra desno) na odgovarajući sloj
  
  Postavke.missilel = new VatraL(GAME.getSpriteLayer("magicc"));
  GAME.addSprite(Postavke.missilel);
  // Stvaranje i dodavanje instance projektila (vatra lijevo) na odgovarajući sloj
  
  Postavke.sunball = new Sunball(GAME.getSpriteLayer("sunball"));
  GAME.addSprite(Postavke.sunball);
  // Stvaranje i dodavanje instance sunčeve kugle na odgovarajući sloj
  
  Postavke.f1 = new Fruit(GAME.getSpriteLayer("f1"));
  GAME.addSprite(Postavke.f1);
  Postavke.f2 = new Fruit(GAME.getSpriteLayer("f2"));
  GAME.addSprite(Postavke.f2);
  Postavke.f3 = new Fruit(GAME.getSpriteLayer("f3"));
  GAME.addSprite(Postavke.f3);
  Postavke.f4 = new Fruit(GAME.getSpriteLayer("f4"));
  GAME.addSprite(Postavke.f4);
  // Stvaranje i dodavanje instanci voća na odgovarajući sloj
  
  Postavke.bobby.kisobran = Postavke.brojKisobrana;
  Postavke.bobby.bodovi = Postavke.brojBodova;
  // Postavljanje broja kišobrana i bodova lika Bobby na prethodno spremljene vrijednosti
  
  render_main();
  // Pokretanje glavne funkcije za renderiranje igre
}