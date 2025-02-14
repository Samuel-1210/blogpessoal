import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

const Footer = () => {
  let data = new Date().getFullYear();
  return (
    <div className="flex bottom-0 left-0 flex-col items-center px-9 py-3 bg-indigo-900 text-zinc-50 gap-1">
      <p className="font-bold">Blog Pessoal Generation / Copyright: {data}</p>
      <p>Acesse minhas redes sociais</p>

      <div id="icons_socials" className="flex gap-1.5 py-1 ">
        <a
          href="https://www.linkedin.com/in/samueldos-santos/"
          target="_blank"
          className="hover:text-zinc-400"
        >
          <LinkedinLogo size={48} weight="light" />
        </a>
        <a
          href="https://github.com/Samuel-1210"
          target="_blank"
          className="hover:text-zinc-400 py-[4px]"
        >
          <GithubLogo
            size={40}
            weight="light"
            className="border-2 rounded-full p-0.5"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/samueldos-santos/"
          target="_blank"
          className="hover:text-zinc-400  "
        >
          <InstagramLogo size={48} weight="light" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
