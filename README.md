 
### Blog app for Aloware

##### Getting Started
There are two applications here, backend and frontend

##### START FRONTEND
```shell
cd blog-frontend
npm install
npm run serve
```
(default address: localhost: 8000)
It may vary depending on the port status on your computer.


##### START BACKEND
###### Start The Backend with Docker

```shell
cd blog-backend
composer i
./vendor/bin/sail up
./vendor/bin/sail php artisan migrate
```

###### Start The Backend Manually

Create a database and enter its information in the .env file

<img width="182" alt="image" src="https://user-images.githubusercontent.com/57594143/167258016-b5adb53d-0ade-49d7-8605-e9ab1a0335a4.png">


```shell
cd blog-backend
php artisan serve
php artisan migrate
```

Screenshots

<img width="1422" alt="image" src="https://user-images.githubusercontent.com/57594143/167258061-31114486-0f42-4db2-a0de-aca1af734917.png">

------------

<img width="1424" alt="image" src="https://user-images.githubusercontent.com/57594143/167258129-f8e98137-acd9-47b6-8b98-3be6e7732fd5.png">

------------

<img width="1420" alt="image" src="https://user-images.githubusercontent.com/57594143/167258143-a5c1f718-7d07-44e9-88d4-4dbe57febd4b.png">

