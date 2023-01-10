# IP ADDRESS TRACKER
## Description
Welcome fellow developers, this is a web application coded in javascript with the use of two restful APIs. This app gives the geographical location of a public ip address. The two APIs used where [leaflet](https://leafletjs.com/ "leaflet") and [ipify](www.ipify.org/ "ipify"). This project was mainly to get some understanding about how to work with restful APIs with javascript. There are some problems i encountered while testing the app 
1. the app can't track local ip address of a device  
1. since it tracks only public ip addresses it makes the tracking not very accurate because it tends to locate the Relay antenna to which the user it connected
1. There is no way to acctually keep track of a device movement althrough a town, city or country
1. The public ip address may change depending on the user's location and how he/she is connected to the internet.

You can view/test the project live [HERE](https://dav-ip-address-tracker.netlify.app/ "ip address tracker") 