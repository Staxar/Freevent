const SubCategories = ({ item }) => {
  console.log(item, "Item")
  return (  
      
      <option type="submit" value={item.name} name={item.name}>{item.name}</option>

  );
};

export default SubCategories;
