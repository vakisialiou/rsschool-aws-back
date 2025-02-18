```
├── backend
│ ├── authorization_service <- auth service repo  
│   ├── import_service <- import service repo
│   └── product_service <- product service repo
├── cart_service <- cart service repo
│   
├── nodejs-aws-cart-api
└── frontend <- frontend repo
```

### links
1. Backend https://ymul9o6xmk.execute-api.us-east-1.amazonaws.com
2. Frontend https://d33kpmbr2ru2km.cloudfront.net/
3. Frontend repository https://github.com/vakisialiou/rsschool-aws-front

### ROUTES
1. [GET /products](https://ymul9o6xmk.execute-api.us-east-1.amazonaws.com/products)
2. [GET /products/{productId}](https://ymul9o6xmk.execute-api.us-east-1.amazonaws.com/products/7567ec4b-b10c-48c5-9345-fc73c48a80aa)
3. [GET /available/products](https://ymul9o6xmk.execute-api.us-east-1.amazonaws.com/available/products)
4. [GET /carts](https://ymul9o6xmk.execute-api.us-east-1.amazonaws.com/carts)
5. [GET /orders](https://ymul9o6xmk.execute-api.us-east-1.amazonaws.com/orders)
6. [GET /orders/{orderId}](https://ymul9o6xmk.execute-api.us-east-1.amazonaws.com/orders/1)

### COMMANDS
`yarn product-service:deploy` - deploy

### Task 3.1
- [x] [getProductsList](https://ymul9o6xmk.execute-api.us-east-1.amazonaws.com/products)
- [x] [integrated with Frontend](https://d33kpmbr2ru2km.cloudfront.net)

### Task 3.2
- [x] [getProductsById](https://ymul9o6xmk.execute-api.us-east-1.amazonaws.com/products/7567ec4b-b10c-48c5-9345-fc73c48a80aa)

### Task 3.3
- Check directory product-service