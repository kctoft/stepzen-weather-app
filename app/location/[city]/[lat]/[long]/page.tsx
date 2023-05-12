import { getClient } from "@/apollo-client";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function Weatherpage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      latitude: lat,
      longitude: long,
      timezone: "GMT",
    }
  })

  const results: Root = data.myQuery;

  return (
    <div>
      <p>Welcome to the weather page {city} {lat} {long}</p>

      <br />

      {/* Verifies that the endpt query functions as expected */}
      <p>
        {JSON.stringify(results)}
      </p>
    </div>
  )
}

export default Weatherpage
