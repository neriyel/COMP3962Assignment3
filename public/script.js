// Cognito Pool Config
const poolData = {
    UserPoolId: 'us-west-2_SgQo6AL6q',
    ClientId: '2obdq5rikmjcnmnlebn5jv152j'
};

console.log(window.AmazonCognitoIdentity);

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

// Login 
function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const authData = {
        Username: username,
        Password: password
    };

    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authData);

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

// Register user
function signUpUser() {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    const email = document.getElementById("signup-email").value;
    const address = document.getElementById("signup-address").value;

    const attributeList = [
        new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "email", Value: email }),
        new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "address", Value: address })
    ];

    userPool.signUp(username, password, attributeList, null, (err, result) => {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        alert("Signup successful! Please check your email for a confirmation code.");
    });
}

function logoutUser() {
    const user = userPool.getCurrentUser();
    if (user) {
        user.signOut();
        alert("Logged out successfully!");
        window.location.href = "/"; // Redirect to home page
    } else {
        alert("No user is logged in.");
    }
}

// Make functions global
window.logoutUser = logoutUser;
window.signUpUser = signUpUser;
window.loginUser = loginUser;
