exports.newWebServerRoute = function newWebServerRoute() {
    const thisObject = {
        endpoint: 'WebServer',
        command: command
    }

    return thisObject

    function command(httpRequest, httpResponse) {
        let requestPathAndParameters = httpRequest.url.split('?') // Remove version information
        let requestPath = requestPathAndParameters[0].split('/')
        SA.projects.foundations.utilities.httpResponses.respondWithFile(global.env.PATH_TO_PLATFORM + '/WebServer/' + requestPath[2], httpResponse)
    }
}