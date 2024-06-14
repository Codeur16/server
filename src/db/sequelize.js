const { Sequelize, DataTypes } = require("sequelize");
// const bcrypt = require("bcrypt");

// importation des models

const { student, formateur } = require("../models/userModel");
const {
  cours,
  evaluation,
  question,
  chapitre,
} = require("../models/coursModel");
const { domaine } = require("../models/domainModel");

// configuration de la base de donnees
let sequelize;
if (process.env.NODE_ENV === "production") {
  sequelize = new Sequelize(
    "q3km6gfiypm99yap",
    "fmjzknms6lf6acih",
    "mpe1lmb1jci8jwzx",
    {
      host: "ao9moanwus0rjiex.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      dialect: "mariadb",
      dialectOptions: {
        timezone: "Etc/GMT-1",
      },
      logging: true,
    }
  );
} else {
  // sequelize = new Sequelize({
  //   dialect: "sqlite",
  //   storage: "./institute", // Chemin vers le fichier SQLite
  // });

  // connection a la db en local
  sequelize = new Sequelize("institute", "root", "", {
    host: "localhost",
    dialect: "mariadb",
    dialectOptions: {
      timezone: "Etc/GMT-1",
    },
    logging: false,
    define: {
      maxKeys: 200,
    },
  });
}

// creation des models
const DomainTable = domaine(sequelize, DataTypes);
const CoursTable = cours(sequelize, DataTypes);
const EvaluationTable = evaluation(sequelize, DataTypes);
const QuestionTable = question(sequelize, DataTypes);
const StudentTable = student(sequelize, DataTypes);
const FormateurTable = formateur(sequelize, DataTypes);
const ChapitreTable = chapitre(sequelize, DataTypes);
//======================== definition des associations entre les tables:======================================
// 1) cours et users ========================================
CoursTable.belongsToMany(StudentTable, { through: "UserCours" });
StudentTable.belongsToMany(CoursTable, { through: "UserCours" });

// 2) cours et evaluations================================
CoursTable.hasMany(
  EvaluationTable
  //   , {
  //   foreignKey: "clubId",
  // }
);
EvaluationTable.belongsTo(CoursTable);

//3)  evaluations et questions =============================
EvaluationTable.hasMany(
  QuestionTable
  //   , {
  //   foreignKey: "clubId",
  // }
);
QuestionTable.belongsTo(EvaluationTable);
//4)  cours et domaines =============================
DomainTable.hasMany(
  CoursTable
  //   , {
  //   foreignKey: "clubId",
  // }
);
CoursTable.belongsTo(DomainTable);

//5)  cours et formateur =============================
FormateurTable.hasMany(
 CoursTable
  //   , {
  //   foreignKey: "clubId",
  // }
);
CoursTable.belongsTo(FormateurTable);
//6)  cours et formateur =============================
DomainTable.hasMany(
 FormateurTable
  //   , {
  //   foreignKey: "clubId",
  // }
);
FormateurTable.belongsTo(DomainTable);

//7)  cours et chapitres =============================
CoursTable.hasMany(
 ChapitreTable
  //   , {
  //   foreignKey: "clubId",
  // }
);
ChapitreTable.belongsTo(CoursTable);


//association de la baase de donnees

function initDB() {
  console.log("Initialisation des tables de la base de données");
  return sequelize
    .sync(
      //{ force: true }
      )
    .then(() => {
      console.log("Tables have been created");
    })
    .catch((error) => {
      console.error("Unable to create tables:", error);
    });
}

module.exports = {
  CoursTable,
  EvaluationTable,
  initDB,
  CoursTable,
  QuestionTable,
  StudentTable,
  DomainTable,
  FormateurTable,
};

// .then(_=>{
//   bcrypt.hash('12345678', 1)
//         .then(hash=>{

//     schoolTable.create({
//         name: "nkoaban",
//         adresse:"yaounde"
//     })

//     userTable.create({
//         name: 'loico',
//         email: 'loioico@gmail.com',
//         password: hash,
//         role:'admin'
//     })

//     payTable.create({
//         amount: 100000,
//         status:"tranche2",
//         userId:1,
//         studentId:1

//     })

//     studentTable.create({
//         name: 'jean',
//         class: 'terminaleC',
//         school:"lycee bilingue ekounou",
//         sex:"m",
//         birthday:new Date(1998, 6, 20),
//         birth_place:"doual",
//         phone:"123456787",
//         school_situation:"ancien",
//         class_situation:"ancien",
//         schoolId:1,

//     })
//   })
//   })
