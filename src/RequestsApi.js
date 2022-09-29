import axios from 'axios'
let status = null;



export async function ApiRegistrationEmail(url, EMAIL_SITE) {
    try {
        await axios.post(url, { EMAIL_SITE })
            .then((response) => {
                status = true;
            })
            .catch(function (error) {
                status = false;
            })
    } catch (error) {
        status = false;
    }
    return status;
}
export async function AccountsApiImportFileEnvJson(url) {
    try {
        await axios.get(url)
            .then((response) => {
                status = response.data;
            })
            .catch(function (error) {
                status = "false";
            })
    } catch (error) {
        status = "false";
    }
    return status;
}
export async function AccountsApiImportFileEnvDefaultsJson(url) {
    try {
        await axios.get(url)
            .then((response) => {
                status = response.data;
            })
            .catch(function (error) {
                status = "false";
            })
    } catch (error) {
        status = "false";
    }
    return status;
}

export async function login(url, username, password) {
  try {
    await axios
      .post(url, { username, password })
      .then((response) => {
        console.log("response", response);
        status = "true";
      })
      .catch(function (error) {
        console.log("error", error);
        status = "false";
      });
  } catch (error) {
    console.log("error 2 ", error);
    status = "false";
  }
  return status;
}


export async function AccountsApiAuth(
  url,
  resetPasswordToken,
  setHelloUser,
  helloUser,
  connectedSuccessfully,
  setConnectedSuccessfully
) {
  let token;
  try {
    if (resetPasswordToken != null) token = resetPasswordToken;
    else token = localStorage.token.replace(/['"]+/g, "");

    await axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setConnectedSuccessfully(false);
        if (response.data.payload[0].full_name)
          setHelloUser(response.data.payload[0].full_name.split(" ")[0]);
        else {
          setHelloUser(response.data.payload[0].username);
        }
        status = "true";
      })

      .catch(function (error) {
        setConnectedSuccessfully(true);

        if (error.response.status === 403 || error.response.status === 401) {
          localStorage.removeItem("token");
          status = "false";
        } else {
          console.error(error);
          status = "false";
        }
      });
  } catch (error) {
    console.log(error, "בעיה בחיבור לשרת");
    status = "false";
  }

  return status;
}

export async function AccountsApisignOut(url, token) {
  try {
    await axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        status = "true";
      })
      .catch(function (error) {
        status = "false";
      });
  } catch (error) {
    status = "false";
  }
  return status;
}

export async function ApiForgotPassword(url, username) {
  try {
      console.log(username)
    await axios.post(url, {username}, { headers: { "Content-Type": "application/json" } } )
      .then((response) => {
        status = "קישור לאיפוס סיסמה נשלח בהצלחה ";
      })
      .catch(function (error) {
        status =
          'אין באפשרותך לשחזר את הסיסמה דרך הדוא"ל, אנא פנה למוקד הטלפוני. תודה';
      });
  } catch (error) {
    status = "בעית שרת";
  }
  return status;
}
