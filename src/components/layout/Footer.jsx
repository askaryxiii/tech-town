import { FooterListItem, Logo } from "../ui";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer class="bg-white shadow-[0_-2px_4px_rgba(0,0,0,0.1)] ">
      <div class="w-full max-w-screen-xl mx-auto py-5">
        <div class="flex lg:flex-row md:flex-row flex-col items-center lg:justify-between justify-evenly gap-3">
          <Logo />
          <ul class="flex flex-wrap items-center text-sm font-medium text-gray-500 mb-0 dark:text-gray-400">
            <li>
              <FooterListItem title={"About"} dist={"/"} />
            </li>
            <li>
              <FooterListItem title={"Branchs"} dist={"/"} />
            </li>
            <li className="flex justify-center">
              <FooterListItem
                title={<FaFacebook className="text-lg" />}
                dist={"/"}
              />
            </li>
            <li className="flex justify-center">
              <FooterListItem
                title={<FaInstagram className="text-lg" />}
                dist={"/"}
              />
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-400 sm:mx-auto  lg:my-4" />
        <span class="block text-sm text-gray-400 text-center ">
          © 2025{" "}
          <a
            href="https://askary-portfolio.vercel.app/"
            class="hover:underline">
            Ahmed K. Al-Askary
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
