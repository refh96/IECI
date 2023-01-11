import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.global.css'
import { ChakraProvider } from '@chakra-ui/react';
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
