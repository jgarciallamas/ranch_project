# jsforwordpress_bootcamp
JavaScript for Wordpress Bootacamp project Jan-March 2019

# Overview
Accesing to the Ranch Systems online database through its JSON web service interface. 

The RS web services implementation is RESTful, it uses simple HTTP requests like GET and POST, I’m going to focus on GET requests though so that I can fetch and show the required information.

## Fetch information using GET requests

1. Get all properties that a particular user is authorized to access:
```
https://app.ranchsystems.com/rsapp15/jsp?uname=jdoe&pword=qwerty&reqtype=props
```

2. Will return something like:

```
{  
   "props"    : [{"title":"Test Ranch 1","lasttime":1342565519000,"rsuname":"TRANCH1"},
                 {"title":"Test Ranch 2","lasttime":1342565519000,"rsuname":"TRANCH2"}],
   "lastprop" : "JCTEST",
   "auth"     : true
}
```

## Mandatory Parameters

uname --> User name
pword --> Password
reqtype --> Request type. This parameter specifies the request and further parameters may be required as per documentation below.

## Request type “props”

Retrieves properties to which user has access.
**No further parameters required.**

Returns a JSON object with the following members:

```
{  
   "props"    : [{"title":"Test Ranch 1","lasttime":1342565519000,"rsuname":"TRANCH1"},
                 {"title":"Test Ranch 2","lasttime":1342565519000,"rsuname":"TRANCH2"}],
   "lastprop" : "JCTEST",
   "auth"     : true
}
```

## Request type “propstat”

Retrieves status information about a particular property.

Requires the following additional URL parameters:

**prop --> ID of property**

Returns a JSON object with the following members:

```
{
result: "OK",
healthindex: 99,
auth: true,
datatime: "2019-03-21 23:01:04",
name: "Property Name",
servicelevel: 30,
location: ""
}
```

## Request type “rmsmap”

Retrieves a complete map (actually a tree) of all units and sensors in a property.
Requires the following additional URL parameters:

**prop --> ID of property for which to generate map of sensors.**

Returns a JSON object with the following members:

```
{
result: "OK",
lasttime: 1553206566000,
auth: true,
rsuname: "ESABADIA",
units: [],
title: "Property Name"
}
```

Each unit object has the following members:

```
{
result: "OK",
lasttime: 1553206566000,
auth: true,
rsuname: "ESABADIA",
units: [
{
  loc: "",
  rsuid: "20213",
  sensors: [
                {
                  last: {
                          msrmUnit: "°C",
                          time: "2019-03-21T23:00:00+01:00",
                          value: 4.381222248077393
                        },
                  actvalue: -100000000,
                  lt: 1553205600000,
                  sprt: 0,
                  lv: "4.4 °C",
                  isVisible: true,
                  rst: 21,
                  rsuid: "20213",
                  prt: 0,
                  depth: 0,
                  dsc: "Temperature",
                  icn: "temp.gif",
                  id: 176489
```

## Approach -- Pseudocode

My first approach would be using React, create-react-app behind the scene

1.	Request information of all the properties that a particular user is authorized to access, we would use the request type “props”.

2.	Show the name of the properties using a link for each name. This information would be displayed so that the user can click on any of the properties shown there.

3.	The client can click on a particular property and that should trigger another request to that particular property, we would use the request type “propstat”.

4.	The information we would fetch from the previous point would be displayed on the page where we would add a “More Info” button.

5.	A click on the “More Info” button would trigger another request, “rmsmap” request, where more information about that particular property would be displayed.
