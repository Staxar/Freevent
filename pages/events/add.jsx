import Layout from "../../components/Layout";
import { useRef, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
const Add = () => {

    const eventForm = useRef();
    const [error, setError] = useState();
    const [formProcessing, setFormProcessing] = useState(false);
    const [imagePreview, setImagePreview] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const router = useRouter();
    const myOptions = ['Kępno', 'Wrocław', 'Opole'];


    const handleImagePreview = (e) => {
            const url = window.URL.createObjectURL(e.target.files[0]);
            setImagePreview(url);
            console.log(url, "url");        
    }


    async function handleSubmit(e) {
        if (formProcessing) return;
        setFormProcessing(true);
        setError(null);
        const form = new FormData(eventForm.current);
        const payload = {
            title: form.get('title'),
            desc: form.get('desc'),
            img: imagePreview,
            city_id: form.get('city_id'),
            start_date: startDate,
            end_date: form.get('end_date')
        };

        if (form.get('img').name !== '') {
            const picture = form.get('img');
            const file = await uploadImage(picture);
            payload.image = file.secure_url;
          }

        const response = await fetch(`/api/events`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            setFormProcessing(false);
            console.log('Wysłano! = 1')
            router.push('/events');
            console.log('Wysłano! = 2')
        }else {
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
            type='text'
            name='title'
            id='title'
            placeholder='Event title'
            required
            >                        
        </input>
        <label>Description</label>
        <input 
            type='text'
            name='desc'
            id='desc'
            placeholder='Event description'
            required
            >                        
        </input>
        <div className="form__image">
            <img src={imagePreview} alt="" />
        </div>
        <label htmlFor="img">Event Image</label>
        <input
        type="file"
        name="img"
        id="img"
        accept="image/*"
        onChange={(e) => handleImagePreview(e)}>            
        </input>
        <label>City</label>
        <Autocomplete 
        disablePortal
        id="combo-box-demo"
        options={myOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} name="city_id" />}   
        />
        <label>Event Start Date</label>
        <DatePicker       
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp" />
        <label>Event End Date (optional)</label>
        <DatePicker       
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp" />
<button type="submit" className="button">Submit</button>
            </form>         
            

        </div>
        </section>
        </Layout>
    )
}

export default Add