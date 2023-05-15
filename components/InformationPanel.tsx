import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import Image from "next/image";
import CityPicker from "./CityPicker";
import weatherCodeToString from "@/lib/weatherCodeToString";

type Props = {
  city: string;
  lat: string;
  long: string;
  results: Root;
}

function InformationPanel({ city, lat, long, results }: Props) {
  return (
    <div className="bg-gradient-to-br from-[#394F68] to-[#183B7E] text-white p-10">
      <div className="pb-5">
        <h1 className="text-6xl font-bold">{decodeURI(city)}</h1>
        <p className="text-xs text-gray-400">Lat/Long: {lat}, {long}</p>
      </div>

      <CityPicker />

      <hr className="my-10" />

      <div className="mt-5 flex items-center justify-between space-x-10 mb-5">
        <div className="text-xl">
          <p>
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <p className="font-extralight">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>

        <p className="text-xl font-bold uppercase">
          {new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>

      <hr className="my-10 mb-5" />

      <div>
        <div>
          {/* image */}

          <div>
            {/* TODO: update from C -> F */}
            <p>{(results.current_weather.temperature * (9 / 5) + 32).toFixed(1)}° F</p>
          </div>
          <p>
            {weatherCodeToString[results.current_weather.weathercode].label}
          </p>

        </div>
      </div>

    </div>
  )
}

export default InformationPanel
