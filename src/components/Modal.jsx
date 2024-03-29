import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import ButtonContainer from './Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Modal extends Component {
    render() {
        return (

            <ProductConsumer>
                {
                    (value) => {
                        const { modalOpen, closeModal } = value;
                        const { img, title, price } = value.modalProduct;

                        if (!modalOpen) {
                            return null;
                        } else {
                            return (
                                <ModalContainer>
                                    <div className="container">
                                        <div className="row">
                                            <div id="modal">
                                                <div className="col-8 mx-auto col-md-6 text-center text-capitalize">
                                                    <h5>
                                                        Item added to the cart
                                            </h5>
                                                    <img src={img} alt="product" className="img-fluid" />
                                                    <h5>{title}</h5>
                                                    <h5 className="text-muted">price: ${price}</h5>
                                                    <Link to="/ReactEcommerceSite/home">
                                                        <ButtonContainer onClick={() => closeModal()}>
                                                            Store
                                                    </ButtonContainer>
                                                    </Link>
                                                    <Link to="/ReactEcommerceSite/cart">
                                                        <ButtonContainer onClick={() => closeModal()}>
                                                            Go to Cart
                                                    </ButtonContainer>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ModalContainer>
                            )
                        }
                    }
                }
            </ProductConsumer>

        )
    }
}
export default Modal;


const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    

    #modal{
        background:var(--mainWhite);
           position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    }

`