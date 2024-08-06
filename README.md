# Product Validation

## Environment

- **React Version**: 18.2.0
- **Node Version**: v18 (LTS)
- **Default Port**: 8000

## Application Demo

![](https://hrcdn.net/s3_pub/istreet-assets/MPf0G1ka7KOzHYWPq_Q81A/product-validation.gif)

## Functionality Requirements

The component should perform the following validations for a product form:

- **Product Name Input**:

  - Required field.
  - Error Message: `Product name is required` should be shown in `<p data-testid="name-input-error"></p>` only when the field is not valid.

- **Quantity Input**:

  - Required field.
  - Error Message: `Quantity is required` should be shown in `<p data-testid="quantity-input-error"></p>` only when the field is not valid.

- **Submit Button**:

  - Disabled when fields are invalid.
  - Initially disabled, enabled only when all fields are valid and touched.

- **CSS for Validation**:
  - When validation fails, add the class `error` to inputs for visual feedback (not required for tests).

## Testing Requirements

Ensure the following `data-testid` attributes are used in the component:

- **Product Name Input**: `name-input`
- **Quantity Input**: `quantity-input`
- **Submit Button**: `submit-button`
- **Error Message Containers**:
  - For Product Name: `name-input-error`
  - For Quantity: `quantity-input-error`

## Project Specifications

**Read-Only Files**

- `src/App.test.js`

**Commands**

- **Run**:
  ```bash
  npm start
  ```

© 2024 Iheb Elazheri. All rights reserved.
