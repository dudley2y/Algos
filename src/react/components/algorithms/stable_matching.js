import React, { useState } from "react";
import styled from "styled-components"; 
import { ArcherContainer, ArcherElement } from "react-archer";

const Container = styled.div`
    width:100%;
    height100%; 
`

const Left_div = styled.div`
    height: 100%;
    width: 50%;
    position:fixed;
    overflow-x:hidden;
    padding-top: 20px;
    left: 0;
    text-align: center;
`

const Right_div = styled.div`
    height: 100%;
    width: 50%;
    position:fixed;
    overflow-x:hidden;
    padding-top: 20px;
    right: 0;
    text-align: center;
`


function Stable_Matching(){

    const [size, setSize]= useState(5);
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    const updateLeft = () => {
        let nodes = [];
        for(var i=0;i<size;i++){
            nodes.push(
                <ArcherElement id = "male + ${i}">
                    <div>hi</div>
                </ArcherElement>
            );
        }
        return nodes;
    }

    return(
        <Container>

            <form onSubmit = {handleSubmit}> 
                <span>
                    <p>Input size: 
                            <input type = "text" onChange = {e => setSize(e.target.value)}></input>
                            <button type = "submit">Submit</button>
                    </p>
                </span>
            </form>


            <ArcherContainer>

                <Left_div id = "left">
                    <h1></h1>
                    {Array.from(Array(size)).map((x, index) =>
                        <ArcherElement id = "male + ${index}" key = {index}> 
                            <div>hi</div>
                        </ArcherElement>)}
                </Left_div>

                <Right_div id = "right">
                    {Array.from(Array(size)).map((x, index) =>
                        <ArcherElement id = "female + ${index}" key = {index}> 
                            <div>hi</div>
                        </ArcherElement>)}
                </Right_div>
            </ArcherContainer>
        </Container>
    );
}

export default Stable_Matching;