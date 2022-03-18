import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import { Nav, Navbar, Container, Row, Col, Button, Image, Carousel, Offcanvas, Dropdown, ButtonGroup } from "react-bootstrap"
import instagram from "./assets/img/instagram.png";
import facebook from "./assets/img/facebook.png";
import tripadvisor from "./assets/img/tripadvisor.png";
import whatsapp from "./assets/img/whatsapp.png";
import quiriLogo from "./assets/img/quiriLogo.png";
import quiriLogoSmall from "./assets/img/quiriLogoSmall.png";
import quiriAmodSFundo from "./assets/img/quiriAmodSFundo.png";
import quiriSalad from "./assets/img/quiriSalad.png";
import quiriRocket from "./assets/img/quiriRocket.png";
import quiriCheddar from "./assets/img/quiriCheddar.png";
import quiriBacon from "./assets/img/quiriBacon.png";
import quiriBatata from "./assets/img/quiriBatata.png";
import quiriLoja from "./assets/img/quiriLoja.jpeg";
import quiriRestaurantLounge01 from "./assets/img/quiriRestaurantLounge01.jpeg";
import quiriRestaurantLounge02 from "./assets/img/quiriRestaurantLounge02.jpeg";
import quiriRestaurantLounge03 from "./assets/img/quiriRestaurantLounge03.jpeg";
import quiriRestaurantLounge04 from "./assets/img/quiriRestaurantLounge04.jpeg";
import quiriRestaurantLounge05 from "./assets/img/quiriRestaurantLounge05.jpeg";
import closeBurgerSalad from "./assets/img/closeBurgerSalad.png"
import leaf from "./assets/img/leaf.png"
import { BsWhatsapp } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [countItem, setCountItem] = useState(0);
  const [countValue, setCountValue] = useState([]);
  const [totalValue, setTotalValue] = useState();


  function ShopCart(nomeDoBurger, valorDoBurger) {

    if (countItem === 0) {
      toast(`Você tem 1 item no seu carrinho`);
    } else {
      toast(`Você tem ${countItem + 1} itens no seu carrinho`);
    }

    setCountItem(countItem + 1)

    let sumBurger = [nomeDoBurger, valorDoBurger]
    let newValue = [...countValue, sumBurger]

    setCountValue(newValue)
    sumCart(newValue)
  }

  function sumCart(newValue) {

    let startValue = newValue
    let mapValue = startValue.map((item) =>
      item[1]
    )
    const result = mapValue.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;

    }, 0);

    setTotalValue(result)
  }

  function redirectToWhasapp() {

    const mapValue = countValue.map((item, index) => {

      return index = "%0a%0a" + item
    }
    )

    window.location.href = `https://wa.me/5562982459389?text=Olá,%20quero%20pedir%20um%20Quiri!${mapValue} %0a%0a*Total ${totalValue.toFixed(2)}*`
  }

  function removeItemFromCart(index) {

    let newArray = countValue
    let newCount = countItem

    const removeItemFromArray = newArray.splice(index, 1)

    setCountValue([...newArray])
    sumCart(newArray)
    setCountItem(newCount - 1)
  }

  function emptyShopCart(index) {

    let emptyArray = countValue
    let emptyCount = countItem

    const emptyShopCartArray = emptyArray.splice(0)

    setCountValue([...emptyArray])
    setCountItem(emptyCount - countItem)
  }

  function hasTouch() {
    return 'ontouchstart' in document.documentElement
      || navigator.maxTouchPoints > 0
      || navigator.msMaxTouchPoints > 0;
  }

  if (hasTouch()) {
    try {
      for (var si in document.styleSheets) {
        var styleSheet = document.styleSheets[si];
        if (!styleSheet.rules) continue;

        for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
          if (!styleSheet.rules[ri].selectorText) continue;

          if (styleSheet.rules[ri].selectorText.match(':hover')) {
            styleSheet.deleteRule(ri);
          }
        }
      }
    } catch (ex) { }
  }



  return (
    <div id='home' style={{ overflowX: 'hidden' }}>
      <Row>
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
        <Navbar
          fixed="top"
          bg="light"
          expand={false}
        >
          <Container fluid>
            <Navbar.Brand className="navFlex">
              <div>
                <Image src={quiriLogoSmall} alt="logo" className="navLogo" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle className="btnShopCartSize navFlex">
              <FiShoppingCart style={{ marginRight: '0.3rem' }} />
              <div>
                {countValue == ''
                  ? <p>
                    R$ 0.00
                  </p>
                  : <p>

                    <span> R$ {totalValue.toFixed(2)} </span>

                  </p>
                }
              </div>
            </Navbar.Toggle>
            <div className="navFlex">
              <Image src={quiriAmodSFundo} alt="Amod" className="navOwner" />
            </div>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              scroll='true'
              closeOnClick
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel" />
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="ms-auto">
                  <Nav.Link >
                    <Row md={12}>
                      <div>
                        {!totalValue ?
                          <div className="shopCartList" style={{ textAlign: 'center' }}>
                            <p>Carrinho Vazio</p>
                          </div>
                          :
                          <div>
                            {countValue.map((item, index) => {
                              return (
                                <div key={index} className="shopCartList">
                                  <Row>
                                    <Col xs={6} md={6}>
                                      <p>
                                        <span> {item[0]} </span>
                                      </p>
                                    </Col>

                                    <Col xs={{ span: '2', offset: '3' }} md={{ span: '2', offset: '3' }}>
                                      <p>
                                        <span> {item[1].toFixed(2)} </span>
                                      </p>
                                    </Col>
                                    <Col xs={1} md={1}>
                                      <GrFormClose
                                        style={{ backgroundColor: 'rgb(255, 202, 202)', borderRadius: '1rem', marginBottom: '0.2rem' }}
                                        onClick={() => removeItemFromCart(index)}
                                      />
                                    </Col>
                                  </Row>
                                </div>
                              )
                            })
                            }
                          </div>
                        }
                      </div>
                    </Row>
                    <Dropdown.Divider />
                    <Row className="shopCartList">
                      <Col xs={12} md={12}>
                        {countValue == ''
                          ? <p style={{ marginBottom: '1rem', marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                            Total R$ 0.00
                          </p>
                          : <p style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                            <span
                              style={{ marginBottom: '1rem', marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}
                            >
                              Total R$ {totalValue.toFixed(2)}
                            </span>
                            <Row>
                              <Col xs={12} md={6}>
                                <button
                                  grow
                                  className="cartBtn"
                                  onClick={() => emptyShopCart()}
                                >
                                  <BsWhatsapp
                                    className="cardWhatsappIcon"
                                    style={{ marginBottom: '0.3rem', marginRight: '0.3rem' }}
                                  />
                                  limpar carrinho
                                </button>
                              </Col>
                              <Col xs={12} md={6}>
                                <button
                                  grow
                                  className="cartBtn"
                                  onClick={() => redirectToWhasapp()}
                                >
                                  <BsWhatsapp
                                    className="cardWhatsappIcon"
                                    style={{ marginBottom: '0.3rem', marginRight: '0.3rem' }}
                                  />
                                  fechar pedido
                                </button>
                              </Col>
                            </Row>
                          </p>
                        }
                      </Col>
                    </Row>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Row>
      <Carousel
        prevLabel=''
        nextLabel=''
        style={{ display: 'flex', backgroundColor: 'black', marginTop: '1rem' }}
        interval='5000'
      >
        <Carousel.Item className="carouselImage1">
          <Carousel.Caption>
            O GIGANTE Quiri Salad
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carouselImage2">
          <Carousel.Caption>
            Nosso saboroso burger de grão de bico, lentilha e especiarias
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <p className="menuTitle">
        Nossos Quiris
      </p>
      <Container fluid style={{ backgroundColor: 'rgb(255, 195, 154)' }}>
        <p className="menuDescription">
          Monte seu pedido e clique no carrinho para finalizar.
        </p>

        <Row className="menuCardRow">
          <Col sm={12} md={6} lg={6} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="menuCardStyle">
              <div className="cardImageBox">
                <img
                  src={quiriSalad}
                  className="cardProductImage"
                  alt="Foto do produto"
                />
              </div>
              <h2 className="cardProductTitle">
                Quiri Salad
              </h2>
              <h6 className="cardProductDescription">
                Burger de carne, mussarela, alface, tomate, picles, barbecue e molho especial.
              </h6>
              <ButtonGroup className="shopCartBtnCenter">
                <button className="cardShopCartBtnGroup" onClick={() => ShopCart('Salad', 28)}>
                  Sandúiche R$28
                </button>
                <button className="cardShopCartBtnGroup" onClick={() => ShopCart('Salad Combo', 38)}>
                  Combo R$38
                </button>
              </ButtonGroup>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="menuCardStyle">
              <div className="cardImageBox">
                <img
                  src={quiriRocket}
                  className="cardProductImage"
                  alt="Foto do produto"
                />
              </div>
              <h2 className="cardProductTitle">
                Quiri Rocket
              </h2>
              <h6 className="cardProductDescription">
                Burger de carne, mussarela, rúcula, tomate, barbecue e honey mustard.
              </h6>
              <ButtonGroup className="shopCartBtnCenter">
                <button className="cardShopCartBtnGroup" onClick={() => ShopCart('Rocket', 30)}>
                  Sandúiche R$30
                </button>
                <button className="cardShopCartBtnGroup" onClick={() => ShopCart('Rocket Combo', 40)}>
                  Combo R$40
                </button>
              </ButtonGroup>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="menuCardStyle">
              <div className="cardImageBox">
                <img
                  src={quiriCheddar}
                  className="cardProductImage"
                  alt="Foto do produto"
                />
              </div>
              <h2 className="cardProductTitle">
                Quiri Cheddar
              </h2>
              <h6 className="cardProductDescription">
                Burger de carne, cheddar, barbecue e cebola caramelizada.
              </h6>
              <ButtonGroup className="shopCartBtnCenter">
                <button className="cardShopCartBtnGroup" onClick={() => ShopCart('Cheddar', 27)}>
                  Sandúiche R$27
                </button>
                <button className="cardShopCartBtnGroup" onClick={() => ShopCart('Cheddar Combo', 37)}>
                  Combo R$37
                </button>
              </ButtonGroup>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="menuCardStyle">
              <div className="cardImageBox">
                <img
                  src={quiriBacon}
                  className="cardProductImage"
                  alt="Foto do produto"
                />
              </div>
              <h2 className="cardProductTitle">
                Quiri Bacon
              </h2>
              <h6 className="cardProductDescription">
                Burger de carne, cheddar, bacon, cebola grelhada, barbecue e picles.
              </h6>
              <ButtonGroup className="shopCartBtnCenter">
                <button className="cardShopCartBtnGroup" onClick={() => ShopCart('Bacon', 30)}>
                  Sandúiche R$30
                </button>
                <button className="cardShopCartBtnGroup" onClick={() => ShopCart('Bacon Combo', 40)}>
                  Combo R$40
                </button>
              </ButtonGroup>
            </div>
          </Col>
        </Row>
        <Row className="menuCardRow">
          <Col sm={12} md={6} lg={6} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="menuCardStyle">
              <div className="cardImageBox">
                <img
                  src={quiriSalad}
                  className="cardProductImage"
                  alt="Foto do produto"
                />
              </div>
              <h2 className="cardProductTitle">
                Kiridis
              </h2>
              <h6 className="cardProductDescription">
                Burger de carne 'P', mussarela, cheddar e ketchup.
              </h6>
              <ButtonGroup className="shopCartBtnCenter">
                <button className="cardShopCartBtnGroup" onClick={() => ShopCart('Kiridis', 15)}>
                  Sandúiche R$15
                </button>
                <button className="cardShopCartBtnGroup" onClick={() => ShopCart('Kiridis Combo', 25)}>
                  Combo R$25
                </button>
              </ButtonGroup>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="menuCardStyle">
              <div className="cardImageBox">
                <img
                  src={quiriSalad}
                  className="cardProductImage"
                  alt="Foto do produto"
                />
              </div>
              <h2 className="cardProductTitle">
                Franguito
              </h2>
              <h6 className="cardProductDescription">
                Filé de frango empanado, alface, cebola roxa, barbecue e maionese.
              </h6>
              <ButtonGroup className="shopCartBtnCenter">
                <button className="cardShopCartBtnGroup" onClick={() => ShopCart('Franguito', 27)}>
                  Sandúiche R$27
                </button>
                <button className="cardShopCartBtnGroup" onClick={() => ShopCart('Franguito Combo', 37)}>
                  Combo R$37
                </button>
              </ButtonGroup>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="menuCardStyle">
              <div className="cardImageBox">
                <img
                  src={quiriSalad}
                  className="cardProductImage"
                  alt="Foto do produto"
                />
              </div>
              <h2 className="cardProductTitle">
                Quiri Taki
              </h2>
              <h6 className="cardProductDescription">
                Burger vegê, mussarela, mix de cogumelos, mix de folhas, barbecue e molho especial.
              </h6>
              <h6 style={{ color: 'green', display: 'flex', justifyContent: 'center' }}>
                opção vegetariana
              </h6>
              <ButtonGroup className="shopCartBtnCenter">
                <button className="cardShopCartBtnGroup" onClick={() => ShopCart('Taki', 26)}>
                  Sandúiche R$26
                </button>
                <button className="cardShopCartBtnGroup" onClick={() => ShopCart('Taki Combo', 36)}>
                  Combo R$36
                </button>
              </ButtonGroup>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="menuCardStyle">
              <div className="cardImageBox">
                <img
                  src={quiriBatata}
                  className="cardProductImagePotato"
                  alt="Foto do produto"
                />
              </div>
              <h2 className="cardProductTitle">
                Quiri Fritas
              </h2>
              <h6 className="cardProductDescription">
                100g de fritas temperadas.
              </h6>
              <h6 style={{ color: 'green', display: 'flex', justifyContent: 'center' }}>
                opção vegetariana
              </h6>
              <button className="cardShopCartBtnSingle" onClick={() => ShopCart('Fritas', 8)}>
                porção R$8
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <Row className="parallax">
        <Col className="parallaxLogo">
          <Image src={quiriLogo} alt="logo" className="parallaxLogo" />
        </Col>
      </Row>
      <Row md={12} className="sectionMargin1">
        <Col md={6} >
          <Image src={quiriRestaurantLounge01} alt="Restaurant Lounge Photo" className="restaurantLoungeImg" />
        </Col>
        <Col md={6} >
          <Image src={quiriRestaurantLounge05} alt="Restaurant Lounge Photo" className="restaurantLoungeImg" />
        </Col>
      </Row>
      <Row md={12} className="sectionMargin1">
        <Col md={6} className="restaurantText">
          <h1> What is Lorem Ipsum? </h1>
          <h8>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h8>
        </Col>
        <Col md={6} >
          <Image src={quiriRestaurantLounge04} alt="Restaurant Lounge Photo" className="restaurantLoungeImg" />
        </Col>
      </Row>
      <Row className="footerBgColor">
        <Col md={12} className="logoLayout">
          <Image src={quiriLogoSmall} alt="logo" />
        </Col>
        <Col md={12} className="logoLayout">
          <a href="https://www.instagram.com/quiriquiriburger/" target="blank">
            <img className="socialMediaLogo" src={instagram} alt="Instagram Logo" />
          </a>
          <a href="https://www.facebook.com/quiriquiriburger" target="blank">
            <img className="socialMediaLogo" src={facebook} alt="Facebook Logo" />
          </a>
          <a href="https://www.tripadvisor.com/Restaurant_Review-g2159104-d8068069-Reviews-Quiri_Quiri_Gourmet_Burger-Alto_Paraiso_de_Goias_Chapada_dos_Veadeiros_National_.html" target="blank">
            <img className="socialMediaLogo" src={tripadvisor} alt="TripAdvisor Logo" />
          </a>
          <a href="https://wa.me/5562982459389?text=Olá,%20quero%20pedir%20um%20Quiri!" target="blank">
            <img className="socialMediaLogo" src={whatsapp} alt="Whatsapp Logo" />
          </a>
        </Col>
        <p className="footerTextLayout">
          Quiri Quiri Premium Burgers
        </p>
      </Row>
    </div>
  );
}

export default App;
