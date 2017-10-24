# Only Local Food API

## Getting Started

### Setup
First clone this project:
```
git clone https://github.com/devontaylor0891/onlylocalfood-api.git
cd onlylocalfood-api
```
Then download all dependencies with
```
npm install
```

You should download postman too! It is an app that allows you to access API endpoints (formats the json nicely for you).

### Run the project locally
Terminal:
```
$ npm start
```
The api can be reached at [http://localhost:8081/api/](http://localhost:8081/api/).

### To deploy
You need to download and install Python and then add these to the SYSTEM variable path (not user variables)
`%USERPROFILE%\AppData\Roaming\Python\Python36\Scripts`
`%USERPROFILE%\AppData\Roaming\Python\Python36`

As well as download AWSCLI which is amazon web services command line.  I think there is an option to add it to the path variable so check that off. If not:
`C:\Program Files\Amazon\AWSCLI\`

Then try out
```
$ pip install --upgrade --user awsebcli
```
and see if you can access
```
$ eb --version
```

If you can then you can deploy by doing
```
$ git add .
$ git commit -m "I've changed something"
$ eb deploy
```
should be live at [http://onlylocalfood-api.a3jw4x3uey.us-west-2.elasticbeanstalk.com/api/](http://onlylocalfood-api.a3jw4x3uey.us-west-2.elasticbeanstalk.com/api/).


### Possible Endpoints

GET /users
POST /users
GET /users/{id}


GET /users/{id}/orders
GET /users/{id}/orders/{id}
POST /users/{id}/orders   BODY: array of products (object with id and qty)


GET /producers/{id}
PATCH /producers/{id}
GET /producers/{id}/products
POST /producers/{id}/products
GET /producers/{id}/products/{id}
GET /producers/{id}/products/{id}/old


GET /category


GET /products
GET /product/{id}



GET /producers/{id}/schedules
POST /producers/{id}/schedules
DELETE /producers/{id}/schedules/{id}
PATCH /producer/{id}/schedules/{id}


# TIPS AND TRICKS

### To upgrade AWS EB CLI

```$ pip install --upgrade --user awsebcli```

The --upgrade option tells pip to upgrade any requirements that are already installed. The --user option tells pip to install the program to a subdirectory of your user directory to avoid modifying libraries used by your operating sytem.