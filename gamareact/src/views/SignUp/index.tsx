import React, {useState, useCallback, FormEvent} from "react";
import {useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';
import {Container} from './style';
import {api} from '../../services/api';

interface IData {
    name: string;
    email: string;
    password: string;
}

const SignUp: React.FC = () => {
    const [data, setData] = useState<IData>({} as IData);
    const [load, setLoad] = useState(false);
    const history = useHistory()
    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoad(true)
        api.post('users', data).then(
            response => {
                setLoad(false)
                console.log(response.data)
                toast.success('Cadastro feito com sucesso!', {
                    hideProgressBar: false,
                    onClose: () => history.push('/signin')
                })
            
            }
        ).catch(e => {
                    toast.error('Oops! Algo deu errado.')
                    setLoad(false)
                })
    }, [data, history])

    if(load) {
        return(
            <div>
                <h1> Carregando ... </h1>
            </div>
        )
    }
    return (
        <Container>
            <div className="card">
                <h5> Cadastre-se </h5>
                <form onSubmit= {() => alert("Cadastrado com sucesso!")}>
                    <input type="text" placeholder="Informe seu nome:" onChange={e => setData({... data, name: e.target.value})} />
                    <input type="text" placeholder="Informe seu e-mail:" onChange={e => setData({... data, email: e.target.value})} />
                    <input type="password" placeholder="Senha: " onChange={e => setData({... data, password: e.target.value})} />
                    <input type="submit" value="Cadastrar" />
                </form>     
            </div> 
        </Container>
    )
}

export default SignUp;