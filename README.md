# Projects managament

![Logo](https://github.com/gugafromMARS/fullstack-project/assets/116969206/ec7a4a4b-179b-4719-9ee0-be227c78a0ed)

Welcome, this is my first fullstack project with Java in microservices for backend and React for frontend, the theme of the project is a project management and create tasks for each project.
Summary for usage:
Create a user account, create projects and create tasks for each project.

## Architecture

![ArchitectureImg](https://github.com/gugafromMARS/fullstack-project/assets/116969206/f16ef9df-6bac-420e-be6c-eef0421160ff)


## Technology

Here are some technologys used on this project.

* Java version 17
* React

## Services

Services used.

* Github
  
## Getting started

1- Create docker containers for both microservices in backend (run on therminal):

1.1- Users database container
```shell script
docker run -d -p 3306:3306 --name usersdb  -v $(pwd)/usersdata:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=usersdb mysql:latest
```
1.2- Projects and Tasks database container
```shell script
docker run -d -p 3307:3306 --name projectsdb  -v $(pwd)/projectsdata:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=projectsdb mysql:latest
```
2- Run backend microservices(on backend project folder)

2.1- Users microservice

2.2- Projects and Tasks microservice

3- Run on therminal
```shell script
npm install
npm run dev
```


## App functionalitys

Summary of api possibilities in all microservices.

### Users Service
* **Create User**
![Img5](https://github.com/gugafromMARS/fullstack-project/assets/116969206/9a62a6d3-712f-4b08-864c-8c6cdc7ed226)
* **Get User credentials**
![Img1](https://github.com/gugafromMARS/fullstack-project/assets/116969206/f23c0bae-36a6-4901-8d8f-e3a40a78db93)

### Project and tasks service
* **Create Project**
  ![Img6](https://github.com/gugafromMARS/fullstack-project/assets/116969206/4beb3973-02c3-45f9-9a61-21fd160b659d)
  ![Img2](https://github.com/gugafromMARS/fullstack-project/assets/116969206/096056a0-4f62-4b02-a98b-689b9d263c88)
* **Delete Project**
  ![Img3](https://github.com/gugafromMARS/fullstack-project/assets/116969206/6927c2e9-5066-48e3-9d46-f110ddabf2eb)
* **Create Tasks**
  ![Img7](https://github.com/gugafromMARS/fullstack-project/assets/116969206/79f4ef96-bbed-4ca2-8f35-d7f1b6d3c78b)
  ![Img4](https://github.com/gugafromMARS/fullstack-project/assets/116969206/8a63ad26-8d9e-4716-a651-1bd37c8cc9c9)
* **Delete Tasks**

![Img5](https://github.com/gugafromMARS/fullstack-project/assets/116969206/ec5788c1-5d04-4a1f-89f1-3b6263e3d8fb)


## Authors

**gugafromMars**

[Github-gugafromMars](https://github.com/gugafromMARS)

Thanks to visiting and happy coding!
