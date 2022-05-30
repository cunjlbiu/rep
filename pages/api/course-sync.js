import agilityMgmt from '@agility/content-management'
import agility from '@agility/content-fetch'
import saveContentItem from "@agility/content-management/src/methods/content/saveContentItem";



//Create fetch API instance
const apiFetch = agility.getApi({
    guid: '35589fd6-u',
    apiKey: 'defaultlive.48286711fe6ec4b8a5a88fc5cb74ef10eea5f5dd9fc14cdb71eb7d6a1847f8d8',
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
                let courseList
                try{
                    courseList = await apiFetch.getContentList({
                        referenceName: "synctestavailabe",
                        locale: languageCode,
                        take:50
                    })
                }catch (e){
                    console.log("Content fetch Error!: ",e)
                }

                try {
                    for (let item of courseList?.items){
                        if(!(item.fields.onDemand || new Date(item.fields.endDate)>Date.now() || new Date(item.fields.startDate)>Date.now())){
                            let k = await apiMgmt.getContentItem({
                                languageCode: 'en-us',
                                contentID: item.contentID,
                            })
                            console.log("!!!!!content item!!!!!!!",k)
                            k.contentID = -1
                            await apiMgmt.saveContentItem({
                                contentItem: k,
                                languageCode,
                                referenceName: 'synctestarchived'
                            })
                        }
                            // await apiMgmt.saveContentItem({
                            //     contentItem:{
                            //         contentID: item.contentID
                            //     },
                            //     languageCode,
                            //     referenceName: 'synctestarchived'
                            // }).then(function (contentID){
                            //     console.log("content saved with id: ",contentID)
                            // })
                            // // await apiMgmt.deleteContent({
                            // //     contentID: item.contentID,
                            // //     languageCode
                            // // })
                    }
                }catch (e) {
                    console.log(e)
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
