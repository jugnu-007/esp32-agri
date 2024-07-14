rm ./prisma/migrations
npx prisma generate
npx prisma migrate reset
npx prisma migrate dev --name init
