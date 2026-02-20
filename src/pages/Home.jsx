import React from "react";
import { Link } from "react-router-dom";
import Products from "../data/products.json";
import testimonials from "../data/testimonials.json";

// Components (already converted to Tailwind)
import Carousel from "../components/Carousel";
import TestimonialCard from "../components/Testimonials";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="text-center py-12 px-4">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Welcome to E-Shop 🛒
      </h1>

      {/* Hero Section */}
      <section className="py-12 bg-base-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-4">Welcome to Our Store</h2>
          <p className="text-lg opacity-90 mb-6">
            Discover amazing products at unbeatable prices
          </p>
          <Link to="/products">
            <button className="btn btn-primary">Shop Now</button>
          </Link>
        </div>
      </section>

      {/* Carousel */}
      <div className="my-12">
        <Carousel />
      </div>

      {/* Promotional Banner */}
      <section className="py-8 bg-accent text-accent-content">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-2">Summer Sale Up to 50% Off</h3>
          <p className="mb-4">Limited time offer. Don't miss out!</p>
          <Link to="/products">
            <button className="btn btn-secondary">Shop Sale</button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimony) => (
              <TestimonialCard key={testimony.id} testimony={testimony} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Button */}
      <div className="mt-8">
        <Link to="/products">
          <button className="btn btn-primary btn-lg">Start Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
// const getAllProducts=async()=>{
//     try{
//         const response= await axios.get('https://fakestoreapi.com/products')
//         setAllProducts(response.data);
//     }catch(error){
//         console.log(error);
//     }
// }
//   useEffect(() => {
//     getAllProducts();
//   }, []);
//     return (
//         <div className="text-center py-5 ">
//         <Carousel/>
//         <h1 className="display-4 mb-4">Welcome to E-Shop 🛒</h1>
//         <div className="row">
//         {allProducts.map((product)=>(
//             <div key={product.id} className="col-md-3 mb-4">
//         <div className="card h-100 p-2 text-center shadow">
//           <img
//             src={product.image}
//             alt={product.title}
//             style={{ height: '150px', objectFit: 'contain' }}
//           />
//           <p className="mt-2 fw-bold">{product.title}</p>
//           <p>${product.price}</p>
//         </div>
//       </div>
//         ))
//         };
//         </div>

//         <button className="btn btn-primary btn-lg mt-3">
//             Start Shopping
//         </button>
//     </div>
// );
