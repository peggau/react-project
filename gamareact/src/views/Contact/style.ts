import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: green;
    color: #FFF;
    .form-wrapper {
        display: grid;
        text-align: center;
        .card {
            background-color: #FFF;
            padding: 15px;
            border-radius: 15px;

            form {
                display: grid;
                input {
                    margin: 5px 0;
                }
            }
        }
        .thank {
            color: #000;
        }
    }
`