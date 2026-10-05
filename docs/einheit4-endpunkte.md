# Einheit 4 – Endpunkte

## Team

### GET /teams

Gibt alle Teams zurück.

**Rückgabe:**  
Liste mit allen Teams.

---

### GET /teams/:id

Gibt ein bestimmtes Team anhand der ID zurück.

**Beispiel:**
```text
GET /teams/1

Rückgabe:
Das Team mit der angegebenen ID.
Fehler:
Wenn kein Team mit dieser ID existiert, wird 404 Not Found zurückgegeben.
POST /teams
Legt ein neues Team an.
Erwarteter Body:
{
  "name": "Team Nadi",
  "klasse": "4aAPC"
}

Rückgabe:
Das neu angelegte Team.
Statuscode:
201 Created
Fehler:
Wenn name oder klasse fehlen, wird 400 Bad Request zurückgegeben.
PUT /teams/:id
Aktualisiert ein bestehendes Team.
Beispiel:
PUT /teams/1

Erwarteter Body:
{
  "name": "Team Nadi Updated",
  "klasse": "4aAPC"
}

Rückgabe:
Das aktualisierte Team.
Fehler:
Wenn das Team nicht existiert, wird 404 Not Found zurückgegeben.
DELETE /teams/:id
Löscht ein bestehendes Team.
Beispiel:
DELETE /teams/1

Rückgabe:
Keine Rückgabe.
Statuscode:
204 No Content
Fehler:
Wenn das Team nicht existiert, wird 404 Not Found zurückgegeben.
Project
GET /projects
Gibt alle Projekte zurück.
Rückgabe:
Liste mit allen Projekten.
GET /projects/:id
Gibt ein bestimmtes Projekt anhand der ID zurück.
Beispiel:
GET /projects/2

Rückgabe:
Das Projekt mit der angegebenen ID.
Fehler:
Wenn das Projekt nicht existiert, wird 404 Not Found zurückgegeben.
POST /projects
Legt ein neues Projekt an.
Erwarteter Body:
{
  "teamId": 2,
  "titel": "Bewertungsapp",
  "beschreibung": "Projekt für die Bewertung",
  "praesentationsdatum": "2026-10-25"
}

Rückgabe:
Das neu angelegte Projekt.
Statuscode:
201 Created
Fehler:
Wenn teamId, titel oder praesentationsdatum fehlen, wird 400 Bad Request zurückgegeben.
PUT /projects/:id
Aktualisiert ein bestehendes Projekt.
Beispiel:
PUT /projects/2

Erwarteter Body:
{
  "teamId": 2,
  "titel": "Bewertungsapp Updated",
  "beschreibung": "Projekt wurde aktualisiert",
  "praesentationsdatum": "2026-10-30"
}

Rückgabe:
Das aktualisierte Projekt.
Fehler:
Wenn das Projekt nicht existiert, wird 404 Not Found zurückgegeben.
DELETE /projects/:id
Löscht ein bestehendes Projekt.
Beispiel:
DELETE /projects/2

Rückgabe:
Keine Rückgabe.
Statuscode:
204 No Content
Fehler:
Wenn das Projekt nicht existiert, wird 404 Not Found zurückgegeben.
Evaluation
POST /evaluations
Speichert eine neue Bewertung.
Erwarteter Body:
{
  "projectId": 2,
  "criterionId": 1,
  "jurorId": 1,
  "score": 8,
  "comment": "Sehr gut umgesetzt"
}

Rückgabe:
Die neu gespeicherte Bewertung.
Statuscode:
201 Created
Fehler:
Wenn Pflichtfelder fehlen, wird 400 Bad Request zurückgegeben.
Wenn das Projekt, das Kriterium oder der Juror nicht existiert, wird 404 Not Found zurückgegeben.
GET /evaluations/project/:projectId/average
Berechnet die durchschnittliche Punktzahl eines Projekts und gruppiert das Ergebnis nach Kriterium.
Beispiel:
GET /evaluations/project/2/average

Rückgabe:
[
  {
    "criterionId": 1,
    "durchschnitt": "8.0000"
  }
]

Der Durchschnitt wird mit AVG(score) berechnet und nach criterionId gruppiert.
Criterion
POST /criteria
Legt ein neues Bewertungskriterium an.
Erwarteter Body:
{
  "name": "Inhalt",
  "maxScore": 10,
  "weight": 1.0
}

Rückgabe:
Das neu angelegte Kriterium.
Statuscode:
201 Created
Fehler:
Wenn name, maxScore oder weight fehlen, wird 400 Bad Request zurückgegeben.
Juror
POST /jurors
Legt einen neuen Juror an.
Erwarteter Body:
{
  "name": "Nadi",
  "email": "nadi@schule.at"
}

Rückgabe:
Der neu angelegte Juror.
Statuscode:
201 Created
Fehler:
Wenn name oder email fehlen, wird 400 Bad Request zurückgegeben.