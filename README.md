![Project Image](./Home_Screen.png)
# Rental Sales Management Services Platform
## Hi, I'm Nam IT! 👋
Welcome to the Rental Sales Management Platform repository! This project focuses on delivering a robust Software as a Service (SaaS) solution tailored for efficient rental and sales management. Powered by Next.js, our platform emphasizes SEO best practices and optimized website performance.

## Tech Stack

**Client:** NextJs, NextUi, TailwindCSS, Firebase

**Server:** NextJs, NodeJs, Stripe, Prisma

**Database:** Postgres


**Deploy Tools:** Vercel, Docker


## Features
- SaaS Model: Provides a scalable solution for managing rental operations and sales processes.

- Next.js Framework: Utilizes Next.js for server-side rendering (SSR), enhancing SEO capabilities and delivering fast-loading web pages.

- SEO Optimization: Implements SEO best practices to improve search engine visibility and attract organic traffic.

- Performance Optimization: Optimizes website performance through efficient code structure, image optimization, and server-side rendering.

## Getting Started

### How to set up the project directory from github

Clone the project

```bash
  git clone https://github.com/DoNhatNam1/graduation-project-website-by-donam.git
```

Go to the project directory

```bash
  cd graduation-project-website-by-donam
```

Install dependencies

```bash
  npm ci
```

Environment Variables

To run this project, you will need to add the following environment variables to your .env file from .env.development file

`POSTGRES_PRISMA_URL`

`POSTGRES_URL_NON_POOLING`

. . . .

You can read this [Documentation](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-postgresql) or watch this [YouTube](https://www.youtube.com/watch?v=_ER9jHiylAo) to setup the prisma database environment in nextjs

Run on Development

```bash
npm run dev
```

Build on Production

```bash
npm run build
```

Start the web

```bash
npm run start
```

 ### How to set up the project from Docker

You don't need to clone the project if you follow this setup, just setup Docker in Linux or SubLinux, first follow this [Linux_On_Window](https://www.howtogeek.com/744328/how-to-install-the-windows-subsystem-for-linux-on-windows-11/), then go to watch [Youtube_Docker_Setup_On_Window](https://www.youtube.com/watch?v=rATNU0Fr8zs) or follow the below introduction:

Copy the all the file and folder like this

![Docker_Tree](./tree_docker.png)

<a 
href="https://git-link.vercel.app/api/download?url=https%3A%2F%2Fgithub.com%2FDoNhatNam1%2Fapp%2Ftree%2Fmain%2Fgraduation-project-website-by-donam" download>Download_Tree_Folder</a> and extract it to your computer

  Or, for deploy pospose on Ubuntu

```bash
git clone https://github.com/DoNhatNam1/app.git
```

 #### Copy file setupDocker.sh to your computer

  Run the script as root (sudo) to install Docker on Linux.

```bash
sudo bash setupDocker.sh
```

## Installation

For Window, install Make in PowerShell

```bash
choco install make
```

For Linux, install Make by command

```bash
sudo apt-get install make
```

Setup your own .env file (Only when the .env file is set up correctly will the website work, so try hard at this step.)

```bash
#  .env

DB_HOST=?
DB_USER=?
DB_PASSWORD=?
DB_NAME=?
VOLUME_NAME=?

COOKIES_SESSION_NAME=?
COOKIES_DATA_NAME=?
SECRET_KEY="secret"
GOOGLE_CLIENT_ID=?
GOOGLE_CLIENT_SECRET=?
NEXT_AUTH_SECRET=?
KEY_REGISTER_EMAIL=?
NEXT_PUBLIC_HOSTNAME_PATH="localhost:3000"


NEXT_PUBLIC_FIREBASE_API_KEY=?
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=?
NEXT_PUBLIC_FIREBASE_PROJECT_ID=?
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=?
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=?
NEXT_PUBLIC_FIREBASE_APP_ID=?
NEXT_PUBLIC_FIREBASE_MESUREMENT_ID=?
```

Open Powershell or Shell command from graduation-project-website-by-donam folder and run Command from file Makefile to start the projects image

```bash
make start-full
```

Check the pg database, you can login to pg shell 

```bash
make pg-login
```

You can use this comment to style the psql table, only word on psql shell ( Optional )

```bash
\x auto
\pset linestyle unicode
\pset border 2
```




## Get Started Now!
You're all set! Follow the steps above to start developing with our Rental Sales Management Platform on local machine, then go to [localhost:3000](http://localhost:3000/) to check the website process in browser.

## Contact
For more information about the platform, please visit our website [WeldingStore](https://webweldingstores.vercel.app/) or contact us at namnhatvt2003@gmail.com.

## License

[MIT](https://choosealicense.com/licenses/mit/)
