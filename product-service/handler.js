const products = [
  {
    description: "Short Product Description1",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    price: 24,
    title: "ProductOne",
  },
  {
    description: "Short Product Description7",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    price: 15,
    title: "ProductTitle",
  },
  {
    description: "Short Product Description2",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    price: 23,
    title: "Product",
  },
  {
    description: "Short Product Description4",
    id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    price: 15,
    title: "ProductTest",
  },
  {
    description: "Short Product Descriptio1",
    id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    price: 23,
    title: "Product2",
  },
  {
    description: "Short Product Description7",
    id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    price: 15,
    title: "ProductName",
  },
]

const availableProducts = products.map((product, index) => {
  return { ...product, count: index + 1 }
})

const carts = [
  {
    product: {
      description: "Short Product Description1",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
      price: 24,
      title: "ProductOne",
    },
    count: 2,
  },
  {
    product: {
      description: "Short Product Description7",
      id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
      price: 15,
      title: "ProductName",
    },
    count: 5,
  },
];

const orders = [
  {
    id: "1",
    address: {
      address: "some address",
      firstName: "Name",
      lastName: "Surname",
      comment: "",
    },
    items: [
      { productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 2 },
      { productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1", count: 5 },
    ],
    statusHistory: [
      { status: 'OPEN', timestamp: Date.now(), comment: "New order" },
    ],
  },
  {
    id: "2",
    address: {
      address: "another address",
      firstName: "John",
      lastName: "Doe",
      comment: "Ship fast!",
    },
    items: [{ productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 3 }],
    statusHistory: [
      {
        status: 'SENT',
        timestamp: Date.now(),
        comment: "Fancy order",
      },
    ],
  },
];

exports.getCartsList = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(carts)
  }
}

exports.getOrdersList = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(orders)
  }
}

exports.getOrdersById = async ({ pathParameters }) => {
  if (!('productId' in pathParameters)) {
    return { statusCode: 400 }
  }

  const { orderId } = pathParameters

  const order = products.find(({ id }) => {
    return id === orderId
  })

  if (!order) {
    return { statusCode: 404 }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(order)
  }
}

exports.getProductsList = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(products)
  }
}

exports.getAvailableProductsList = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(availableProducts)
  }
}

exports.getProductsById = async ({ pathParameters }) => {
  if (!('productId' in pathParameters)) {
    return { statusCode: 400 }
  }

  const { productId } = pathParameters

  const product = products.find(({ id }) => {
    return id === productId
  })

  if (!product) {
    return { statusCode: 404 }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(product)
  }
}
