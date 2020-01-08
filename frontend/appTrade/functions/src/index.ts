import * as functions from 'firebase-functions';
//import { database, firestore } from 'firebase-admin';
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

 // Start writing Firebase Functions
 // https://firebase.google.com/docs/functions/typescript

 export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

 exports.simpleDbFunction = functions.database.ref('/path')
 .onCreate((snap, context) => {
   if (context.authType === 'ADMIN') {
     console.log("All done");
     
   } 
 });
