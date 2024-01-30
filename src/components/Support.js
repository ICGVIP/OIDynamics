import React, {useState} from 'react'
import classes from '../styles/Support.module.css'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme,useMediaQuery } from '@mui/material';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
function Support() {

  const [email,setEmail] = useState("")
  const [name,setName] = useState("")
  const [subject, setSubject] = useState("")
  const [validated, setValidated] = useState(false);
  let [description,setDesc] = useState("");
  let [finishing,setFinishing]=useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    
};

function handleDescChange(e){
  const {value,maxLength} = e.target;
  const words = value.slice(0,maxLength);
  setDesc(words)
}

  return (
    <>
      <div className={`container-fluid d-flex flex-column  p-3 ${classes.rect_bg}`}>
        <Link to='/' className={classes.logo}>

        </Link >

        <div className='mt-5 text-center align-content-center'>
          <h1 style={{fontWeight:'bold'}}>Help and <span style={{color:'rgb(64,135,245)'}}>Support</span></h1>
        </div>
        <div className='my-3 text-center align-content-center'>
          <h4 style={{fontWeight:500}}>Questions, concerns or comments ? Contact Us</h4>
        </div>
      </div>

      <div className='container-fluid my-5'>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-8 col-lg-6 p-3'  style={{backgroundColor:'rgb(247,245,245)', borderRadius:10}}>
            <Form className='d-flex flex-column'>
              <Form.Group className='my-4'>
                <Form.Label style={{fontWeight:'bold'}}>Choose a topic below:</Form.Label>
                <Form.Select aria-label="Default select example" style={{backgroundColor:'rgb(236,236,236)'}}>
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className='my-4'>
                <Form.Label style={{fontWeight:'bold'}}>Your email address:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" style={{backgroundColor:'rgb(236,236,236)'}}>

                </Form.Control>
              </Form.Group>
              <Form.Group className='my-4'>
                <Form.Label style={{fontWeight:'bold'}}>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter email" style={{backgroundColor:'rgb(236,236,236)'}}>

                </Form.Control>
              </Form.Group>
              <Form.Group className='my-4'>
                <Form.Label style={{fontWeight:'bold'}}>Subject:</Form.Label>
                <Form.Control type="text" placeholder="Enter email" style={{backgroundColor:'rgb(236,236,236)'}}>

                </Form.Control>
              </Form.Group>
              <Form.Group className='my-4'>
                <Form.Label style={{fontWeight:'bold'}}>Message:</Form.Label>
                <Form.Control as='textarea' rows={5} style={{backgroundColor:'rgb(236,236,236)'}}>

                </Form.Control>
              </Form.Group>
              <Form.Group className='my-4'>
                <Form.Label style={{fontWeight:'bold'}}>Attachments:</Form.Label>
                <input className='form-control' type='file' multiple></input>
              </Form.Group>

              <button type='button' className='btn btn-primary d-block my-5 align-content-center'>Submit</button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Support