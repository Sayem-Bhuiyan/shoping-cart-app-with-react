import PropTypes from 'prop-types'

const SingleProduct = ({product, handleCart}) => {
    const {title, price, image, description} = product;
    return(
        <>
            <div>
            <div className="card">
              <img className='card-img' src={image} alt="" />
              <h3>{title.slice(0, 25)}</h3>
              <p>{description}</p>
              <div className="card-footer">
                <h3>{price}$</h3>
                <button onClick={() => handleCart(product)} className='add-btn'>Add To Cart</button>
              </div>
            </div>
            </div>
        </>
    )
};
SingleProduct.propTypes ={
    product: PropTypes.object,
    handleCart: PropTypes.func,
}
export default SingleProduct;