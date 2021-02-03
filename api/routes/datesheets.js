const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        'items':[
            {
                name: 'Engineering V Semester Examinations Jan 2021',
                url: 'https://firebasestorage.googleapis.com/v0/b/new-database-d16b8.appspot.com/o/IN%2FKU%2FCS%2F05%2FDatesheet%2FEngineering%20V%20Semester%20Examinations%20Jan%202021.pdf?alt=media&token=c38ca851-1060-47d1-adae-0015876927e7',
                directory:'IN/KU/CS/05/Datesheet',
            },
            {
                name: 'Engineering VII Semester Examinations Jan 2021',
                url: 'https://firebasestorage.googleapis.com/v0/b/new-database-d16b8.appspot.com/o/IN%2FKU%2FCS%2F07%2FDatesheet%2FEngineering%20VII%20Semester%20Examinations%20Jan%202021.pdf?alt=media&token=43357cec-58c9-45b7-b0af-f608cae6db95',
                directory:'IN/KU/CS/07/Datesheet',         
            },
            {
                name: 'BBA 1st sem Jan 2021',
                url: 'https://firebasestorage.googleapis.com/v0/b/new-database-d16b8.appspot.com/o/IN%2FKU%2FBB%2F01%2FDatesheet%2FBBA%201st%20sem%20Jan%202021.pdf?alt=media&token=a8ee20f7-efee-45cf-a906-8b54ee431736',
                directory:'IN/KU/BB/01/Datesheet',           
            },
            {
                name: 'BBA 3rd sem Jan 2021',
                url: 'https://firebasestorage.googleapis.com/v0/b/new-database-d16b8.appspot.com/o/IN%2FKU%2FBB%2F03%2FDatesheet%2FBBA%203rd%20sem%20Jan%202021.pdf?alt=media&token=f777272f-7abb-402d-94cf-abd2fbcf648f',
                directory:'IN/KU/BB/03/Datesheet',           
            },
            {
                name: 'BBA 5th sem Jan 2021',
                url: 'https://firebasestorage.googleapis.com/v0/b/new-database-d16b8.appspot.com/o/IN%2FKU%2FBB%2F05%2FDatesheet%2FBBA%205th%20sem%20Jan%202021.pdf?alt=media&token=c5d91675-ca8f-42e7-ab25-d52b7fb9629a',
                directory:'IN/KU/BB/05/Datesheet',           
            },
            {
                name: 'BCA 1st sem Jan 2021',
                url: 'https://firebasestorage.googleapis.com/v0/b/new-database-d16b8.appspot.com/o/IN%2FKU%2FBC%2F01%2FDatesheet%2FBCA%201st%20sem%20Jan%202021.pdf?alt=media&token=c28d6875-729a-419e-8812-67ba6135302b',
                directory:'IN/KU/BC/01/Datesheet',           
            },
            {
                name: 'BCA 3rd sem Jan 2021',
                url: 'https://firebasestorage.googleapis.com/v0/b/new-database-d16b8.appspot.com/o/IN%2FKU%2FBC%2F03%2FDatesheet%2FBCA%203rd%20sem%20Jan%202021.pdf?alt=media&token=7144bfda-01e3-4492-8c6a-7fa6325f7279',
                directory:'IN/KU/BC/03/Datesheet',           
            },
            {
                name: 'BCA 5th sem Jan 2021',
                url: 'https://firebasestorage.googleapis.com/v0/b/new-database-d16b8.appspot.com/o/IN%2FKU%2FBC%2F05%2FDatesheet%2FBCA%205th%20sem%20Jan%202021.pdf?alt=media&token=9767b10c-9508-433f-91ef-0bce3ca1d144',
                directory:'IN/KU/BC/05/Datesheet',           
            },
            {
                name: 'MBA 3rd sem January 2021',
                url: 'https://firebasestorage.googleapis.com/v0/b/new-database-d16b8.appspot.com/o/IN%2FKU%2FMB%2F03%2FDatesheet%2FMBA%203rd%20sem%20January%202021.pdf?alt=media&token=fb1f3843-5266-46ec-a4b2-5f64224ef582',
                directory:'IN/KU/MB/03/Datesheet',           
            }

           
        ]
     
    });
});
router.post('/', (req, res, next) =>{
    res.status(201).json(
        {
        message: 'post working',
        id: '123',
        sex: 'm'
    }
    );
});

router.get('/:itemId', (req, res, next) => {
const id = req.params.itemId;
if(id === 'special'){
    res.status(200).json({
        message: 'Special id',
        id: id
    });

}else{
    res.status(200).json({
        message: 'u passed an id'
    });
}

});

module.exports = router;