# express / sequelize / postgres 

1. Run `express project-name` in terminal
2. cd into project and run `npm i`
3. Run `npm sequelize sequelize-cli pg pg-hstore`
4. At the root, touch `.sequelizerc` and paste:
```
const path = require('path);

module.exports = {
    "config": path.resolve('./config', 'config.json'),
    "models-path": path.resolve('./models),
    "seeders-path": path.resolve('./seeders'),
    "migrations-path": path.resolve('./migrations')
};
```
5. Run `sequelize init`
6. In psql shell, run `CREATE DATABASE database_name`
7. Run `GRANT ALL PRIVILEGES ON DATABASE node_sequelize TO username;`
8. Back in regular terminal, run `sequelize model:create --name [NAME OF MODEL] --attributes [ATTRIBUTE]:integer,[ANOTHER_ATTRIBUTE]:string` for each model
9. Make Associations in model files
10. Run `sequelize db:migrate`
11. Make requests in Postman
12. When checking DB, use DOUBLE QUOTES around relation name because of the mixed casing

SOURCE: https://www.djamware.com/post/5b56a6cc80aca707dd4f65a9/nodejs-expressjs-sequelizejs-and-postgresql-restful-api