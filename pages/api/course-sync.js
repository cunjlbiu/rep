import agilityMgmt from '@agility/content-management'

//Create a new instance API client
const api = agilityMgmt.getApi({
    location: 'USA',
    websiteName: 'CineMed',
    securityKey: 'QwBpAG4AZQBNAGUAZAAtADYAQgA2AEEAMABFAEEAOAAtAEYANQBBADkALQA0AEIAQQA5AC0AOQAwAEYAMgAtADIAMABDADUANwBEAEYAQQA0AEUAQgA5AA=='
});
let contentItem = {
    contentID: -1,
    fields: {
        "Time": "Test time",
        "Type": "test type"
    }
}
let languageCode = "en-us";
let referenceName = "testsync";


export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { authorization } = req.headers;
            console.log(authorization)
            if (authorization === `Bearer ${process.env.AGILITY_SECURITY_KEY}`) {

                await api.saveContentItem({
                    contentItem,
                    languageCode,
                    referenceName
                })
                    .then(function(contentID) {
                        //check contentID is greater > 0 for success
                           //update contentID of saved item
                        console.log(contentID)
                        console.log(`contentID`)
                    })
                    .catch(function(error) {
                        console.log(`error`)
                        console.log(error)
                    });

                res.status(200).json({ success: true });
            } else {
                res.status(401).json({ success: false });
            }
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
