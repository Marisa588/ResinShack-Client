let APIURL = '';

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL ='http://localhost:5432';
        break;
    case 'julees-resin-shack-client.herokuapp.com':
        APIURL = 'https://julees-resin-shack-client.herokuapp.com'
}

export default APIURL;