import React from 'react';

import ProductLines, { ProductLinesType } from 'components/templates/ProductLines';

interface ProductLinesTypes {
  title: string;
  dataProductLines: ProductLinesType[];
}

const ProductLinesContainer: React.FC<ProductLinesTypes> = ({ title, dataProductLines }) => (
  <div className="p-fieldOfActivity_productLines">
    <ProductLines
      title={title}
      dataProductLines={dataProductLines}
    />
  </div>
);

export default ProductLinesContainer;
