import React from 'react';
import {BsArrowLeftShort} from "react-icons/bs";
import {renderHTML} from "@agility/nextjs";

const SearchResult = ({dynamicPageItem, customData}) => {
    const {fields} = dynamicPageItem;
    const {content} = customData;

    return (
        <div className={"max-w-screen-xl mx-auto md:w-[335px] mdplus:w-full flex-row"}>
            <div className={"flex flex-row md:mt-[80px]"}>
                <div className={"row md:pl-0 mdplus:pl-3 pb-[22px]"}>
                    <a className={"flex"} href={"/faq"}>
                        <BsArrowLeftShort className={"text-primary-darkblue w-[24px] h-[24px]"}/>
                        <p className={"bttn2 text-primary-darkblue"}>Back to FAQ</p>
                    </a>
                </div>
            </div>

            <div className={"flex flex-col max-w-[864px] mx-auto mdplus:px-5 md:mt-[20px] md:min-w-[335px]"}>
                <h1 className={"faqTitle text-primary-darkblue"}>{fields.title}</h1>
                <div>
                    {content.slice(0).reverse().map(item =>
                        <div  id={item.fields.title}>
                            <div className={"flex flex-col mt-[32px] md:px-2 mdplus:px-0  bord"}>
                                <p className={"c2 text-primary-darkblue"}>{item.fields.title}</p>
                                <div className={"b1 mt-4 text-primary-darkblue pb-[24px]"} dangerouslySetInnerHTML={renderHTML(item.fields.description)}></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>



        </div>
    );
};

SearchResult.getCustomInitialProps = async ({agility, dynamicPageItem, languageCode})=>{
    const api = agility;
    let content = ""
    try {
        if (dynamicPageItem?.fields?.elements){
            content = await api.getContentList(
                {
                    referenceName: dynamicPageItem?.fields?.elements?.referencename,
                    locale: languageCode,
                    expandAllContentLinks: true
                })
        }
    }catch (e) {
        console.log("Error: ", e)
    }
    return {content: content?.items}

}

export default SearchResult;
