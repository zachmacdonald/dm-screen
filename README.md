This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First to get started


```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To get planetscale working locally (see docs [here](https://planetscale.com/docs/tutorials/prisma-quickstart)):
- Create a planetscale account and starter database
- Create a development branch
- install the [planetscale cli](https://github.com/planetscale/cli#installation)
- run `pscale auth login` to login to planetscale
- run `pscale connect dm-screen <dev_branch_name> --port 3309` to connect to the database locally
- Create a .env file and define the following `DATABASE_URL = 'mysql://root@127.0.0.1:3309/<DATABASE_NAME>'`
- push the prisma schema up using `npx prisma db push`
- You should now be connected to your database, and can rerun the `pscale connect dm-screen <dev_branch_name> --port 3309` command anytime you need to reconnect

You can also run `npx prisma studio` to view prisma studio in your browser which will allow you to add records

