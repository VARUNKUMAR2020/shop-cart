import Content from "./Content";

const Product = ({cartValue,setCartValue}) => {

  const details = [
    {
      productImage: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70",
      productName: "iphone 14 ProMax",
      productPrice: "Rs.1,49,000",
    },
    {
      productImage: "https://rukminim1.flixcart.com/image/612/612/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70",
      productName: "One-Plus",
      productPrice: "Rs.69,000",
    },
    {
      productImage: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/z/q/n/m-67504501-puma-original-imaghu4uh2f5uyqw.jpeg?q=70",
      productName: "Puma T-Shirt",
      productPrice: "Rs.499",
    },
    {
      productImage: "https://rukminim1.flixcart.com/image/612/612/kjswia80/speaker/pa-speaker/c/t/y/zk-thuner-bolt-zoook-original-imafzaukzgnpv8k4.jpeg?q=70",
      productName: "Boat-Speaker",
      productPrice: "Rs.2999",
    },
    {
      productImage: "https://rukminim1.flixcart.com/image/416/416/k6fd47k0pkrrdj/speaker-refurbished/g/b/h/a-aavante-bar-1550-boat-original-imafk9gd9vmcgzxr.jpeg?q=70",
      productName: "JBL-Sound Bar",
      productPrice: "Rs.5000",
    },
    {
      productImage: "https://rukminim1.flixcart.com/image/416/416/l3bx5e80/television/0/w/q/-original-imageh37h34rehqf.jpeg?q=70",
      productName: "Sony 55 inch Television",
      productPrice: "2,69,999",
    },
    {
      productImage: "https://rukminim1.flixcart.com/image/416/416/ko0d6kw0/mixer-grinder-juicer/0/h/u/plus-butterfly-original-imag2kadbfjzzayj.jpeg?q=70",
      productName: "Preethi Mixer-Grinder",
      productPrice: "Rs.7,999",
    },
    {
      productImage: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/y/i/y/mphg3hn-a-thin-and-light-laptop-apple-original-imagmfhepavqyfyy.jpeg?q=70",
      productName: "Mac-Book",
      productPrice: "Rs.2,00,999",
    },
  ];

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {details.map((product) => (
                <Content
                  productImage={product.productImage}
                  productName={product.productName}
                  productPrice={product.productPrice}
                  cartValue={cartValue}
                  setCartValue={setCartValue}
      
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
