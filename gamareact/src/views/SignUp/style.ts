import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: #8C52E5;
    .card {
        display: grid;
        background: #F9F9F9;
        max-width: 300px;
        border-radius: 15px;
        padding: 15px;
        h5 {
            font-family: 'Roboto', sans-serif;
            text-align: center;
            font-size: 20px;
            color: #8C52E5;
        }
        form {
            input {
                width: 100%;
                height: 25px;
                margin-top: 5px;
                text-align: center;
                border-radius: 5px;
                border: 1px solid #E2E2E2;
            }
            input[type="submit"] {
                cursor: pointer;
                border: none;
                background-color: #68DE5A;
                padding: 5px;
                margin-top: 10px;
                border-radius: 8px;
                transition: 0.5s;
                &:hover {
                    background-color: #8C52E5;
                }
            }
        }
    }
`