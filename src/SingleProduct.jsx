import PropTypes from 'prop-types'

const SingleProduct = ({product}) => {
    console.log(product)
    const {title, price, image, description, category} = product;
    return(
        <>
            <div>
            <div className="card">
              <img className='card-img' src={image} alt="" />
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="card-footer">
                <h3>{price}$</h3>
                <button className='add-btn'>Add To Cart</button>
              </div>
            </div>
            </div>
        </>
    )
};
SingleProduct.propTypes ={
    product: PropTypes.object,
}
export default SingleProduct;