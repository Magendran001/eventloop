const express = require("express");

const app = express();
app.use(express.json());

app.get("", async (req, res) => {
  try {
    return res.send("hello");
  } catch (e) {
    return res.send(e.message);
  }
});

app.get("/books", async (req, res) => {
  try {
    return res.send({
      books: {
        book1: "maggi loves",
        book2: "murali dies",
        book3: "vadivel learnt",
        book4: "book4",
        book5: "book5",
      },
    });
  } catch (e) {
    return res.send(e.message);
  }
});

app.listen(4756, async (req, res) => {
  try {
    console.log("listening port on 4786");
  } catch (e) {
    console.log(e.message);
  }
});
