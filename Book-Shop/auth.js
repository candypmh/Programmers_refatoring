const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const ensureAuthorization = (req, res) => {  //화살표 함수로 바꿔주면 됨
  try {
    let receivedJwt = req.headers["authorization"];
    console.log("receivedJwt: ", receivedJwt);

    if(receivedJwt){
      let decodedJwt = jwt.verify(receivedJwt, process.env.PRIVATE_KEY);
      console.log("decodedJwt: ", decodedJwt);
      return decodedJwt;
    }else{
      throw new ReferenceError("jwt must be provided"); //undefined다
    }
    
  } catch (err) {
    console.log("errName:", err.name);
    console.log("errMsg: ", err.message);

    return err;
  }
}

module.exports = ensureAuthorization;