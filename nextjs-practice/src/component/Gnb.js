import React from "react";
import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

function Gnb() {
  const router = useRouter();
  let activeItem;
  if (router.asPath === "/") {
    activeItem = "home";
  } else {
    activeItem = router.asPath.slice(1);
  }

  const handleClick = (e, data) => {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
    }
  };
  return (
    <Menu inverted>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleClick}
      />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={handleClick}
      />
    </Menu>
  );
}

export default Gnb;
