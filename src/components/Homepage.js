import React from 'react'
import { motion } from "framer-motion"
import styled from 'styled-components'
import burger from "../assets/burger.svg"
import text from "../assets/text.svg"
import mac from "../assets/mac.svg"

function Homepage() {


    return (

        <>
            <div className="row h-50 ">
                <div className="col d-flex justify-content-center ">
                    <div className="align-self-center " >
                        <img className="ms-5 img-fluid" src={text} />
                    </div>
                </div>
                <div className="col d-flex justify-content-center">
                    <div className="postion-fit align-self-center  ">
                        <motion.div
                            animate={{ y: -15 }}
                            transition={{
                                duration: 1,
                                yoyo: Infinity
                            }}
                        >
                            <img className="img-fluid" src={burger} />
                        </motion.div>
                    </div>
                </div>
                <div className="col  d-flex align-items-end">

                </div>
            </div>
            <div className='row pt-5'>
                <div className="col d-flex justify-content-end">
                    <img className="img-fluid" src={mac} />
                </div>
                <div className="col d-flex justify-content-end">
                    <Container  >
                        Breakfast that’s
                        freshly prepared<br />
                        EVEN IF YOU ARE NOT!
                    </Container>
                </div>

            </div>

        </>
    )
}




const Container = styled.div`
background:#ffffff;
color:#2C7E80;
border-radius: 30px;
padding: 20px;
font-size: 30px;
  background-repeat: no-repeat;
 height: fit-content;
 width:75%;

`;



export default Homepage
