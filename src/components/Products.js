import React, { useEffect, useState } from "react";
import NavigationBar from "./Navbar";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";
import { Button, Row, Col, Form } from "react-bootstrap";
import "../App.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch products from json-server (only once on component mount)
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []); // Empty dependency array ensures this runs only once

  // Handle create product
  const handleCreate = () => {
    setCurrentProduct(null);
    setShowForm(true);
  };

  // Handle edit product
  const handleEdit = (product) => {
    setCurrentProduct(product);
    setShowForm(true);
  };

  // Handle delete product
  const handleDelete = (id) => {
    fetch(`http://localhost:4000/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete product");
        }
        // Update the products state after deletion
        setProducts(products.filter((product) => product.id !== id));
        window.alert("Product deleted successfully!"); // Success alert
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  // Handle form submit (Create or Update)
  const handleFormSubmit = (product) => {
    if (currentProduct) {
      // Update product
      fetch(`http://localhost:4000/products/${currentProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to update product");
          }
          return response.json();
        })
        .then((updatedProduct) => {
          // Update the state with the updated product
          setProducts(
            products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
          );
          setShowForm(false);
          alert("Product updated successfully!");
        })
        .catch((error) => console.error("Error updating product:", error));
    } else {
      // Create new product
       const newId = products.length > 0 ? Math.max(...products.map((p) => p.row)) + 1 : 1;

      const newProduct = { ...product,row:newId };

      fetch("http://localhost:4000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to create product");
          }
          return response.json();
        })
        .then((createdProduct) => {
          // Add the new product directly to the state
          setProducts([...products, createdProduct]);
          setShowForm(false);
          alert("Product added successfully!");
        })
        .catch((error) => console.error("Error creating product:", error));
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="d-flex justify-content-center align-items-center mb-4">
        <h1>Products</h1>
      </div>

      {/* Row to contain search and create product button */}
      <Row className="mb-4">
        {/* Search input aligned to the left */}
        <Col xs={12} md={6} className="d-flex justify-content-start">
  <Form.Control
    type="text"
    placeholder="Search by product name..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-75 search-input"
    style={{
      border: '2px solid green', // Add a green border
      borderRadius: '4px', // Optional: rounded corners
      padding: '8px', // Optional: adjust padding
    }}
  />
</Col>


        {/* Create product button aligned to the right */}
        <Col xs={12} md={5} className="d-flex justify-content-end">
          <Button variant="success" onClick={handleCreate} className="create-btn">
            <h4>Create Product</h4>
          </Button>
        </Col>
      </Row>

      {/* Product Table */}
      <ProductTable
        products={products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {showForm && (
        <ProductForm
          onSubmit={handleFormSubmit}
          onClose={() => setShowForm(false)}
          product={currentProduct}
        />
      )}
    </div>
  );
};

export default Products;
