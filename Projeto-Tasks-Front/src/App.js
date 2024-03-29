import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Posts from './Posts';

const client = new ApolloClient({
  uri: "http://site-teste.local/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Posts />
      </div>
    </ApolloProvider>
  );
}

export default App;
