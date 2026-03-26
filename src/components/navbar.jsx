export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center px-10 fixed top-0 left-0 z-50">
      <div className="font-bold text-xl text-blue-500 tracking-tighter">VAULT_APP</div>
      <ul className="flex gap-6 text-slate-400 font-medium text-sm">
        <li className="hover:text-blue-400 cursor-pointer transition">Özellikler</li>
        <li className="hover:text-blue-400 cursor-pointer transition">Güvenlik</li>
        <li className="hover:text-blue-400 cursor-pointer transition">Fiyatlandırma</li>
      </ul>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition">
        Giriş Yap
      </button>
    </nav>
  );
}