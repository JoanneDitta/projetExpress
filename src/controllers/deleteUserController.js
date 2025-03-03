const { User } = require("../models"); // Assurez-vous d'importer correctement le modèle

const deleteUserController = async (req, res) => {
    try {
        const { id } = req.params;

        // Vérification du rôle de l'utilisateur (admin)
        if (!req.user || req.user.role !== "admin") {
            return res.status(403).json({ message: "Accès refusé : administrateur requis" });
        }

        // Recherche de l'utilisateur à supprimer
        const userToDelete = await User.findOne({ where: { id } }); // Recherche de l'utilisateur par son ID
        if (!userToDelete) {
            return res.status(404).json({ message: "Utilisateur introuvable" });
        }

        // Suppression de l'utilisateur
        await User.destroy({ where: { id } });

        res.status(200).json({ message: "Utilisateur supprimé avec succès" });
    } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur :", error);
        res.status(500).json({ message: "Erreur serveur", error: error.message || error });
    }
};

module.exports = deleteUserController;
