# moment 2

I detta moment har jag jobbat med Gulp och automatisering. 
Automatisering med hjälp av Gulp underlättar jobbet för webbutvecklaren genom att enkelt automatisera proceser som:

* Bildkomprimering.
* Minifiering av JavaScript och CSS.
* Konkatenering av JavaScript- och CSS- filer.

# Paket jag använd i detta projekt:
* gulp-concat - är ett paket som tillåter användaren att konkatinera JavaScript-filer.
* gulp-concat-css är ett paket som tillåter användaren att konkatinera CSS-filer.
* browser-sync - laddar om webbläsaren när ändringar i koden görs. 
* gulp-uglify-es - miniferar JavaScript kod.
* gulp-imagemin - komprimerar automatiskt bilder. 
* postCSS – är ett ramverk som låter dig hantera och utomatisera CSS operationer med hjälp av javascript. 
* nanocss - postCSS har en massa paket som man kan installera som hjälper webbutvecklaren med visa sysslor. 
Ett av dessa paket är nanocss som är ett litet program som automatiserar minifering av css.

# Det skapade systemet fungerar på följande sätt:

Genom att skriva gulp i terminalen sätts programmet på och alla ändringar som görs registeras. 
En lokal server startas och webbläsaren öppnas för att visa sidan.
HTML kopieras till publikationsfoldern.
JavaScript - och CSS-filerna slås ihop till en samlad JavaScript-fil(main.js) och en samlad CSS-fil(bundle.css).
Alla bilder som ligger i mappen pre-img komprimeras och läggs i pub-mappen img.
CSS och JavaScript-koden minifieras. 

