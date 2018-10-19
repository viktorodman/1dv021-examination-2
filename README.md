# 2 - Tjugoett

- Examinationsuppgift 2
- [GitBook](https://coursepress.gitbook.io/1dv021/examinationsuppgifter/2-tjugoett)

> __VIKTIGT!__ Innan du börjar arbeta med examinationsuppgiften är det viktigt att du lägger till examinationsuppgiftens repo till ditt repo för examinationsuppgiften.

***

### OBS! OBS! OBS!

- Detta är en **obligatorisk** och **examinerande** uppgift som **du ska lösa helt på egen hand**.
- Du måste göra **regelbundna "commits" och "pushes"** av koden till ditt repo för uppgiften för att kursledningen ska kunna följa ditt arbetet med uppgiften.
- Du ska kunna förklara samtliga konstruktioner och satser som din lösning av uppgiften innehåller.

***

## Introduktion

I denna examinationsuppgift ska du simulera kortspelet Tjugoett _**enligt givna regler**_.

Du kommer att ha stor frihet välja hur du vill lösa uppgiften; vilka konstruktioner att använda. Hur representeras lämpligen en kortlek om 52 kort? Behöver data kapslas in så att "getters" och "setter" behövs? Hur många egendefinierade typer behöver skapas? Är arv lämpligt att använda i något sammanhang? Vilka funktioner och/eller prototypmetoder behövs? Ska metoderna tillhöra prototypobjektet eller inte? Överskuggning?

## Regler

### Kort

En vanlig kortlek om 52 kort används. Esset är värt 1 eller 14 poäng \(vilket nu som är mest fördelaktigt för den aktuella handen\), en kung är värd 13, en dam 12, en knekt 11 och övriga kort sin valör.

### Spelet idé

I Tjugoett gäller det att komma till, eller så nära som möjligt, summan 21 på två eller flera kort.

### Exempel

Given ger alla spelare ett kort var från draghögen. Given tar inte själv något kort. Spelarna spelar nu mot given en i taget i turordning. När det är en spelares tur begär spelaren ett kort av given. Efter spelarens andra kort kan något av följande inträffa:

1. Spelaren har fått 21 och vinner direkt.
2. Spelaren har fem kort på handen, en summa mindre än 21 och vinner direkt.
3. Spelaren har spruckit, d.v.s. fått en summa större än 21, och förlorar direkt.
4. Spelaren begär ytterligare kort tills summan är 21, har fem kort på handen,

   summan större än 21, eller förklara sig nöjd.

Om en spelare inte vunnit eller förlorat direkt utan istället förklarat sig nöjd är det givens tur att försöka straffa spelaren. Given drar kort från draghögen, ett efter ett, och något av följande kan inträffa:

1. Given får 21 och vinner.
2. Given spricker och spelaren vinner.
3. Given förklarar sig nöjd. Spelaren och given jämför sina händers summor och den som har högst vinner. Om summorna är lika vinner given.

Given forsätter sedan att spela mot näste spelare på samma sätt. Tar korten i draghögen slut, det understa kortet delas inte ut, tar given det återstående kortet i draghögen samt alla dittills avverka kort, blandar om dem och använder dem som en ny draghög.

##  Uppgift

Du ska skriva en Javascriptapplikation som simulerar kortspelet Tjugoett _**enligt givna regler**_. Inget hasardmoment, d.v.s. ingen satsning av pengar, behöver förekomma. Det ska kunna vara en eller flera spelare \(antalet spelare ska bestämmas med hjälp av en konstants värde\) utöver given. _**Ingen interaktion med användare ska finnas**_ utan både spelare och giv drar kort från draghögen enligt en förutbestämd algoritm utformad enligt ditt eget tycke. Exempelvis kan du välja att en spelare är nöjd då summan uppgår till 15 \(eller mer konservativt, och hållbarare i längden\(?\), 8\). Giv och spelare ska kunna vara nöjda vid olika summor.

Startpunkten för applikationen ska vara i filen `app.js`, placerad i roten av Javascript-applikationen. Övriga Javascript-filer ska vara placerade i underkatalogen `src`.

Din applikation måste använda olika typer av objekt, som måste skapas på minst två olika sätt:

* skapande av objekt med en egendefinierad konstruktorfunktion \(använd designmönstret "_constructor/prototype_" vid deklaration av typen\).
* instansering av objekt av en egendefinierad som använder `class`-syntax.

Samtliga typer ska vara placerade i olika moduler. Du väljer själv vad typerna ska representera. Kanske skapar du typer för spelbord, draghög, giv, spelare, hand, spelkort, färg, valör, ...?

Undvik om lämpligt att upprepa kod och bryt därför inte mot principen DRY \("don't repeat yourself"\).

Dokumentera typer och funktioner genom att använda JSDOC-kommentarer \(beskrivning ska finnas och dokumentation av parametrar, kastade undatag och returvärden\). Använd även radkommentarer innuti funktioner i de fall det är befogat.

Efter varje spelomgång ska resultatet presenteras. Det ska framgå vilka kort spelare och giv dragit, respektive hands summa och vem som vunnit. Nedan hittar du _förslag_ på presentation av resultatet av olika spelomgångar.

#### Exempel på utfall med en spelare vid bordet.

Spelaren och given förklarar sig nöjda och given vinner då given har den högsta summan.

```text
Player #1: 6♣ 7♥ 2♣ (15)
Dealer   : 9♥ Kn♠ (20)
Dealer wins!
```

Spelaren får 21 och vinner direkt.

```text
Player #1: A♥ 10♠ A♣ 9♠ (21)
Dealer   : -
Player wins!
```

Spelaren och given är nöjda och har samma summa på handen varför given vinner.

```text
Player #1: 5♣ K♠ (18)
Dealer   : J♣ 7♥ (18)
Dealer wins!
```

Spelaren nöjd, given spricker varför spelaren vinner.

```text
Player #1: 3♦ 7♠ 5♠ (15)
Dealer   : 8♥ 6♥ J♦ (25) BUSTED!
Player wins!
```

Spelaren spricker varför given vinner direkt.

```text
Player #1: 4♣ 9♥ J♥ (24) BUSTED!
Dealer   : -
Dealer wins!
```

Spelaren drar fem kort och får en summa under 21 och vinner direkt.

```text
Player #1: 4♠ 6♦ 2♦ 2♠ 2♥ (16)
Dealer   : -
Player wins!
```

#### Exempel på utfall med tre spelare vid bordet

```text
Player #1: 2♣ 2♦ 6♥ 3♦ 6♦ (19)
Dealer: -
Player #1 wins! 

Player #2: 3♣ A♣ (17)
Dealer: Q♣ 2♥ 5♠ (19)
Dealer wins! 

Player #3: 4♣ A♠ (18)
Dealer: 10♦ Q♠ (22) BUSTED!
Player #3 wins!
```

####  Exempel på utfall med fem spelare vid bordet.

```text
Player #1: 2♣ 9♣ K♥ (24) BUSTED!
Dealer: -
Dealer wins! 

Player #2: 3♣ 7♣ 8♣ (18)
Dealer: 10♠ 8♦ (18)
Dealer wins! 

Player #3: 4♣ 10♣ A♦ (15)
Dealer: 6♠ 9♥ (15)
Dealer wins! 

Player #4: 5♣ 7♠ J♥ (23) BUSTED!
Dealer: -
Dealer wins! 

Player #5: 6♣ 4♦ A♠ 8♠ (19)
Dealer: 7♦ J♠ (18)
Player #5 wins!
```

## Bedömning

Bedömning av examinationsuppgiften görs enligt skalan U/G/VG. För att få VG i slutbetyg krävs VG på denna examinationsuppgift, samt G på examinationsuppgift 1.

Samtliga åtta mål i kursplanen examineras, men framför allt det åttonde och sista målet, "analysera problem för att därefter värdera och välja lämplig design samt konstruera lösning i form av program i programspråket Javascript \(8\)".

Betygsgraden bestäms utifrån hur väl du kan visa att du tillgodogjort dig kursens samtliga moment och den praktiska tillämpning av dessa. Utökningar av uppgiften kan premieras.

## Tips

Ett vanligt sätt att representera en kortlek är att använda en array. För att blanda arrayen brukar algoritmen _Fisher-Yates Shuffle_ användas i en eller annan form.