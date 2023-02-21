import express from "express"
import axios from "axios"

const app = express();
const port = 3002;

const client_id = 'e6fe1463d1e010ddac1d';
const client_secret = '23b05c0f35ba53f3c664bb6adbfe3a17a1338041';
const redirect_uri = 'http://192.168.68.189:3002/callback';
const scope = 'repo';


app.get('/', (req, res) => {
  const authorize_url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`;
  res.redirect(authorize_url);
});

app.get('/callback', async (req, res) => {
  const code = req.query.code;
  console.log(code)
//   console.log(code)
  const token_url = `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`;
  try {
    const response = await axios.post(token_url, {}, {
        headers: {
          Accept: 'application/json'
        }
      });
      const access_token = response.data.access_token;
      console.log(access_token);
   
      const user_url = 'https://api.github.com/user';
      const user_response = await axios.get(user_url, {
        headers: {
          Authorization: `Token ${access_token}`,
          Accept: 'application/json'
        }
      });


      const user_repourl = 'https://api.github.com/user';
      const user_res = await axios.get(user_url, {
        headers: {
          Authorization: `Token ${access_token}`,
          Accept: 'application/json'
        }
      });


      console.log(user_response)
      const user = user_response.data;
      console.log(user)
      res.send(`Welcome, ${user.name} (${user.login})`);
  } catch (error) {
    console.error(error)
  }
  

});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});