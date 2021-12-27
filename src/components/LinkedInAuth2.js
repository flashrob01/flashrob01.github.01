var request = require('request');


function callMeAPI(accessToken, done){
	request.get({url:"https://api.linkedin.com/v2/me",headers:{"Authorization": "Bearer "+accessToken}}, function(err,res,responseBody){
		if (err) {
			console.log(err);
			done(err,null); 
		}
		else {
			console.log(responseBody);
			done(null,JSON.parse(responseBody)); 
		}
	});
}

function callEmailAPI(accessToken, done){
	request.get({url:"https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",headers:{"Authorization": "Bearer "+accessToken}}, function(err,res,responseBody){
		if (err) {
			console.log(err);
			done(err,null); 
		}
		else {
			console.log(responseBody);
			done(null,JSON.parse(responseBody)); 
		}
	});
}


function main(authCode, done){
	getAccessToken(authCode,function(err, res){
		if (err) {done(err)}
		else{
			var access_token = res.access_token;
			callMeAPI(access_token,function(err, res){
				if (err) {done(err)}
				else{
					var firstname = res.localizedFirstName;
					var lastname = res.localizedLastName;
					callEmailAPI(access_token,function(err, res){
						if (err) {done(err)}
						else{
							var email = res.elements[0]["handle~"].emailAddress;
							done(null,"success");
						}
					});
				}
			});
		}
	});
}

function getAccessToken(authCode, done){
	request.post({url:"https://www.linkedin.com/oauth/v2/accessToken",form:{
		grant_type:'authorization_code',
		code:authCode,
		redirect_uri:'http%3A%2F%2Flocalhost%3A3001',
		client_id:'868dd98yvyhfen',
		client_secret:'qxXla7X8WC5lxd2h',
	}}, function(err,res,responseBody){
		if (err) {
			console.log(err);
			done(err,null); 
		}
		else {
			console.log(responseBody);
			done(null,JSON.parse(responseBody)); 
		}
	});
}

exports.handler = (event, context, callback) => {
	const done = (err, res) => callback(null, {
		statusCode: err ? '400' : '302',
		body: err ? err.message : JSON.stringify(res),
		headers: {
			'Location': 'URL_TO_YOUR_HOMEPAGE',
			'Content-Type': 'text/html',
			'Access-Control-Allow-Methods': 'DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT',
			'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
			'Access-Control-Allow-Origin': '*'
		},
	});
	if (event){
		switch (event.httpMethod) {
			case 'GET':
				if (event && event.queryStringParameters && event.queryStringParameters.code && event.queryStringParameters.state){ 
					var state = decodeURIComponent(event.queryStringParameters.state);
					var code = decodeURIComponent(event.queryStringParameters.code);
					main(code, done);
				} else {
					console.log("ERROR:  Malformed query parameters. Expected code and state.");
					done(new Error('<h1>Something went wrong. Please go back and use the email signup instead.</h1>'));  
				}
        	break;
		}
	}
}