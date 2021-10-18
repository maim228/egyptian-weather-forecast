import React from "react";
import {useHistory} from 'react-router-dom';
import './home.css'
import Button from 'react-bootstrap/Button'
import swal from 'sweetalert';


const Home =()=>{
    let history = useHistory();

        const handleSubmit = (e)=>{
            e.preventDefault();
            const city = document.querySelector('select').value;
            city==='Choose your city'?swal("ooops!", "You Should Select Your City!", "error"):history.push(`/city/${city}`)
        }
        return(
            <div className='home'>
                <div className='form'>
                    <form onSubmit={(e)=>{handleSubmit(e)}}>
                      <select>
                         <option defaultValue selected disabled>Choose your city</option>
                         <option value='cairo'>Cairo</option>
                         <option value='alexandria'>Alexandria</option>
                         <option value='giza'>Giza</option>
                         <option value='aswan'>Aswan</option>
                         <option value='asyut'>Asyut</option>
                         <option value='sohag'>Sohag</option>
                         <option value='suez'>Suez</option>
                         <option value='luxor'>Luxor</option>
                      </select>
                      <br /><br /><br /><br />
                      <Button variant="primary" size="lg" active type='submit'>
                          View
                      </Button>
                    </form>
                </div>
            </div>
        )
}
export default Home