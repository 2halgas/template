/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { FC, ReactElement } from 'react';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { AppContainer } from '../components';

type WrapperProps = {
    children: ReactElement;
}

const AppWrapper: FC<WrapperProps> = ({ children }: WrapperProps) => {
    return children;
};

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <title>Title</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <link rel="shortcut icon" href='favicon.ico' />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
                crossOrigin="anonymous"
            />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
                crossOrigin="anonymous"
            />
        </Head>
        <AppContainer>
            <AppWrapper>
                <Component {...pageProps} />
            </AppWrapper>
        </AppContainer>
    </>
)
export default MyApp
