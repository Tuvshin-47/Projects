import React from "react";
import { categories } from "../data/data";
import { CategoriesContainer } from "./styled";
import { CategoryItem } from "./CategoryItem";

interface CategoriesProps {
    onCategoryClick: any
}

export const Categories = ({ onCategoryClick }: CategoriesProps): React.ReactElement => {

    return (
        <CategoriesContainer>
            {
                categories.map((category: any, index: number) => (
                    <CategoryItem
                        onClick={() => {
                            onCategoryClick(category)
                        }}
                        key={index} title={category.category_name} imgSrc={category.img_url} />
                ))
            }
        </CategoriesContainer>
    )
}