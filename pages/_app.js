import "../styles/globals.css";
import AppThemeProvider from "../themes/AppThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SiHotelsdotcom } from "react-icons/si";
import Head from "next/head";
import { renderToString } from "react-dom/server";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1 * 60 * 60 * 1000,
      staleTime: 1 * 60 * 60 * 1000,
    },
  },
});

axios.defaults.baseURL = "https://63b15b22f9a53fa20276665b.mockapi.io/hotel/";

export default function App({ Component, pageProps }) {
  const icon = renderToString(<SiHotelsdotcom />);

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={`data:image/svg+xml;utf8,${icon}`}
          type="image/svg+xml"
        />{" "}
      </Head>
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontSize: "1.4rem",
            },
          }}
        />
        <AppThemeProvider>
          <Component {...pageProps} />;
        </AppThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
