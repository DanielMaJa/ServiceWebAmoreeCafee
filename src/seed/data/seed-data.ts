import * as bcrypt from 'bcrypt';
import { Categoria } from 'src/categorias/entities/categoria.entity';

interface SeedData {
    clientes: SeedCliente[];
    mesas: SeedMesa[];
    categorias: SeedCategoria[];
    productos: SeedProducto[];
    comprobantes: SeedComprobante[];

}

interface SeedCliente {
    nombre: string;
    apellidos: string;
    telefono: string;
    correo: string;
    password: string;
}

interface SeedMesa {
    nombre: string;
}

interface SeedCategoria {
    nombre: string;
}

interface SeedProducto {
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad: number;
    option: string;
    imagenUrl: string;
}

interface SeedComprobante {
    tipo: string;
    nro: string;
}
export const initialData: SeedData = {
    clientes: [
        {
            nombre: 'pedro',
            apellidos: 'sanchez',
            telefono: '999666888',
            correo: 'new@gmail.com',
            password: bcrypt.hashSync('12345abcde', 10)
        },
        {
            nombre: 'juan',
            apellidos: 'perez',
            telefono: '966333222',
            correo: 'UsEr_OnE02@gmail.com',
            password: bcrypt.hashSync('abcde12345', 10)
        },
        {
            nombre: 'antonella',
            apellidos: 'da silva',
            telefono: '977444555',
            correo: 'UsEr_OnE03@gmail.com',
            password: bcrypt.hashSync('fghij56789', 10)
        }
    ],
    mesas: [
        {
            nombre: 'mesaA1015'
        },
        {
            nombre: 'mesaB1233'
        },
        {
            nombre: 'mesaC1231'
        }
    ],
    categorias: [
        {
            nombre: 'desayunos',
            imagenUrl: 'desayunos.png'
        },
        {
            nombre: 'bebidas',
            imagenUrl: 'bebidas.png'
        },
        {
            nombre: 'postres',
            imagenUrl: 'postres.png'
        },
        {
            nombre: 'jugos',
            imagenUrl: 'jugos.png'
        }
    ],

    productos: [
        //DESAYUNOS
        {
            nombre: 'ensalada de frutas',
            descripcion: 'Ensalada de frutas que contiene arándanos, trozos de fresa, papaya, durazno y yogurt griego ',
            precio: 10,
            cantidad: 50,
            option: 'desayunos',
            imagenUrl: '475bc55a-9cd9-48b9-b039-e256b2256dbe.png'
        },
        {
            nombre: 'yogurt con cereales y frutas',
            descripcion: 'Yogurt con cereales naturales y frutillas que contiene trigo, arándanos, frambuesas y semillas de chia',
            precio: 12,
            cantidad: 20,
            option: 'desayunos',
            imagenUrl: '957af0c9-b364-4da4-b539-82f51ea0ca6f.png'
        },
        {
            nombre: 'royal egg',
            descripcion: 'Desayuno tradicional que contiene huevos fritos, 2 tostadas a la francesa, tiras de tocino frito y tomates cherry ',
            precio: 5,
            cantidad: 30,
            option: 'desayunos',
            imagenUrl: '9700041a-df9b-4f42-a1b9-4a506bbd59a4.png'
        },


        //BEBIDAS
        {
            nombre: 'café',
            descripcion: 'Café caliente de Oxapampa',
            precio: 10,
            cantidad: 50,
            option: 'bebidas',
            imagenUrl: 'eabaed87-86d3-4ad1-bce9-48fada10d2a0.png'
        },
        {
            nombre: 'frappuccinno',
            descripcion: 'Mezcla de hielo y café con otros ingredientes',
            precio: 12,
            cantidad: 20,
            option: 'bebidas',
            imagenUrl: 'a7079715-35ec-4b48-a655-4a00eda5036b.png'
        },
        {
            nombre: 'MILKSHAKE',
            descripcion: 'Batido elaborado a base de leche o helado con diferentes sabores(fresa, chocolate, vainilla)',
            precio: 5,
            cantidad: 30,
            option: 'bebidas',
            imagenUrl: 'c6e776ed-cbf4-44e5-8c28-202d3cbdbff9.png'
        },


        //JUGOS
        {
            nombre: 'NARANJA',
            descripcion: 'Jugo hecho a base de naranjas ',
            precio: 10,
            cantidad: 50,
            option: 'jugos',
            imagenUrl: '2b3667a0-872d-4b52-9fc5-5d2964212a7a.png'
        },
        {
            nombre: 'FRESA',
            descripcion: 'Jugo hecho a base de fresas',
            precio: 12,
            cantidad: 20,
            option: 'jugos',
            imagenUrl: 'b9c33e9f-ec4b-4bf5-b569-0e9acbcde774.png'
        },
        {
            nombre: 'PAPAYA',
            descripcion: 'Jugo hecho a base de papaya',
            precio: 5,
            cantidad: 30,
            option: 'jugos',
            imagenUrl: '2c6975fb-063b-4dee-bc4d-95375dd6474b.png'
        },


        //POSTRES
        {
            nombre: 'TORTA DE CHOCOLATE',
            descripcion: 'Torta de chocolate con canela y relleno de mermelada',
            precio: 10,
            cantidad: 50,
            option: 'postres',
            imagenUrl: 'f7cc444a-6243-43ae-a83d-a1de8d0353be.png'
        },
        {
            nombre: 'PIE DE LIMON',
            descripcion: 'Pie hecho a base de limon ',
            precio: 12,
            cantidad: 20,
            option: 'postres',
            imagenUrl: '70d1a7de-0b1d-4fca-8915-e2fca4ab9a4f.png'
        },
        {
            nombre: 'TARTALETA',
            descripcion: 'Tartaleta clasica con crema pastelera de relleno',
            precio: 5,
            cantidad: 30,
            option: 'postres',
            imagenUrl: '3cba39bb-8886-4281-b341-40d07c3cf7c3.png'
        },


    ], 
    comprobantes: [
        {
            tipo: 'factura',
            nro:  '987654321112'
        },
        {
            tipo: 'boleta',
            nro:  '987654321236'
        },
        {
            tipo: 'factura',
            nro:  '886654331237'
        }
    ],



}
