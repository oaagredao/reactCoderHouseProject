// firestore
import { collection, getDocs, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {  query, where } from "firebase/firestore";
import {  addDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyC9uEQa5HCx8XuC_GZmCLjGFtvUeAka9dQ",
  authDomain: "reactcoderhouse-1c36a.firebaseapp.com",
  projectId: "reactcoderhouse-1c36a",
  storageBucket: "reactcoderhouse-1c36a.appspot.com",
  messagingSenderId: "765915431478",
  appId: "1:765915431478:web:c153d1fd5c5f22c1a6ce97",
  measurementId: "G-7XMP0JZN4P",
};

const appFireBase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFireBase);

const db = getFirestore(appFireBase);

/* funciones a reemplazar: getProductCategory getProductData getData
 */

async function getData() {
  // el profe lo trabaja con async await
  const documentsSnapshot = await getDocs(collection(db, "Products"));
  const documents = documentsSnapshot.docs;
  const documentosBaseDatos = documents.map((item) => {
    const productFullData = item.data();
    productFullData.id = item.id;
    return productFullData;
  });
  return documentosBaseDatos;
}

async function getProductData(id) {
  const docRef = doc(db, "Products", id);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No se encuentra ese producto");
  }
}

async function getProductCategory(categoryId) {
  const q = query(
    collection(db, "Products"),
    where("categoryId", "==", categoryId)
  );

  const documentsSnapshot = await getDocs(q);
  const documents = documentsSnapshot.docs;
  const documentosBaseDatos = documents.map((item) => {
    const productFullData = item.data();
    productFullData.id = item.id;
    return productFullData;
  });
  return documentosBaseDatos;
}


/// crear orden de compra

async function createOrder(orderData){
  // referencia a la coleccion
  const collectionRef=collection(db,'orders');

  const docCreated= await addDoc(collectionRef,orderData);
  return (docCreated.id);

}

// funcion para subir los datos del mock al database

async function exportProducts(){
  const productos = [
    {
      title: "Pasta de Ramen",
      id: 1,
      stock: 10,
      description: "Pasta de ramen japonesa para preparar deliciosos platos.",
      img: "../items/fideos-ramen.jpg",
      price: 150,
      categoryId: "fideos",
    },
    {
      title: "Salsa de Soya",
      id: 2,
      stock: 15,
      description:
        "Salsa de soya tradicional japonesa para dar sabor a tus platos.",
      img: "../items/salsa-soya.jpg",
      price: 50,
      categoryId: "aderezos",
    },
    {
      title: "Wasabi",
      id: 3,
      stock: 8,
      description: "Wasabi auténtico para acompañar sushi y sashimi.",
      img: "../items/wasabi.jpg",
      price: 80,
      categoryId: "aderezos",
    },
    {
      title: "Fideos Udon",
      id: 4,
      stock: 12,
      description:
        "Fideos udon japoneses para disfrutar en sopas y platos calientes.",
      img: "../items/udon.JPG",
      price: 120,
      categoryId: "fideos",
    },
    {
      title: "Sushi Kit",
      id: 5,
      stock: 5,
      description:
        "Kit para hacer sushi en casa, incluye ingredientes básicos y herramientas.",
      img: "../items/kit-sushi.jpg",
      price: 200,
      categoryId: "otros",
    },
    {
      title: "Té Verde Matcha",
      id: 6,
      stock: 20,
      description:
        "Té verde en polvo utilizado en la tradicional ceremonia del té japonés.",
      img: "../items/te-verde.jpg",
      price: 100,
      categoryId: "otros",
    },
    {
      title: "Sésamo Goma",
      id: 7,
      stock: 18,
      description:
        "Sésamo goma tostado para espolvorear en platos japoneses.",
      img: "../items/sesamo-goma.jpg",
      price: 70,
      categoryId: "otros",
    },
    {
      title: "Tempura Mix",
      id: 8,
      stock: 10,
      description: "Mezcla para hacer tempura crujiente y ligero.",
      img: "../items/tempura-mix.JPG",
      price: 90,
      categoryId: "aderezos",
    },
    {
      title: "Mirin",
      id: 9,
      stock: 6,
      description:
        "Vino dulce de arroz utilizado en la cocina japonesa para dar sabor.",
      img: "../items/mirin.jpg",
      price: 60,
      categoryId: "aderezos",
    },
    {
      title: "Sake",
      id: 10,
      stock: 15,
      description: "Sake japonés, bebida alcohólica tradicional de arroz.",
      img: "../items/sake.jpg",
      price: 250,
      categoryId: "otros",
    },
    {
      title: "Soba",
      id: 11,
      stock: 9,
      description:
        "Fideos soba de trigo sarraceno utilizados en platos fríos y calientes.",
      img: "../items/soba.jpg",
      price: 110,
      categoryId: "fideos",
    },
    {
      title: "Gyoza",
      id: 12,
      stock: 7,
      description:
        "Empanadillas de carne y verduras para freír al estilo japonés.",
      img: "../items/gyoza.jpg",
      price: 130,
      categoryId: "otros",
    }
  ];

  for (let item of productos){
    const collectionRef=collection(db,"Products");
    const docCreated=await addDoc(collectionRef,item);
    console.log("Doc created woth id: ", docCreated.id); 
  }
}

export { getData, getProductData, getProductCategory, createOrder, exportProducts  };
