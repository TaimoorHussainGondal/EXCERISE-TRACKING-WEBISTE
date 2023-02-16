const express = require("express");
const app = express();
const userdata = require("./Modal");
const mongoose = require("mongoose");
// const formdata = require("./Contact");
const port = 5000;
const cors = require("cors");
app.use(cors());

var bodyParser = require("body-parser");
// var jsonParser
app.use(bodyParser.json());

// mongoose.set('strictQuery', false)

app.get("/show", function (req, res) {
  res.send("hi how are you");
});

//for connect the database
mongoose.connect("mongodb://127.0.0.1:27017/taimoor", {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("Database connected");
});
// app.post("./create".(req,res) =>{
//     let user=userdata
// })
app.post("/create", (req, res) => {
  let user = userdata(req.body);
  user
    .save()
    .then((used) => {
      res.send(used);
    })
    .catch((err) => {
      console.log("api failed");
    });
});

//delete the api by id
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  userdata.findByIdAndDelete(id, (err, used) => {
    if (!err) {
      res.status(200).json(used);
    } else {
      console.log("api failed");
    }
  });
});

app.put("/update/:id", (req, res) => {
  console.log(req.params.id);
  userdata.updateOne(
    { _id: req.params.id },
    {
      name: req.body.name,
      activity: req.body.activity,
      time: req.body.time,
      date: req.body.date,
      carlories: req.body.carlories,
      // activityType: req.body.activityType,
      // date: req.body.date,
    },
    (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Updated Successfully");
      }
    }
  );
});

// //edit the api
// app.get("/editt/:id", (req, res) => {
//   const id = req.params.id;

//   userdata.findById(id, (used) => {
//     if (used) {
//       res.status(200).send(used);
//     }
//   });
// });
// app.post("/editt/:id", (req, res) => {
//   const id = req.params.id;

//   userdata.findById(id, (err, user) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       user.name = req.body.name;
//     }
//     user
//       .save()
//       .then((used) => {
//         res.status(200).json(used);
//       })
//       .catch((err) => {
//         console.log("failed");
//       });
//   });
// });

app.get("/get", async (req, res) => {
  const dataget = await userdata.find();
  res.send(dataget);
});

app.listen(port, () => {
  console.log("port is connected");
});
