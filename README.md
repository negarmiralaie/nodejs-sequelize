# sequelize

![photo_2022-08-15_17-06-39](https://user-images.githubusercontent.com/81822434/184636125-18f57215-4f9e-4475-836b-587fbe961e85.jpg)

> Sequelize supports many database engines including MySQL, PostgreSQL, SQLite, Microsoft SQL Server, and MariahDB.

> Sequelize is an ORM(Object Relational Mapper).
> ORM is a technique that allows you query and manipulate data from a database in an object-oriented way. For example, you can represent a table as an object in sequelize and use that object's methods to interact with tha table.

> Sequelize is a module so we must install it:
```bash
npm install sequelize
```
> Since sequelize supports different databases, we must install the appropriate driver for our desired database. Driver for postgres is pg and for mysql is mysql. So we are going to install mysql2.
```bash 
npm install mysql2
```

> A schema = database