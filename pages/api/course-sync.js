import agilityMgmt from '@agility/content-management'
import agility from '@agility/content-fetch'



//Create fetch API instance
const apiFetch = agility.getApi({
    guid: '191309ca-e675-4be2-bb29-351879528707',
    apiKey: 'aGd13M.fa30c36e553a36f871860407e902da9a7375322457acd6bcda038e60af699411',
    isPreview: false
});

//Create content Management API instance
const apiMgmt = agilityMgmt.getApi({
    location: 'USA',
    websiteName: 'CineMed',
    securityKey: 'QwBpAG4AZQBNAGUAZAAtADYAQgA2AEEAMABFAEEAOAAtAEYANQBBADkALQA0AEIAQQA5AC0AOQAwAEYAMgAtADIAMABDADUANwBEAEYAQQA0AEUAQgA5AA=='
});
//Mocked ContentItem and variables(TO DELETE)
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
            //Get Authorization token
            const { authorization } = req.headers;

            if (authorization === `Bearer ${process.env.AGILITY_SECURITY_KEY}`) {

                try{
                    let courseList = await apiFetch.getContentList({
                        referenceName: "syncTestAvailabe",
                        locale: languageCode,
                        take:50
                    })
                    console.log("courseList");
                    console.log(courseList);
                }catch (e){
                    console.log("Content fetch Error!: ",e)
                }



                try {
                    await apiMgmt.deleteContent({
                        contentID: 508,
                        languageCode
                    })
                }catch (e) {
                    console.log(e)
                }

                await apiMgmt.saveContentItem({
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
