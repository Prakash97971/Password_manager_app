
const Navbar = () => {
  return (
    <div className="bg-slate-600 h-12 w-[100vw] mx-auto flex items-center justify-between px-4  ">
      <div className="flex items-center gap-0">
      <span className='text-2xl font-bold text-green-400'> &lt;</span>
        <span className="text-xl font-bold text-white">Pass</span>
        <span className="text-xl font-bold text-green-400">OP/&gt;</span>
      </div>
      <div>
        <ul className="flex gap-2 md:gap-6 text-white">
          <li className="cursor-pointer hover:text-green-400 hover:transition-all">Home</li>
          <li className="cursor-pointer hover:text-green-400 hover:transition-all">About</li>
          <li className="cursor-pointer hover:text-green-400 hover:transition-all">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;