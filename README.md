# Crossplattform-mobileApp
A hybrid mobile application made with Node , Ionic, Cordova and angular. 

## For norske : les dokumentasjonen. ## 

# About this application
This was from a school exam in agile project where kolonial.no was our target.
Our mission was to give this company a new idea or solution to their existing system. 
We were a group of 8 people who decided to make a webpage with an application similar to it in only 2 weeks. Our idea was the possibility to subscribe  to groceries. So we copied their current application and added some new functionalities.
 
I decided to try to take care of the mobile application on my own even though i had very little knowledge in 
hybrid applications. The app is not fully completed yet due to short period of developementtime, but i will hopefully 
be able to finish it soon.

Note: the classes are not the proper way of writing codes( i.e missing some property classes that could be used instead of repeating the same functions in different classses)    


# Install:

Before installing this you need an account in firebase and an Api key pasted inside src/env.ts   file 
looking like this

 var config = {

apiKey: "",

authDomain: "",

databaseURL: "",

projectId: "",

storageBucket: "",

messagingSenderId: ""

};


-To make this application work you need to install the the npm modules provided in the package.json file. 
 For this download and install node ( and include npm during installation)  https://nodejs.org/en/download/ .

-Download git bash and open the cli then navigate to the root of this cloned folder (until you see package.json file). 

-Then type 'npm install'  to install.

-If no error messages occurs then navigate to root of the application in a terminal and type 'ionic serve -l' to run application on     webbrowser. The webbrowser should  automatically open. (note: errors may occur from one comuper to another)



video presentation:  https://www.youtube.com/watch?v=16Qy9-NiYYM 
