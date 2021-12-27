var request = require('request');
var access_token = 'AQXTPnkcT3yQ8R-T0CuSXqsO4ujxRGPHZZ-pCFeT6WwpOX-tnZP_o7v0vCHUE5Jk4km-2QALIZfxHT8SOVeO7oHSMzjZ3Tj1Uv5Yuuy5HV-IZ3xw7yB3utlxIL51MhiuTC4mnA3tCZUVcoiZBVifghdKzxARX9-4ELaOJR0LvzPdHLa9y1J_ks6uowdfxPHiQeJur8-a4074MJ80SaXeAHDkv8o9Ke-XU70BeO_aKs3FsO2VX7O98_U1KFg9bBuF8VMenn_hRtlRUjjaUP4esoGCLE_xHa1WbveebqDWc722lAG0zDKZHtQfa9b15CO2XfaRQ10053Gm4E2aTZbAdSpRAN_0fg';

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

function main(done){
	callMeAPI(access_token,function(err, res){
		if (err) {done(err)}
		else{
			var firstname = res.localizedFirstName;
			var lastname = res.localizedLastName;
			callEmailAPI(access_token,function(err, res){
				if (err) {done(err)}
				else{
					var email = res.elements[0]["handle~"].emailAddress;
					console.log(firstname+" "+lastname+" "+email);
					done(null,"success");
				}
			});
		}
	});
}

main(function(a,b){});


