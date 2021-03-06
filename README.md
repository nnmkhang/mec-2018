# quick-speech
![demo](https://raw.githubusercontent.com/le-michael/mec-2018/master/screenshots/hellodon.png?token=AMcEjC7uuPuQQMqOiF3rNGQNS5bIeo1dks5b1OocwA%3D%3D)


## About this application

This application was created for Don Loree for the MEC 2018 programming competition. It was built by @le-michael and @nnmkhang using React and various other node libraies. 

The purpose of this application is to provide an intuitive way for Don to communicate with his limited mobility. The code is designed to allow new phrases to be added and removed when requested.

## How to run the application

1. Clone the github repo to your computer.
2. cd into the ```quick-speech``` folder.
3. run ```npm install``` to get all the dependencies.
4. run ```npm start``` to launch the application.

After these steps are completed your default browser will launch the application at ```localhost:3000```.

## How to use the application

### Basic Use
After launching the application users can type in text and phrases using the on screen keyboard. Users will be able to navigate to different keyboards by tapping a keyboard name under the text area. 

### Adding/Removing custom phrases
Custom phrases can be added to any keyboard by going to the ```keyboard.jsx``` file and adding a phrase into the appropriate array. Removing is done by removing a string from the appropriate array.

### Making a new keyboard
Adding a new keyboard to the menu is done by going to the ```menu.jsx``` file and adding a new keyboard name to the options array.
To build a keyboard go to the ```keyboard.jsx``` file and create a new keyboard component. Follow the other keyboards for templating.

## How to use the logging service

### Launching the server
1. Make sure you have nodejs installed and navigate to the ```Other Client``` folder. 
2. run ```npm install``` to get all the dependincies.
3. run ```node server.js``` to launch the server.
4. The logging web page can now be found on ```localhost:5000```.

### How to connect on other devices

Find the ipv4 of the computer hosting the lobby service, and connect to the ipv4 at port ```5000```.

