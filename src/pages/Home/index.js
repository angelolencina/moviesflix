import React from 'react';
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain'
import dadosIniciais from '../../data/dados_iniciais.json'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div style={{ background: "#141414"}}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Trailer Brasileiro LEGENDADO (2020) Russell Crowe, Ação"}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
       <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />
      <Footer/>

    </div>
  );
}

export default Home;
