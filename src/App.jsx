import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarCanvas from './components/CarCanvas';
import SpecsGrid from './components/SpecsGrid';
import SoundPlayer from './components/SoundPlayer';
import TestDriveModal from './components/TestDriveModal';
import Footer from './components/Footer';

export default function App() {
  const [testDriveOpen, setTestDriveOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bmw-dark text-bmw-platinum">
      <Navbar onOpenTestDrive={() => setTestDriveOpen(true)} />
      <Hero onExplore={() => {}} />
      <CarCanvas />
      <SoundPlayer />
      <SpecsGrid />
      <Footer />
      <TestDriveModal isOpen={testDriveOpen} onClose={() => setTestDriveOpen(false)} />
    </div>
  );
}
