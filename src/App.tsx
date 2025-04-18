import React from 'react';
import { Header } from './components/Header';
import { ChatInterface } from './components/ChatInterface';
import Directory from './components/Directory';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[url('https://i.imgur.com/9ScyPiD.jpeg')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black/40">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <ChatInterface />
          <Directory />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;