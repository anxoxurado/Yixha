import Link from 'next/link';

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-yellow-500">
    <div className="text-2xl font-bold">Yixha</div>
    <div className="flex space-x-4">
      <button className="bg-black text-white px-4 py-2 rounded">Sorpréndeme</button>
      <button className="border border-black px-4 py-2 rounded">Sobre Nosotros</button>
    </div>
  </header>
);

export default Header;
