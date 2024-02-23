## Create Next App

1. Create a Next project

- `npx create-next-app@latest`

2. Run testing the Next app and go to http://localhost:3000

- `npm run dev`

## Deploy Next App

### Create the necessary files for deployment

- `Dockerfile` to build image for Next app
- `docker-compose.yml` to deploy Next app

To execute docker-compose.yml, then go to http://localhost:3000

- `docker-compose up --build`

If you encounter an error message like 'npm notice New minor version of npm available! 10.2.4 -> 10.4.0,' you can resolve it by updating the npm package like `sudo npm install -g npm@10.4.0`
