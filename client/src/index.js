import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor }  from './redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';

import { ApolloClient, ApolloProvider, gql, InMemoryCache}
from "@apollo/client";


import './index.css';
import App from './App';
import { addItemToCart } from './cart.utils';
import { cartItemsVar } from './cache';
// import { resolvers } from './graphql/resolver';

// const httpLink = createHttpLink({
//   uri: 'https://crwn-clothing.com'
// });

export const typeDefs = gql`
  extend type Query {
    # isInCart: Boolean!
    cartItems: [CartItem]!
  }

  extend type CartItem {
    id: ID!
    name: String
    price: Float
    imageUrl: String
    quantity: Int!
  }

  # extend type Mutation {
  #   addOrRemoveFromCart(id: ID!): [Item]
  # }
`;


const cache = new InMemoryCache(
  {
  typePolicies: {
    Query: { 
      fields: {
        cartItems: {
          read() {
            return cartItemsVar();
          }
        }
      }
    }

  }
}
);

const persistFunction = async () => {
  await persistCache({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
  debug: true,
  maxSize: false
  })
}

persistFunction();



// const resolvers = 
//   {
//     addItemToCart: (_root, variables, { cache }) => {
//       cache.modify({
//         id: cache.identify({
//           __typename: 'CartItem',
//           id: variables.id,
//         }),
//         fields: {
//           quantity: value => value ++
//         },
//       });
//       return "Mutation Successful";
//     }
//   };


export const client = new ApolloClient({
  uri: 'https://crwn-clothing.com',
  cache, 
  fetchOptions: {
    mode: 'cors'
  },
  typeDefs,
  // Mutation: resolvers, 
  connectToDevTools: true
});

// client.writeQuery({
//   query: gql`
//     query WriteTodo($id: Int!) {
//       todo(id: $id) {
//         id
//         text
//         completed
//       }
//     }`,
//   data: { // Contains the data to write
//     todo: {
//       __typename: 'Todo',
//       id: 5,
//       text: 'Buy grapes 🍇',
//       completed: false
//     },
//   },
//   variables: {
//     id: 5
//   }
// });

ReactDOM.render(
  <ApolloProvider client={client}> 
    <Provider store={store}>
      <BrowserRouter>
        {/* <PersistGate persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,

  document.getElementById('root')
);
