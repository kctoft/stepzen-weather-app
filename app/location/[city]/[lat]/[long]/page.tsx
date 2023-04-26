type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

function Weatherpage({ params: { city, lat, long } }: Props) {
  return (
    <div>
      Welcome to the weather page {city} {lat} {long}
    </div>
  )
}

export default Weatherpage
