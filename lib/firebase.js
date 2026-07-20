// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDqf4HdoP9EocfZLjKUhXHh7-nddWW2uXg",
  authDomain: "limited-edittion.firebaseapp.com",
  projectId: "limited-edittion",
  storageBucket: "limited-edittion.firebasestorage.app",
  messagingSenderId: "836001119137",
  appId: "1:836001119137:web:cd08c89dca42982b3d29e0",
  measurementId: "G-KEDBNT2FZL"
};

// التأكد من عدم عمل initialize أكتر من مرة في Next.js
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// تشغيل الـ Analytics لو المتصفح بيدعمه
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((yes) => yes && (analytics = getAnalytics(app)));
}

export { app, analytics };
