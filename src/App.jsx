import { Helmet } from "react-helmet";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";
import SocialButtons from "./components/SocialButtons";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Helmet>
        <title>Evolute Ads - Formulário</title>
        <meta
          name="description"
          content="Evolute Ads - Formulário de contato para tráfego pago e marketing digital."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#001a33] text-white flex flex-col">
        <main className="flex-grow flex items-center justify-center">
          <Formulario />
        </main>

        <SocialButtons />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
