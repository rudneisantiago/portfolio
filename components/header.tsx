function Header() {
  return (
    <header className="flex justify-between items-center border border-black bg-cyan-800 text-white px-4 py-6">
      <div>Rudnei Santiago</div>
      <nav>
        <ul className="flex gap-6">
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
