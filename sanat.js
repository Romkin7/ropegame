const kategoriat = [
  {
    nimi: "nisäkkäät",
    sanat: ["kissa", "koira", "hevonen", "okapi", "norsu"],
  },
  {
    nimi: "pasila",
    sanat: [
      "ammattikorkeakoulu",
      "poliisiasema",
      "verovirasto",
      "betonibrutalismi",
      "kauppakeskus",
    ],
  },
  {
    nimi: "ammatit",
    sanat: [
      "talousjohtaja",
      "suunnittelupäällikkö",
      "tullivirkailija",
      "konduktööri",
      "palomies",
      "kansanedustaja",
    ],
  },
  {
    nimi: "linnut",
    sanat: [
      "harmaalokki",
      "tervapääsky",
      "kuhankeittäjä",
      "pensassirkkalintu",
      "talitiainen",
      "punakylkirastas",
    ],
  },
];

/** Tehtävänä on hirsipuupeli. Pelin säännöt ovat:
• Arvattava sana näytetään arvaajalle rivinä väliviivoja (-), joiden lukumäärä vastaa sanan kirjainten lukumäärää.
• Jos arvaava pelaaja ehdottaa kirjainta, joka esiintyy sanassa, ohjelma kirjoittaa sen kaikkiin niihin kohtiin, joissa se sanassa esiintyy.
• Jos ehdotettu kirjain ei esiinny sanassa, ohjelmaa kertoo jäljellä olevien väärien arvausten määrän ja piirtää yhden tikku-ukkokuvion osan lisää.
• Peli päättyy, kun arvaava pelaaja joko saa sanan valmiiksi, eli ehdottaa jokaista sanassa esiintyvää kirjainta, tai ohjelma saa piirrettyä loppuun hirsipuussa roikkuvan tikku-ukkokuvion.
Tikku-ukkokuviossa on yhdeksän osaa. Pelissä on annettu valmiina toiminnot, joilla tikku-ukkokuvion voi piirtää. Pelille on myös annettu sanalista, jossa on sanoja eri kategorioista.
 
Orientaatio ohjelmistotuotantoon Projekti 2 (3) 3.6.2020
Vaatimukset
Pelin voi toteuttaa useissa eri vaiheissa. Mitä pidemmälle peliä toteuttaa, sitä paremmaksi suoritus arvioidaan.
Toteuta aina vaatimuskohta kokonaan, vaikka et saisikaan kaikkia tehtyä. Poista ohjelman kaatavat virheet, toimimatonta ei voi arvioida! Keskeneräistä koodia voi halutessaan jättää palautukseen, mutta se pitää kommentoida pois siten, että se ei häiritse toimivaa koodia.
Pakolliset
1. Peli asettaa alussa arvattavan sanan sanalistalta. Yksinkertaisimmassa ratkaisussa se voi olla aina sama.
2. Peli näyttää alussa arvattavan sanan väliviivoin sekä jäljellä olevien virheiden määrän.
3. Pelaajan voi arvata kirjaimen. Isoilla ja pienillä kirjaimilla ei ole väliä, ja mahdolliset tyhjät jätetään huomiotta.
4. Jos arvaus meni oikein, peli päivittää arvattavaan sanaan oikean kirjaimen niihin kohtiin, joissa se esiintyy, muut näytetään väliviivoin. Aiemmin arvatut oikeat kirjaimet näytetään myös.
5. Jos arvaus meni väärin, peli vähentää jäljellä olevien virheiden määrää.
6. Jos tuntemattomia kirjaimia ei enää ole, peli ilmoittaa ”Voitit pelin!”
7. Jos jäljellä olevien virheiden määrä on yksi, peli ilmoittaa ”Seuraava virhe koituu kohtaloksesi”, ja jos se on nolla, peli ilmoittaa ”Hävisit :-(”
Valinnaiset 1
1. Arvattava sana valitaan sanalistalta satunnaisesti yhdestä kategoriasta.
2. Peli piirtää tikku-ukkokuviota.
3. Aloita-nappulasta aloitetaan uusi peli uudella sanalla.
Valinnaiset 2
1. Arvattavat sanat eivät toistu ennen kuin ne on kaikki käyty läpi. - Vihje: voit lisätä kategoriaan listan käytetyistä sanoista
2. Pelaaja voi valita arvottavan sanan kategorian. Kun käyttäjä valitsee kategorian, arvotaan uusi sana siitä kategoriasta.
- Vihje: select-elementillä on attribuutti onchange.
Ohjeita
Ohjelmapohja koostuu useasta tiedostosta. Siellä on jo valmiina HTML-runko, tyylitiedosto sekä JavaScript- tiedostot, joissa on sanalista ja tikku-ukon piirtämisfunktiot.
Tikku-ukon piirtäminen toimii näin: Aluksi on kutsuttava setCanvas-funktiota piirtoalustan alustamiseksi. Funktiolle annetaan parametrina HTML-elementti, jossa canvas on. Tikku-ukkoa piirretään draw-funktiolla, jolle annetaan parametrina tikku-ukon piirtovaiheen numero 1-9. Piirtoalustan voi tyhjentää clearCanvas- funktiolla.
  
Orientaatio ohjelmistotuotantoon Projekti 3 (3) 3.6.2020
Ohjelman rakenne pysyy selkeänä, kun sen jäsentää muutamaksi funktioksi. Funktioita voisi olla esim.
- Tapahtumankäsittelijäfunktiot (esim. onclick)
- Uuden sanan antaminen. Funktio voisi vaikka sijaita sanat.js -tiedostossa, jolloin sanojen käsittely
olisi selkeästi omassa moduulissaan
- Arvattavan sanan väliviivaesityksen muodostaminen. Sanan esityksen päivittämiseen tarvitaan
kolme tietoa: arvattava sana, mitä tähän asti on arvattu ja uusi kirjain.
- Selkeyttä voi tuoda myös, jos keskittää kaikki näkymän päivitykset yhteen funktioon, jota kutsutaan
aina lopuksi, kun uusi sisältö on määritetty. */
