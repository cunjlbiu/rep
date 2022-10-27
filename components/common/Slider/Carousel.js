import {useEffect, useState, Children, cloneElement} from "react";
import {FaChevronLeft, FaChevronRight,} from 'react-icons/fa';


const PAGE_WIDTH = 315


export const Carousel = ({children}) => {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset + PAGE_WIDTH

            //console.log(newOffset)
            return Math.min(newOffset,0)
        })

        //console.log('handleLeftArrowClick')
    }

    const handleRightArrowClick = () => {
        //console.log('handleRightArrowClick')

        setOffset((currentOffset) => {

            const newOffset = currentOffset - PAGE_WIDTH

            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))

            //console.log(newOffset,maxOffset)
            return Math.max(newOffset,maxOffset)

        })

    }


    useEffect(() => {
        setPages(

            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    },
                })
            })

        )
    }, [])


    return (
        <div className = "carousel-main">
            <FaChevronLeft className = "arrow" onClick={handleLeftArrowClick} />
            <div className = "carousel-window">
                <div className = "all-items-container"
                     style={{
                         transform: `translateX(${offset}px)`
                     }}
                >
                    {pages}
                </div>
            </div>
            <FaChevronRight className = "arrow" onClick={handleRightArrowClick} />
        </div>
    )
}