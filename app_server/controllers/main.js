const index = (req, res) => {
    res.render('index', { title: 'TravelMate' });
};
module.exports = {
    index
    };