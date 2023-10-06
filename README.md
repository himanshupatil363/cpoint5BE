# Pre-requisites
- Install [Node.js](https://nodejs.org/en/)


# Getting started
- Clone the repository
```
git clone  https://github.com/himanshupatil363/cpoint5BE.git
```
- Install dependencies
```
cd cpoint5BE
npm install
```
- Build and run the project
```
npm start
```
  Server will start at `http://localhost:8001`
Two endpoints are
```
Type- GET
URL- http://localhost:3001/products
```
To get list of products in the inventory
```
Type- POST
URL- http://localhost:3001/products/add
BodyType- FormData
Payload- name, price, description, quantity, category, image
```
each key in FORMDATA is mandatory

