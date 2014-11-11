## Inledning
Genom att öva sig på de grundläggande koncepten i JavaScript öppnas vägen allteftersom till de mer avancerade funktionerna. Man måste lära sig krypa innan man kan gå, även i JavaScript!

## Mål
Efter du genomfört och blivit godkänd på laborationen har du kunskaper i att förstå grundläggande begrepp inom JavaScript.


Du kommer även ha kunskaper om objekten String, Math, Array och Date. Vidare han du också kombinera funktionaliteten hos objekten för att skapa dynamiska JavaScript.


## Strict mode och funktioner utan sidoeffekter
Samtliga inlänkade filer ska använda ES5 strict-mode. Av denna anledning är strängen:

```js
"use strict";
```

placerad överst i varje .js-fil.

Samtliga funktioner som du implementerar i denna laboration ska vara så kallade "Pure functions", funktioner utan sidoeffekter. Undantaget är att du gärna får använda console.log för debuginformation.

## Uppgift 1 - Gissa det hemliga talet
En klassiker i programmeringskurser och en uppgift som du kommer att få göra många gånger. Spelet, gissa det hemliga talet. 

Din uppgift blir att färdigställa funktionen "guess" som du hittar i katalogen "guess" i laborations-reprot.

Katalogen består av två filer:

* index.html, _med ett formulär där vi kan skriva gissningar._
* script.js, _Kod för att hantera formuläret och den funktion som du ska skriva koden till._

Spelet går ut på att datorn slumpar ett hemligt tal mellan 1 och 100 och låter sedan användaren gissa sig till talet. Om talet användaren gissade på är lägre än det hemliga talet ska ett meddelande visas som talar om för användaren att det hemliga numret är högre än gissningen, likadant ska ett meddelande visas om gissningen var för hög. Användaren ska få gissa på det hemliga numret tills det att rätt nummer gissas. När spelet är slut ska ett meddelande visas som innehåller det hemliga numret och det antal gissningar användaren behövde för att hitta det hemliga numret.

Att tänka på:

* Det är i funktionen "guess" som du ska skriva din kod. Som argument får du det tal användaren gissat på. Returvärdet är angivet i koden.
* Programmet behöver hålla reda på hur många gissningar som gjorts.
* Om användaren matar in något felaktigt. Hur ska det hanteras?

### ![][info] Tips
För att slumpa ett tal mellan 1 och 100 kan du använda dig av följande kodstycke.

```js
Math.floor( Math.random() * (max-min)+1 )+min;
Math.floor( Math.random() * (100-1)+1) + 1;
Math.floor( Math.random() * 100)+1;
```

Om du är osäker på hur Math.floor() och Math.random() fungerar så hittar du information om funktionerna i kurslitteraturen eller i föreläsningsmaterialet.

## Uppgift 2 - Strängar
I denna uppgift ska du titta lite närmare på objektet String som finns att tillgå i JavaScript. I String-objektet finns många metoder och egenskaper. I denna uppgift ska du bekanta dig med några stycken av dessa. String-objektet är värdefullt när textsträngar ska behandlas.

Uppgiften löser du i filerna som finns i katalogen "strings".
Fyll på med den kod som behövs i funktionen `convertString(str)`. Denna funktion ska ta en textsträng som argument. Vidare ska funktionen ändra alla versaler i argumentet till gemener och alla gemener i argumentet till versaler. Slutligen ska alla `a` och `A` ändras till `#`.

Exempel på indata: `Jag tycker JAVASCRIPT är KUL!` skall alltså returnera: `j#G TYCKER j#v#script ÄR kul!`.

Observera att även svenska tecken ska omfattas av omvandlingen.

När allt är ändrat ska resultatet returneras som en ny textsträng varvid programmet kommer att skriva ut den under inmatningsfältet.

Om användaren klickar på "omvandla" utan att ha skrivit in en text så ska din funktion kasta ett undantag med ett lämpligt felmeddelande.

### ![][info] Tips
Användbara funktioner, i String-objektet, för denna uppgift är bland annat:

`toLowerCase()` `toUpperCase()` Fler användbara funktioner i String-objetet hittar du på t.ex. Mozilla Developer eller i föreläsningsmaterialet.

## Uppgift 3 - Födelsedagen
Nu ska du skriva ett JavaScript som tar reda på hur många dagar det är kvar till användarens födelsedag.

Till din hjälp så har du den kod som finns i katalogen "birthday".

Användaren kan mata in ett datum som kommer att skickas in till den funktion som du ska implementera. Följande krav ställs:

* Om inte inmatat datum är på formen "ÅÅÅÅ-MM-DD" så ska du kasta ett undantag med ett lämpligt felmeddelande.
* Utifrån den inmatade strängen ska du i funktionen räkna ut hur många dagar det är kvar till att användaren fyller år och returnera detta.

Betrakta speciellt hur du ska hantera följande:

* Användaren kan redan ha fyllt år? Exempelvis i mars. 
* Vad händer vid skottår?
* Fundera kring om din kod uppför sig olika före eller efter klockan 12.00 på dagen.

Skapa utifrån det inlästa datumet ett datumobjekt som representerar när användaren fyller år nästa gång. Utgå ifrån att användaren fyller år i år. Fundera på hur du kan få fram aktuellt år utan att skriva in det i klartext.

Skapa sedan ytterligare ett datumobjekt med dagens datum.

Genom att subtrahera antalet millisekunder till dags dato från antalet millisekunder då du fyller år får du skillnaden mellan datumen. Kan du via denna skillnad se om användaren fyllt år? Om så vad blir då nästa steg?

När du fått detta att fungera kan du sedan omvandla antalet millisekunder till dagar och du är klar med uppgiften.

### ![][info] Tips
För att ta reda på hur många millisekunder som förflutit sedan 1 januari, 1970 till ett visst datum går det bra att använda följande funktion på en Date-variabel:
`getTime()`


## Uppgift 4 - Vandalen - Arrayer och objekt
Din uppgift är att skapa en funktion utan sidoeffekter **("pure function")** som tar en array innehållande ett godtyckligt antal objekt (personer med namn och ålder) som argument och returnerar ett nytt objekt. Det objekt som returneras ska innehålla information om den högsta åldern, lägsta åldern, medelåldern samt en sträng med samtliga namn sorterade i bokstavsordning.

### Testning
Till denna uppgift finns ett antal enhetstester. Det betyder att när du nu går in på index.html så kommer du att se felmeddelanden.Efterhand som du skapar din funktion och implementerar funktionalitet så kommer också testerna att bli gröna. När samtliga tester går igenom så bör du vara klar med uppgiften!

### Argument:
Objekten i arrayen som skickas som argument ska innehålla två egenskaper:

* name **- sträng innehållande för- och efternamn**
* age - **nummer innehållande ålder**

Exempel på array som skickas som argument till funktionen:

```js
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
```


### Returvärde:
Objektet som returneras ska innehålla fyra egenskaper:	

* minAge **- nummer innehållande den ålder i de inskickade objekten som är lägst.**
* maxAge **-nummer innehållande den ålder i de inskickade objekten som är högst.**
* avarageAge - **nummer innehållande medelåldern av de inskickade objektens ålder.**
* names  **- sträng innehållande samtliga personers namn separerade med ", " (komma och efterföljande mellanslag). Namnen sorteras i bokstavsordning.**

Testa genom att skriva ut resultatet till konsolen:

```js
var makePerson = function(persArr) {
   var result = {};

   /* Lös uppgiften */

   return result;
}
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);
```

### Exempel på resultat:
![][vandalen1]

### ![][star] Stjärnuppgift

1) Lös uppgiften utan att använda någon av looparna: for, while, do...while eller villkorssatserna if, switch.

2) Implementera felhantering i uppgiften. Gör kontroller för att inmatade objekt innehåller det som de ska göra. Kontrollera exempelvis att åldrar är heltal och att namn är strängar. För felhanteringen får if-satser, switch etc. användas.

[star]:https://coursepress.lnu.se/program/webbprogrammerare/wp-content/plugins/coursepress/icons/16/star_yellow.png

[info]:https://coursepress.lnu.se/program/webbprogrammerare/wp-content/plugins/coursepress/icons/16/information.png

[vandalen1]:https://raw.github.com/Leitet/Kursmaterial-JavaScript/master/lab/pics/vandalen1.png