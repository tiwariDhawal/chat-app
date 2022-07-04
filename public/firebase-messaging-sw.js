/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCQPgZog03ChcIfP5tPm5myR4c6lcQhes0",
  authDomain: "chat-web-app-3213a.firebaseapp.com",
  databaseURL: "https://chat-web-app-3213a-default-rtdb.firebaseio.com",
  projectId: "chat-web-app-3213a",
  storageBucket: "chat-web-app-3213a.appspot.com",
  messagingSenderId: "972852695183",
  appId: "1:972852695183:web:9aa42d78bc58ab68e460fa",
});

firebase.messaging();
