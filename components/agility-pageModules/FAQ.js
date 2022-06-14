import React, {useEffect, useState} from 'react'
import {renderHTML} from "@agility/nextjs";
import {ReactSearchAutocomplete} from 'react-search-autocomplete';
import {BsArrowRightShort} from "react-icons/bs"

//change name Test

const Test = ({item}) => {

    return (
        <>
            <div className={"flex flex-col mx-auto w-[864px] md:mt-[-20px] md:min-w-[310px] "}>
                {item.length > 1 && <div><p
                    className={"flex   c1 text-primary-darkblue mt-16 mb-[24px]"}>Found {item.length} results </p>
                </div>}

                {item?.map((elem) => {
                        let link = elem?.page?.toLowerCase()?.replaceAll(" ", "-")
                        console.log(link)
                        return (
                            <div className={" flex flex-col mt-[32px] bord"}>
                                <p className={"c2 text-primary-darkblue"}>{elem.title}</p>
                                <div className={"b1 mt-4 text-primary-darkblue pb-[24px] max-h-[150px] overflow-hidden "} dangerouslySetInnerHTML={renderHTML(elem.description)}></div>
                                <div className={"row mt-5 pb-[22px]"}>
                                    <a className={"flex"} href={`/faq/${link}#${elem.title}`}>
                                        <p className={"bttn2 text-primary-darkblue"}>View</p>
                                        <BsArrowRightShort className={"text-primary-darkblue w-[24px] h-[24px]"}/>
                                    </a>
                                </div>
                            </div>)
                    }
                )}
            </div>

        </>
    )
}


const FAQ = ({module}) => {


    const {fields} = module

    const [selectItem, setSelectItem] = useState([])
    const [height, setHeight] = useState('64px')


    useEffect(() => {
    }, [selectItem])

    let items = []

    console.log(fields.fAQCards)

    for (let item of fields.fAQCards) {
        let newarr = item?.fields?.elements?.map(i => {
            i.fields.page = item.fields.title
            return i
        })
        console.log(newarr)
        items = [...items, ...newarr]

    }


    let formattedArr = items?.map((item) => {

            return {
                id: item.contentID,
                title: item.fields.title,
                description: item.fields.description,
                page: item.fields.page
            }
        }
    )

    const handleOnSearch = (string, result) => {
        setSelectItem(
            result
        )

    }

    const handleOnHover = (result) => {

    }

    const formatResult = (item) => {
        return <>
            <p>{item.title}</p>
        </>

    }

    const handleOnSelect = (item) => {
        setSelectItem(
            [item]
        )

    }

    const handleOnFocus = () => {
    }
    useEffect(() => {
        if (window.innerWidth < 768)
            setHeight("56px")

    }, [])


    //if(window)

    return (
        <div className={"max-w-full flex-row items-center"}>
            <div className={"bg-soft-purple"}>
                <div className={"flex flex-col items-center justify-center md:pt-20 md:pb-1 pt-[120px] pb-[64px]"}>
                    <h1 className={"text-primary-darkblue text-center flex md:text-[40px] "}>Frequently asked
                        questions.</h1>
                </div>
                <div className={"mdplus:px-10 lg:max-w-[640px] mx-auto lg:top-8 md:top-7 relative  md:px-5"}>

                    <ReactSearchAutocomplete
                        styling={{
                            height: height,
                            border: "1px solid #dfe1e5",
                            borderRadius: "32px",
                            backgroundColor: "white",
                            boxShadow: "#0px 1px 6px 0px",
                            hoverBackgroundColor: "#F0F9FF",
                            color: "#0f1847",
                            fontSize: "14px",
                            fontFamily: "Outfit",
                            iconColor: "#1C58F8",
                            lineColor: "#F0F9FF",
                            placeholderColor: "grey",
                            clearIconMargin: '1px 14px 0 0',
                            searchIconMargin: '16px',
                        }}
                        items={formattedArr}
                        fuseOptions={{keys: ["title", "description"]}}
                        resultStringKeyName="title"
                        onHover={handleOnHover}
                        onSearch={handleOnSearch}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        formatResult={formatResult}
                    />

                </div>
            </div>


            <div className={"flex justify-center items-center flex-col mt-[25px] md:mt-[0px]"}>


                <div className={" flex w-full max-w-[864px] md:mt-[80px] mdplus:mt-2 px-5"}>
                    <Test item={selectItem}/>
                </div>

                <div
                    className={"flex flex-row justify-center flex-wrap mx-auto md:mt-[-22px] mdplus:mt-[118px] mt-[118px] md:mb-0 mdplus:mb-[50px] max-w-[1010px]"}>
                    {selectItem.length === 0 && fields?.fAQCards?.slice(0).reverse().map((card) => {
                        let link = card?.fields?.title?.toLowerCase()?.replace(/ /g, "-")
                        return (
                            <div
                                className={"lg:w-[291px] md:max-w-[310px] mdplus:w-[304px] md:min-w-[310px] mdplus:min-h-[228px] md:min-h-[168px] mb-[32px] md:mx-0  mdplus:mx-[16px] p-[24px] cards rounded-lg"}>
                                <div
                                    className={"flex md:items-center mdplus:items-baseline md:flex-row mdplus:flex-col"}>
                                    {card.fields.icon ?
                                        <img className={"rounded"} src={card.fields.icon.url} height={"48"}
                                             width={"48"}/> :
                                        <div className={"w-12 h-12"}/>}
                                    <a href={`/faq/${link}`}><p
                                        className={"c2 mdplus:mt-4 md:mt-0 md:pl-4 mdplus:pl-0 text-primary-darkblue"}>{card.fields.title}</p>
                                    </a>
                                </div>
                                <div>
                                    {card?.fields?.elements?.slice(0).reverse().map((elem) => {
                                        return (
                                            <div>
                                                <a href={`/faq/${link}#${elem.fields.title}`}><p
                                                    className={"b3 md:mt-3 mdplus:mt-0 text-primary-darkblue"}>{elem.fields.title}</p>
                                                </a>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>

        </div>
    )
}

export default FAQ;