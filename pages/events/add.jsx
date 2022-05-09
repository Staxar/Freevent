import Layout from "../../components/Layout";
import { useRef, useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import { uploadImage } from "../../services/uploadImage";
import axios from "axios";
import Categories from "../../components/Categories";

const Add = () => {
  const eventForm = useRef();
  const [error, setError] = useState();
  const [formProcessing, setFormProcessing] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();
  const [advice, setAdvice] = useState([]);
  const [cityInfo, setCityInfo] = useState([]);
  const [categories, setCategories] = useState([]);

   

  useEffect(() => {
    const url = "http://localhost:3000/api/cities";
    const caturl = "http://localhost:3000/api/parentcategories";
    setAdvice([]);
    setCityInfo([]);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const catresponse = await axios.get(caturl);        
        setCategories(catresponse.data);
        response.data.map((city) => {
          const name = city.city;
          const city_id = city._id;
          const cid = { name, id: city_id };
          setAdvice((prev) => [...prev, name]);
          setCityInfo((prev) => [...prev, cid]);
          return cid;
        });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    console.log("Odpalam diva")
    document.getElementById("events__subcategory").style.visibility = "unset";
    console.log("Zmiana diva")
  };

  const handleImagePreview = (e) => {
    const url = window.URL.createObjectURL(e.target.files[0]);
    setImagePreview(url);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (formProcessing) return;
    setFormProcessing(true);
    setError(null);
    const form = new FormData(eventForm.current);
    const findCityId = cityInfo.find(
      (city) => city.name === form.get("city_id")
    );
    let cityid;
    if (findCityId) {
      cityid = findCityId.id;
    }
    const payload = {
      title: form.get("title"),
      desc: form.get("desc"),
      img: imagePreview,
      city_id: cityid,
      start_date: startDate,
      end_date: endDate,
    };

    if (form.get("img").name !== "") {
      const picture = form.get("img");
      const file = await uploadImage(picture);
      payload.img = file.secure_url;
    }

    const response = await fetch(`/api/events`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setFormProcessing(false);
      router.push("/events");
    } else {
      const payload = await response.json();
      setFormProcessing(false);
      setError(payload.error);
    }
  }

  return (
    <Layout>
      <section className="add section">
        <div className="events__container container">
          <form onSubmit={handleSubmit} ref={eventForm}>
            {error && <div className="form_error">{error}</div>}
            <label>Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Event title"
              required
            ></input>

            <div className="form__image">
              <img src={imagePreview} alt="" />
            </div>
            <label htmlFor="img">Event Image</label>
            <input
              type="file"
              name="img"
              id="img"
              accept="image/*"
              onChange={(e) => handleImagePreview(e)}
            ></input>
            <label>www</label>
            <input
              type="url"
              name="www"
              id="www"
              placeholder="www link"              
            ></input>
            <label>Facebook</label>
            <input
              type="url"
              name="facebook"
              id="facebook"
              placeholder="Facebook link"              
            ></input>

            <label>Instagram</label>
            <input
              type="url"
              name="instagram"
              id="instagram"
              placeholder="Instagram link"              
            ></input>

              <label>YouTube</label>
            <input
              type="url"
              name="youtube"
              id="youtube"
              placeholder="Youtube link"
            ></input>

            <label>City</label>
            <Autocomplete
              disablePortal
              fullWidth={true}
              id="combo-box-demo"
              label="city"
              options={advice}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} name="city_id" />}
            />
            <label>Adress</label>
            <input
              type="text"
              name="adress"
              id="adress"
              placeholder="Adress"
              required
            ></input>
            <label>Event Start Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm"
            />
            <label>Event End Date (optional)</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm"
            />
            <label>Category</label>
            <select name="category" id="category" onChange={handleChange}>
            <optgroup label="Pick category">
            {categories.map((category) => {                          
              return (
                <Categories key={category._id} category = {category}/>
              )
            })}
                </optgroup>
            </select>
            <div className="events__hidden" id="events__subcategory">
            ABC
            </div>
            <label>Enterance</label>
            <select name="ticket" id="ticket">
                <optgroup label="Ticket">
                  <option value="free">Free entrance</option>
                  <option value="ticket">Ticket</option>                  
                </optgroup>
            </select>


            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Add;
