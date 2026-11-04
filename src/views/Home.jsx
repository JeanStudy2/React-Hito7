import CardPizza from "../components/CardPizza"
import Header from "../components/Header"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from "react";
import { useEffect } from "react";
import NavBar from "../components/Navbar";
import { CartContext } from "../contexts/CartContext";


let Home = () =>{

    let {pizzas, setPizzas} = useContext(CartContext)

    useEffect(() =>{

        	const getproduct = async() =>{
          const res = await fetch('http://localhost:5000/api/pizzas')     
          const data = await res.json()
          setPizzas(data)                   
	        }

  	      getproduct()

    },[])

    return (
        <>
          <NavBar/>
          <Header/>
          <main className="my-4">
            <Container>
              <Row className="gy-3">
                {pizzas.map((pizza) => (
                  <Col md={6} lg={4} key={pizza.id} >
                    <CardPizza pizza={pizza}/>
                </Col>
                  ))}
              </Row>
            </Container>
          </main>
        </>
    )
}

export default Home