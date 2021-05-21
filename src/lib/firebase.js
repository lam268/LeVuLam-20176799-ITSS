import firebase from 'firebase';

  // Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey: "AIzaSyAuK_e9XOJdYvWGt7CMA8b3dMqV_fwFi-A",
  authDomain: "fir-sample-1c404.firebaseapp.com",
  projectId: "fir-sample-1c404",
  storageBucket: "fir-sample-1c404.appspot.com",
  messagingSenderId: "1026741329105",
  appId: "1:1026741329105:web:c940b50a82714182b479f0"
};
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todos").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
}; 