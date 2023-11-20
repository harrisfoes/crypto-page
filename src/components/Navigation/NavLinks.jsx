function NavLinks({ name, href }) {
  return (
    <div>
      <a href={href}>{name}</a>
    </div>
  );
}

export default NavLinks;
