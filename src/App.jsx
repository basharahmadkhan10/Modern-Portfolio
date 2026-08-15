import { ThemeProvider } from './context/ThemeContext';
import { AudioProvider } from './context/AudioContext';
import { LeafProvider } from './context/LeafContext';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import AudioToggle from './components/AudioToggle';
import LeafToggle from './components/LeafToggle';
import FallingLeaves from './components/FallingLeaves';
import Hero from './sections/Hero';
import DsaStats from './sections/DsaStats';
import TheGrind from './sections/TheGrind';
import TheBuild from './sections/TheBuild';
import Stack from './sections/Stack';
import Achievements from './sections/Achievements';
import Connections from './sections/Connections';

function App() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <LeafProvider>
          <SmoothScroll>
            <CustomCursor />
            <ThemeToggle />
            <AudioToggle />
            <LeafToggle />
            <FallingLeaves />

            <main className="relativew-full min-h-screen">
              <Hero />
              <DsaStats />
              <TheGrind />
              <TheBuild />
              <Stack />
              <Achievements />
              <Connections />
            </main>
          </SmoothScroll>
        </LeafProvider>
      </AudioProvider>
    </ThemeProvider>
  );
}

export default App;
