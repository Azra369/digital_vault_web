import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Animasyonlar için
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Sayfalar arası geçiş animasyon ayarları (Luxury - Fade & Scale)
  const pageVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
  };

  return (
    <div className="min-h-screen bg-luxury-black text-white font-sans overflow-x-hidden">
      <Navbar
        isLogged={currentPage === "dashboard"}
        onLogout={() => setCurrentPage("home")}
      />

      {/* AnimatePresence: Sayfa değişirken eski sayfanın pürüzsüzce gitmesini sağlar */}
      <AnimatePresence mode="wait">

        {/* ANA SAYFA (HOME) */}
        {currentPage === "home" && (
          <motion.main
            key="home"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20"
          >
            <div className="bg-luxury-red/5 border border-luxury-red/20 px-4 py-2 rounded-full mb-8">
              <span className="text-luxury-red text-[10px] font-bold tracking-[0.3em] uppercase underline-offset-4 decoration-luxury-red/50">
                Secure_Link: Established
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-light mb-8 tracking-tighter leading-none">
              Digital <br />
              <span className="font-black text-luxury-red drop-shadow-[0_0_30px_rgba(198,40,40,0.3)] italic">Luxury_Vault</span>
            </h1>

            <p className="text-luxury-text text-sm max-w-lg mb-12 tracking-wide font-light leading-relaxed">
              Verilerinizi sadece sizin erişebileceğiniz, ultra-güvenli ve zarif bir dijital kasada saklayın.
              Modern şifrelemenin zirvesi.
            </p>

            <button
              onClick={() => setCurrentPage("login")}
              className="group relative px-12 py-5 bg-transparent border border-luxury-red text-luxury-red font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:text-white"
            >
              <div className="absolute inset-0 bg-luxury-red translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10"></div>
              Access_The_Core
            </button>
          </motion.main>
        )}

        {/* GİRİŞ SAYFASI (LOGIN) */}
        // App.jsx içindeki Login bileşenini şu şekilde çağır:
        {currentPage === "login" && (
          <motion.div key="login" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <Login onLogin={() => setCurrentPage("dashboard")} />
          </motion.div>
        )}

        {/* DASHBOARD */}
        {currentPage === "dashboard" && (
          <motion.div
            key="dashboard"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <Dashboard />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

export default App;