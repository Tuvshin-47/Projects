import React, { useEffect, useState } from 'react';
import {
  ProductCategoryTitle,
  ProductContainer,
  ProductImage,
  ProductRightSide,
  ProductsContainer,
  ProductTitle,
} from './styled';
import { products, categories } from '../data/data';

interface MainContentProps {
  selectedId: number | null;
}

export const MainContent = ({
  selectedId,
}: MainContentProps): React.ReactElement => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedId !== null) {
      const fProducts = products.filter((f: any) =>
        f.category_ids.includes(selectedId)
      );
      console.log(fProducts);
      setFilteredProducts(fProducts);
    }
  }, [selectedId]);

  const filteredCategory = (ids: any[]) => {
    let filteredCategories: any = [];
    ids.forEach((id) => {
      const category: any = categories.filter((c) => c.id === id);
      if (category) {
        filteredCategories.push(`${category[0].category_name} `);
      }
    });
    return filteredCategories;
  };

  return (
    <ProductsContainer>
      {filteredProducts &&
        filteredProducts.map((product, index) => (
          <ProductContainer key={index}>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <ProductImage src={product.image_url} />
              <ProductRightSide>
                <ProductTitle>{product.product_name}</ProductTitle>
                <ProductCategoryTitle>
                  {filteredCategory(product.category_ids)}
                </ProductCategoryTitle>
              </ProductRightSide>
            </div>
          </ProductContainer>
        ))}
    </ProductsContainer>
  );
};
