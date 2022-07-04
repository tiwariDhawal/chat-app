import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/messaging";
const config = {
  apiKey: "AIzaSyCQPgZog03ChcIfP5tPm5myR4c6lcQhes0",
  authDomain: "chat-web-app-3213a.firebaseapp.com",
  databaseURL: "https://chat-web-app-3213a-default-rtdb.firebaseio.com",
  projectId: "chat-web-app-3213a",
  storageBucket: "chat-web-app-3213a.appspot.com",
  messagingSenderId: "972852695183",
  appId: "1:972852695183:web:9aa42d78bc58ab68e460fa",
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    "BIMVRsdbSGDnjXguje32w0COJBTDja2el94ratKEb85kLofh6svZMXFPva_l8oq-yIZPspgOCnKRmSIllz_flNI"
  );
  messaging.onMessage((data) => {
    console.log(data);
  });
}
