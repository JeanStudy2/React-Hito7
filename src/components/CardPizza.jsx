import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


let CardPizza = ({pizza}) =>{

    const {agregarCarrito} = useContext(CartContext)

    return (
        <>
           <Card className='card-content mx-auto h-100'>
                <Card.Img variant="top" src={pizza.img} />
                <Card.Body>
                    <h2>{pizza.name}</h2>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <p className='text-center'>Ingredientes:</p>
                        <ul>{(pizza.ingredients).map(i =>(
                            <li key={i}>{i}</li>
                        ))
                        }</ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2 className='text-center'>Precio: ${pizza.price}</h2>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body className='d-flex justify-content-evenly'>
                    <Button variant="light">Ver Mas 👀</Button>
                    <Button variant="dark" onClick={() => agregarCarrito(pizza)} >Añadir 🛒</Button>
                </Card.Body>
            </Card> 
        </>
    )
}

export default CardPizza