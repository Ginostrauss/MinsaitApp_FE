# Scegliere una versione di Node.js compatibile con la versione di Angular CLI
FROM node:18.13

# Impostare la directory di lavoro nel contenitore
WORKDIR /app

# Installare Angular CLI globalmente
RUN npm install -g @angular/cli

# Copiare il file package.json e package-lock.json (se presente)
COPY package*.json /app/

# Installare le dipendenze del progetto
RUN npm install

# Copiare il resto dei file del progetto
COPY . /app

# Esporre la porta su cui Angular sarà in esecuzione
EXPOSE 4200

# Comando per avviare l'applicazione Angular
CMD ["ng", "serve", "--host", "0.0.0.0"]
