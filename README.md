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

![image](https://user-images.githubusercontent.com/81822434/184667487-130714b4-6011-43e9-a553-ca588e302ef7.png)
> Options in sync method
![image](https://user-images.githubusercontent.com/81822434/184940641-6a3122df-5520-4773-99bc-a1d13ecdaf24.png)

![image](https://user-images.githubusercontent.com/81822434/185436439-47d227f4-10bb-4313-8b2d-2f6a775adfdc.png)

> Don't store encrypted password bc they are easily decrypted if someone has a hold of the key used to encrypt the password. So we must hash passwords bc they are irreversible. The only way to discover what the original password of a hash is by hashing passwords to see if you get the same hash. However there are rainbow tables that have a lot of hashes of common passwords so this way is not completely safe. So we must also add salt to our password. Salt is a randomly generated password that we append to our hash that makes it harder to decrypt.clea

![image](https://user-images.githubusercontent.com/81822434/187032351-164717f9-43ed-4488-b568-cfa55d9fede0.png)

> zlib package is used to add compressed functionality: make things smaller, compress things size.

![image](https://user-images.githubusercontent.com/81822434/187033656-0e66efc8-7a65-4844-8098-b8cdd75a3ee1.png)

![image](https://user-images.githubusercontent.com/81822434/187053145-0ac456f4-b079-4116-ac3a-a7d483d42484.png)

![image](https://user-images.githubusercontent.com/81822434/188166408-bcea70d9-e7e7-4691-b3bf-90533a8131d4.png)

![image](https://user-images.githubusercontent.com/81822434/188166470-d6595e65-7c2b-4da3-8cf2-ad3e78a29c08.png)

### Associations
![image](https://user-images.githubusercontent.com/81822434/190729782-71b4de29-876e-4e46-870e-86e1afd6ef5d.png)

![image](https://user-images.githubusercontent.com/81822434/190730612-28e2dbff-3551-42fb-aa0d-d4b3e73d48b9.png)

![image](https://user-images.githubusercontent.com/81822434/190731286-8d2b2a49-dd61-4bfc-beda-8ab250486e5e.png)

> Capital can not exist without a country
