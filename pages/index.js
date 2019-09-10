import React, { useEffect } from 'react';
import Head from 'next/head';
import { TournamentAPI } from '../services/tournamentsAPI';
import { Layout } from '@components/Layout';
import { Content } from '@components/Content';
import { Tournament } from '@components/Tournament';
import { Header } from '@components/Header';
import { Search } from '@components/Search';
import { StateProvider } from '@states/tournaments';
import { tournaments } from '@reducers/tournaments';

const Home = () => {
  const initialState = {
    tournaments: []
  }

  return (
    <Layout>
      <Head>
        <title>Tournaments | ESL Play</title>
      </Head>
      <Header />
      <Content>
        <StateProvider initialState={initialState} reducer={tournaments}>
          <Search />
          <Tournament />
        </StateProvider>
      </Content>
    </Layout>
  );
};


export default Home;
