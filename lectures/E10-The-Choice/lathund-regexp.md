# Reguljära uttryck, lathund

## Metatecken

* ```^``` Matcha radbörjan 
* ```$``` Matcha radslut 
* ```.``` Matcha ett godtyckligt tecken 
* ```*``` Matcha föregående mönster 0, 1 eller flera gånger 
* ```+``` Matcha föregående mönster 1 eller flera gånger 
* ```?``` Matcha föregående mönster 0 eller 1 gång 
* ```|``` Matcha föregående mönster eller nästkommande mönster

## Parantesuttryck: 
* ```()``` Gruppera 
* ```{m,n}``` Anger hur många gånger föregående mönster ska matchas: 
* ```{4}``` Matcha föregående mönster fyra gånger. 
* ```{4,}``` Matcha föregående mönster minst fyra gånger. 
* ```{2,6}``` Matcha föregående mönster minst två gånger, maximalt sex. 
* ```{0,}``` Samma som ```*``` 
* ```{1,}``` Samma som ```+``` 
* ```{0,1}``` Samma som ```?``` 
* ```[tecken]``` Anger en mängd av tecken som ska matchas: 
* ```[^tecken]``` Anger en mängd av tecken som inte ska matchas: 
* ```[krtg]``` Matcha något av tecknen ```k``` ```r``` ```t``` ```g``` 
* ```[a-f]``` Matcha något av tecknen ```a``` ```b``` ```c``` ```d``` ```e``` ```f``` 
* ```[^a-f]``` Matcha alla tecken som inte är ```a``` ```b``` ```c``` ```d``` ```e``` ```f``` 
* ```[A-ZÅÄÖ]``` Matchar alla versaler i det svenska alfabetet. 
```[a-zåäö]``` Matchar alla gemener i det svenska alfabetet. 
```[0-9]``` Matcha alla siffror 

## Escapesekvenser: 
* ```\``` Används för att stänga av betydelsen av nästkommande tecken. 
* För att matcha tecknet ```+```, skriv ```\+``` 
* ```\d``` Matcha en siffra mellan ```0``` och ```9``` ```[0-9]``` 
* ```\D``` Matcha alla tecken som **inte** är en siffra mellan  **0** och **9** **[^0-9]** 
* ```\w``` Matcha **A-Z**, **a-z**, **0-9** samt **_** ```[a-zA-Z0-9_]``` 
* ```\W``` Omvänd betydelse mot ```\w``` 
* ```\s``` Matchar tabtecken, mellanslag och radbrytning 
* ```\S``` Omvänd betydelse mot ```\s``` 

## Attribut: 
* ```/.../g``` Används för att tala om att JavaScript ska fortsätta leta efter flera matchningar, inte bara en. 
* ```/.../i``` Matchningen kommer att göras oberoende av stora eller små bokstäver. 
* ```/.../m``` ^ kommer att ses som radstart och $ kommer att ses som radslut istället för sträng start och slut.

## Exempel: 
Matcha ”tre” någonstans i en sträng: 
```/tre/``` 
Detta kommer att matcha på "**tre**", ”**tre**vligt”, ”Star **tre**k” medan 
```/^tre/``` enbart kommer att matcha på ”**tre**” och ”**tre**vligt” men inte ”Star Trek” 

Matcha e-postadress: 
```^(?!\.)(\w|-|\.){1,64}(?!\.)@(?!\.)[-.a-zåäö0-9]{4,253}$```

Matcha personnummer på formen (ÅÅMMDD-XXXX): 
```/^[0-9]{6}-[0-9]{4}$/```

Matcha datum på formen (ÅÅÅÅ-MM-DD): 
```/^(19|20)[0-9][0-9]-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/```

## Användbara länkar
* http://www.regexpal.com – Applikation för att testa reguljära uttryck.
* http://www.regexlib.com – En sida med många färdigskrivna uttryck. Kom bara ihåg att kontrollera så de faktiskt fungerar!
* http://www.xregexp.com – Ett externt JavaScript bibliotek som utökar motorn för reguljära uttryck i JavaScript.
* http://www.regexcrossword.com/ - Korsord med reguljära uttryck.

## Rekommenderad läsning
Mastering Regular Expressions (3rd Edt.)
J. Friedl
ISBN: 978-0-596-52812-6