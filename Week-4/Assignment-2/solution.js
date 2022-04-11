function ajax(src, callback) {
    const httpReq = new XMLHttpRequest();
    httpReq.onreadystatechange = () => {
        if (httpReq.readyState === XMLHttpRequest.DONE) {
            if (httpReq.status === 200) {
                const result = JSON.parse(httpReq.responseText);
                console.log(result);
                callback(result);
            } else {
                ("There was a problem with the request.");
            }
        }
    };
    httpReq.open("GET", src);
    httpReq.send();
}

function render(data) {
    const inputData = data[0];
    const newUl = document.createElement("ul");
    for (const property in inputData) {
        const newLi = document.createElement("li");
        // console.log(`${property}:${inputData[property]}`);
        const newContent = document.createTextNode(
            `${property}:${inputData[property]}`
        );
        newLi.appendChild(newContent);
        newUl.appendChild(newLi);
    }
    document.body.appendChild(newUl);
}

ajax(
    "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
    function (response) {
        render(response);
    }
); // you should get product information in JSON format and render data in the page
