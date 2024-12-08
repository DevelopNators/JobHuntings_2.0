// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";
import PushNotificationService from "../utils/PushNotifications";
// import { getFirebaseOauthAccessToken } from "../services/notification-service";

const publicKey = import.meta.env.VITE_APP_VAPID_KEY;

const firebaseConfig = {
  apiKey: import.meta.env.VITE__APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE__APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE__APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE__APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE__APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE__APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE__APP_FIREBASE_MEASUREMENT_ID,
};

const app = firebase.initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const messaging = getMessaging(app);
export default app;

export const RequestForToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: publicKey,
    });
    if (currentToken) {
      console.log("current token for client: ", currentToken);
      const token = localStorage.getItem("fcm");
      localStorage.setItem("fcm", currentToken);
      if (currentToken) {
        PushNotificationService.subscribeTokenToTopic("jhunt");
      }
      return currentToken;
    } else {
      alert(
        "No registration token available. Request permission to generate one."
      );
      return "";
    }
  } catch (err) {
    console.log("An error occurred while retrieving token. ", err);
    throw err;
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });

// const client = await auth.getClient();
// debugger

export const firebaseaccessToken = "";
