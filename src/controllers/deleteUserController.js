const users = require("../models"); // Assure-toi d’avoir un modèle Users simulé ou connecté à une base de données

const deleteUserController = async (req, res) => {
    try {
        const { id } = req.params;

        // Vérifie si l'utilisateur est admin
        if (!req.user || req.user.role !== "admin") {
            return res.status(403).json({ message: "Accès refusé : administrateur requis" });
        }

        // Vérifie si l'utilisateur existe
        const userToDelete = await users.findById(id);
        if (!userToDelete) {
            return res.status(404).json({ message: "Utilisateur introuvable" });
        }

        // Supprime l'utilisateur
        await users.deleteOne({ _id: id });

        res.status(200).json({ message: "Utilisateur supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

module.exports = deleteUserController;
