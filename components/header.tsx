function Header() {
  return (
    <header className="flex justify-between items-center borde text-white bg-dark-blue-950 px-4 py-6">
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
