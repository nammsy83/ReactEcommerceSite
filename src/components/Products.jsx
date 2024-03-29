import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ProductConsumer } from '../context';


class Products extends Component {
    render() {
        const { id, img, title, inCart, price } = this.props.product;

        return (
            <ProductWrapper className="col-lg-3 col-md-6 mx-auto col-9 my-3">
                <div className="card">
                    <ProductConsumer>
                        {value => (
                            <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                                <Link to="/ReactEcommerceSite/details">
                                    <img src={img} alt="product" className="card-img-top" />
                                </Link>
                                <button className="cart-btn"
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        value.addtoCart(id);
                                        value.openModal(id);

                                    }
                                    }>
                                    {
                                        inCart ? <p className="text-capitalize mb-0" disabled>In Cart</p> : <i className="fas fa-cart-plus"></i>
                                    }

                                </button>

                            </div>
                        )}

                    </ProductConsumer>

                </div>
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">{title}</p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">$</span>
                        {price}
                    </h5>
                </div>
            </ProductWrapper >
        )
    }
}

Products.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired


}

const ProductWrapper = styled.div`
    .card{
        border-color: transparent;
        transition: all 1s linear;
    }
    .card-footer{
        background: transparent;
        border-top: transparent;
        transition: all 1s linear;

    }
    &:hover{
        .card{
            border: .04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer{
            background: rgba(247, 247, 247);
        }
    }
    .img-container{
        position: relative;
        overflow: hidden;
    }
    .card-img-top{
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top{
        transform:scale(1.2)
    }
    .cart-btn{
        position: absolute;
        bottom: 0;
        right:0;
        padding: .2rem .4rem;
        background: var(--lightBlue);
        border: none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: .5rem 0 0 0;
        transform: translate(100%,100%);
        transition: all .5s linear;

    }
    .img-container:hover .cart-btn{
        transform:translate(0,0)
    }
    .cart-btn:hover{
        color: var(--mainblue);
        cursor:pointer;
    }
`

export default Products;