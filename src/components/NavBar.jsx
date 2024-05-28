export default function NavBar() {
  return (
    <nav className="bg-black opacity-50">
      <ul className="flex justify-end">
        <li>
          <a className="text-gray-50" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Get in contact</a>
        </li>
        <li>
          <a href="#">Download CV</a>
        </li>
      </ul>
    </nav>
  );
}
