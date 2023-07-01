import React,{useState} from "react"

const Content = ({productImage,productName,productPrice,cartValue,setCartValue}) => {
  const [buttonText, setButtonText] = useState('Add to Cart');
  const handleClick = () => {
    if (buttonText === 'Add to Cart') {
      setCartValue(cartValue + 1);
      setButtonText('Remove from Cart');
    } else {
      setCartValue(cartValue - 1);
      setButtonText('Add to Cart');
    }
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={productImage} alt="..." />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{productName}</h5>
            {productPrice}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto"
              id="butFunction" onClick={handleClick}
            >
            {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
