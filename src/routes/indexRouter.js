// const { StudentRouter } = require("./etudiantRouter")
// const router = express.Router();
// module.exports=(app)=>{
// StudentRouter(app);
// }

const express = require("express");
const router = express.Router();

const StudentRouter = require("./StudentRouter");

router.use("/student", StudentRouter);

module.exports = router;
