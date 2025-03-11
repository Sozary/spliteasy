import { AppProviders } from "./app/providers/AppProviders";
import { Router } from "./app/router";
import { SlideProvider } from "./shared/context/SlideContext";
import { SlideRenderer } from "./shared/components/SlideRenderer";

function App() {
  return (
    <AppProviders>
      <SlideProvider>
        <Router />
        <SlideRenderer />
      </SlideProvider>
    </AppProviders>
  );
}

export default App;
