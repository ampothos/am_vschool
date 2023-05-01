//sum of two numbers
function sum(x, y) {
    if (typeof(x) != Number || typeof(y) != Number) {
        throw ("One or both of these is not a number")
    }
    return x+y
    
}

try{
    sum("1", "2")
}
catch(err) {
    console.log(err)
}

var user = {username: "sam", password: "123abc"};
function login(username, password){
  if (username != user.username || password != user.password) {
    throw ("Incorrect username or password.")
  }
  console.log("Login successful")
  return true
}

try {
    login("User", "123abc")
}
catch(err) {
    console.log(err)
}
