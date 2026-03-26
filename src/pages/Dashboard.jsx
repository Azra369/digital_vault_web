import { motion } from "framer-motion";
import { useState } from "react";

export default function Dashboard() {
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div className="min-h-screen bg-luxury-black p-8 pt-32 font-sans relative overflow-hidden">
      {/* Arka plan süslemesi: Derin kırmızı bir hare */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-luxury-red/5 blur-[150px] -z-10"></div>

      <div className="max-w-5xl mx-auto">
        {/* Üst Bilgi Paneli */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-luxury-card/20 border border-luxury-border p-6 rounded-2xl backdrop-blur-md">
            <p className="text-luxury-text text-[10px] uppercase tracking-widest mb-1 font-bold italic underline decoration-luxury-red/30 underline-offset-4">Security_Level</p>
            <h4 className="text-white text-xl font-light">Class_AAA <span className="text-luxury-red font-black tracking-tighter italic">V.04</span></h4>
          </div>
          <div className="bg-luxury-card/20 border border-luxury-border p-6 rounded-2xl backdrop-blur-md">
            <p className="text-luxury-text text-[10px] uppercase tracking-widest mb-1 font-bold italic underline decoration-luxury-red/30 underline-offset-4">Location</p>
            <h4 className="text-white text-xl font-light">Eskisehir_Node <span className="text-luxury-red font-black tracking-tighter italic">TR</span></h4>
          </div>
          <div className="bg-luxury-card/20 border border-luxury-border p-6 rounded-2xl backdrop-blur-md">
            <p className="text-luxury-text text-[10px] uppercase tracking-widest mb-1 font-bold italic underline decoration-luxury-red/30 underline-offset-4">Session_Time</p>
            <h4 className="text-white text-xl font-light animate-pulse">04:12:09 <span className="text-luxury-red font-black tracking-tighter italic">LIVE</span></h4>
          </div>
        </div>

        {/* Ana İçerik */}
        <div className="bg-luxury-card/30 border border-luxury-border p-10 rounded-[40px] shadow-[0_0_80px_rgba(198,40,40,0.03)] backdrop-blur-xl">
          <div className="flex justify-between items-center mb-10 border-b border-luxury-border pb-8">
            <h2 className="text-2xl font-light text-white tracking-tighter uppercase leading-none italic">
              Authorized <span className="text-luxury-red font-black drop-shadow-[0_0_15px_rgba(198,40,40,0.5)] tracking-normal">Data_Core</span>
            </h2>
            <button className="bg-luxury-red text-white text-[10px] font-black px-6 py-3 rounded-full hover:shadow-[0_0_20px_rgba(198,40,40,0.4)] transition-all uppercase tracking-widest">
              + Secure_Entry
            </button>
          </div>

          <div className="space-y-4">
            {/* Örnek bir veri kartı */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="group flex justify-between items-center p-6 border border-white/5 bg-black/20 rounded-2xl hover:border-luxury-red/40 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="w-1.5 h-1.5 rounded-full bg-luxury-red shadow-[0_0_8px_rgba(198,40,40,1)]"></div>
                <div>
                  <p className="text-[9px] text-luxury-text uppercase font-bold tracking-[0.2em] mb-1">Global_Access_Token</p>
                  <h5 className="text-white text-sm font-medium tracking-widest uppercase italic">•••• •••• •••• 9801</h5>
                </div>
              </div>
              <button 
                onClick={() => setShowSecret(!showSecret)}
                className="text-luxury-red text-[10px] font-bold border border-luxury-red/20 px-4 py-2 rounded-full hover:bg-luxury-red hover:text-white transition-all italic"
              >
                {showSecret ? "[ Hide_Data ]" : "[ Decrypt_Data ]"}
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sürpriz Detay: Alt köşe teknik veri akışı (Luxury görünümü pekiştirir) */}
      <div className="fixed bottom-8 left-10 text-[8px] text-luxury-text font-mono uppercase tracking-[0.5em] opacity-30 select-none">
        System_Ref: 0xFF00-9281 // Encryption_AES_256 // Azra_Meryem_Vault_System
      </div>
    </div>
  );
}