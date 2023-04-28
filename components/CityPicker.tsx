"use client"

import { Country, City, State } from "country-state-city"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Select from "react-select"
import { GlobeIcon } from "@heroicons/react/solid"

type countryOption = {
  value: {
    latitide: string,
    longitude: string,
    isoCode: string,
    name: string,
  };
  label: string;
} | null;

type stateOption = {
  value: {
    latitide: string | null | undefined,
    longitude: string | null | undefined,
    isoCode: string,
    countryCode: string,
    name: string,
  };
  label: string;
} | undefined | null;

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

const countryOptions = Country.getAllCountries().map(country => ({
  value: {
    latitide: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
    name: country.name,
  },
  label: country.name,
}))

const CountriesWithStates = new Set<String>([
  "AU",
  "AT",
  "BR",
  "DE",
  "FM",
  "GB",
  "IN",
  "MM",
  "MX",
  "MY",
  "NZ",
  "NG",
  "PW",
  "SS",
  "US",
]);

const CityPicker = () => {
  const [selectedCountry, setSelectedCountry] = useState<countryOption>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);
  const [selectedState, setSelectedState] = useState<stateOption>(null);
  const isCountryWithState = CountriesWithStates.has(selectedCountry?.value?.isoCode || '');

  const router = useRouter();

  const handleSelectedCountry = (option: countryOption) => {
    setSelectedCountry(option);
    setSelectedCity(null);
    setSelectedState(null);
  }

  const handleSelectedState = (option: stateOption) => {
    setSelectedState(option);
    setSelectedCity(null);
  }

  const handleSelectedCity = (option: cityOption) => {
    setSelectedCity(option);
    router.push(`/location/${option?.value.name}/${option?.value.latitide}/${option?.value.longitude}`)
  }

  const getStateOptions = (): any[] => {
    let options = State.getStatesOfCountry(selectedCountry?.value?.isoCode || '') || [];
    return options.map(state => ({
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
    let options = [];

    if (isCountryWithState) {
      options = City.getCitiesOfState(selectedState?.value?.countryCode || '', selectedState?.value.isoCode || '') || [];
    } else {
      options = City.getCitiesOfCountry(selectedCountry?.value?.isoCode || '') || [];
    }
    return options.map(city => ({
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
          options={countryOptions}
          id="countryName"
        />
      </div>

      {selectedCountry && isCountryWithState && (
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
            id="stateName"
          />
        </div>
      )}

      {((selectedCountry && isCountryWithState && selectedState) ||
        (selectedCountry && !isCountryWithState)) && (
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
              id="cityName"
            />
          </div>
        )
      }

    </div>
  )
}

export default CityPicker
