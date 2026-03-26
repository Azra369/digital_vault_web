import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="bg-blue-600/10 border border-blue-500/20 p-3 rounded-2xl mb-6 mt-10">
          <span className="text-blue-400 font-semibold">🔒 %100 Güvenli Depolama</span>
        </div>
        
        <h1 className="text-6xl font-black mb-6 tracking-tight">
          Dijital Verilerini <br />
          <span className="text-blue-500">Güvende Tut</span>
        </h1>
        
        <p className="text-slate-400 text-xl max-w-2xl mb-10">
          Şifrelerini, belgelerini ve özel notlarını askeri düzeyde şifreleme ile koruyun. 
          Eskişehir'den dünyaya güvenli erişim.
        </p>
        
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-blue-500/20 active:scale-95">
            Hemen Başla
          </button>
          <button className="bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-2xl font-bold text-lg transition-all border border-slate-700">
            Nasıl Çalışır?
          </button>
        </div>
      </main>

      <footer className="p-10 border-t border-slate-800 text-slate-500 text-center">
        © 2026 Digital Vault - Azra Meryem tarafından geliştirildi.
      </footer>
    </div>
  );
}

export default App;