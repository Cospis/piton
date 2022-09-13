import { AiOutlineGooglePlus } from "react-icons/ai";
import { RiFacebookFill, RiTwitterFill, RiPinterestFill } from "react-icons/ri";
const Defaultfooter = () => {
  return (
    <div className="footer">
      <div className="cpy">
        <p>2022 PitonDigital.</p>
      </div>
      <div className="mail">
        <p>hello@pitondigital.com</p>
      </div>
      <div className="icn">
        <p>
          {/* <TiSocialFacebook />
          <TiSocialTwitter /> */}
          <RiFacebookFill className="facebook" />
          <RiTwitterFill className="twitter" />
          <AiOutlineGooglePlus className="gplus" />
          <RiPinterestFill className="pinterest" />
        </p>
      </div>
    </div>
  );
};

export default Defaultfooter;
