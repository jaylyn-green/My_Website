import { REACT } from "../../utils/icons";
import { tailwind_svg } from "../../utils/svg";

const Footer = () => {
    return ( 
        <div className="col-span-4 mb-0 text-white w-full text-center mt-7 text-xl">
            <p>This website is built with react {REACT} and tailwind {tailwind_svg} </p>             
        </div>
     );
}
 
export default Footer;