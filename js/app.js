function CaesarCipher(str, num) {
    // you can comment this line
    str = str.toLowerCase();

    var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
    return result;

}


function CaesarCipher(str, num) {
    // you can comment this line
    str = str.toLowerCase();

    var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
    return result;

}

function CaesarDecipher(str, num) {
    // you can comment this line
    str = str.toLowerCase();

    var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) - num;
        result += String.fromCharCode(charcode);
    }
    return result;

}

function encrypt(message, messageLength) {
	/*
	var message = document.querySelector('#message').value;
	message = message.toLowerCase();
	var messageArray = message.split(" ");
	alert(messageArray);

	    for (var i = 0; i < messageArray.length; i++) {
        charcode = (messageArray[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
    return result;
    alert(result);
    */
    message = document.querySelector('#message').value;
	// message = message.toLowerCase(); 
	messageLength = message.length;
	//CaesarCipher(message, messageLength);
	//CaesarCipher(message, messageLength);
	alert(CaesarCipher(message, messageLength));
	
}

function decrypt(message, messageLength) {
	/*
	var message = document.querySelector('#message').value;
	message = message.toLowerCase();
	var messageArray = message.split(" ");
	alert(messageArray);

	    for (var i = 0; i < messageArray.length; i++) {
        charcode = (messageArray[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
    return result;
    alert(result);
    */
    message = document.querySelector('#message').value;
	// message = message.toLowerCase(); 
	messageLength = message.length;
	//CaesarCipher(message, messageLength);
	//CaesarCipher(message, messageLength);
	alert(CaesarDecipher(message, messageLength));
	
}