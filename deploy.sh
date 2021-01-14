#!/usr/bin/env bash

DIRECTORY="eksamen2021" # Directory name
DROPLET_URL="165.22.90.31" # Your own URL

echo "##############################"
echo "Building the frontend project"
echo "##############################"
npm run build

echo "##############################"
echo "Deploying Frontend project..."
echo "##############################"

scp -r ./build/* root@$DROPLET_URL:/var/www/$DIRECTORY

