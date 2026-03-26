export default function Navbar({ onLogout, isLogged }) {
  return (
    <nav className="w-full p-4 bg-black/80 backdrop-blur-md border-b border-luxury-border flex justify-between items-center px-10 fixed top-0 left-0 z-50">
      {/* Yazı rengini luxury-red yaptık */}
      <div className="font-black text-xl text-luxury-red tracking-tighter italic">
        VAULT_CORE <span className="text-[10px] not-italic text-luxury-text tracking-widest ml-2">v1.0.0</span>
      </div>
      
      <ul className="hidden md:flex gap-8 text-[10px] text-luxury-text font-bold uppercase tracking-[0.3em]">
        <li className="hover:text-luxury-red cursor-pointer transition">System_Secure</li>
        <li className="hover:text-luxury-red cursor-pointer transition">Core_Encryption</li>
      </ul>

      {/* Buton rengini kırmızı yaptık */}
      <button 
        className="bg-luxury-red text-white px-5 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-luxury-glow transition-all shadow-[0_0_15px_rgba(198,40,40,0.3)]"
      >
        {isLogged ? "Logout" : "Authorized_Only"}
      </button>
    </nav>
  );
}