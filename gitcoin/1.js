import express from "express"
import axios from "axios"

const app = express();
const port = 3002;

const client_id = 'e6fe1463d1e010ddac1d';
const client_secret = '0afeb26b76baaacfb16d737d02b109fffb1975c4';
const redirect_uri = 'http://192.168.68.189:3002/callback';
const scope = 'repo';


app.get('/', (req, res) => {
  const authorize_url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`;
  res.redirect(authorize_url);
});

app.get('/callback', async (req, res) => {
  console.log(req.query)
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
    // console.log(user_response)
    const user = user_response.data;
    console.log(user)
    const user_pr_url = 'https://api.github.com/user/issues?filter=all&state=all&type=pr';
    const user_pr_response = await axios.get(user_pr_url, {
      headers: {
        Authorization: `Token ${access_token}`,
        Accept: 'application/json'
      }
    });
    console.log(user_pr_response);
    // console.log(user_pr_response.data);
    console.log("PR Raised")
    const user_prs = user_pr_response.data.map(pr => ({
      repoName: pr.repository.name,
      user: pr.user.login,
      status: pr.state,
      merge:pr.merged == undefined ? false :true
    }));
    console.log(user_prs);
    res.send(`Welcome, ${user.name} (${user.login})`);
  } catch (error) {
    res.send("error")
    console.error(error)
  }


});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});