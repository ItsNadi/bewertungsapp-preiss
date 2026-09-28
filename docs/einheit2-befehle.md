# Einheit 2 – verwendete CLI-Befehle

```bash
npm init -y
npm install express cors morgan sequelize cookie-parser mysql2
npm install --save-dev sequelize-cli

npx sequelize-cli init

npx sequelize-cli model:generate --name Team --attributes name:string
npx sequelize-cli model:generate --name Member --attributes teamId:integer,vorname:string,nachname:string
npx sequelize-cli model:generate --name Project --attributes teamId:integer,titel:string,beschreibung:text,praesentationsdatum:date
npx sequelize-cli model:generate --name Criterion --attributes name:string,maxScore:integer,weight:float
npx sequelize-cli model:generate --name Juror --attributes name:string,email:string
npx sequelize-cli model:generate --name Evaluation --attributes projectId:integer,criterionId:integer,jurorId:integer,score:integer,comment:string

npx sequelize-cli db:create
npx sequelize-cli db:migrate

npm start