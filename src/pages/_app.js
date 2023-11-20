import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.css'
import { BootstrapClient } from "@/components/BootstrapClient";

export default function App({ Component, pageProps }) {
  return (
    <> 
      <Component {...pageProps} />
      <BootstrapClient />
    </>
  )
}
