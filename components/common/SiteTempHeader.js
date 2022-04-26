import React, {useRef, useState} from "react";
import Link from "next/link";
import head from "next/head";

const SiteTempHeader = ({ globalData, sitemapNode, page }) => {
    // get header data
    console.log('page')
    console.log(page)

    const { header } = globalData;

    // open / close mobile nav
    const [open, setOpen] = useState(false);
    const [dropDownOpen, setDropdownOpen] = useState(false);
    const headerColorModule = page.zones['MainContentZone'].find((e)=>e.moduleName == "HeaderColor")
    let color = "";
    if(headerColorModule){
        color = headerColorModule.item.fields.color;
    }


    if (!header) {
        return (
            <header className="relative p-8 text-center">
                <p className="text-gray-400 font-bold">No Header Available</p>
            </header>
        );
    }




            {/* Burger Menu REMAKE */}


            const [isOpenMenu, setIsOpenMenu] = useState(false)
            const [isDropdownOpen, setIsDropdownOpen] = useState(false)
            const burger = useRef()

            const onDropdownClick = () => {
                setIsDropdownOpen(!isDropdownOpen)
            }

            const onButtonClick = () => setIsOpenMenu(!isOpenMenu)

            // $(function() {
            //     $('#nav-icon4').click(function(){
            //         $(this).toggleClass('open');
            //     });
            // });



            {/* Burger Menu REMAKE */}



    return (
        <header className="lg:relative lg:w-full lg:mx-auto lg:px-8 lg:h-24 lg:py-4" style={{backgroundColor: color}}>

           <div className={"lg:flex lg:flex-row lg:max-w-screen-xl lg:justify-between lg:mx-auto md:hidden"}>
               <div className={"align-middle py-[16px]"}>
                   <a className={"align-middle"} href={"/"}><img width={174} height={32} src={header.logo.url}/></a>
               </div>
               <div className={"flex pl-[100px] space-x-8 py-[19px]"}>
                   <a className={"b3"} href={"/company"}>Company</a>
                   <div className="dropdown b3 cursor-pointer">
                       <span>Education</span>
                       <div className="dropdown-content">
                           <div className={"py-2 px-3 hover:bg-soft-purple"}><a href={"/aorn"} className={"h-[50px]"}>AORN</a></div>
                           <div className={"py-2 px-3 hover:bg-soft-purple"}><a href={"/ACS"}>ACS</a></div>
                           <div className={"py-2 px-3 hover:bg-soft-purple"}><a href={"/VeinGlobal"}>Vein Global</a></div>
                       </div>
                   </div>
                   <a className={"b3"} href={"/aboutus"}>About us</a>
                   <a className={"b3"} href={"/contact"}>Contact us</a>
               </div>
               <div className={"flex py-[8px] space-x-3"}>
                   <a className={"flex bttn1 w-36 h-12 items-center bg-primary-blue rounded-full"} href={"/create-course"}><p className={"mx-auto text-primary-white"}>Create a Course</p></a>
                   <a className={"flex bttn1 w-36 h-12 items-center border-primary-blue rounded-full border-primary-blue border-2 text-primary-blue"} href={"/find-a-course"}><p className={"mx-auto"}>Find a Course</p></a>
               </div>
           </div>

           {/* Burger Menu */}




            {/* Burger Menu REMAKE */}

            <div className={"lg:hidden md:block w-full"}>
                <div className={"flex top-nav flex-center items-center p-5  justify-between w-full"} style={{backgroundColor: color}}>
                    <a href={"/"}><img className={"min-w-[144px] w-[133px]"} src={header.logo.url}/></a>
                    <div className={"burger-menu-x"}>
                        <div onClick={onButtonClick} className={`${isOpenMenu ? 'open': ''}`} id="nav-icon4" ref={burger}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className={`burger-menu ${isOpenMenu && 'open'}`}>
                    <div className={"flex  flex-center items-center p-5  justify-between w-full"}>
                    </div>
                    <div className={"flex flex-col w-full mb-[80px]"}>
                        <ul className={'list-none list-padding'}>
                            <li>
                                <a className={"linkForMenu text-primary-darkblue"} href={"/company"}>Company</a>
                            </li>
                            <li className={"flex flex-col dropdown-menu"}>
                                <div onClick={onDropdownClick} className={"flex flex-row"}>
                                    <a className={"linkForMenu text-primary-darkblue"} href={"#"}>Education</a>
                                    <span className={"menu_arrow self-center ml-3"}></span>
                                </div>
                                <div className={`${!isDropdownOpen ? "max-h-0" : "max-h-[100px]"} overflow-hidden dropdown-menu-content`}>
                                    <div className={"linkForMenu text-primary-darkblue"}><a href={"/aorn"} className={"h-[50px]"}>AORN</a></div>
                                    <div className={"linkForMenu text-primary-darkblue"}><a href={"/ACS"}>ACS</a></div>
                                    <div className={"linkForMenu text-primary-darkblue"}><a href={"/VeinGlobal"}>Vein Global</a></div>
                                </div>
                            </li>
                            <li>
                                <a className={" linkForMenu text-primary-darkblue"} href={"/aboutus"}>About</a>
                            </li>
                            <li>
                                <a className={" linkForMenu text-primary-darkblue"} href={"/contact"}>Contact us</a>
                            </li>
                        </ul>
                    </div>

                    <ul className={'flex list-none pb-[39px] w-full justify-between '}>
                        <li><a className={"flex bttn1 w-36 h-12 items-center bg-primary-blue rounded-full"} href={"/create-course"}><p className={"mx-auto text-primary-white md:text-[14px]"}>Create a Course</p></a></li>
                        <li><a className={"flex bttn1 w-36 h-12 items-center border-primary-blue rounded-full border-primary-blue border-2 text-primary-blue"} href={"/find-a-course"}><p className={"mx-auto md:text-[14px]"}>Find a Course</p></a></li>
                    </ul>
                </div>

            </div>





            {/* Burger Menu REMAKE */}



            
            {/*<div class="top-nav lg:hidden md:pt-8">*/}
            {/*    <div className={"mobile-logo"}>*/}
            {/*            <a href={"/"}><img src={header.logo.url}/></a>*/}
            {/*     </div>*/}
            {/*        <input id="menu-toggle" type="checkbox" />*/}
            {/*            <label class='menu-button-container' for="menu-toggle">*/}
            {/*                <div class='menu-button'></div>*/}
            {/*            </label>*/}
            {/*                <ul class="menu ">*/}
            {/*                    <li><a className={"b3 text-primary-darkblue font-semibold "} href={"/company"}>Company</a></li>*/}
            {/*                    <li className={"flex flex-col"}>*/}
            {/*                        <div onClick={dropDownClick} className={"flex"}>*/}
            {/*                            <a className={"b3 text-primary-darkblue font-semibold"} href={"#"}>Education</a>*/}
            {/*                            <span className={"menu_arrow self-center ml-3"}></span>*/}
            {/*                        </div>*/}
            {/*                        <div className={`${!dropDownOpen && 'hidden'} flex flex-col`}>*/}
            {/*                            <div className={""}><a href={"/aorn"} className={"h-[50px]"}>AORN</a></div>*/}
            {/*                            <div className={""}><a href={"/ACS"}>ACS</a></div>*/}
            {/*                            <div className={""}><a href={"/VeinGlobal"}>Vein Global</a></div>*/}
            {/*                        </div>*/}
            {/*                    </li>*/}
            {/*                    <li><a className={"b3 text-primary-darkblue font-semibold"} href={"/aboutus"}>About</a></li>*/}
            {/*                    <li><a className={"b3 text-primary-darkblue font-semibold"} href={"/contact"}>Contact us</a></li>*/}
            {/*                    <ul className={"libtns"}>*/}
            {/*                        <li className={"md:mobile-menu-buttons md:flex md:flex-row md:space-x-4 justify-center md:bg-white md:w-full"}>*/}
            {/*                            <a className={"flex bttn1 w-36 h-10 items-center bg-primary-blue rounded-full font-semibold"} href={"/create-course"}><p className={"mx-auto text-primary-white md:text-[14px]"}>Create course</p></a>*/}
            {/*                            <a className={"flex bttn1 w-36 h-10 items-center border-primary-blue rounded-full border-primary-blue border-2 text-primary-blue font-semibold"} href={"/find-a-course"}><p className={"mx-auto md:text-[14px]"}>Find a Course</p></a>*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                </ul>*/}
            {/*</div>*/}

        </header>
    );
};

SiteTempHeader.getCustomInitialProps = async function ({
                                                       agility,
                                                       languageCode,
                                                       channelName,
                                                   }) {
    // set up api
    const api = agility;

    // set up content item
    let contentItem = null;

    // set up links
    let links = [];

    try {
        // try to fetch our site header
        let header = await api.getContentList({
            referenceName: "siteheader",
            languageCode: languageCode,
            take: 1
        });

        // if we have a header, set as content item
        if (header && header.items && header.items.length > 0) {
            contentItem = header.items[0];

            // else return null
        } else {
            return null;
        }
    } catch (error) {
        if (console) console.error("Could not load site header item.", error);
        return null;
    }

    try {
        // get the nested sitemap
        let sitemap = await api.getSitemapNested({
            channelName: channelName,
            languageCode: languageCode,
        });

        // grab the top level links that are visible on menu
        links = sitemap
            .filter((node) => node.visible.menu)
            .map((node) => {
                return {
                    title: node.menuText || node.title,
                    path: node.path,
                };
            });
    } catch (error) {
        if (console) console.error("Could not load nested sitemap.", error);
    }

    // return clean object...
    return {
        siteName: contentItem.fields.siteName,
        logo: contentItem.fields.logo,
        links,
    };
};

export default SiteTempHeader;
