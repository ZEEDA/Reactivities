import { NavLink } from "react-router";

const MenuItemLink = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <NavLink
      to={to}
      className="nav-link"
      style={{
        color: "white",
        fontSize: "1rem",
        textTransform: "uppercase",
        fontWeight: "bold",
        padding: "0.5rem",
        textDecoration: "none",
      }}
    >
      {children}
    </NavLink>
  );
};
export default MenuItemLink;
