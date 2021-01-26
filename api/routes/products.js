const express = require('express');
const router = express();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        'items':[
            {
                message: 'get working',
                id: '123',
                sex: 'm'
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

router.get('/:itemId', (req, res, next)=>{
const id = req.params.productId;
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