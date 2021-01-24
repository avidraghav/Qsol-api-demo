const express = require('express');
const router = express();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'get working',
        id: '123',
        sex: 'm'
    });
});
router.post('/', (req, res, next) =>{
    res.status(201).json(
        {
            "items": [
                {
                    name: 'Engineering V Semester Examinations Jan 2021',
                    papercount: '1'
                },
                {
                    name: 'Engineering VII Semester Examinations Jan 2021',
                    papercount: '1'
                },
            ]
    }
    );
});

module.exports = router;