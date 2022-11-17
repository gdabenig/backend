const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    const { 
        signedCookies
        // cookies 
    } =  req
    // console.log(req.cookies)
    res.status(200).json({signedCookies})
})


router.get('/set', (req, res) => {
    const { cookies } =  req
    res.cookie('nombre','Guillermo',{
        signed: true
    })
    // console.log(req.cookies)
    res.status(200).json({
        message: 'Cookie seteada',
        succes: true
    })
})

router.get('/setEx', (req, res) => {
    const { cookies } =  req
    res.cookie('apellido','Dabenigno', { 
        // signed: true,
        maxAge: 30000 
    })
    // console.log(req.cookies)
    res.status(200).json({
        message: 'Cookie seteada',
        succes: true
    })
})
router.get('/borrar', (req, res) => {
    const { cookies } =  req
    res.clearCookie('nombre')
    // console.log(req.cookies)
    res.status(200).json({
        message: 'Cookie borrada',
        succes: true
    })
})



module.exports = router
