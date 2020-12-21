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
`

const Right_div = styled.div`
    height: 100%;
    width: 50%;
    position:fixed;
    overflow-x:hidden;
    padding-top: 20px;
    right: 0;
`


function Stable_Matching(){

    const [size, setSize]= useState(0);
 
    return(
        <Container>

            <form> 
                <span>
                    <p>Input size: 
                            <input type = "text" onChange = {e => setSize(e.targetvalue)}></input>
                            <button>Submit</button>
                    </p>
                </span>
            </form>
            <ArcherContainer>
                <Left_div>
                    <ArcherElement id = "Root">
                        <div>hi</div>
                    </ArcherElement>

                    <ArcherElement id = "Root3">
                        <div>hi3</div>
                    </ArcherElement>
                </Left_div>

                <Right_div>
                    <ArcherElement id = "Root2">
                        <div>hi2</div> 
                    </ArcherElement>
                </Right_div>
            </ArcherContainer>
        </Container>
    );
}

export default Stable_Matching;