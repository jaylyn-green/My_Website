import { REACT } from "../../utils/icons";
import { tailwind_svg } from "../../utils/svg";

const Footer = () => {
  return (
    <div className="col-span-4 mb-0 text-white w-full mt-7 text-xl pl-6">
      <p>
        This website is built with react {REACT} and tailwind {tailwind_svg}{" "}
      </p>
      <p className="text-right pr-6 space-x-3">
        <a href="mailto: jg.jaylyngreen@gmail.com" className="text-green-500 underline">email</a>
        <a href="" className="text-orange-500 underline">resum&eacute;</a>
        <a href="" className="text-purple-500 underline">LinkedIn</a>
      </p>
    </div>
  );
};

export default Footer;
