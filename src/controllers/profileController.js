// Renvoi les informations de l’utilisateur (nom, prénom, email,pseudo)
exports.getProfile = (req, res) => {
    const { nom, prenom, email, pseudo } = req.query;

    if (!nom || !prenom || !email || !pseudo) {
        return res.status(400).send("Aucun texte fourni");
    }

    // const profil = { nom, prenom, email, pseudo }

    // res.json({ profil });
    res.json({ nom, prenom, email, pseudo });
};
