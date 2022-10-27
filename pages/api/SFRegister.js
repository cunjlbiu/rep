let ACCESSSTOKEN;
const auth = (cred, user)=> {
    if (cred.totalSize == 1 && cred.records[0].Email == user.username && cred.records[0].Credentials__c == user.password){
        return {
            id: cred.records[0].Id,
            name: cred.records[0].Name,
            email: cred.records[0].Email
        }
    }
    return false

}

export default async function handler(req, res) {
    const {
        method
    } = req


    switch (method){
        case 'POST':
            if(!ACCESSSTOKEN){
                let response = await fetch('https://test.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG9c1ghSpUbLl.Q12ObsgcWNlXL9WcfpR5zCD2z.0znnOq1HZuZ60IdjTpBJp5tiZOpww8xSle0N0Ze1VmV&client_secret=903528DF98F542729FCC4D2D5C9FD92DA05727670CAEDB522E007A83BAF61209&username=imcgovern@cine-med.net.cinemedsb&password=abc123!@%23%23', {
                    method: 'POST'
                });
                ACCESSSTOKEN = await response.json()
            }
            //console.log("emailresult!!!!");
            //console.log(JSON.parse(req.body).Email);
            let emailCheck = await fetch(`https://cinemed--cinemedsb.my.salesforce.com/services/data/v52.0/query/?q=SELECT+name,+id,Account.name,account.id,email,Credentials__c+from+Contact+where+Email=%27${JSON.parse(req.body).Email}%27`,{
                headers : {"Authorization":`${ACCESSSTOKEN.token_type} ${ACCESSSTOKEN.access_token}`,
                    "Content-Type": "application/json" }
            })
            let emailResult = await emailCheck.json()
            //console.log(emailResult);
            if (emailResult.totalSize != 0){
                res.status(200).json(JSON.stringify({success: false, Error:"User with this email already exists"}))
                break;
            }

            let user = await fetch(`https://cinemed--cinemedsb.my.salesforce.com/services/data/v25.0/sobjects/Contact/`,{
                method:'POST',
                headers : {"Authorization" :`${ACCESSSTOKEN.token_type} ${ACCESSSTOKEN.access_token}`,
                    "Content-Type": "application/json" },
                body:req.body

            })

            let credentials = await user.json();
            res.status(200).json(credentials);

            break;


        case 'GET':
            res.status(200).json(ACCESSSTOKEN);
            break;
    }

}