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

![image](https://user-images.githubusercontent.com/81822434/190820220-34ede687-9ca3-4b89-8340-2fc23dca3ce4.png)


![image](https://user-images.githubusercontent.com/81822434/190732469-2eb4468d-1e63-4c16-a17e-d581a98930c3.png)

![image](https://user-images.githubusercontent.com/81822434/190801267-41cc2777-8901-43a5-9342-f8b2fe749b71.png)

![image](https://user-images.githubusercontent.com/81822434/190801475-b414f6ff-0251-4a74-9272-000536ffe9db.png)


> Capital can not exist without a country

![image](https://user-images.githubusercontent.com/81822434/190828832-b3552c60-3c26-445f-a4a2-cbd9a882fe08.png)

![image](https://user-images.githubusercontent.com/81822434/190829264-4b220ca9-966d-47f0-a3e0-46901beba9b1.png)

![image](https://user-images.githubusercontent.com/81822434/190829409-01bf64d1-cad3-4970-b76e-214dec28f70c.png)

![image](https://user-images.githubusercontent.com/81822434/190829427-6fe32e82-8f43-41bf-86cc-b6ea09eb951b.png)

### We must add belongs to as well as has one so that we can  be able to use utility methods on both country and capital

![image](https://user-images.githubusercontent.com/81822434/190829829-8472932d-3c72-4eda-a79b-ca3b96673bfe.png)

### If we delete a coutry from country table, we can use onDelete to delete all capitals related to this country from capital table -> bc it is one to one, only one row in child table(capital) gets deleted.

### We can also use onUpdate -> if the primary key is updated the corresponding value in child table will be updated as well.

> Note that foreign keys in child table must be unique bc it is a one to one relation.

![image](https://user-images.githubusercontent.com/81822434/190831927-b8c55206-01c6-4eee-a708-60cf2a36b515.png)

![image](https://user-images.githubusercontent.com/81822434/190832040-61b56ae3-89e7-4883-ab18-b91b07081a01.png)

![image](https://user-images.githubusercontent.com/81822434/190855518-8d1b1a2b-538b-4344-9ada-d4d88a722fbf.png)


### One to many:
![image](https://user-images.githubusercontent.com/81822434/190855566-5a53ba25-bf71-48b8-b86d-2e318d750e69.png)

![image](https://user-images.githubusercontent.com/81822434/190855597-2ad26149-dc43-44c9-aa52-ee97938f64d8.png)

![image](https://user-images.githubusercontent.com/81822434/190856386-ee0702b9-b33a-4747-be43-f56923e08325.png)

![image](https://user-images.githubusercontent.com/81822434/190856433-f26160a7-9601-4a0b-ba77-8e1db06dc103.png)

![image](https://user-images.githubusercontent.com/81822434/190856522-bbb1217b-0b71-4ef7-890e-47c385fa5123.png)

![image](https://user-images.githubusercontent.com/81822434/190856730-39218975-2855-4ea8-91ec-8fe351cc2087.png)


## Many to many:

![image](https://user-images.githubusercontent.com/81822434/190856821-4f2976b3-3bbc-4916-8251-7b099b505717.png)

![image](https://user-images.githubusercontent.com/81822434/190856844-bc82eb9d-a660-44c2-b6a3-ddd82a3e0e6c.png)

> In many to many we need to pass 'through' to tell that we want a junction table called 'customerproduct'

![image](https://user-images.githubusercontent.com/81822434/190857032-c7896c39-61cf-4a88-ba87-62737dd60284.png)


> You can even create the junction model yourself.


![image](https://user-images.githubusercontent.com/81822434/190882549-3a08dfee-9ada-463b-902b-93ab319fa839.png)


![image](https://user-images.githubusercontent.com/81822434/190882532-79725fa6-46c0-447b-a749-a4a1ccd8803a.png)
