import React from "react"
import { CategoryContent, CategoryImage, CategoryItemWrapper, CategoryTitle } from "./styled"

type CategoryItemProps = {
    onClick: any
    title: string
    imgSrc: string

}

export const CategoryItem = ({onClick, title, imgSrc}: CategoryItemProps): React.ReactElement => {
    return (
        <CategoryItemWrapper onClick={onClick}>
            <CategoryContent>
                <CategoryImage src={imgSrc} />
                <CategoryTitle>
                    {title}
                </CategoryTitle>
            </CategoryContent>
        </CategoryItemWrapper>
    )
}