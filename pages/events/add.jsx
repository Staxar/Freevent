import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import axios from "axios";
const Add = () => {

    const [inputs, setInputs] = useState({});
    // const [checked, setChecked] = useState(false);
    // const [pick, onPick] = useState(new Date())
    const [myOptions, setMyOptions] = useState([])

    // const data = [];
    
    // const getDataFromAPI = () => {
    //     console.log("Options Fetched from API")      
    //     fetch('http://localhost:3000/api/cities').then((response) => {
    //       return response.json()
    //     }).then((res) => {
    //       console.log(res)
    //       for (var i = 0; i < res.length; i++) {
    //         myOptions.push(res[i].name);
    //         data.push(res[i].name)
    //       }
    //       setMyOptions(myOptions)
    //     })
    //   }

    useEffect(() => {
        console.log("Use Effect");
        axios.get('http://localhost:3000/api/cities')
        .then((res) => {
        for (var i = 0; i < res.data.length; i++) {
            myOptions.push(res.data[i].name);            
          }
            setMyOptions(myOptions)
        })
    })
    

    const handleChange = (event) => {
        // setChecked(!checked) //Checkbox
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <Layout>
        <section className="add section">
        <div className="events__container container">
            <form onSubmit={handleSubmit}>
            <label>Event title:
            <input 
                type="text" 
                name="title" 
                value={inputs.title || ""} 
                onChange={handleChange}
            />
            </label>
            <label>Event description:
            <input 
                type="text" 
                name="desc" 
                value={inputs.desc || ""} 
                onChange={handleChange}
            />
            </label>
            <label htmlFor="image" className="form__label">
              Image:            
            <input
              type="file"
              name="image"
              value={inputs.image || ""} 
              onChange={handleChange}
            /></label>

            {/* <label>Tickets:
                <input 
                type="checkbox" 
                name="tickets" 
                checked={checked}
                onChange={handleChange}
                value={checked}
                />
            </label> */}
            
            <Autocomplete
                
                disablePortal
                id="combo-box-demo"
                options={myOptions}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="City" name="city"/>}                
            />
            

                <input type="submit" />
            </form>   
 
            



        </div>
        </section>
        </Layout>
    )
}

export default Add