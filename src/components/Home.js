import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Home.module.css'

function Home() {

  return(
    <>

      <div className={`container-fluid ${classes.extra_ctr}`} style={{backgroundImage:'url(https://oichat.s3.us-east-2.amazonaws.com/assets/background.png)'}}>
        <nav className="navbar navbar-expand-lg">
            <div className="container d-flex align-items-center">
                <div className='navbar-brand d-flex'>
                    <Link to='/'>
                        <div className={` ${classes.logo} me-3 animate__animated animate__fadeInDown`}>
                        
                        </div>
                    </Link>
                </div> 

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`navbar-toggler-icon`} style={{color:'white'}}><i className="fa-solid fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse  d-lg-flex justify-content-between align-items-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mt-4 mt-lg-0 m-auto mb-2 mb-lg-0 w-adjust d-flex flex-column flex-lg-row justify-content-lg-end align-items-lg-center">
                            <li className='nav-item my-2 my-lg-0 mb-3 mb-lg-0 mx-lg-4 text-light d-flex flex-column d-lg-inline-block fs-5'>
                               <button className='btn btn-dark fw-bold'>Log In</button> 
                            </li>
                            <li className='nav-item my-2 my-lg-0 mb-3 mb-lg-0 mx-lg-4 text-light d-flex flex-column d-lg-inline-block fs-5'>
                               <button className={`btn ${classes.light_btn} rounded fw-bold`}>Sign Up</button> 
                            </li>
                        </ul>
                </div>
            </div>
        </nav>

        <div className='row d-flex flex-column flex-lg-row justify-content-center align-items-center w-100 h-100'>
          <div className='col-12 col-lg-6 order-2 order-lg-1 d-flex flex-column animate__animated animate__fadeInLeft'>
            <h1 className='fw-bold' style={{wordSpacing:4}}>Providing the best</h1>
            <h1 className='fw-bold' style={{wordSpacing:4}}><span style={{color:'rgb(44,119,246)'}}>growth</span> solutions</h1>
            <p className='my-3'>
              You can read this text, but if doesn't matter.Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. 
            </p>
            <div>
              <button type='button' className='btn rounded-pill btn-dark fw-500 my-3'>
                Upload Task
              </button>
            </div>
            
          </div>
          <div className='col-10 col-lg-5 order-1 order-lg-2 d-flex justify-content-center'>
            <div className={`${classes.img}`}>

            </div>
          </div>

        </div>
      </div>

      <div className={`my-5 container-fluid py-5 d-flex flex-column ${classes.extra_ctr}`} style={{backgroundImage:'url(https://oichat.s3.us-east-2.amazonaws.com/assets/hire.png)'}}>
        <h1 className='mt-5 fw-bold text-center'>
          Hire
        </h1>
        <h1 className='mt-3 mt-lg-4 text-center'>
          <div className='rounded p-1 fw-bold text-light d-inline-block' style={{backgroundColor:'rgb(246,196,70)', rotate:'z -5deg', fontSize:'2em'}}>Freelancers</div>
        </h1>
        <h1 className='mt-3 mt-lg-4 fw-bold text-center'>
          to boost your online
        </h1>
        <h1 className='mt-3 mt-lg-4 fw-bold text-center'>
          presence
        </h1>
        <button type='btn' className='btn btn-primary align-self-center mt-5'>
          <h4 style={{fontWeight:'bold'}}>Hire Now !</h4>
        </button>
      </div>

      <div className='my-5 py-5 container-fluid d-flex flex-column align-items-center'>
        <h1 className='text-center my-5 fw-bold'>Ways to get started</h1>
        <div className='my-3 d-flex flex-column flex-lg-row'>
          <h3 className='p-3 d-inline-block mx-5 my-3 my-lg-0 fw-light' style={{backgroundColor:'rgb(221,231,244)', borderRadius:10}}>Post a task<br /> and get it done</h3>
          <h3 className='p-3 d-inline-block mx-5 my-3 my-lg-0' style={{backgroundColor:'rgb(251,231,168)', borderRadius:10}}>Become a <br /> freelancer</h3>
        </div>
      </div>

      <div className='container-fluid mt-5 pt-5'>
        <div className={`${classes.services} m-auto d-flex justify-content-center align-items-center`} style={{backgroundImage:'url(https://oichat.s3.us-east-2.amazonaws.com/assets/services.png)'}}>
          <h1 className='mb-4'>Services</h1>
        </div>
      </div>
      <div className='w-100 container-fluid py-3' style={{backgroundColor:'rgb(220,230,243)', marginTop:'-7rem'}}>
          <div className='w-100 py-5'>
            <div className='row d-flex flex-column flex-md-row my-md-4 justify-content-center'>

              <div className={`mx-4 ${classes.tile} col-11 my-3 my-md-0 col-lg-4 shadow p-3 d-flex flex-column align-items-center`}>
                <div className={classes.icons} style={{backgroundImage:'url(https://oichat.s3.us-east-2.amazonaws.com/assets/sm.png)'}}>

                </div>
                <h6 className='fw-bold my-3'>Social Media Marketing</h6>
                <p>Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. </p>
              </div>
              <div className={`mx-4 ${classes.tile} col-11 my-3 my-md-0 col-lg-4 shadow p-3 d-flex flex-column align-items-center`}>
                <div className={classes.icons} style={{backgroundImage:'url(https://oichat.s3.us-east-2.amazonaws.com/assets/CI.png)'}}>

                </div>
                <h6 className='fw-bold my-3'>Collaboration with Influencers</h6>
                <p>Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. </p>
              </div>

            </div>
            <div className='row d-flex flex-column flex-md-row my-md-4 justify-content-center'>

              <div className={`mx-4 ${classes.tile} col-11 my-3 my-md-0 col-lg-4 shadow p-3 d-flex flex-column align-items-center`}>
                <div className={classes.icons} style={{backgroundImage:'url(https://oichat.s3.us-east-2.amazonaws.com/assets/gr.png)'}}>

                </div>
                <h6 className='fw-bold my-3'>Increase Google Reviews</h6>
                <p>Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. </p>
              </div>
              <div className={`mx-4 ${classes.tile} col-11 my-3 my-md-0 col-lg-4 shadow p-3 d-flex flex-column align-items-center`}>
                <div className={classes.icons} style={{backgroundImage:'url(https://oichat.s3.us-east-2.amazonaws.com/assets/sp.png)'}}>

                </div>
                <h6 className='fw-bold my-3'>Strategic Partnerships</h6>
                <p>Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. </p>
              </div>

            </div>
            <div className='row d-flex flex-column flex-md-row my-md-4 justify-content-center'>

              <div className={`mx-4 ${classes.tile} col-11 my-3 my-md-0 col-lg-4 shadow p-3 d-flex flex-column align-items-center`}>
                <div className={classes.icons} style={{backgroundImage:'url(https://oichat.s3.us-east-2.amazonaws.com/assets/mc.png)'}}>

                </div>
                <h6 className='fw-bold my-3'>Social Media Contests</h6>
                <p>Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. </p>
              </div>
              <div className={`mx-4 ${classes.tile} col-11 my-3 my-md-0 col-lg-4 shadow p-3 d-flex flex-column align-items-center`}>
                <div className={classes.icons} style={{backgroundImage:'url(https://oichat.s3.us-east-2.amazonaws.com/assets/boost.png)'}}>

                </div>
                <h6 className='fw-bold my-3'>Boost Engagement</h6>
                <p>Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. </p>
              </div>

            </div>
          </div>
        </div>

        <div className={`container-fluid my-5 py-5 ${classes.extra_ctr}`} style={{backgroundImage:'url(https://oichat.s3.us-east-2.amazonaws.com/assets/freelancer.png)'}}>
          <div className='row py-5 my-5'>
            <div className='col-12 col-md-5 px-5'>
              <h1 className='mb-3'>
                Join as a <span style={{color:'rgb(44,119,246)'}}>Freelancer</span>
              </h1>
              <p>
                Whether you're a student stepping into the world of freelancing or a seasoned professional reaching CEO levels, our gigs cater to all, from those with no experience to those with executive expertise.
              </p>
              <br />
              <p>To start earning, register with us today. Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. . Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. </p>
            </div>
          </div>
          <div className='d-none col-7 d-lg-flex'>
            <div>

            </div>
          </div>
        </div>

        <div className={`container-fluid my-5 py-5 ${classes.extra_ctr}`} style={{backgroundImage:'url(https://oichat.s3.us-east-2.amazonaws.com/assets/startup.png)'}}>
          <div className='row py-5 my-5'>
            <div className='col-12 col-md-5 px-5'>
              <h1 className='mt-5 pt-2'>
                Get in touch and <span style={{color:'rgb(44,119,246)'}}>start</span>
              </h1>
              <h1 className='mb-3'>
                <span style={{color:'rgb(44,119,246)'}}>growing</span> your startup today.
              </h1>
              
              <div className='my-5 d-flex'>
                <button type='button' className='btn btn-dark me-3'>Get in Touch</button>
                <button type='button' className='btn btn-outline-dark ms-3'>Get Started</button>
              </div>
            </div>
          </div>
          <div className='d-none col-7 d-lg-flex'>
            <div>

            </div>
          </div>
        </div>
      
    </>
    
  )
}

export default Home