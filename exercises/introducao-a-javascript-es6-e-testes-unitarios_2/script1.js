const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const theOrder = order;

  console.log(`Olá ${theOrder.order.delivery.deliveryPerson}, entrega para: ${theOrder.name}, Telefone: ${theOrder.phoneNumber}, ${theOrder.address.street}, Nº: ${theOrder.address.number}, AP: ${theOrder.address.apartment}.`)
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const theOrder = order;

  theOrder.name = 'Luiz Silva';
  theOrder.order.pizza = {muzzarela: {amount: 1, price: 20,}, calabresa: {amount: 1, price: 20,}};

  console.log(`Olá ${theOrder.name}, o total do seu pedido de ${Object.keys(theOrder.order.pizza)} e ${theOrder.order.drinks.coke.type} é de R$ ${theOrder.order.pizza.muzzarela.price + theOrder.order.pizza.calabresa.price + theOrder.order.drinks.coke.price}.`)
}

orderModifier(order);

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.
// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.