

export const categories = [
    { categoryId: 1, name: 'FullTimeOpportunity' },
    { categoryId: 2, name: 'Internship' },
    { categoryId: 3, name: 'Training' },
    { categoryId: 4, name: 'PartTimeOpportunity' }
  ];
  
  export const getCategoryById = (id) => {
    const category = categories.find((cat) => cat.categoryId === id);
    return category || { categoryId: -1, name: 'Unknown Category' };
  };
  