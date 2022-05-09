const Categories = ({ category }) => {
  return (
   
    
      <option value={category._id}>{category.name}</option>

  );
};

export default Categories;
