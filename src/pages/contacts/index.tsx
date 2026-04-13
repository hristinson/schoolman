import ScrollDowncontainer from "../../scrollDowncontainer";
import { ReactComponent as Ximage } from "../../images/x.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Shareemail } from "../../images/shareemail.svg";
import { ReactComponent as Sharefb } from "../../images/sharefacebook.svg";
import { ReactComponent as Linkedin } from "../../images/linkedin.svg";

export default function Contacts() {
  return (
    <div className="appContainer">
      <div className="linksContainer">
        <Ximage />
        <Instagram />
        <Shareemail />
        <Sharefb />
        <Linkedin />
      </div>

      <ScrollDowncontainer />
    </div>
  );
}
