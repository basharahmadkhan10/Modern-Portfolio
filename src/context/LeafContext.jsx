import { createContext, useContext, useEffect, useState } from 'react';

const LeafContext = createContext();

export function LeafProvider({ children }) {
  const [leavesEnabled, setLeavesEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('leavesEnabled');
      return stored !== null ? JSON.parse(stored) : true;
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem('leavesEnabled', JSON.stringify(leavesEnabled));
  }, [leavesEnabled]);

  const toggleLeaves = () => {
    setLeavesEnabled(prev => !prev);
  };

  return (
    <LeafContext.Provider value={{ leavesEnabled, toggleLeaves }}>
      {children}
    </LeafContext.Provider>
  );
}

export const useLeaf = () => useContext(LeafContext);
