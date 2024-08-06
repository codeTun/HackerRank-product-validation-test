import React, { useState } from "react";
import "./index.css";

function ProductValidation() {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  
  // Validation state
  const isProductNameValid = productName.trim() !== "";
  const isQuantityValid = quantity.trim() !== "";
  
  // Determine if submit button should be disabled
  const isSubmitDisabled = !isProductNameValid || !isQuantityValid;

  const handleNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="layout-column justify-contents-center align-items-center">
      <section className="card pa-50">
        <form className="layout-column" noValidate>
          <label>
            <input
              type="text"
              onChange={handleNameChange}
              data-testid="name-input"
              className={`white large outlined ${!isProductNameValid ? "error" : ""}`}
              placeholder="Product name"
              required
            />
            {!isProductNameValid && (
              <p className="error-text form-hint" data-testid="name-input-error">
                Product name is required
              </p>
            )}
          </label>
          <label>
            <input
              type="number"
              onChange={handleQuantityChange}
              data-testid="quantity-input"
              className={`white large outlined ${!isQuantityValid ? "error" : ""}`}
              placeholder="Quantity"
              required
            />
            {!isQuantityValid && (
              <p className="error-text form-hint" data-testid="quantity-input-error">
                Quantity is required
              </p>
            )}
          </label>
          <button className="mt-50" type="submit" data-testid="submit-button" disabled={isSubmitDisabled}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default ProductValidation;
