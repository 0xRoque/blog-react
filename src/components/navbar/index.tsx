import { Nav, NavItem, NavLink } from "reactstrap";

export default function NavBar() {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink active href="#">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contacts</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
