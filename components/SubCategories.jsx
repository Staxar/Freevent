const SubCategories = ({ item }) => {
  console.log(item, "Item")
  return (  
      
      <option value={item.name}>{item.name}</option>

  );
};

export default SubCategories;
