import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
  image: {
    src: string;
    alt: string;
  };
}
function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
}

export default Header;
