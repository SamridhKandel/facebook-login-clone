let saveFile = () => {
    
    // Get the data from each element on the form.
    const email = document.getElementById('txtemail');
    const password = document.getElementById('txtpw');

    
    // This variable stores all the data.
    let data = 
        '\r email: ' + email.value + ' \r\n ' + 
        'password: ' +password.value + ' \r\n ';
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}
export default saveFile;