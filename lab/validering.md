## Inledning
Denna laboration ställer ganska höga krav på dig som laborant. Du kommer till stor del vara tvungen att leta upp information själv och fundera ut egna lösningar på problem som ställs.

I denna laboration kommer du att genomföra klientvalidering av formulär.


### Mål
Efter genomförd laboration kommer du att kunna validera formulärdata med hjälp av reguljära uttryck.

### Strict mode
Samtliga inlänkade javascriptfiler ska använda ES5 strict-mode. Av denna anledning ska strängen:

```js
"use strict";
```

placeras överst i varje .js-fil.

### Observera 
För att bli godkänd på laborationen ska din källkod följa den standard vad det gäller kommentering, val av variabelnamn m.m. som gåtts igenom på föreläsning. Ditt Javascript måste även fungera enligt de krav som finns beskrivna i denna laborationshandledning.

För att kunna genomföra denna laboration måste du vara förberedd **innan** du går på handledningstillfället, det är inte förbjudet, utan rekommenderat, att göra laborationen i förväg. 

Vid fuskmisstanke lämnas misstankar samt berörda dokument över till universitetets disciplinnämnd.

Läs igenom hela laborationshandledningen **innan** du påbörjar laborationen.

## Uppgift – Validering av formulär
I denna uppgift ska du skriva en klassisk validering av ett formulär med klientdata. Vi ska också försöka hjälpa användaren en bit på vägen...

### Moment I - Formuläret
Börja med att skapa ett formulär i HTML och CSS med valfritt utseende. Det är helt ok (ja, kanske till och med att rekommendera) att använda ett css-ramverk så som [Bootstrap](http://getbootstrap.com/) eller [Foundation](http://foundation.zurb.com/) för detta.

![][validering_form1]

Formulärdatat ska skickas till sidan: http://voyager.lnu.se/tekinet/kurser/dtt/wp_webbteknik/process_form.php (För att logga in skriv ```lnu\```före ditt användarnamn)

Metoden som används för att skicka datan ska vara POST.

* Testa nu att formuläret fungerar och att datan skickas till sidan som är angiven ovan och på denna sida presenteras.

### Moment 3 - Valideringen
Du ska nu se till att validera dokumentet innan det skickas. All JavaScript-kod som används lägger du i ett objekt, t.ex. Validator eller liknande. 

Ingen JavaScriptkod får finnas inbäddad direkt på HTML-sidan.

Fälten ska valideras enligt följande:
* **Förnamn:** Får inte vara tom.
* **Efternamn:** Får inte vara tom
* **Postnummer:** Postnumret ska anges på formen: XXXXX, d.v.s. t.ex. 31223
* **E-post:** Enbart e-postadresser på korrekt form får anges här.
* **Prismodell:** behöver inte valideras på klientsidan.

Om ett fel i ett fält hittas ska detta tydligt markeras då användaren lämnar det aktuella textfältet. 

![][validering_form2]

* Kontrollera att samtliga fält uppfyller den validering som krävs och att uppgifterna skickas som förut om allt är OK.
* I denna laboration ska du inte använda innerHTML utan skapa samtliga objekt med document.createElement()

### Moment 3 - Hjälp användaren
Felmeddelanden är inget som gör en användare glad, och vi vill ju ha glada användare! Varför då visa felmeddelanden om vi med kod kan rätta till dem? 

Du ska därför se till att användaren kan skriva sitt postnummer på ett antal olika format, men när användaren lämnar textfältet så görs användarens postnummer automatiskt om till det format vi vill ha, nämligen XXXXX.

De format som vi ska kunna hantera är:
* XXXXX
* XXX-XX
* XXX XX
* SEXXXXX
* SEXXX-XX
* SEXXX XX
* SE XXXXX
* SE XXX-XX
* SE XXX XX
 
Om något av formaten ovan påträffas så ska detta göras  om till XXXXX. Om formatet inte överrensstämmer så ska fortfarande ett felmeddelande visas. 

X – motsvarar en siffra 0-9.

![][validering_form3-1]
![][validering_form3-2]

### Moment 4 - Popup
![][validering_form4]
För att ytterligare säkerställa att användaren matar in korrekta uppgifter så ska användaren bli tillfrågad om dennes uppgifter är korrekta via en modal popup-ruta. Det vill säga en popup som enbart tillåter att användaren gör val i popupen och inte samtidigt kan ändra i t.ex. formuläret i bakgrunden.

För att tydliggöra för användaren att det är popuprutan fokus ska läggas på ska bakgrunden dimmas medan popuprutan visas.

I popupen ska användaren få den data denne skrivit in presenterad för sig samt ges två val:
* Bekräfta ditt köp (eller motsvarande)
* Avbryt

Om "Bekräfta ditt köp" klickas ska formuläret skickas och om "Avbryt" så ska användaren återigen få möjlighet att ändra i formuläret.

När du konstruera popup-rutan så ska texten till respektive fält ("Förnamn:", "Postnummer:" etc.) dynamiskt läsas in från formuläret. Detta ska allts inte hårdkodas i popupen!

* Popuprutan visas först när användaren klickar på Genomför köp-knappen
* Popuprutan inte visas om formuläret innehåller någon felaktighet
* De val användaren gör i formuläret presenteras i Popuprutan
* Användaren kan välja att avbryta eller bekräfta köp
* Bakgrunden är gråad och det går inte att klicka i formuläret då popuprutan visas.

## Kontrollera laborationens krav (bocka av)
* HTML-dokumentet är validerat och godkänt enligt valfri W3Cs rekommendation.
* Det finns ingen JavaScript-kod i .html-dokumentet eller i den av Javascript genererade html-koden.
* Sidan fungerar utan JavaScript men formuläret skickas oavsett vad användaren skriver när JavaScript är avaktiverat i webbläsaren.
* JavaScriptet är helt befriat från CSS-kod
* innerHTML används inte någonstans i laborationen.

[star_h2]:https://coursepress.lnu.se/program/webbprogrammerare/wp-content/plugins/coursepress/icons/24/star_yellow.png

[star_h3]:https://coursepress.lnu.se/program/webbprogrammerare/wp-content/plugins/coursepress/icons/16/star_yellow.png

[info]:https://coursepress.lnu.se/program/webbprogrammerare/wp-content/plugins/coursepress/icons/16/information.png

[validering_form1]:pics/validering_form1.png
[validering_form2]:pics/validering_form2.png
[validering_form3-1]:pics/validering_form3-1.png
[validering_form3-2]:pics/validering_form3-2.png
[validering_form4]:pics/validering_form4.png
