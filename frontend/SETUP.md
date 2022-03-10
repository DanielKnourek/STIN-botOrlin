# Workspace setup

0. Get inicialization enviroment

    ~~~shell
        docker run --rm -it --mount type=bind,source=$pwd,target=/workspace node:16 /bin/sh
    ~~~

1. node project inicialization

    ~~~shell
    cd /workspace/frontend
    yarn create next-app --typescript frontend
    mv /workspace/frontend/frontend/* /workspace/frontend
    mv /workspace/frontend/frontend/.* /workspace/frontend
    rm -r /workspace/frontend/frontend
    ~~~

2. Configuring tailwind

    ~~~shell
    npm install -D tailwindcss postcss autoprefixer
    yarn add --dev tailwindcss postcss autoprefixer
    npx tailwindcss init -p

    echo "@tailwind base;
    @tailwind components;
    @tailwind utilities;" > styles/globals.css
    ~~~

    - customize tailwind.config.js based on online tutorial
