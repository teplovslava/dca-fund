const footerLinks = [
  {
    link: "#",
    title: "Установка Metamask для Chrome",
  },
  {
    link: "#",
    title: "Установка Metamask для Ios",
  },
  {
    link: "#",
    title: "Установка Metamask для Android",
  },
  {
    link: "#",
    title: "Инструкция по стекированию",
  },
];

function Footer() {
  return (
    <div className="element-background flex flex-row flex-wrap justify-between gap-[15px] items-center mt-[20px] rounded-b-[0px] ">
      {footerLinks.map((link, i) => (
        <a key={i} href={link.link} className="text-[#8296A4] text-[14px] ">
          {link.title}
        </a>
      ))}
    </div>
  );
}

export default Footer;
