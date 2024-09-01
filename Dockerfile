FROM node:20.15.1

# //creer la repertoire de travaille

WORKDIR /app
#copirr le packcage de l'ensemble du projet
COPY . .
#installer le cli Run nous permet de lancer des instructions

RUN npm install -g @angular/cli@18.1.0
RUN npm install --force
#RUN npm install --legacy-peer-deps

#installer les package

 #LOCAL

 EXPOSE  4200

 CMD npm run start
