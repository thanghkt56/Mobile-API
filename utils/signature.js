var EC = require("elliptic").ec;
const crypto = require("crypto");
var ec = new EC("p256");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
exports.genSignature = function (pretxID)
{
    let privKey = Buffer.from(
        process.env.PRIVATE_KEY,
        "hex"
      );
    let key = ec.keyFromPrivate(privKey);
      
    //var pubPoint = key.getPublic();
    //var pubKey = pubPoint.encode("hex");
    //console.log("Public key: " + pubKey);
      
    msg32 = Buffer.from(pretxID);
    const msgHash = crypto.createHash("sha256").update(msg32).digest();
      
    let signature = key.sign(msgHash);
      
    //console.log("Signature: " + Buffer.from(signature.toDER()).toString("hex"));
    return Buffer.from(signature.toDER()).toString("hex");
}

