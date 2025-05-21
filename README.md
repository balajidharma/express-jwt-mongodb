# Express JWT Authentication Example with Mongodb

## Installtion

```bash
docker compose build

# if any permission error means try sudo

sudo docker compose build
```

Start the container

```bash
docker compose up -d
```

## Create Database and User

We will create a database and a user using the MongoDB shell (mongosh).
```bash
docker compose exec -it mongo mongosh "mongodb://root:password@mongo:27017/admin?authSource=admin"
```

There is no “create” command in the MongoDB Shell. To create a database, just run the use command.

```bash
use jwt-auth
```

Then run the below command to create the user for the jwt-auth database.

```bash
db.createUser({
   user: "user",
   pwd: passwordPrompt(),
   roles: [{ role: "readWrite", db: "jwt-auth" }]
})
```

## Add .env

```bash
MONGO_URI = mongodb://user:password@mongo:27017/jwt-auth
JWT_SECRET = your_jwt_secret
PORT = 3000
```