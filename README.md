# React + Redux + Socket.io

A realtime chat app in React + Redux + Socket.io (with node and express);

This application uses WebSockets to realtime communication e localStorage to save the user settings.

The user interface was built with ReactJS and use Redux to manage data.

## How to setup

Clone the repository with:<br>
`git clone git@github.com:jeffersonrt/react-chat.git`

In the project directory, you can run:

#### `npm install`

Enter into project folder by the terminal and run `npm install`, in order to install all necessary packages.

#### `npm start`

After that, run `npm start` <br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `node /server/index.js`

In another terminal pane, run `node /server/index.js`, it is the chat server.

## How to use

Open [http://localhost:3000](http://localhost:3000) in two different browsers or in an incognito window.

Now each window can send a message between each other, like a chat.

On the menu `Settings` you can change de user preferences, like name, theme color, time format etc.
