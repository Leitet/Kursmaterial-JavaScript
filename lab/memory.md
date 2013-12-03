## Inledning
Denna laboration ställer ganska höga krav på dig som laborant. Du kommer till stor del vara tvungen att leta upp information själv och fundera ut egna lösningar på problem som ställs.
I denna laboration kommer du att skriva ett enklare Memoryspel

## Mål
Efter genomför laboration kommer du att ha en god förståelse för händelsehantering kopplad till DOM. Vidare kommer du att utökat din förståelse för problemlösning i större programmeringsproblem än du tidigare ställts inför.

## Strict mode
Samtliga inlänkade javascriptfiler ska använda ES5 strict-mode. Av denna anledning ska strängen:

```js
"use strict";
```

placeras överst i varje .js-fil.

## Observera 
För att bli godkänd på laborationen ska din källkod följa den standard vad det gäller kommentering, val av variabelnamn m.m. som gåtts igenom på föreläsning. Ditt Javascript måste även fungera enligt de krav som finns beskrivna i denna laborationshandledning.

För att kunna genomföra denna laboration måste du vara förberedd **innan** du går på handledningstillfället, det är inte förbjudet, utan rekommenderat, att göra laborationen i förväg. 

Vid fuskmisstanke lämnas misstankar samt berörda dokument över till universitetets disciplinnämnd.

Läs igenom hela laborationshandledningen **innan** du påbörjar laborationen.


## Inledning
Denna laboration ställer högre krav på dig som laborant än tidigare. Du kommer till stor del vara tvungen att leta upp information själv och fundera ut egna lösningar på problem som ställs.
I denna laboration kommer du att skriva ett enklare Memoryspel.
Glöm inte att läsa spelets krav senare i detta dokument.

## Uppgift 1 – Memory
Denna laboration består endast av en uppgift, nämligen att skriva ett memoryspel i javascript.
Det går att skriva ett memoryspel på flera olika sätt i javascript, i denna laboration ska du skriva ett relativt enkelt memoryspel och de riktigt avancerade funktionerna kommer att utelämnas.

### Moment I
Fundera över hur ett memoryspel fungerar. Fundera också över vilka funktioner du tror att du kommer att behöva i ditt javascript.
Följande krav ställs på ditt memoryspel:

- Det ska gå generera fram spelplanen. Antal rader och kolumner ska på ett enkelt sätt kunna ändras. Det är dock tillåtet att göra denna enkla ändring i koden via t.ex. två variabler. Du behöver alltså inte läsa in spelplanens storlek från användaren.Nedan visas några exempel på hur en spelplan kan se ut. Bilderna visar en spelplan med 4x4 bilder (8 par) och en med 4x2 (4 par).
![][memory4x4]
![][memory2x4]

* Det ska endast finnas två bilder av samma typ på spelplanen.
* Bildernas position på spelplanen ska slumpas fram. Till din hjälp har du metoden 
RandomGenerator.getPictureArray(rows, cols) som du hittar bifogat laborationen. Du behöver inte använda denna funktion utan är fri att skriva en egen.En utslumpad array med 3*4 element kommer exempelbis att se ut så här: 
```js
[5, 3, 2, 5, 6, 6, 1, 3, 2, 4, 4, 1]
````

* Spelplanen ska skrivas ut på ett till ändamålet tillfredställande sätt. Det är godkänt att ha spelet i en tabell.
* För att vända på en bild ska användaren klicka med musknappen på aktuell bild.
* Det ska inte hända något om användaren klickar på en bild som redan visas (ej frågetecken).
* När användaren tryckt fram ett par (två kort) som inte överensstämmer med varandra ska bild-paret visas maximalt 1 sekund för att sedan döljas igen. ![][memory_win]
* När spelet är slut ska användaren upplysas om att spelet är slut samt **hur många försök** som krävdes för att klara spelet. (Genom en utskrift i dokumentet, ej genom console.log) 

### Moment II
Implementera memoryspelet i javascript.

Testa och verifiera att spelet fungerar.

Tänk på att dela upp en uppgift av denna storlek i små deluppgifter. På nästa sida har du ett förslag till uppdelning men du kan göra precis som du vill.

 
### ![][info] Tips 
När det nu gäller att lösa uppgifter som är lite större är det viktigt att dela upp uppgiften i små steg som man kan testa av efterhand. 

Ett möjligt upplägg kan vara detta:

1. Skapa ett HTML-dokument och länka in det bifogade skriptet random.js
2. Skapa en egen .js-fil (T.ex. memory.js) och skapa ett statiskt objekt i detta, t.ex. Memory.
3. Skapa en init-metod i objektet Memory och koppla denna till sidans onload-event. (**Testa**!)
4. Skapa en egenskap på ditt objekt som senare kommer att referera till den utslumpade arrayen. (jmfr. messages-arrayen i Laboration 2)
5. I init-metoden anropar du arrayslumpsmetoden och sparar resultatet i egenskapen du skapade i 4an.
6. **Testa** att skriv ut arrayen. Verkar det fungera?
7. Generera upp tabellen som kommer att innehålla bilderna. Bry dig i detta läge inte om att göra bilderna klickbara. (**Testa,** och nu är du van vid att testa hela tiden ;))
8. Modifiera koden du precis skrev så att varje bild kapslas in i en a-länk och koppla ett onclick-event till a-taggen. 
9. Skapa metoden som onclickeventet anropar och se där till att vända brickan.
10. Gör så att det enbart går att vända upp två brickor samtidigt och koppla en timer så att brickorna vänds ned efter cirka en sekund.
11. Gör ett test så att om brickorna är lika så stannar de uppvända och en räknare räknas upp med ett.
12. Kontrollera räknaren så att du vet när spelaren vunnit.
13. Klart!

Ovanstående är bara ett lösningsförslag och du är helt fri att lösa uppgiften som du vill, men tycker du det är knepigt kan texten ovan underlätta.

För dig som satsar på högre betyg. Se nedan ;)

## ![][star] För en större utmaning
_(Detta steg ger inte högre betyg på denna laboration som enbart bedöms med U/G men kommer att hjälpa dig vid projektet)_

På denna stjärnuppgift ska du likt, Labby Mezzsage, göra så att flera instanser av spelet kan köras samtidigt på samma HTML-sida:

**memoryapp.js:**
```js
var MemoryApp = {
   init: function(){
      var mem1 = new Memory(3,4,"game1");
      var mem2 = new Memory(3,4,"game2");
      mem1.start();
      mem2.start();
   }
};
```

**index.html:**
```html
<!-- Här kommer mitt första memoryspel att köras -->
<div id="game1"></div>

<!-- Här kommer mitt andra memoryspel att köras -->
<div id="game2"></div>
```
I fallet ovan så skapas spelen genom att ett nytt objekt av "klassen" Memory instansieras. 3 och 4 är givetvis rader och kolumner medan "game1" och "game2" är IDt på de noder i DOMen som spelen ska skapas i. När väl spelet är startat så sköter detta sig helt och hållet självt.

Vill man kan man klara sig på enbart en "klass" som sköter hela spelet, men man kan också tänka sig att man skapar ytterligare en "klass", **_brick_**, som representerar en spelbricka, även om dessa nog är enklare att hantera i en array som är en egenskap på din "Memory-klass".


Lycka till!

## Kontrollera uppgiftens krav **(bocka av)** 
- HTML-dokumentet är validerat och godkänt enligt valfri W3Cs rekommendation
- Memoryspelet fungerar enligt de beskrivna kraven i Uppgift 1.
- Du har ingen javascript-kod i HTML-koden, varken i HTML-dokumentet eller i den genererade html-koden.
- Spelet fungerar att spela enbart med hjälp av tangentbordet. (a-taggar runt bilderna)

[star]:https://coursepress.lnu.se/program/webbprogrammerare/wp-content/plugins/coursepress/icons/16/star_yellow.png

[info]:https://coursepress.lnu.se/program/webbprogrammerare/wp-content/plugins/coursepress/icons/16/information.png

[memory4]:pics/memory4x4.png
[memory2]:pics/memory2x4.png
[memory_win]:pics/memory_win.png