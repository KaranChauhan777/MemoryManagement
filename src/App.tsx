import React, { useEffect } from 'react';
import { Server, Cpu } from 'lucide-react';
import InputForm from './components/InputForm';
import Simulator from './components/Simulator';

function App() {
  // Update the page title
  useEffect(() => {
    document.title = 'Memory Management Simulator';
    
    // Get the element with the data-default attribute
    const titleElement = document.querySelector('[data-default]');
    if (titleElement) {
      titleElement.textContent = 'Memory Management Simulator';
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Server size={32} className="mr-3" />
              <div>
                <h1 className="text-2xl font-bold">Memory Management Simulator</h1>
                <p className="text-indigo-200">Visualize and compare different memory allocation algorithms</p>
              </div>
            </div>
            <Cpu size={24} />
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-6">
        <InputForm />
        <Simulator />
      </main>
      
      <footer className="bg-gray-800 text-white py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>Memory Management Simulator © 2025 - An interactive educational tool</p>
        </div>
      </footer>
    </div>
  );
}

export default App;