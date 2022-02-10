import React, { useEffect, useMemo } from 'react';

import ProductLines from 'components/templates/ProductLines';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getRealEstatesAction } from 'store/project';
import { getImageURL } from 'utils/functions';

interface ProductLinesTypes {
  title: string;
}

const ProductLinesContainer: React.FC<ProductLinesTypes> = ({ title }) => {
  const dispatch = useAppDispatch();
  const { realEstatesList } = useAppSelector((state) => state.project);

  const convertDataProductLines = useMemo(() => {
    if (realEstatesList) {
      return realEstatesList.map((val) => ({
        label: val.name,
        imgActive: getImageURL(val.iconHover),
        imgInActive: getImageURL(val.icon),
        content: {
          title: val.smallDescription,
          imgSrc: getImageURL(val.thumbnail),
          desc:
            val.items.map((item) => ({
              imgSrc: getImageURL(item.icon),
              content: item.description,
            })) || [],
        },
      }));
    }
    return [];
  }, [realEstatesList]);

  useEffect(() => {
    if (!realEstatesList) {
      dispatch(getRealEstatesAction({}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-fieldOfActivity_productLines">
      <ProductLines title={title} dataProductLines={convertDataProductLines} />
    </div>
  );
};

export default ProductLinesContainer;
