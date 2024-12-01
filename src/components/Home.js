import React from 'react';
import { Button } from 'react-bootstrap'; // To use the Bootstrap Button component
import { useNavigate } from 'react-router-dom'; // To navigate between pages
import NavigationBar from "./Navbar";
const latestProducts = [
  {
    id: 1,
    name: 'lays',
    image: 'https://tse3.mm.bing.net/th?id=OIP.x8W6RJryhiaswkoBAhzuCgHaHa&pid=Api&P=0&h=180', 
  },
  {
    id: 2,
    name: 'Good day',
    image: 'https://tse3.mm.bing.net/th?id=OIP.eou_GM3FsfDGJYpR0u3NAQHaHa&pid=Api&P=0&h=180',
  },
  {
    id: 3,
    name: 'Peach',
    image: 'https://tse3.mm.bing.net/th?id=OIP.2XvmogCPxclFRaxeAe3f1AHaHa&pid=Api&P=0&h=180',
  },
  {
    id: 4,
    name: 'Onion',
    image: 'https://tse3.mm.bing.net/th?id=OIP.fyc8KbhhKksfo3p0W6blvAHaEt&pid=Api&P=0&h=180', 
  },
  {
    id: 5,
    name: 'Beetroot',
    image: 'https://tse2.mm.bing.net/th?id=OIP.orTWDkgY0-FFuGP1J8P6oQHaHa&pid=Api&P=0&h=180', 
  },
  {
    id: 6,
    name: 'Grapes',
    image: 'https://tse3.mm.bing.net/th?id=OIP.mhEQxYzDIWGxiMAmqGtlYgHaEo&pid=Api&P=0&h=180', 
  },
  {
    id: 7,
    name: 'Gulab jamun',
    image: 'https://tse2.mm.bing.net/th?id=OIP.KaEucM9OPPb6c9iYVar5UgHaJZ&pid=Api&P=0&h=180', 
  },
  {
    id: 8,
    name: 'Kurkure',
    image: 'https://tse4.mm.bing.net/th?id=OIP.eTT3w24Pb9S-JKIIw85AewHaKE&pid=Api&P=0&h=180', 
  },
];

export default function Home() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/Products');
  };

  return (
    <div>
      <NavigationBar />
      <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '20px',
  justifyItems: 'center',
  width: '90%',
  margin: '20px auto',
}}>
  {latestProducts.map((product) => (
    <div
      key={product.id}
      style={{
        width: '200px',
        background: '#fff',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
      <h4 style={{ marginTop: '10px', color: '#333' }}>{product.name}</h4>
    </div>
  ))}
</div>

        <Button
          variant="success"
          onClick={handleExploreClick}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: '30px',
            marginTop: '20px',
            backgroundColor: '#df9de0',
            borderColor: '#b16db3',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: '0.3s ease-in-out',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#df9de0')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#b16db3')}
        >
          View All Products
        </Button>
      </div>
    
  );
}