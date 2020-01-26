#!/bin/bash

cd frontend
npm run build --prod
cd ..
docker-compose up --build 