# Dokumentation – CI/CD mit GitHub Actions

## Ziel
Das bestehende Node.js-Backend der Bewertungsapp wird bei jedem Push automatisch getestet. Fehler sollen fruehzeitig erkannt werden.

## Umsetzung
Die Workflow-Datei `.github/workflows/ci.yml` definiert eine CI-Pipeline. GitHub Actions startet bei jedem Push einen Ubuntu-Runner, laedt das Repository, richtet Node.js 22 ein, installiert im Ordner `backend` die Abhaengigkeiten mit `npm install` und fuehrt die Tests mit `node --test tests/ci.test.js` aus.

Die Tests in `backend/tests/ci.test.js` ueberpruefen das Startskript, die Express-Abhaengigkeit und den Paketnamen.

## Erfolgreicher Durchlauf
Nach dem ersten Commit wurde im Reiter **Actions** geprueft, ob der Workflow erfolgreich abgeschlossen wird. Bei bestandenen Tests ist der Durchlauf gruen.

**Screenshot:** [Hier Screenshot des erfolgreichen Durchlaufs einfuegen.]

## Absichtlich fehlschlagender Test
Fuer die Fehlerdemonstration wird im dritten Test die erwartete Zeichenfolge `backend` temporaer in `falscher-name` geaendert:

```js
assert.equal(pkg.name, 'falscher-name');
```

Nach einem weiteren Commit startet die Pipeline erneut. Der Test schlaegt fehl, weil der tatsaechliche Paketname `backend` ist. Der Durchlauf wird rot als fehlgeschlagen markiert.

**Screenshot:** [Hier Screenshot des fehlgeschlagenen Durchlaufs einfuegen.]

Anschliessend wird die Testzeile wieder auf `assert.equal(pkg.name, 'backend');` zurueckgesetzt und erneut gepusht, damit das Repository wieder gruene Tests hat.

## CI/CD-Begriffe
- **CI (Continuous Integration):** Automatisches Pruefen neuer Codeaenderungen, z. B. durch Tests nach jedem Push.
- **CD (Continuous Delivery/Deployment):** Automatisiertes Bereitstellen bzw. Veroeffentlichen von Software. Dies wird in dieser Aufgabe nicht umgesetzt.
- **Pipeline:** Festgelegte Folge automatisierter Arbeitsschritte.
- **Workflow:** Konfiguration dieser Schritte als YAML-Datei in GitHub Actions.
- **Runner:** Rechner bzw. Umgebung, in der die Schritte ausgefuehrt werden.

## Ergebnis
Die CI-Pipeline soll erfolgreiche Tests gruen und absichtlich fehlschlagende Tests rot anzeigen. Dadurch werden Fehler automatisch erkannt. Dies ist eine CI-Demonstration; ein Deployment (CD) ist nicht enthalten.

## Abgabe
Repository: https://github.com/ItsNadi/bewertungsapp-preiss

Screenshots: Erfolgreicher und fehlgeschlagener GitHub-Actions-Durchlauf.
