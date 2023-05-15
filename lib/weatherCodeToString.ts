const weatherCodeToString: {
  [key: number]: {
    icon: string;
    label: string;
  };
} = {
  0: {
    icon: "c01d",
    label: "Clear sky",
  },
  1: {
    icon: "c02d",
    label: "Mainly clear",
  },
  2: {
    icon: "c04d",
    label: "Partly cloudy",
  },
  3: {
    icon: "s04d",
    label: "Overcast",
  },
  45: {
    icon: "s05d",
    label: "Fog",
  },
  48: {
    icon: "s05d",
    label: "Deposit rime fog",
  },
  51: {
    icon: "d01d",
    label: "Drizzle",
  },
  53: {
    icon: "d01d",
    label: "Drizzle",
  },
  55: {
    icon: "d01d",
    label: "Drizzle",
  },
  56: {
    icon: "d01d",
    label: "Freezing drizzle",
  },
  57: {
    icon: "d01d",
    label: "Freezing drizzle",
  },
  61: {
    icon: "r01d",
    label: "Rain",
  },
  63: {
    icon: "r01d",
    label: "Rain",
  },
  65: {
    icon: "r01d",
    label: "Rain",
  },
  66: {
    icon: "f01d",
    label: "Freezing rain",
  },
  67: {
    icon: "f01d",
    label: "Freezing rain",
  },
  71: {
    icon: "s02d",
    label: "Snow",
  },
  73: {
    icon: "s02d",
    label: "Snow",
  },
  75: {
    icon: "s02d",
    label: "Snow",
  },
  77: {
    icon: "s02d",
    label: "Snow grains",
  },
  80: {
    icon: "r02d",
    label: "Rain showers",
  },
  81: {
    icon: "r02d",
    label: "Rain showers",
  },
  82: {
    icon: "r02d",
    label: "Rain showers",
  },
  85: {
    icon: "s01d",
    label: "Snow showers",
  },
  86: {
    icon: "s01d",
    label: "Snow showers",
  },
  95: {
    icon: "t04d",
    label: "Thunderstorm",
  },
  96: {
    icon: "t04d",
    label: "Thunderstorm",
  },
  99: {
    icon: "t04d",
    label: "Thunderstorm",
  },
};

export default weatherCodeToString;
