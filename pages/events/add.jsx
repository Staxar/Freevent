import Layout from "../../components/Layout";
import { useRef, useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import { uploadImage } from "../../services/uploadImage";
import axios from "axios";

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

  useEffect(() => {
    const url = "http://localhost:3000/api/cities";
    setAdvice([]);
    setCityInfo([]);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);

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
            <label>Description</label>
            <input
              type="textarea"
              name="desc"
              id="desc"
              placeholder="Event description"
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

            <label>City</label>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              label="city"
              options={advice}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} name="city_id" />}
            />
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
