import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import foodPic from "../images/food.jpg";

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

  const sectionStyle: React.CSSProperties = {
    backgroundImage: `url(${foodPic})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };

  return (
    <div style={sectionStyle}>
      <form
        onSubmit={handleSubmit}
        id="defaultform"
        className="flex h-full items-center justify-center container mx-auto w-full max-w-sm"
      >
        <div className="flex container mx-auto  items-center border-b border-b-2 border-teal py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="What are you feeling?"
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
