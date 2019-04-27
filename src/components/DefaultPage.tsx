import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps<{}> {
  onClick?: () => null;
}

const DefaultPage = (props: IProps) => {
  const [value, setValue] = useState("");
  const [long, setLongitude] = useState(0);
  const [lat, setLatitude] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.history.push(`/results?choice=${value}&long=${long}&lat=${lat}`);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      geolocation(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  const geolocation = (latitude: number, longitude: number) => {
    setLongitude(longitude);
    setLatitude(latitude);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        id="defaultform"
        className="w-full max-w-sm"
      >
        <div className="flex items-center border-b border-b-2 border-teal py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Restaurant/Fast Food Choice"
            onChange={e => setValue(e.target.value)}
            value={value}
          />
          <button
            type="submit"
            value="submit"
            className="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DefaultPage;
