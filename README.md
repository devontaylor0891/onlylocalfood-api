# Only Local Food API

## Getting Started

### Setup
First clone this project:
```
git clone git@github.com:devontaylor0891/onlylocalfood-api.git
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
should be live at [http://onlylocalfoods-api.39mpginjms.us-west-2.elasticbeanstalk.com/api/](http://onlylocalfoods-api.39mpginjms.us-west-2.elasticbeanstalk.com/api/).
