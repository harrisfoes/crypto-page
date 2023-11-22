import NavLinks from "./NavLinks";

function MobileMenu({ links }) {
  return (
    <>
      <ul>
        {links.map((items) => {
          return (
            <div
              key={items.name}
              className="m-4 p-2 text-xl rounded-md active:bg-primary active:text-neutral-900 md:max-w-xl md:flex md:mx-36"
            >
              <NavLinks name={items.name} href={items.href} />
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default MobileMenu;
