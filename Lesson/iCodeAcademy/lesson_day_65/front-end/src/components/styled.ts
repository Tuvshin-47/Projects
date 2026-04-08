import styled from "styled-components"

// Category Item
export const CategoryItemWrapper = styled.div`
    padding: 0.5rem 1rem;
    border-radius: 9px;
    cursor: pointer;
    transition: all 0.2s ease;
    margin: 0.25rem;
`

export const CategoryContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`

export const CategoryImage = styled.img`
    display: flex;
    height: 40px;
    justify-content: flex-end;
    align-items: center;
    align-self: stretch;
`

export const CategoryTitle = styled.h1`
    color: var(--Black, #000);
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
// Categories

export const CategoriesContainer = styled.div`
    display: flex;
    gap: 16px;
    width: 100%;
`

// products container
export const ProductsContainer = styled.div`
    max-width: 847.5px;
    margin: 0 auto;
`

// product container
export const ProductContainer = styled.div`
    width: 100%;
    height: 120px;
    border-radius: 16px;
    background: var(--White, #FFF);
    box-shadow: 0px 8px 13px 0px rgba(0, 0, 0, 0.16);
`
export const ProductImage = styled.img`
    max-width: 184.84px;
    height: 120px;
    flex-shrink: 0;
    border-radius: 16px;
`
export const ProductTitle = styled.h1`
    color: var(--Black, #000);
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
export const ProductCategoryTitle = styled.h2`
    color: var(--Gray-400, #676767);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const ProductDeliverDetails = styled.div`
    display: flex;
    gap: 5px;
    color: var(--Black, #000);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const ProductRightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`