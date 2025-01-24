import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

// เข้าถึงฐานข้อมูล Firestore
const db = getFirestore();

// ฟังก์ชันเพิ่มข้อมูลลง Firestore
async function saveData() {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: "นักศึกษา",
            email: "student@example.com",
            createdAt: new Date()
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// เรียกใช้งานฟังก์ชัน
saveData();
