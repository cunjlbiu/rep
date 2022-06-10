import React from 'react';
import {BsArrowLeftShort} from "react-icons/bs";

const SearchResult = ({dynamicPageItem, customData}) => {
    const {fields} = dynamicPageItem;
    const {content} = customData;
    console.log("eweweweweeweewe")
    console.log(content);
    return (
        <div className={"max-w-screen-xl mx-auto flex-row"}>

            <div className={"flex flex-row"}>
                <div className={"row pb-[22px]"}>
                    <a className={"flex"} href={"/faq"}>
                        <BsArrowLeftShort className={"text-primary-darkblue w-[24px] h-[24px]"}/>
                        <p className={"bttn2 text-primary-darkblue"}>Back to FAQ</p>
                    </a>
                </div>
            </div>

            <div className={""}>
                <h1 className={""}>{fields.title}</h1>
                <div>
                    {content.map(item =>
                        <div id={item.fields.title}>
                            {item.fields.title}
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
    return {content: content.items}

}

export default SearchResult;
