import React, { useState } from 'react';
import Header from './header';
import Image from './Image';
import Footer from './Footer';
import Table from './Table';
// Үндсэн App компонент
function App() {
  return (
    <div>
      <h1>React Жишээ</h1>
      <Header />
      <Image />
      <Footer />
      <Table />
    </div>
  );
}
export default App;
