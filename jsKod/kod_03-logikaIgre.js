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
/// <reference path="kod_02-postavke.js"/>

/**
 * Promjena stanja likova - interakcije
 */
function update_main() {

  if (GAME.activeWorldMap.name == "parasol")
    level1();
  if (GAME.activeWorldMap.name == "parasol_level2")
    levl2();
  if (GAME.activeWorldMap.name == "parasol_level3")
    levl3();
  GAME.update();

};

function level1() {
  
 // Ispis trenutnog stanja kišobrana i bodova lika Bobby
GameSettings.output(
  "Umbrella: " + Postavke.bobby.kisobran + "\n" + "Score: " + Postavke.bobby.bodovi,
  true
);

// Logika kretanja lika Bobby
if (SENSING.left.active) {
  Postavke.bobby.moveLeft();
}
if (SENSING.right.active) {
  Postavke.bobby.moveRight();
}
if (SENSING.up.active) {
  Postavke.bobby.jump();
}

// Provjera dodira lika Bobby sa kišobranom i prikupljanje kišobrana
if (Postavke.bobby.touching(Postavke.kisobran)) {
  Postavke.bobby.collect(Postavke.kisobran);
}

// Logika pucanja lika Bobby
if (
  SENSING.keyD.active &&
  Postavke.bobby.direction == 90 &&
  Postavke.bobby.kisobran > 0 &&
  Postavke.projektil.put == 0 &&
  Postavke.projektill.put == 0
) {
  Postavke.bobby.pucaj(Postavke.projektil);
  Postavke.bobby.kisobran--;
}
if (
  SENSING.keyD.active &&
  Postavke.bobby.direction == 270 &&
  Postavke.bobby.kisobran > 0 &&
  Postavke.projektil.put == 0 &&
  Postavke.projektill.put == 0
) {
  Postavke.bobby.pucaj(Postavke.projektill);
  Postavke.bobby.kisobran--;
}

// Grupiranje neprijatelja
const enemies = [Postavke.musicenemy, Postavke.musicenemy3];
const enemiesl = [Postavke.musicenemy2, Postavke.musicenemy4];

// Logika kretanja i pucanja neprijatelja
for (const enemy of enemies) {
  if (enemy instanceof MusicEnemy && enemy.visible) {
    // Logika kretanja neprijatelja

    if (enemy.desno) {
      enemy.moveRight();
    } else {
      enemy.moveLeft();
    }

    if (enemy.x >= 800) {
      enemy.desno = false;
    }

    if (enemy.x < 500) {
      enemy.desno = true;
    }

    // Provjera udaljenosti od lika Bobby i pucanje neprijatelja
    if (
      Math.abs(enemy.x - Postavke.bobby.x) <= 200 &&
      Math.abs(enemy.y - Postavke.bobby.y) <= 100
    ) {
      enemy.stopMovement();

      if (Postavke.bobby.x < enemy.x) {
        enemy.direction = 270;
        if (Postavke.missilel.put == 0 && Postavke.missile.put == 0) {
          enemy.pucaj(Postavke.missilel);
        }
      }

      if (Postavke.bobby.x > enemy.x) {
        enemy.direction = 90;
        if (Postavke.missilel.put == 0 && Postavke.missile.put == 0) {
          enemy.pucaj(Postavke.missile);
        }
      }
    }
  }
}

// Logika kretanja i pucanja neprijatelja (za drugu grupu)
for (const enemy of enemiesl) {
  if (enemy instanceof MusicEnemy && enemy.visible) {
    // Logika kretanja neprijatelja

    if (enemy.desno) {
      enemy.moveRight();
    } else {
      enemy.moveLeft();
    }

    if (enemy.x >= 400) {
      enemy.desno = false;
    }

    if (enemy.x < 65) {
      enemy.desno = true;
    }

    // Provjera udaljenosti od lika Bobby i pucanje neprijatelja
    if (
      Math.abs(enemy.x - Postavke.bobby.x) <= 200 &&
      Math.abs(enemy.y - Postavke.bobby.y) <= 100
    ) {
      enemy.stopMovement();

      if (Postavke.bobby.x < enemy.x) {
        enemy.direction = 270;
        if (Postavke.missilel.put == 0 && Postavke.missile.put == 0) {
          enemy.pucaj(Postavke.missilel);
        }
      }

      if (Postavke.bobby.x > enemy.x) {
        enemy.direction = 90;
        if (Postavke.missilel.put == 0 && Postavke.missile.put == 0) {
          enemy.pucaj(Postavke.missile);
        }
      }
    }
  }
}

// Provjera dodira neprijatelja i projektila
if (
  Postavke.musicenemy.touching(Postavke.projektil) ||
  Postavke.musicenemy.touching(Postavke.projektill)
) {
  Postavke.musicenemy.visible = false;
  Postavke.f1.visible = true;
  Postavke.f2.visible = true;
}

if (
  Postavke.musicenemy2.touching(Postavke.projektil) ||
  Postavke.musicenemy2.touching(Postavke.projektill)
) {
  Postavke.musicenemy2.visible = false;
  Postavke.f3.visible = true;
}

if (
  Postavke.musicenemy3.touching(Postavke.projektil) ||
  Postavke.musicenemy3.touching(Postavke.projektill)
) {
  Postavke.musicenemy3.visible = false;
  Postavke.f4.visible = true;
  Postavke.f5.visible = true;
}

if (
  Postavke.musicenemy4.touching(Postavke.projektil) ||
  Postavke.musicenemy4.touching(Postavke.projektill)
) {
  Postavke.musicenemy4.visible = false;
  Postavke.f6.visible = true;
}

// Provjera dodira lika Bobby i projektila
if (
  Postavke.bobby.touching(Postavke.missile) ||
  Postavke.bobby.touching(Postavke.missilel)
) {
  Postavke.bobby.visible = false;
  btnGame.dispatchEvent(gameoverEvent);
}

// Provjera završetka razine
if (
  !Postavke.musicenemy.visible &&
  !Postavke.musicenemy2.visible &&
  !Postavke.musicenemy3.visible &&
  !Postavke.musicenemy4.visible &&
  !Postavke.hammer.visible
) {
  Postavke.hammer.visible = true;
  Postavke.musicenemy.visible = true;
  Postavke.musicenemy2.visible = true;
  Postavke.musicenemy3.visible = true;
  Postavke.musicenemy.brzina = 1;
  Postavke.musicenemy2.brzina = 1;
  Postavke.musicenemy3.brzina = 1;
}

// Provjera završetka igre
if (
  Postavke.hammer.visible &&
  !Postavke.musicenemy.visible &&
  !Postavke.musicenemy2.visible &&
  !Postavke.musicenemy3.visible &&
  !Postavke.musicenemy4.visible
) {
  Postavke.musicenemy.visible = false;
  Postavke.musicenemy2.visible = false;
  Postavke.musicenemy3.visible = false;
  Postavke.musicenemy4.visible = false;
  Postavke.kisobran.visible = false;
}

// Provjera tipke W za dodavanje kišobrana
if (SENSING.keyW.active) {
  if (Postavke.bobby.bodovi >= 5) {
    Postavke.bobby.kisobran++;
    Postavke.bobby.bodovi -= 5;
  } else {
    console.log("Nemate dovoljan broj bodova");
  }
}

// Provjera dodira lika Bobby i objekata za sakupljanje
if (Postavke.bobby.touching(Postavke.f1)) {
  Postavke.bobby.collect(Postavke.f1);
}

if (Postavke.bobby.touching(Postavke.f2)) {
  Postavke.bobby.collect(Postavke.f2);
}
if (Postavke.bobby.touching(Postavke.f3)) {
  Postavke.bobby.collect(Postavke.f3);
}
if (Postavke.bobby.touching(Postavke.f4)) {
  Postavke.bobby.collect(Postavke.f4);
}
if (Postavke.bobby.touching(Postavke.f5)) {
  Postavke.bobby.collect(Postavke.f5);
}
if (Postavke.bobby.touching(Postavke.f6)) {
  Postavke.bobby.collect(Postavke.f6);
}

// Postavljanje broja kišobrana i bodova
Postavke.brojKisobrana = Postavke.bobby.kisobran;
Postavke.brojBodova = Postavke.bobby.bodovi;

// Provjera dodira lika Bobby i objekta za prelazak na sljedeću razinu
if (Postavke.bobby.touching(Postavke.hammer)) {
  btnGame.dispatchEvent(levelupEvent);
}
}


function levl2() {

  GameSettings.output(
    "Umbrella: " + Postavke.bobby.kisobran + "\n" + "Score: " + Postavke.bobby.bodovi,
    true
  );
  
  // Provjeri je li tipka 'W' aktivna i obradi logiku prema tome
  if (SENSING.keyW.active) {
    if (Postavke.bobby.bodovi >= 5) {
      Postavke.bobby.kisobran++;
      Postavke.bobby.bodovi -= 5;
    } else {
      console.log("Nemate dovoljan broj bodova"); // Ispiši poruku ako nema dovoljno bodova
    }
  }
  
  // Obradi kretanje igrača na temelju aktivnih tipki
  if (SENSING.left.active) {
    Postavke.bobby.moveLeft();
  }
  if (SENSING.right.active) {
    Postavke.bobby.moveRight();
  }
  if (SENSING.up.active) {
    Postavke.bobby.jump();
  }
  if (SENSING.keyA.active) {
    Postavke.bobby.fly();
  }

  // Logika pucanja lika Bobby
if (
  SENSING.keyD.active &&
  Postavke.bobby.direction == 90 &&
  Postavke.bobby.kisobran > 0 &&
  Postavke.projektil.put == 0 &&
  Postavke.projektill.put == 0
) {
  Postavke.bobby.pucaj(Postavke.projektil);
  Postavke.bobby.kisobran--;
}
if (
  SENSING.keyD.active &&
  Postavke.bobby.direction == 270 &&
  Postavke.bobby.kisobran > 0 &&
  Postavke.projektil.put == 0 &&
  Postavke.projektill.put == 0
) {
  Postavke.bobby.pucaj(Postavke.projektill);
  Postavke.bobby.kisobran--;
}
  
  // Provjeri koliziju igrača s objektima bodova i prikupi bodove
  const bodObjekti = [
    Postavke.bod1,
    Postavke.bod2,
    Postavke.bod3,
    Postavke.bod4,
    Postavke.bod5,
  ];
  
  for (const bodObjekt of bodObjekti) {
    if (bodObjekt.visible && Postavke.bobby.touching(bodObjekt)) {
      Postavke.bobby.collect(bodObjekt);
    }
  }
  
  // Ispali projektil ako je vidljiv dinosaur i projektil nije već ispaljen
  if (Postavke.dinosaur.visible && Postavke.vatrar.put === 0) {
    Postavke.dinosaur.pucaj(Postavke.vatrar);
  }
  if (Postavke.dinosaur2.visible && Postavke.vatral.put === 0) {
    Postavke.dinosaur2.pucaj(Postavke.vatral);
  }
  
  // Logika kretanja za neprijatelja "octo"
  if (Postavke.octo.visible) {
    if (Postavke.octo.desno) {
      Postavke.octo.moveRight();
      if (Postavke.octo.x >= 300 && Postavke.octo.x <= 350) {
        Postavke.octo.moveUp(15);
        Postavke.octo.moveRight();
      }
    } else {
      Postavke.octo.moveLeft();
    }
  
    if (Postavke.octo.x >= 570) {
      Postavke.octo.desno = false;
    }
  
    if (Postavke.octo.x < 200) {
      Postavke.octo.desno = true;
    }
  }
  
  // Logika kretanja za neprijatelja "octo2"
  if (Postavke.octo2.visible) {
    if (Postavke.octo2.desno) {
      Postavke.octo2.moveRight();
    } else {
      Postavke.octo2.moveLeft();
    }
    if (Postavke.octo2.x > 590) {
      Postavke.octo2.desno = false;
    }
  
    if (Postavke.octo2.x < 350) {
      Postavke.octo2.desno = true;
    }
  }
  
  // Provjeri koliziju između neprijatelja "octo2" i projektila te postavi vidljivost
  if (
    Postavke.octo2.touching(Postavke.projektil) ||
    Postavke.octo2.touching(Postavke.projektill)
  ) {
    Postavke.octo2.visible = false;
    Postavke.vatrar.visible = false;
  }
  
  // Provjeri koliziju između neprijatelja "octo" i projektila te postavi vidljivost
  if (
    Postavke.octo.touching(Postavke.projektil) ||
    Postavke.octo.touching(Postavke.projektill)
  ) {
    Postavke.octo.visible = false;
    Postavke.vatral.visible = false;
  }
  
  // Provjeri koliziju igrača s vatrom i završi igru ako je detektirana
  if (
    Postavke.bobby.touching(Postavke.vatrar) ||
    Postavke.bobby.touching(Postavke.vatral)
  ) {
    Postavke.bobby.visible = false;
    btnGame.dispatchEvent(gameoverEvent);
  }
  
  // Provjeri jesu li svi objekti bodova nevidljivi i prikaži čekić
  if (
    !Postavke.bod1.visible &&
    !Postavke.bod2.visible &&
    !Postavke.bod3.visible &&
    !Postavke.bod4.visible &&
    !Postavke.bod5.visible
  ) {
    Postavke.hammer.visible = true;
  }
  
  // Provjeri koliziju igrača s objektom "f1" i prikupi ga
  if (Postavke.bobby.touching(Postavke.f1)) {
    Postavke.bobby.collect(Postavke.f1);
  }
  
  // Provjeri koliziju igrača s objektom "f2" i prikupi ga
  if (Postavke.bobby.touching(Postavke.f2)) {
    Postavke.bobby.collect(Postavke.f2);
  }
  
  // Provjeri koliziju igrača s objektom "f3" i prikupi ga
  if (Postavke.bobby.touching(Postavke.f3)) {
    Postavke.bobby.collect(Postavke.f3);
  }
  
  // Provjeri koliziju igrača s objektom "f4" i prikupi ga
  if (Postavke.bobby.touching(Postavke.f4)) {
    Postavke.bobby.collect(Postavke.f4);
  }
  
  // Provjeri koliziju igrača s objektom "kisobran" i prikupi ga
  if (Postavke.bobby.touching(Postavke.kisobran)) {
    Postavke.bobby.collect(Postavke.kisobran);
  }
  
  // Provjeri koliziju između dinosaura i projektila te postavi vidljivost
  if (
    Postavke.dinosaur.touching(Postavke.projektil) ||
    Postavke.dinosaur.touching(Postavke.projektill)
  ) {
    Postavke.dinosaur.visible = false;
    Postavke.f1.visible = true;
    Postavke.f2.visible = true;
  }
  if (
    Postavke.dinosaur2.touching(Postavke.projektil) ||
    Postavke.dinosaur2.touching(Postavke.projektill)
  ) {
    Postavke.dinosaur2.visible = false;
    Postavke.f3.visible = true;
    Postavke.f4.visible = true;
  }
  
  // Postavi broj kišobrana i broj bodova na željene vrijednosti
  Postavke.brojKisobrana = Postavke.bobby.kisobran;
  Postavke.brojBodova = Postavke.bobby.bodovi;
  
  // Provjeri koliziju igrača s neprijateljem "octo" ili "octo2" i završi igru ako je detektirana
  if (
    Postavke.bobby.touching(Postavke.octo) ||
    Postavke.bobby.touching(Postavke.octo2)
  ) {
    Postavke.bobby.visible = false;
    btnGame.dispatchEvent(gameoverEvent);
  }
  
  // Provjeri koliziju igrača s objektom "hammer" i prijeđi na sljedeću razinu
  if (Postavke.bobby.touching(Postavke.hammer)) {
    btnGame.dispatchEvent(levelupEvent2);
  }
}
 
  

  
function levl3() {
  GameSettings.output(
    "Umbrella: " + Postavke.bobby.kisobran + "\n" + "Score: " + Postavke.bobby.bodovi,
    true
  );
  
  // Logika za povećanje broja kišobrana
  if (SENSING.keyW.active) {
    if (Postavke.bobby.bodovi >= 5) {
      Postavke.bobby.kisobran++;
      Postavke.bobby.bodovi -= 5;
    } else {
      console.log("Nemate dovoljan broj bodova");
    }
  }
  
  // Logika za ispaljivanje projektila s kišobranom
  if (
    SENSING.keyD.active &&
    Postavke.bobby.kisobran > 0 &&
    Postavke.projektil.put === 0 &&
    Postavke.projektill.put === 0
  ) {
    if (Postavke.bobby.direction === 90) {
      Postavke.bobby.pucaj(Postavke.projektil);
    } else if (Postavke.bobby.direction === 270) {
      Postavke.bobby.pucaj(Postavke.projektill);
    }
    Postavke.bobby.kisobran--;
  }
  
  // Logika za lijevo kretanje igrača
  if (SENSING.left.active) {
    Postavke.bobby.moveLeft();
  }
  
  // Logika za desno kretanje igrača
  if (SENSING.right.active) {
    Postavke.bobby.moveRight();
  }
  
  // Logika za skok igrača
  if (SENSING.up.active) {
    Postavke.bobby.jump();
  }
  
  // Logika za letenje igrača
  if (SENSING.keyA.active) {
    Postavke.bobby.fly();
  }
  
  // Logika za kretanje objekta "fly1"
  if (Postavke.fly1.visible) {
    Postavke.fly1.jump(40);
  }
  
  // Logika za kretanje objekta "fly2"
  if (Postavke.fly2.visible) {
    Postavke.fly2.jump(40);
  }
  
  // Logika za prikupljanje objekta "f1"
  if (Postavke.bobby.touching(Postavke.f1)) {
    Postavke.bobby.collect(Postavke.f1);
  }
  
  // Logika za prikupljanje objekta "f2"
  if (Postavke.bobby.touching(Postavke.f2)) {
    Postavke.bobby.collect(Postavke.f2);
  }
  
  // Logika za prikupljanje objekta "f3"
  if (Postavke.bobby.touching(Postavke.f3)) {
    Postavke.bobby.collect(Postavke.f3);
  }
  
  // Logika za prikupljanje objekta "f4"
  if (Postavke.bobby.touching(Postavke.f4)) {
    Postavke.bobby.collect(Postavke.f4);
  }
  
  // Logika kretanja objekta "gljivar1"
  if (Postavke.gljivar1.visible) {
    if (Postavke.gljivar1.desno) {
      Postavke.gljivar1.moveRight();
    } else {
      Postavke.gljivar1.moveLeft();
    }
    if (Postavke.gljivar1.x >= 8 * 64) {
      Postavke.gljivar1.desno = false;
    }
    if (Postavke.gljivar1.x <= 5 * 64) {
      Postavke.gljivar1.desno = true;
    }
  }
  
  // Logika kretanja objekta "gljivar2"
  if (Postavke.gljivar2.visible) {
    if (Postavke.gljivar2.desno) {
      Postavke.gljivar2.moveRight();
    } else {
      Postavke.gljivar2.moveLeft();
    }
    if (Postavke.gljivar2.x > 13 * 64) {
      Postavke.gljivar2.desno = false;
    }
    if (Postavke.gljivar2.x < 9 * 64) {
      Postavke.gljivar2.desno = true;
    }
  }
  
  // Logika za prikupljanje objekta "kisobran"
  if (Postavke.bobby.touching(Postavke.kisobran)) {
    Postavke.bobby.collect(Postavke.kisobran);
  }
  
  // Provjera kolizije igrača s objektima i završetak igre ako je detektirana
  if (
    Postavke.bobby.touching(Postavke.fly1) ||
    Postavke.bobby.touching(Postavke.fly2) ||
    Postavke.bobby.touching(Postavke.gljivar1) ||
    Postavke.bobby.touching(Postavke.gljivar2)
  ) {
    Postavke.bobby.visible = false;
    btnGame.dispatchEvent(gameoverEvent);
  }
  
  // Provjera kolizije projektila s objektima i sakrivanje objekta ako je detektirana
  let objekti = [
    Postavke.fly1,
    Postavke.fly2,
    Postavke.gljivar1,
    Postavke.gljivar2,
    Postavke.vjestica
  ];
  
  let projektili = [Postavke.projektil, Postavke.projektill];
  
  for (let i = 0; i < objekti.length; i++) {
    let objekt = objekti[i];
    if (projektili.some((projektil) => objekt.touching(projektil))) {
      objekt.visible = false;
    }
  }
  
  // Logika kretanja objekta "vjestica" i pucanje projektila prema igraču
  if (Postavke.vjestica.visible) {
    if (Postavke.vjestica.desno) {
      Postavke.vjestica.moveRight();
    } else {
      Postavke.vjestica.moveLeft();
    }
  
    if (Postavke.vjestica.x >= 9 * 64) {
      Postavke.vjestica.desno = false;
    }
  
    if (Postavke.vjestica.x <= 6 * 64) {
      Postavke.vjestica.desno = true;
    }
  
    if (
      Math.abs(Postavke.vjestica.x - Postavke.bobby.x) <= 300 &&
      Math.abs(Postavke.vjestica.y - Postavke.bobby.y) <= 100
    ) {
      Postavke.vjestica.stopMovement();
  
      if (Postavke.bobby.x < Postavke.vjestica.x) {
        Postavke.vjestica.direction = 270;
        if (Postavke.missilel.put === 0 && Postavke.missile.put === 0) {
          Postavke.vjestica.pucaj(Postavke.missilel);
        }
      }
  
      if (Postavke.bobby.x > Postavke.vjestica.x) {
        Postavke.vjestica.direction = 90;
        if (Postavke.missilel.put === 0 && Postavke.missile.put === 0) {
          Postavke.vjestica.pucaj(Postavke.missile);
        }
      }
    }
  }
  
  // Provjera kolizije igrača s projektilima neprijatelja i završetak igre ako je detektirana
  if (
    Postavke.bobby.touching(Postavke.missile) ||
    Postavke.bobby.touching(Postavke.missilel)
  ) {
    Postavke.bobby.visible = false;
    btnGame.dispatchEvent(gameoverEvent);
  }
  
  // Provjera je li igrač pao na dno i završetak igre ako je detektirano
  if (Postavke.bobby.y >= Postavke.dno) {
    Postavke.bobby.visible = false;
    btnGame.dispatchEvent(gameoverEvent);
  }
  
  // Provjera je li objekt "fly1" u koliziji s projektilima i prikaz objekata "f1" i "f2" ako je detektirano
  if (
    Postavke.fly1.touching(Postavke.projektil) ||
    Postavke.fly1.touching(Postavke.projektill)
  ) {
    Postavke.f1.visible = true;
    Postavke.f2.visible = true;
  }
  
  // Provjera je li objekt "fly2" u koliziji s projektilima i prikaz objekata "f3" i "f4" ako je detektirano
  if (
    Postavke.fly2.touching(Postavke.projektil) ||
    Postavke.fly1.touching(Postavke.projektill)
  ) {
    Postavke.f3.visible = true;
    Postavke.f4.visible = true;
  }
  
  // Prikaz objekta "sunball" ako objekt "vjestica" nije vidljiv
  if (!Postavke.vjestica.visible) {
    Postavke.sunball.visible = true;
  }
  
  // Provjera je li igrač dodirnuo objekt "sunball" i emitiranje događaja pobjede ako je detektirano
  if (Postavke.bobby.touching(Postavke.sunball)) {
    btnGame.dispatchEvent(winEvent);
  }
}
