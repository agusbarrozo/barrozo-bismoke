import React from 'react';
import { Component, useEffect, useState } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';
import CartWidget from './CartWidget';

/* OBJETOS - ITEMS DEL CATALOGO
// funcion constructora
function productos(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

// los productos HOME
const home1 = new productos("Tray", 6000, 25);
const home2 = new productos("Ashtray", 7500, 25);
const home3 = new productos("Grinder", 4500, 25);

// los productos TRAVEL
const travel1 = new productos("Pouch", 2250, 25);
const travel2 = new productos("Capsule storage", 1800, 25);
const travel3 = new productos("4-Piece Grinder", 6000, 25);

// los productos EVERYDAY
const everyday1 = new productos("Keychain", 3000, 25);
const everyday2 = new productos("Infinity Card", 1500, 25);
const everyday3 = new productos("Rolling papers", 600, 25);
*/

const productos = [
    { id: 1, name: "Tray", price: 6000, stock: 25 },
    { id: 2, name: "Ashtray", price: 7500, stock: 25 },
    { id: 3, name: "Grinder", price: 4500, stock: 25 },
    { id: 4, name: "Pouch", price: 2250, stock: 25 },
    { id: 5, name: "Capsule Storage", price: 1800, stock: 25 },
    { id: 6, name: "4-Piece Grinder", price: 6000, stock: 25 },
    { id: 7, name: "Keychain", price: 3000, stock: 25 },
    { id: 8, name: "Infinity Card", price: 1500, stock: 25 },
    { id: 9, name: "Rolling Papers", price: 600, stock: 25 },
];

// asi se define una promesa. es cuando se hace una llamada a una conexion de base de datos. hay 3 posibles rtas
/*
const getFetch = new Promise((resolve, reject)=>{
    //aca van las tareas asincronicas
    resolve(productos) //si tiene el resolve es que se ejecuto bien
    //reject('404 not found') //con el reject es que no se pudo solucionar
    // si no tiene nada es PENDING

    // desafio de clase: ponerle delay de 3 segundos
    /*
    setTimeout(() => {
        alert('delay de 3 segundos');
    }, 3000);
    
}) 

/*
const Item = () => {
    const [product, setProduct] = useState([])

    console.log(getFetch)
    
    //asi se capturan las respuestas. en este ejemplo se guarda la respuesta del resolve de arriba
    getFetch
    .then(res => {
        console.log(res)
        setProduct(res)
    }, err => console.log(err)
    )
    
    //console.log(product)

    /*return(
    //map se puede usar solo con ARRAYS, no con objetos
        <div>
            { product.map((nombre) => <h3 key={nombre.id}> {nombre.name} </h3> ) }
        </div>
    )
}    
*/
const Item = (props) => {
        return (
            productos.map(prod=> 
            <CardGroup>
            <Card>
              <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5"> {prod.name} </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted"> ${prod.price} </CardSubtitle>
                <CardText>* Product #1 description *</CardText>
                <Button><CartWidget /></Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </CardGroup>

        
        
        ))
      }



export default Item 