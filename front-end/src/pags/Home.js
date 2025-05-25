import React from 'react';
import Header from '../components/Header/Header';
import ListaJogos from '../components/ListaJogos/ListaJogos';
import Footer from '../components/Footer/Footer';

function Home() {
    return (
        <>
            <Header />
            <ListaJogos />
            <Footer/>
        </>
    );
}

export default Home;