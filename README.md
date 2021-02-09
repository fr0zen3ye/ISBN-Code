# ISBN-Code
a init
Legen Sie ein neues Repository samt node package.json an und installieren Sie jest (oder ein beliebiges anderes Testframework) und programmieren Sie eine Funktion namens checkISBN, die einen String entgegen nimmt und die dazugehörige Prüfziffer ergibt.
Achtung:
Die eingegebene ISBN kann neben Ziffern auch Bindestriche enthalten. Diese können ignoriert werden.
Die eingegebene ISBN kann an letzter Stelle auch ein 'X' stehen haben, diese ist als die Zahl 10 zu behandeln.
Die Prüfziffer muss als String zurück gegeben werden. Falls die Prüfziffer den Wert 10 ergibt soll anstatt '10' besser 'X' zurück gegeben werden.
Falls die Prüfziffer 0 ergibt, soll ein leerer String zurück gegeben werden: ''
b simple
Legen Sie eine HTML-Seite mit einem input-Feld und einem Button mit der Beschriftung "prüfen" an. So bald "prüfen" angeklickt wird soll ein div mit grüner Schrift anzeigen: "ISBN OK". Ist die eingegebene ISBN nicht korrekt soll ein div mit roter Schrift angezeigt werden: "ISBN corrupt".

c fluent
Löschen Sie den "prüfen"-Button von Ihrer HTML-Seite und geben Sie das Prüfergebnis wie in b_simple aus, sobald in das Eingabefeld eine neue Ziffer eingegeben wird

d advanced
Legen Sie anstatt einem nun vier Eingabefelder an, die durch Bindestriche miteinander verbunden sind und folgende Länge haben:
_-___-_____-_
1 Ziffer
3 Ziffern
5 Ziffern
1 Ziffer
