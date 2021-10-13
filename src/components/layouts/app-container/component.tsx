import React, { FC } from 'react';
import { Props } from './props';
import { Header } from '../header';
import { Footer } from '../footer';

export const AppContainer: FC<Props> = ({ children }: Props) => (
    <div className=" d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Header />
        <div className="container d-flex flex-column flex-grow-1">
            {children}
        </div>
        <Footer />
    </div>
);
