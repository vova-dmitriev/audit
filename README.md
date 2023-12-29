# Audit App
Webb Application for manage audit projects. Using React, Typescript, Zustand, Chakra UI. <br>
Application includes pages:  
- a clients list (/)
- a client's project list (/[client])
- markdown feedback form with live preview (/[client]/project). 


## Demo
Demo available on following link: <a href="https://audit-tau.vercel.app/" target="_blank">https://audit-tau.vercel.app/</a>


## Install
```console
git clone https://github.com/vova-dmitriev/audit.git
```
``` console
cd audit
```
``` console
cp env.sample .env
```

Using Nodejs locally:
``` console
yarn
```
```console
yarn run dev
```

Using Docker-container:
```console
docker build -t audit .
```
``` console
docker run --publish 3000:3000 audit
```