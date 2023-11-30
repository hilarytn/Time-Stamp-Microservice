// @desc    Get date in unix and utc format
// @route   POST /api/:date?/
// @access  Public
export const getDate = async (req, res) => {
    let dateToParse = req.params.date;
    let regEx1 = /^\d{4}-\d{2}-\d{2}$/;
    let regEx2 = /^\d+$/;
    let validDate = new Date(dateToParse).toUTCString();
    if (!dateToParse) {
        let date = new Date();
        let unix = date.getTime();
        let utc = date.toUTCString();
        res.json({
            "unix": unix,
            "utc": utc
        });
  
    } else if(regEx1.test(dateToParse)) {
        let date = new Date(dateToParse);
        let unix = date.getTime();
        let utc = date.toUTCString();

        res.json({
        "unix":  unix, 
        "utc": utc
        }); 
    } else if (regEx2.test(dateToParse)) {
        let date = new Date(parseInt(dateToParse));
        let unix = date.getTime();
        let utc = date.toUTCString();

        res.json({
        "unix":  unix, 
        "utc": utc
        })
    }else if (validDate !== "Invalid Date") {
        let date = new Date(dateToParse);
        let unix = date.getTime();
        let utc = date.toUTCString();
        try {
            res.json({
            "unix":  unix, 
            "utc": utc
            })
        } catch(error) {
            res.json({
            "error": "Invalid Date"
            })
        }
    }
    else {
        res.json({
            "error": "Invalid Date"
        })
    }
}