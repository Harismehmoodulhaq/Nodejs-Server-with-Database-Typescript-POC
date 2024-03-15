# Here we are going to make a POC of postgreSQL with sequelize

## Step 1 :
* With NPM <br>
<code>npm install pg pg-hstore sequelize</code>

* With YARN <br>
<code>yarn add pg pg-hstore sequelize</code> 

## Step 2 :
Then make a folder in your root <b>_sequelize_</b> <br>
Then go into the _sequelize_ folder and run this command <br>
<code>npx sequelize-cli init</code> <br>
After this you can see this type of folder stracture in sequelize folder <br>

```bash
├── sequelize
│   ├── config
│   │   ├── config.json
│   ├── migrations
│   │   ├── {empty}
│   ├── model
│   │   ├── index.js
│   ├── seeders
│   │   ├── {empty}
```
Now change the <code>config.json</code> into <code>config.js</code>

And after this you can copy my this file and set the config as your db username and password and dbname <br>

```js
module.exports = {
  development: {
    username: 'username',
    password: 'password',
    database: 'db_name',
    host: '0.0.0.0' //Your Database Host like localhost,
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'admin123',
    database: 'learning_sequelize',
    host: '0.0.0.0',
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  }
}
```

## Step 3 :
Run this command <br>
```bash
npx sequelize-cli model:generate --name User --attributes id:number,first_name:string,last_name:string,email:string
```

This command is using the Sequelize CLI (`sequelize-cli`) to generate a Sequelize model file for a "User" entity with specified attributes. Let's break down the command:

- `npx`: This is a package runner tool that comes with npm 5.2.0 and higher. It is used to execute packages from the npm registry without needing to install them globally.

- `sequelize-cli`: This is the command-line interface for Sequelize, a promise-based Node.js ORM (Object-Relational Mapping) for SQL databases.

- `model:generate`: This is a subcommand of `sequelize-cli` used to generate Sequelize model files.

- `--name User`: This option specifies the name of the model being generated. In this case, the model will be named "User".

- `--attributes id:number,first_name:string,last_name:string,email:string`: This option specifies the attributes of the model and their data types. Each attribute is specified in the format `attribute_name:data_type`. In this example:
  - `id:number`: It specifies that there is an attribute named "id" of type "number". This is typically used as the primary key.
  - `first_name:string`: It specifies an attribute named "first_name" of type "string".
  - `last_name:string`: It specifies an attribute named "last_name" of type "string".
  - `email:string`: It specifies an attribute named "email" of type "string".

So, overall, this command generates a Sequelize model file named "User" with attributes for an entity representing a user with an id, first name, last name, and email.

