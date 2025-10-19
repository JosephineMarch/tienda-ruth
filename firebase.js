
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU9pop79uF1o86SWQBqmEcZGy_TqjHHyU",
  authDomain: "appcrea2.firebaseapp.com",
  projectId: "appcrea2",
  storageBucket: "appcrea2.firebasestorage.app",
  messagingSenderId: "29240386891",
  appId: "1:29240386891:web:5c1129e068e28ae2f774ce",
  measurementId: "G-MKH024DS21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- Funciones de Interacción con Firestore ---

window.saveDataToFirebase = async function(data) {
    try {
        const docRef = doc(db, "bodega", "datos");
        await setDoc(docRef, data);
        console.log("Datos guardados en Firebase.");
    } catch (error) {
        console.error("Error al guardar datos en Firebase:", error);
        alert("Error al guardar los datos en la nube. Revisa la consola para más detalles.");
    }
};

window.loadDataFromFirebase = async function() {
    try {
        const docRef = doc(db, "bodega", "datos");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Datos cargados desde Firebase.");
            return docSnap.data();
        } else {
            console.log("No se encontraron datos en Firebase. Se usarán los datos locales si existen.");
            return null;
        }
    } catch (error) {
        console.error("Error al cargar datos desde Firebase:", error);
        alert("Error al cargar los datos desde la nube. Se trabajará con datos locales. Revisa la consola para más detalles.");
        return null;
    }
}
