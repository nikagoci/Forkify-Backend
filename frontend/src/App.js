import './App.css';
import MainForkify from './components/MainForkify';
import { ContextProvider } from './context/Context';

function App() {
  return (
    <ContextProvider >
      <MainForkify />
    </ContextProvider>
  );
}

export default App;
