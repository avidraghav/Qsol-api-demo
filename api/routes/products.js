const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        'items':[
            {
                name: 'B.Tech 5th semester January 2021',
                url: 'https://firebasestorage.googleapis.com/v0/b/new-database-d16b8.appspot.com/o/IN%2FKU%2FCS%2F05%2FDatesheet%2FEngineering%20V%20Semester%20Examinations%20Jan%202021.pdf?alt=media&token=c38ca851-1060-47d1-adae-0015876927e7',
                id: '1',
            },
            {
                name: 'B.Tech 7th semester January 2021',
                url: 'https://firebasestorage.googleapis.com/v0/b/new-database-d16b8.appspot.com/o/IN%2FKU%2FCS%2F07%2FDatesheet%2FEngineering%20VII%20Semester%20Examinations%20Jan%202021.pdf?alt=media&token=43357cec-58c9-45b7-b0af-f608cae6db95',
                id: '1',            
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