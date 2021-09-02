import React, {useState, useCallback, FormEvent} from "react";
import {Link} from "react-router-dom";
import {Container} from './style';
import {api} from '../../services/api'


interface IData {
    name: string;
    email: string;
}

const Contact: React.FC = () => {
    const [data, setData] = useState<IData>({} as IData);
    const [submit, setSubmit] = useState(false);
    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.post('', data).then(response => {
            if (response.status === 200){
                setSubmit(true);
            }
        })
    }, [data])
    
    return (
        <Container>
            <div className="form-wrapper">
                <h1> Contact </h1>
                Nome: {data?.name}
                <br />
                E-mail: {data?.email}
                <div className="card">
                    {submit ? (
                        <div className="thank">
                            <h1> Obrigada por enviar seus dados! </h1>
                        </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <input type="text" placeholder="Nome" onChange={e => setData({... data, name: e.target.value})} />
                                <input type="text" placeholder="E-mail" onChange={e => setData({... data, email: e.target.value})} />
                                <input type="submit" value="Cadastrar" />
                            </form>       
                        )
                    }
                </div>
                <Link to="/"> 
                    Acessar página principal
                </Link>
            </div>
        </Container>
    );
}

export default Contact;