const cours = (sequelize, DataTypes) => {
  const Cours = sequelize.define(
    "cours",
    {
      coursId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombreModule: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tempsApprentissage: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: true,
      updateAt: "updateTimestamp",
    }
  );

  // Association avec le modèle user
  // Cours.associate = (models) => {
  //   School.hasMany(models.user, {
  //     foreignKey: "coursId",
  //     sourceKey: "coursid",
  //   });
  // };

  return Cours;
};

// evaluation model
const evaluation = (sequelize, DataTypes) => {
  const Evaluation = sequelize.define(
    "evaluation",
    {
      evaluationId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      titre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      consigne: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: true,
      updateAt: "updateTimestamp",
    }
  );

  return Evaluation;
};

// question model
const question = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "question",
    {
      questionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      enonce: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      consigne: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reponse: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      createdAt: true,
      updateAt: "updateTimestamp",
    }
  );

  return Question;
};
// export { cours, evaluation, question };

// evaluation model
const chapitre = (sequelize, DataTypes) => {
  const chapitre = sequelize.define(
    "chapitre",
    {
      chapitreId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      position:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      titre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      textes: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    },
    {
      timestamps: true,
      createdAt: true,
      updateAt: "updateTimestamp",
    }
  );

  return chapitre;
};
module.exports = { cours, evaluation, question, chapitre };
