import { motion } from "framer-motion";

export default function Login({ onLogin }) {
  return (
    <div className="min-h-screen bg-luxury-black flex items-center justify-center px-6 relative overflow-hidden">
      {/* Arka plan süslemeleri */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-luxury-red/5 blur-[150px]"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-luxury-red/5 blur-[150px]"></div>

      {/* Ana Kutu */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-luxury-card/30 backdrop-blur-xl border border-luxury-border p-12 rounded-3xl shadow-[0_0_60px_rgba(255,82,82,0.05)] relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-xl font-medium text-white mb-2 tracking-widest uppercase">Vault_Access</h2>
          <p className="text-luxury-text text-xs tracking-wide">Enter your credentials to unlock the core.</p>
        </div>

        <form 
          className="space-y-8" 
          onSubmit={(e) => { 
            e.preventDefault(); 
            if(onLogin) onLogin(); 
          }}
        >
          <div>
            <label className="block text-white text-xs font-medium tracking-wider mb-2 uppercase">Account_ID</label>
            <input 
              type="email" 
              className="w-full bg-black/30 border border-luxury-border rounded-xl px-5 py-4 text-white focus:outline-none focus:border-luxury-red transition-all text-sm"
              placeholder="operator@vault.global"
            />
          </div>

          <div>
            <label className="block text-white text-xs font-medium tracking-wider mb-2 uppercase">Master_Pass</label>
            <input 
              type="password" 
              className="w-full bg-black/30 border border-luxury-border rounded-xl px-5 py-4 text-white focus:outline-none focus:border-luxury-red transition-all text-sm"
              placeholder="••••••••"
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-luxury-red text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(255,82,82,0.2)] hover:shadow-[0_0_30px_rgba(255,82,82,0.3)] transition-all uppercase tracking-widest text-xs"
          >
            Authenticate Session
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}