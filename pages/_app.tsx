import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import { wrapper } from "@/state/store";
import NavigationBar from "@/components/common/NavigationBar/NavigationBar";
import Loader from "@/components/common/Loader/Loader";
import { GlobalStyle } from "@/components/common/GlobalStyles/GlobalStyles";
import { theme } from "@/styles/theme";

// TODOS:
// Replace toastify for radix ui primitive
// Replace font awesome for hero icons
// Implement final form instead for redux-form
// Add i18n

const AppContainer = styled.div`
  color: ${({ theme }) => theme.colors.darkerGrey};
`;

const AppContent = styled.div``;

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <meta name="description" content="Lautaro Aguirre's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <main>
          <Provider store={store}>
            <AppContainer>
              <Loader />

              <NavigationBar />

              <AppContent>
                <Component {...props.pageProps} />
              </AppContent>
            </AppContainer>
          </Provider>
        </main>
      </ThemeProvider>
    </>
  );
}
