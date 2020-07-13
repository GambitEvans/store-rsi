async function getPaged(req, res) {
    const { limit, skip } = req.params;
    try {
        return res.json({ status: 200, 
            data: await require('./productService').getPaged(limit, skip), 
            total: await require('./productService').count() })
    } catch(err) {
        console.log(err);
        return res.json({ status: 500,
            data: err });
    }
}

async function create(req, res) {
    try {
        const productParam = extractProductFromReq(req);
        return  res.json({ status: 200, 
            data: await require('./productService').create(productParam) });

    } catch(err) {
        return res.json({ status: 500, 
            data: err });
    }
}

async function deleteById(req, res) {
    try {
        const { id } = req.params;
        return res.json({status: 200, 
            data: await require('./productService').deleteById(id) });
    } catch(err) {
        console.log(err);
        return res.json({status: 500, data: err});
    }
}

function extractProductFromReq(req) {
    const productParam = {
        name: req.body.name,
        price: req.body.price,
        img: req.files.img.path
    }
    return productParam;
}

module.exports = {
    getPaged,
    create,
    deleteById
}