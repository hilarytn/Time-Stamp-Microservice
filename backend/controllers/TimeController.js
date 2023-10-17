// @desc    Get date in unix and utc format
// @route   POST /api/:date?/
// @access  Public
export const getDate = async (req, res) => {
    let dateToParse = req.params.date;
    
    if (!dateToParse) {
        let noDateUnix = new Date();
        res.json({
            unix:  Math.ceil(noDateUnix.getTime() / 1000),
            utc: noDateUnix.toUTCString()
        });
    } else {
        let newDate = new Date(parseInt(dateToParse));
        let unixDate = parseInt(dateToParse);

        if (newDate.toString() === "Invalid Date") {
            res.json({ error: "Invalid Date" });
        } else {
            let utcDate = newDate.toUTCString();
            res.json({
                unix: unixDate,
                utc: utcDate
            });
        }
    }
}