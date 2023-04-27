"use client"

import { Country, City, State } from "country-state-city"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Select from "react-select"
import { GlobeIcon } from "@heroicons/react/solid"

type option = {
  value: {
    latitide: string,
    longitude: string,
    isoCode: string,
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitide: string | null | undefined,
    longitude: string | null | undefined,
    countryCode: string,
    name: string,
    stateCode: string,
  };
  label: string;
} | undefined | null;

// TODO: pick state for United States fix?
type stateOption = {
  value: {
    latitide: string | null | undefined,
    longitude: string | null | undefined,
    countryCode: string,
    name: string,
    stateCode: string,
  };
  label: string;
} | undefined | null;

const options = Country.getAllCountries().map(country => ({
  value: {
    latitide: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}))

const CountriesWithStates = new Set<String>([
  "US",
  "GB"
]);

const CityPicker = () => {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);
  const [selectedState, setSelectedState] = useState<stateOption>(null);
  const isCountryWithState = CountriesWithStates.has(selectedCountry?.value?.isoCode || '');

  const router = useRouter();

  const handleSelectedCountry = (option: option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
    setSelectedState(null);
  }

  // TODO: check if this renders the state logic properly of US and UK
  const handleSelectedState = (option: stateOption) => {
    setSelectedState(option);
    setSelectedCity(null);
    // router.push(`/location/${option?.value.name}/${option?.value.latitide}/${option?.value.longitude}`)
  }

  const handleSelectedCity = (option: cityOption) => {
    setSelectedCity(option);
    router.push(`/location/${option?.value.name}/${option?.value.latitide}/${option?.value.longitude}`)
  }

  const getStateOptions = (): any[] => {
    return (State.getStatesOfCountry(selectedCountry?.value?.isoCode || '') || []).map(state => ({
      value: {
        name: state.name,
        isoCode: state.isoCode,
        countryCode: state.countryCode,
        latitude: state.latitude,
        longitude: state.longitude,
      },
      label: state.name,
    }))
  }

  const getCityOptions = (): any[] => {
    // if (isCountryWithState) {

    // } else {

    // }
    return (City.getCitiesOfCountry(selectedCountry?.value?.isoCode || '') || []).map(city => ({
      value: {
        latitide: city.latitude,
        longitude: city.longitude,
        countryCode: city.countryCode,
        name: city.name,
        stateCode: city.stateCode,
      },
      label: city.name,
    }));
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white/80">
          <GlobeIcon className="h-5 w-5 text-white" />
          <label htmlFor="country">Country</label>
        </div>
        <Select
          className="text-black"
          value={selectedCountry}
          onChange={handleSelectedCountry}
          options={options}
        />
      </div>
      {/* {selectedCountry && (
        // && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white/80">
            <GlobeIcon className="h-5 w-5 text-white" />
            <label htmlFor="state">State</label>
          </div>
          <Select
            className="text-black"
            value={selectedState}
            onChange={handleSelectedState}
            options={getStateOptions()}
          />
        </div>
        //   )
      )} */}

      {selectedCountry
        &&
        (
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-white/80">
              <GlobeIcon className="h-5 w-5 text-white" />
              <label htmlFor="city">City</label>
            </div>
            <Select
              className="text-black"
              value={selectedCity}
              onChange={handleSelectedCity}
              options={getCityOptions()}
            />
          </div>
        )
        // &&
        // (
        //   <div className="space-y-2">
        //     <div className="flex items-center space-x-2 text-white/80">
        //       <GlobeIcon className="h-5 w-5 text-white" />
        //       <label htmlFor="state">State</label>
        //     </div>
        //     <Select
        //       className="text-black"
        //       value={selectedState}
        //       onChange={handleSelectedState}
        //       options={getStateOptions()}
        //     />
        //   </div>
        // )
      }

    </div>
  )
}

export default CityPicker



{/* {selectedCountry && (
        // && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white/80">
            <GlobeIcon className="h-5 w-5 text-white" />
            <label htmlFor="state">State</label>
          </div>
          <Select
            className="text-black"
            value={selectedState}
            onChange={handleSelectedState}
            options={getStateOptions()}
          />
        </div>
        //   )
      )} */}
