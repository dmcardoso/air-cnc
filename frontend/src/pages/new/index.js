import React, {useState, useMemo} from 'react';
import camera from '../../assets/camera.svg';
import './styles.css';
import api from '../../services/api';

function New({history}) {
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState(null);

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail]);

    async function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);


        await api.post('/spots', data, {
            headers: {
                user_id,
            },
        });

        history.push('/dashboard');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label id="thumbnail" style={{backgroundImage: `url(${preview})`}} className={thumbnail ? 'has-thumbnail' : ''}>
                <input type="file" onChange={(event) => setThumbnail(event.target.files[0])} />
                <img src={camera} alt="Select img"/>
            </label>
            <label htmlFor="company">EMRPESA *</label>
            <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={"Sua empresa incrível"}
            />
            <label htmlFor="company">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
            <input
                type="text"
                value={techs}
                onChange={(e) => setTechs(e.target.value)}
                id="techs"
                placeholder={"Sua empresa incrível"}
            />
            <label htmlFor="company">VALOR DA DIÁRIA * <span>(em brando para GRATUITO)</span></label>
            <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                id="price"
                placeholder={"Valor cobrado por dia"}
            />
            <button className="btn" type="submit">Cadastrar</button>
        </form>
    );
}

export default New;