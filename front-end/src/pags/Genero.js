import React from 'react';
import Header from '../components/Header/Header';
import ListaPorGenero from '../components/ListaPorGenero/ListaPorGenero';
import Footer from '../components/Footer/Footer';

function Genero() {
    return (
        <>
            <Header />
            <ListaPorGenero/>
            <Footer/>
        </>
    );
}

export default Genero;