import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps<{}> {
    onClick?: () => null;
}

const DefaultPage = (props: IProps) => { 
    const [value, setValue] = useState('');
    const [long, setLongitude] = useState(0);
    const [lat, setLatitude] = useState(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.history.push(`/results?choice=${value}&long=${long}&lat=${lat}`)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            geolocation(position.coords.latitude, position.coords.longitude);
        });   
    }, []);

    const geolocation = (latitude: number, longitude: number) => {
        setLongitude(longitude);
        setLatitude(latitude);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setValue(e.target.value)} value={value} ></input>
                <input type="submit" value="submit"></input>
            </form>   
        </div>
    )
}

export default DefaultPage;
