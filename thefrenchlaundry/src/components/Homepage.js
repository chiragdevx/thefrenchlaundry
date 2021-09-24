import React from 'react'
import { motion } from "framer-motion"
import styled from 'styled-components'
import burger from "../assets/burger.svg"
import text from "../assets/text.svg"

function Homepage() {


    return (

        <>
            <div className="row h-75">
                <div className="col d-flex justify-content-center ">
                    <div className="align-self-center " style={{  fontSize: 100, fontFamily: "'Luckiest Guy', cursive", color: "white" }} >
                    <img className="ms-5 img-fluid" src={text} />
                    </div>
                </div>
                <div className="col">
                    <div className="postion-fit">
                        <motion.div
                            animate={{ y: -10 }}
                            transition={{
                                duration: 1,
                                yoyo: Infinity
                            }}
                        >
                            <img className="img-fluid" src={burger} />
                        </motion.div>
                    </div>
                </div>
                <div className="col">
                </div>
            </div>

        </>
    )
}


// const Container = styled.div`
// background-image: url(${burger});;


//   background-repeat: no-repeat;
//  height: fit-content ;
//  width:fit-content

// `;



export default Homepage
