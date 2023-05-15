import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import HumidityChart from "@/components/HumidityChart";
import InformationPanel from "@/components/InformationPanel";
import RainChart from "@/components/RainChart";
import StatCard from "@/components/StatCard";
import TempChart from "@/components/TempChart";
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
      // TODO: pass in correct timezone as a prop?
      timezone: "PST",
    }
  })

  const results: Root = data.myQuery;

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <InformationPanel
        city={city}
        lat={Number(lat).toFixed(2)}
        long={Number(long).toFixed(2)}
        results={results}
      />

      <div className="flex-1 p-5 lg:p-10">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-sm text-gray-400">Last Updated at: {" "}
              {new Date(results.current_weather.time).toLocaleString()}({results.timezone})
            </p>
          </div>

          <div className="m-2 mb-10">
            <CalloutCard
              message="This is where GPT summary will go"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard
              title="Maximum Temperature"
              metric={`${(results.daily.temperature_2m_max[0] * (9 / 5) + 32).toFixed(1)}°F`}
              color="yellow"
            />

            <StatCard
              title="Minimum Temperature"
              metric={`${(results.daily.temperature_2m_min[0] * (9 / 5) + 32).toFixed(1)}°F`}
              color="green"
            />

            <div>
              <StatCard
                title="UV Index Clear Sky"
                metric={results.daily.uv_index_clear_sky_max[0].toFixed(1)}
                color="rose"
              />
              {Number(results.daily.uv_index_clear_sky_max[0].toFixed(1)) > 5 && (
                <CalloutCard
                  message={"The UV is high today, be sure to wear SPF!"}
                  warning
                />
              )}
            </div>

            <div className="flex space-x-3">
              <StatCard
                title="Wind Speed"
                metric={`${(results.current_weather.windspeed * 2.23693).toFixed(1)} mph`}
                color="cyan"
              />

              <StatCard
                title="Wind Direction"
                subtitle="N-0°, E-90°, S-180°, & W-270°"
                metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                color="violet"
              />
            </div>

          </div>
        </div>

        <hr className="mb-5" />

        <div className="space-y-3">
          <TempChart results={results} />
          <RainChart results={results} />
          <HumidityChart results={results} />
        </div>

        {/* <p>Welcome to the weather page {city} {lat} {long}</p> */}
        {/* <br /> */}
        {/* Verifies that the endpt query functions as expected */}
        {/* <p>
          {JSON.stringify(results)}
        </p> */}

      </div>
    </div>
  )
}

export default Weatherpage
