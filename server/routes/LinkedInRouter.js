import axios from 'axios';



var express = require('express');
var LinkedInRouter = express.Router();
const request = require('superagent');

const config = require('dotenv').config();


//"'linkedin-sso-response' refers to the route path name, not the database table name!
//below is 4 axios.get calls within a POST call!
//Was able to obtain access auth token via NPMJS package install
//Per Lakareddy, I am running into CORS error because cannot do a access token request call from front-end; needs to come from back-end (Axios)
//https://www.wellhow.online/2021/04/setting-up-linkedin-oauth-and-fixing.html?m=1
LinkedInRouter.post("/linkedin-sso-response", async (req, res) => {
    try {
      if (!req.body.redirectUri || !req.body.authCode) {
        return res.json({ msg: "Some Error occured! Try again" });
      }
      const { authCode, redirectUri } = req.body;
      const clientId = config.get("clientId");
      const clientSecret = config.get("clientSecret");
      var response = await axios.get(
        `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&code=${authCode}&redirect_uri=${redirectUri}`
      );
      const accessToken = response.data ? response.data.access_token : "";
      const configA = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const userData = await axios.get("https://api.linkedin.com/v2/me", configA);
      const name =
        userData.data.localizedFirstName + userData.data.localizedLastName
          ? userData.data.localizedFirstName +
            " " +
            userData.data.localizedLastName
          : "";
  
      const profilePicture = await axios.get(
        "https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))",
        configA
      );
  
      const elements =
        profilePicture.data.profilePicture["displayImage~"].elements;
      const identifier =
        elements && elements.length > 0
          ? elements[elements.length - 1].identifiers
          : {};
      const profilePic = identifier && identifier[0] && identifier[0].identifier;
  
      const emailData = await axios.get(
        "https://api.linkedin.com/v2/clientAwareMemberHandles?q=members&projection=(elements*(name,primary,type,handle~))",
        configA
      );
  
      const emailUser =
        emailData.data && emailData.data.elements && emailData.data.elements[0]
          ? emailData.data.elements[0]["handle~"].emailAddress
          : "";
  
      if (emailUser && name) {
        return res.json({
          name: name,
          profilePic: profilePic,
          email: emailUser,
        });
      } else {
        return res.json({ msg: "Some Error occured! Try again" });
      }
    } catch (err) {
      // console.log(err)
      return res.status(500).json(err);
    }
  });