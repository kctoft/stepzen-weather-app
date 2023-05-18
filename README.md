# StepZen Weather AI App

A Stepzen Weather AI App using the chatGPT API.
*Development in-process.*

Check out a live [demo](https://stepzen-weather-app-silk.vercel.app/).

<!-- ![dev](./public/images/Weather-AI-App.png) -->
![architecture](./public/images/tech1.png)
![architecture](./public/images/tech2.png)

### Development:
- [Nix](https://nixos.org/) package manager - version control [Nix Flakes](https://nixos.wiki/wiki/Flakes)
- [Next.js](https://nextjs.org/) as package manager
- [TypeScript](https://www.typescriptlang.org/) - scalable, reliable web dev language
- [React](https://react.dev/) - web library
- [StepZen](https://stepzen.com/) is a GraphQL server with a unique architecture.
- [Free Weather API](https://open-meteo.com/)
- [Weather API Icons](https://www.weatherbit.io/)
- [Tremor](https://www.tremor.so/) for stylized components
- [Tailwind CSS](https://tailwindcss.com/)

<!-- This project is built using [Nix](https://nixos.org/) package manager; spcifically [Nix Flakes](https://nixos.wiki/wiki/Flakes) for a reliable, reproducible build by adding a lock file concept to the project. I used [Next.js](https://nextjs.org/) as the package manager for this project. [TypeScript](https://www.typescriptlang.org/) more reliable, maintainable, and scalable code for web applications.  -->


## Getting Started

### Frontend
First, run the development server:

```bash
start-frontend
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
### Backend

To run the backend server, run the following command in a seperate terminal.

```bash
start-stepzen
```

Open the `localhost:5001` with your browser to see the result.

## Walkthrough
The landing page will have an seletion for `Country`, (optionally `State`), and `City`.

![Home Page](./public/images/homepage_saiw.gif)
<p style="text-align: center;">Landing Page</p>

Once the city of choice has been selected, the request is posted and the client will be directed to a page with the corresponding city weather information (e.g. example shown below). The information panel allows the client to change cities. The selected city displays the local time, sunruse, sunset, and collection of other metrics.

![desktop view](./public/images/desktop_resp.gif)
<p style="text-align: center;">Desktop View & Responsive</p>

This application is mobile responsive. The example is shown below.

![mobile view](./public/images/mobile_view.gif)
