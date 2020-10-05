class ConnectionServer {

    /**
     *
     * @param endPoint
     * @param method
     * @param formData
     * @param resolve
     * @returns {Promise<Response>}
     */
    static sendRequest(endPoint,method = 'GET',formData,resolve)
    {

        var myHeaders = new Headers({
            "X-Requested-With": "XMLHttpRequest",
        });

        var myInit = {
            method: method,
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
            body: formData,
        };


        return fetch(endPoint,myInit)
            .then(function(response) {
                resolve(response.json())
            })
            .catch(function(error) {
                resolve(error)
            });

    }

}
