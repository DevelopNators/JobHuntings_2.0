import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { toast } from "react-toastify";
import { subscribeToTopics } from "../components/services/notification-service";
import { messaging } from "../firebase/firebase";
const apikey = import.meta.env.VITE_APP_VAPID_KEY;

const PushNotificationService = {
  async initialize() {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        const token = await getToken(messaging, {
          vapidKey: apikey,
        });
        console.log("Token generated : ", token);
      } else if (permission === "denied") {
        //notifications are blocked
        alert("You denied for the notification");
      }

      return token;
    } catch (error) {
      console.error("Error initializing notification service:", error);
      throw error;
    }
  },
  subscribeTokenToTopic(topic = null) {
    const token = localStorage.getItem("fcm");
    if (!token) {
      console.error("FCM token is not available");
      return;
    }

    if (!topic) {
      console.error("Topic name is required");
      return;
    }
    subscribeToTopics([topic])
      .then((response) => {
        console.log("Successfully subscribed to topic:", response);
      })
      .catch((error) => {
        console.log("Error subscribing to topic:", error);
      });
  },

  startListening(dispatch, decodedToken) {
    return onMessage(messaging, (payload) => {
      debugger
      alert(payload.notification.body)
      toast.success(payload.notification.body + "!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  },

  // onMessage(callback) {
  //   return messaging.onMessage((payload) => {
  //     console.log("Foreground message:", payload);
  //     if (callback) {
  //       callback(payload);
  //     }
  //   });
  // },
};

export default PushNotificationService;
