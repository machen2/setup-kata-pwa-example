This repo is a partial solution to the kata listed here: https://github.com/aclifton-pillar/reactjs-setup-kata
and turned into a passing progressive web app.

#### ReactJS as a Progressive Web App (what does it mean?  what is a definition for done that an app is truly PWA?)

Progressive web apps give users an engaging, native-like experience from the web. You can install the web application on your device just like a native mobile app. It allows you to use the app offline by caching data from your last interaction. 

#### Benefits:
* Service workers → make site more reliable, make your app available offline
* Can use push notifications
* Can save the webapp to your device’s home screen like a native mobile app
* Faster on your device than a regular mobile website
* Can prompt user to add the app to their device’s home screen. If the user adds it to their home screen and then goes to the mobile site, the app will 
open instead.

#### Checklist: (definition of done would be fulfilling this checklist!)
https://developers.google.com/web/progressive-web-apps/checklist

You can check how close your webapp is to being a PWA by → right click in Chrome → inspect → click audits tab → run the audit. Alternatively, you can add the Lighthouse Chrome extension, click on the Lighthouse icon in the top right of your screen, and hit ‘generate report’.

#### Example of a PWA:
A good example of a progressive web app is Pinterest. If you go to pinterest.com on your mobile device, then a prompt stating ‘Add Pinterest to Home screen’ will appear on the website. When you click on the prompt and hit add, Pinterest will now be added to your list of apps on your phone. If you put your phone in offline mode, then you can still open Pinterest up.


#### Steps to make the setup kata a passing PWA:
With the latest Create React App, the “production build is a fully functional, offline-first Progressive Web App.” More info + tutorial here:
https://medium.com/@saigeleslie/how-to-create-a-progressive-web-app-with-react-in-5-mins-or-less-3aae3fe98902 

Note: a lot of tutorials out there have you creating a manifest and your service worker from scratch. However, these were more recently built in with Create React App.

* In src/index.js, replace ```serviceWorker.unregister();``` with ```serviceWorker.register();```

* In your public directory, I added a png file that I can use for icons on my splash screen and add to home screen prompt. Then, I updated the icons in public/manifest.json to the following: 

```
"icons": [
    {
      "src": "icon-192x192.png",
      "sizes": "192x192 512x512",  
      "type": "image/png"
    }
  ]
```

* I updated the src with the name of the png file I added (for me it was a react icon I 
found off the web), updated the sizes to the above as my lighthouse audit suggested, 
and updated the type to image/png.

    * At this point, I have a lighthouse score of 92% PWA.

*  After doing all of this, the only failure is that HTTP does not redirect to HTTPS. 
https://developers.google.com/web/tools/lighthouse/audits/http-redirects-to-https 
You should deploy your app to get this failure passing. So for this example, I created a new firebase 
project in the firebase console (firebase.google.com). Then, I went to my project. Make 
sure you have firebase tools ```yarn global add firebase-tools``` and you login into firebase 
from your terminal ```firebase login```. Then I did ```firebase init``` and followed the following 
(also outlined in the tutorial link above):

	* Choose hosting as the CLI feature
	
    * Select your newly created project. (Mine wasn’t listed, so I said create new. Then, in my terminal I did ```firebase use --add``` and selected my project from there.)

	* Then you can ```firebase deploy```. You will get the address of the firebase hosting url. If 
you go to that link and run the lighthouse audit again. You should be at 100% PWA 
score!

* Now you can open the hosting url on your mobile phone. You should see a prompt to 
add it to your home screen. Click it to add. Now, your pwa should be in your list of apps 
on your phone and you can open it. Try turning off your wifi/data, and you should be able 
to open your app still.
