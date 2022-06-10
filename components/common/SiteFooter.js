import React from "react";
import {FaTwitter, FaInstagram, FaSlack, FaYoutube, FaFacebook, FaLinkedin} from "react-icons/fa";

/**
 * This footer is not part of the content in the CMS, feel free to remove this for production use.
 */

const SiteFooter = () => {
  // set up Agility CMS Socials
  const socials = [
    {
      title: "Twitter",
      url: "https://www.twitter.com/agilitycms",
      icon: (
        <FaTwitter className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/agilitycms",
      icon: (
        <FaInstagram className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
    {
      title: "Slack",
      url:
        "https://join.slack.com/t/agilitycms-community/shared_invite/zt-99qlv1hw-tpPOJ99V21Y2omtA_uTcJw",
      icon: (
        <FaSlack className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
    {
      title: "YouTube",
      url: "https://www.youtube.com/channel/UCzKjErx94RLTbJctcrIgsDQ",
      icon: (
        <FaYoutube className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
  ];

  return (

      <div>
        <div className={"flex max-w-screen-xl justify-between mx-auto h-[320px] pt-[70px] md:hidden"}>


          <div className={"space-y-7"}>
            <img src={"/assets/CineMedLogo.svg"}/>
            <p className={"text-primary-grey b3 w-[337px]"}>CineMed is a global healthcare solutions company committed to improving
              patient outcomes through innovative training and customer engagement.</p>
            <div className={"text-primary-grey flex space-x-[22px]"}>
              <FaYoutube className={"w-6 h-6"}/>
              <FaTwitter className={"w-6 h-6"}/>
              <FaFacebook className={"w-6 h-6"}/>
              <FaLinkedin className={"w-6 h-6"}/>
            </div>
            <p className={" b3 text-[11px] text-primary-grey "}>Copyright © CineMed. All Rights Reserved.</p>
          </div>

          <div className={"text-primary-darkblue space-y-3"}>
            <div><a href={"https://cinemed-agility.vercel.app/company"}><p className={"bttn1 hover:bg-white"}>Company</p></a></div>
            <div><a href={"https://cinemed-agility.vercel.app/company"}><p className={"b3 hover:bg-white"}>Healthcare Providers</p></a></div>
            <div><a href={"https://cinemed-agility.vercel.app/company"}><p className={"b3 hover:bg-white"}>Healthcare Facilities</p></a></div>
            <div><a href={"https://cinemed-agility.vercel.app/company"}><p className={"b3 hover:bg-white"}>Healthcare Industry</p></a></div>
          </div>

          <div className={"text-primary-darkblue space-y-3"}>
            <p className={"bttn1 hover:bg-white"}>Education</p>
            <div><a href={"https://cinemed-agility.vercel.app/aorn"}><p className={"b3 hover:bg-white"}>AORN Library</p></a></div>
            <div><a href={"https://cinemed-agility.vercel.app/ACS"}><p className={"b3 hover:bg-white"}>ACS Library</p></a></div>
            <div><a href={"https://cinemed-agility.vercel.app/VeinGlobal"}><p className={"b3 hover:bg-white"}>Vein Global</p></a></div>
          </div>

          <div className={"text-primary-darkblue space-y-3"}>
            <div><a href={"https://cinemed-agility.vercel.app/aboutus"}><p className={"bttn1 hover:bg-white"}>About us</p></a></div>
            <div><a href={"assets/order_form.pdf"} download><p className={"b3 hover:bg-white"}>Printable order form</p></a></div>
            <div><a href={"https://cinemed-agility.vercel.app/privacy-policy"}><p className={"b3 hover:bg-white"}>Privacy policy</p></a></div>
            <div><a href={"/faq"}><p className={"b3 hover:bg-white"}>FAQ</p></a></div>
          </div>

          <div className={"text-primary-darkblue space-y-3"}>
            <a href={"https://cinemed-agility.vercel.app/contact"}><p className={"bttn1 hover:bg-white"}>Contact us</p></a>
            <p className={"b3 hover:bg-white"}>
              CineMed, Inc. 127 Main Street<br/>
              North Woodbury, CT 06798<br/>
              <span className={"text-primary-blue"}>Free:</span> 1-800-253-7657<br/>
              <span className={"text-primary-blue"}>Intl:</span> 1-203-263-0006<br/>
              <span className={"text-primary-blue"}>Fax:</span> 1-203-263-4839</p>
          </div>
        </div>

        {/*Mobile Footer 1/3*/}

        <div className = {"lg:hidden md:flex md:w-full md:min-w-[335px] md:px-5"}>
          <div className = {"md:flex md:flex-col"}>
            <div className = {"md:flex md:flex-col md:mt-10"}>
                <img className={"md:w-[134px]"} src={"/assets/CineMedLogo.svg"}/>
                <p className = {"text-[12px] md:b3 md:text-primary-grey md:mt-3.5"}>
                    CineMed is a global healthcare solutions company committed to improving patient outcomes through innovative training and customer engagement.
                </p>
            </div>

            {/*2/3*/}
            <div className = {"md:flex md:flex-row  md:mt-10"}>
              <div className={"md:flex md:flex-col md:w-6/12"}>
                <a className={"bttn2 text-primary-darkblue"} href="#">The Cinemed</a>
                <a className={"b2 pt-2 text-primary-darkblue"} href="/company">Company</a>
                <a className={"b2 pt-2 text-primary-darkblue"} href="/aboutus">About us</a>
                <a className={"b2 pt-2 text-primary-darkblue"} href="/faq">FAQ</a>
                <a className={"b2 pt-2 text-primary-darkblue"} href="/contact">Contact us</a>
                <a className={"b2 pt-2 text-primary-darkblue"} href="/create-course">Create a course</a>
                <a className={"b2 pt-2 text-primary-darkblue"} href="/find-a-course">Find a course</a>
              </div>
              <div className={"md:flex md:flex-col md:w-6/12 justify-start"}>
                <a className={"bttn2 md:text-primary-darkblue"} href="">Education</a>
                <a className={"b2 pt-2 text-primary-darkblue"} href="/aorn">AORN Library</a>
                <a className={"b2 pt-2 text-primary-darkblue"} href="/ACS">ACS Library</a>
                <a className={"b2 pt-2 text-primary-darkblue"} href="/VeinGlobal">Vein Global</a>
              </div>
            </div>




            <div className = {"flex flex-col mt-11"}>
              <div className={"flex text-primary-grey"}>
                <a href=""><FaYoutube className={"w-[23px] h-[17px]"}/></a>
                <a className={"pl-5"} href="#"><FaTwitter className={"w-[23px] h-[17px]"}/></a>
                <a className={"pl-5"} href="#"><FaFacebook className={"w-[23px] h-[17px]"}/></a>
                <a className={"pl-5"} href="#"><FaLinkedin className={"w-[23px] h-[17px]"}/></a>
              </div>
              <div className={"flex flex-col mt-5"}>
                <p className={"b4"}>
                    Copyright © CineMed. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      /*
    <footer className="relative px-8 py-6 md:py-4 mt-8 bg-gray-100">
      <div className="max-w-screen-xl mx-auto md:flex md:items-center">
        <div className="text-center mb-4 md:mb-0 md:text-left flex-shrink-0 relative">
          <a
            href="https://www.agilitycms.com"
            target="_blank"
            title="Agility CMS"
          >
            <img
              src="/assets/agility-logo.svg"
              alt="Agility CMS"
              width="90"
              height="24"
            />
          </a>
        </div>
        <div className="flex-grow mb-4 md:mb-0">
          <p className="text-center md:text-left text-gray-600 text-xs md:ml-8 md:max-w-3xl">
            Powered by Agility CMS. This website and materials found on it are
            for demo purposes. You can use this to preview the content you
            created on your Agility CMS account.{"\u00A0"}
            <a
              href="https://github.com/agility/agilitycms-nextjs-starter"
              title="View on GitHub"
              target="_blank"
              className="text-gray-600 mr-2 border-b border-gray-600"
            >
              GitHub
            </a>
            <a
              href="https://help.agilitycms.com/hc/en-us"
              title="Help Center"
              target="_blank"
              className="text-gray-600 mr-1 border-b border-gray-600"
            >
              Help Center
            </a>
            {"\u00A0"}
            <a
              href="https://agilitycms.com/contact-us/chat-sales"
              title="Contact Us"
              target="_blank"
              className="text-gray-600 border-b border-gray-600"
            >
              Contact Us
            </a>
          </p>
        </div>
        <div className="flex-1-grow">
          <ul className="flex justify-center md:justify-start">
            {socials.map((social, index) => (
              <li key={index} className="mx-4 md:mx-0">
                <a
                  href={social.url}
                  title={`Follow Agility CMS on ${social.title}`}
                  target="_blank"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
       */
  );
};
export default SiteFooter;
