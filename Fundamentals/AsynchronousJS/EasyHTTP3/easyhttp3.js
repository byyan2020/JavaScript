class EasyHTTP {
    // Make an HTTP GET request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    // Make an HTTP POST Request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    // Make an HTTP PUT Request
    async put(url, data) {
        const response = await fetch(url, {
                method: 'PUT',
                header: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await response.json();
            return resData;
    }

    // Make an HTTP DELETE Request
    async delete(url) {
        const response = await fetch(url, {
                method: 'DELETE',
                header: {
                    'Content-type': 'application/json'
                },
            })
        return 'Delete...';
    }
}