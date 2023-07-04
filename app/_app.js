import ThemeButton from "./ThemeButton";
import { ThemeProvider } from "./Context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      {/* Other components */}
    </ThemeProvider>
  );
}

export default App;
