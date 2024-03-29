import agilityMgmt from '@agility/content-management'
import agility from '@agility/content-fetch'




//Create fetch API instance
const apiFetch = agility.getApi({
    guid: '35589fd6-u',
    apiKey: 'defaultpreview.f46c10b941891acfe25499f94720d985ac5370ac66dd69ce2eb9221bc787876b',
    isPreview: true
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

            if (authorization === `Bearer ${process.env.AGILITY_SECURITY_KEY}`|| true) {
                let courseList
                try{
                    courseList = await apiFetch.getContentList({
                        referenceName: "synctestavailabe",
                        locale: languageCode,
                        take:50
                    })
                }catch (e){
                    //console.log("Content fetch Error!: ",e)
                }

                try {
                    for (let item of courseList?.items){
                        if(!((item.fields.onDemand && item.fields.onDemand !=="false") || new Date(item.fields.endDate)>Date.now() || new Date(item.fields.startDate)>Date.now())){
                           //console.log(item.fields.id)
                            let cItem = await apiMgmt.getContentItem({
                                languageCode: 'en-us',
                                contentID: item.contentID,
                            })
                            let generatedCourse ={
                                        contentID:-1,
                                        fields:{}
                                    }
                            for(let k in cItem.fields){
                                if (cItem.fields[k]){
                                    generatedCourse.fields[k]=cItem.fields[k]
                                }
                            }
                            let savedItem = await apiMgmt.saveContentItem({
                                    contentItem: generatedCourse,
                                    languageCode:'en-us',
                                    referenceName:'synctestarchived'
                                })
                            if (savedItem > 0){
                                generatedCourse.contentID=cItem.contentID
                                generatedCourse.fields.Instructors = "";
                                generatedCourse.fields.include = "";
                                generatedCourse.fields.Schedule = "";
                                let garbage = await apiMgmt.saveContentItem({
                                    contentItem: generatedCourse,
                                    languageCode:'en-us',
                                    referenceName:'synctestavailabe'
                                })
                                await apiMgmt.deleteContent({
                                    contentID: garbage,
                                    languageCode
                                })
                            }

                            //    .then(function (content){
                            //     let generatedCourse ={
                            //         contentID:-1,
                            //         fields:{}
                            //     }
                            //     for(let k in content.fields){
                            //         if (content.fields[k]){
                            //             generatedCourse.fields[k]=content.fields[k]
                            //         }
                            //     }
                            //
                            //     apiMgmt.saveContentItem({
                            //         contentItem: generatedCourse,
                            //         languageCode:'en-us',
                            //         referenceName:'synctestarchived'
                            //     }).then(function (contentID){
                            //         if(contentID > 0){
                            //             apiMgmt.deleteContent({
                            //                     contentID: item.contentID,
                            //                     languageCode
                            //                 })
                            //         }
                            //     })
                            // })
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
                    //console.log(e)
                }


                // try {
                //     await apiMgmt.deleteContent({
                //         contentID: 508,
                //         languageCode
                //     })
                // }catch (e) {
                //     console.log(e)
                // }
                //
                // await apiMgmt.saveContentItem({
                //     contentItem,
                //     languageCode,
                //     referenceName
                // })
                //     .then(function(contentID) {
                //         //check contentID is greater > 0 for success
                //            //update contentID of saved item
                //         console.log(contentID)
                //         console.log(`contentID`)
                //     })
                //     .catch(function(error) {
                //         console.log(`error`)
                //         console.log(error)
                //     });

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
