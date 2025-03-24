// Cognito Pool Config
const poolData = {
    UserPoolId: 'us-west-2_SgQo6AL6q', // Replace with your User Pool ID
    ClientId: '40j1qrd14heleb27n370b32oqi' // Replace with your App Client ID
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: username,
        Password: password
    });

    const user = new AmazonCognitoIdentity.CognitoUser({
        Username: username,
        Pool: userPool
    });

    user.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            alert("Login successful!");
            window.location.href = "/home"; // Redirect to home page
        },
        onFailure: function (err) {
            alert(err.message || JSON.stringify(err));
        }
    });
}

// Make function global
window.loginUser = loginUser;
