import React, { useState } from "react";
import Link from "next/link";
import head from "next/head";

const SiteTempHeader = ({ globalData, sitemapNode, page }) => {
    // get header data
    const { header } = globalData;
    // open / close mobile nav
    const [open, setOpen] = useState(false);
    console.log(page)


    if (!header) {
        return (
            <header className="relative p-8 text-center">
                <p className="text-gray-400 font-bold">No Header Available</p>
            </header>
        );
    }

    return (
        <header className="relative w-full mx-auto px-8 h-24 bg-primary-white py-4 my-2">

           <div className={"flex flex-row max-w-screen-xl justify-between mx-auto"}>
               <div>
                   <a href={"/"}><img src={header.logo.url}/></a>
               </div>
               <div className={"flex pl-[100px] space-x-8 py-[19px]"}>
                   <a className={"b3"} href={"/company"}>Company</a>
                   <div className="dropdown b3">
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
