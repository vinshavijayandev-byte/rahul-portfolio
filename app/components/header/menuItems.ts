interface MenuI {
  name: string;
  link: string;
}

const MenuItems: MenuI[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  // {
  //   name: "My Journey",
  //   link: "/journey",
  // },
  {
    name: "Blog",
    link: "/blog",
  },
];

export default MenuItems;
