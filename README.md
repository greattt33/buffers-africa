# buffers-africa
Newletter landing page
This site ahve a react frontend and Node js backend. 

To connect the frontend to the backend, an api call is made to the backend using axios post method to send data to the backend which is then used to make another axios post request to the mailchimp server.

In the package.json file for the react app, a proxy was added to locat the backend. while the package.josn for the backend, start added to enable it to start with npm start.

to start Both frontend and backend app, they both need to be started at seperate terminal with npm start. I think both can made to start once in one terminal by installing concurrently. 

the libraries used include; (react-icons, styled-components,axios for the frontend and backend, react-router-dom,axios) for frontend, (express, body-parser,axios,cors) for backend

you might need to ccheck online on how to configure the react app for production so as to remain connected to the backend.







