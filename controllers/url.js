const { nanoid } = require('nanoid');
const Url = require('../models/url');

async function handleGetHome(req, res) {
    const urls = await Url.find({ createdBy: req.user._id });
    return res.render("home", { user: req.user, urls });
}

async function handlePostShortUrl(req, res) {
    const { redirectUrl } = req.body;

    if (!redirectUrl) {
        return res.redirect('/url/home');
    }

    try {
        await Url.create({
            redirectUrl,
            shortId: nanoid(8),
            visitHistory: [],
            createdBy: req.user._id
        });

        return res.redirect('/url/home');
    } catch (error) {
        return res.redirect('/url/home');
    }
}

async function handleDeleteUrl(req, res) {
    const { id } = req.params;

    try {
        await Url.findOneAndDelete({
            _id: id,
            createdBy: req.user._id
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({ error: "Failed to delete URL" });
    }
}

module.exports = {
    handleGetHome,
    handlePostShortUrl,
    handleDeleteUrl
};
