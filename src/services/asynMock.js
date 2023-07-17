
export default function getData() {
    return new Promise((resolve, reject) => {

        const productos = [
            {
                title: "Pasta de Ramen",
                id: 1,
                stock: 10,
                description: "Pasta de ramen japonesa para preparar deliciosos platos.",
                img: '../../images/items/fideos-ramen.jpg',
                price: 150,
            },
            {
                title: "Salsa de Soya",
                id: 2,
                stock: 15,
                description: "Salsa de soya tradicional japonesa para dar sabor a tus platos.",
                img: "../../images/items/salsa-soya.jpg",
                price: 50,
            },
            {
                title: "Wasabi",
                id: 3,
                stock: 8,
                description: "Wasabi auténtico para acompañar sushi y sashimi.",
                img: "../../images/items/wasabi.jpg",
                price: 80,
            },
            {
                title: "Fideos Udon",
                id: 4,
                stock: 12,
                description: "Fideos udon japoneses para disfrutar en sopas y platos calientes.",
                img: "../../images/items/udon.JPG",
                price: 120,
            },
            {
                title: "Sushi Kit",
                id: 5,
                stock: 5,
                description: "Kit para hacer sushi en casa, incluye ingredientes básicos y herramientas.",
                img: "../../images/items/kit-sushi.jpg",
                price: 200,
            },
            {
                title: "Té Verde Matcha",
                id: 6,
                stock: 20,
                description: "Té verde en polvo utilizado en la tradicional ceremonia del té japonés.",
                img: "../../images/items/te-verde.jpg",
                price: 100,
            },
            {
                title: "Sésamo Goma",
                id: 7,
                stock: 18,
                description: "Sésamo goma tostado para espolvorear en platos japoneses.",
                img: "../../images/items/sesamo-goma.jpg",
                price: 70,
            },
            {
                title: "Tempura Mix",
                id: 8,
                stock: 10,
                description: "Mezcla para hacer tempura crujiente y ligero.",
                img: "../../images/items/tempura-mix.JPG",
                price: 90,
            },
            {
                title: "Mirin",
                id: 9,
                stock: 6,
                description: "Vino dulce de arroz utilizado en la cocina japonesa para dar sabor.",
                img: "../../images/items/mirin.jpg",
                price: 60,
            },
            {
                title: "Sake",
                id: 10,
                stock: 15,
                description: "Sake japonés, bebida alcohólica tradicional de arroz.",
                img: "../../images/items/sake.jpg",
                price: 250,
            },
            {
                title: "Soba",
                id: 11,
                stock: 9,
                description: "Fideos soba de trigo sarraceno utilizados en platos fríos y calientes.",
                img: "../../images/items/soba.jpg",
                price: 110,
            },
            {
                title: "Gyoza",
                id: 12,
                stock: 7,
                description: "Empanadillas de carne y verduras para freír al estilo japonés.",
                img: "../../images/items/gyoza.jpg",
                price: 130,
            },
        ];

        // funcion que simula el retraso 
        setTimeout(() => {
            const date = new Date().toLocaleDateString;
            resolve(productos, date);},2000);

    })// promise
}





















