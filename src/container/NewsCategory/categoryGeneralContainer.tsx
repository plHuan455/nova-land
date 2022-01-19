import React, { useState } from 'react';

import dataNewsCategoryList from 'assets/dataDummy/newsCategory';
import NewsCategory from 'components/templates/NewsCategory';

const CategoryGeneralContainer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="p-newsCategory_categoryGeneral pb-80">
      <NewsCategory
        dataNewsCategory={dataNewsCategoryList}
        totalPage={10}
        currentPage={currentPage}
        handleChangePage={(page: number) => setCurrentPage(page)}
      />
    </div>
  );
};

export default CategoryGeneralContainer;
