let APIURL = '';

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL ='http://localhost:3001';
        break;
    case 'julees-resin-shack-client.herokuapp.com':
        APIURL = 'https://julees-resin-shack-server.herokuapp.com'
}

export default APIURL;