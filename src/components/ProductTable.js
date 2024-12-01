import React, { memo, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa"; // Font Awesome Icons

const ProductTable = ({ products, onEdit, onDelete }) => {
  const [searchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null }); // For sorting

  // Handle sorting
  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });
  };

  // Get filtered and sorted products
  const filteredAndSortedProducts = () => {
    let filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortConfig.key) {
      filteredProducts.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filteredProducts;
  };

  // Render sorting icons
  const renderSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? <FaSortUp /> : <FaSortDown />;
    }
    return <FaSort />;
  };

  return (
    <div >
      

      {/* Product Table */}
      <Table striped bordered hover className="text-center align-middle">
        <thead>
          <tr>
            <th onClick={() => handleSort("row")}>


              ID {renderSortIcon("row")}
            </th>
            <th onClick={() => handleSort("name")}>
              Name {renderSortIcon("name")}
            </th>
            <th onClick={() => handleSort("brand")}>
              Brand {renderSortIcon("brand")}
            </th>
            <th onClick={() => handleSort("category")}>
              Category {renderSortIcon("category")}
            </th>
            <th onClick={() => handleSort("price")}>
              Price {renderSortIcon("price")}
            </th>
            <th>Image</th>
            <th onClick={() => handleSort("creationDate")}>
              Created At {renderSortIcon("creationDate")}
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedProducts().map((product) => (
            <tr key={product.id}>
              <td>{product.row}</td>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  width="100"
                  height="100"
                  style={{ objectFit: "contain" }}
                />
              </td>
              <td>{product.creationDate}</td>
              <td>
                <Button variant="success" onClick={() => onEdit(product)}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="ms-2"
                  onClick={() => onDelete(product.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default memo(ProductTable);
