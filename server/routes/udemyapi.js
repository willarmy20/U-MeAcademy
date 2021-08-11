const router= require("express").Router();
const axios= require('axios');

router.get('/courses', async(req,res)=> {
        const data = await axios.get("https://www.udemy.com/api-2.0/courses/?category=Development&page=21&page_size=12", {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": "Basic N0YyRkw0bEhIMGI2UnZ5ZG5CQklDNWd6Tzl0T3RsaFdnNHFoa3BHcDpaM0MyS1Bob0dpTnlhR3FFSGJDamtTQkFLVzh4Mlc4SVExcUFlNXdHSkl5T1VTd1dmTFFHUk10SVdlN0NMUkJwSlJkMFFxcFdaQXlFblNSZ3hwd09nZEtyWWFqWlQ3bEloTElVOWFxV1N4dUdxTWduVGM3WFQzQlZid3dSbFNKSA==",
                "Content-Type": "application/json;charset=utf-8"
            }
            })
        res.send({result:data.data})
})

module.exports = router