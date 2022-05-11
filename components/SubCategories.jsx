import { useEffect, useState } from "react";

const SubCategories = ({ item, selectedsubcategories, setSelectedsubcategories }) => {

  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    handleChecked();
  }, [isChecked])

  const handleChecked = () => {
    if(isChecked) {
      setSelectedsubcategories((prev)=> [...prev, item.name]        
      )
    }else {
      const newsubcategory = selectedsubcategories.filter((subcategory)=> subcategory !== item.name)
      setSelectedsubcategories(newsubcategory)
    }
  }

  return (  
         <>
        <input type="checkbox" value={item.name} name={item.name} onClick={()=>setIsChecked(!isChecked)}/>  
        <label htmlFor={item.name}>{item.name}</label>
        </>
  );
};

export default SubCategories;
