const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const { v4: uuidv4 } = require("uuid");
const app = require("../../config");

const serviceAccount = require("./vexere-notification-firebase-adminsdk-dkb0m-69566b1927.json");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://notifications-bfd0d.firebaseio.com"
// });
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vexere-notification.firebaseio.com",
  // databaseURL: "https://comspacesinbox.firebaseio.com"
});

router.post("/push/notification/admin", async (req, res, next) => {
  const { title, body } = req.body;
  try {
    app
      .firestore()
      .collection("users")
      .onSnapshot((snap) => {
        const arrayUser = [];
        snap.forEach((doc) => {
          arrayUser.push(doc.data());
          const promiseAll = arrayUser.forEach(
            (e) =>
              new Promise(async (resolve, reject) => {
                try {
                  const FCMToken = e.tokenFCM; // edit
                  admin
                    .messaging()
                    .sendToDevice(FCMToken, {
                      notification: {
                        title,
                        body,
                      },
                      data: {
                        some: "data",
                        title,
                        body,
                      },
                    })
                    .then(function (response) {
                      app
                        .firestore()
                        .collection("notifications")
                        .add({
                          content: body,
                          createAt: new Date().toISOString(),
                          id: e.id,
                          messageId: uuidv4(),
                          read: false,
                          unRead: true,
                        })
                        .then(function (docRef) {
                          console.log("Document written with ID: ", docRef.id);
                        })
                        .catch(function (error) {
                          console.error("Error adding document: ", error);
                        });
                      resolve();
                      res.json(response);
                      console.log("Successfully sent message:", response);
                      // process.exit()
                    })
                    .catch(function (error) {
                      console.log("Error sending message:", error);
                      process.exit();
                    });
                } catch (error) {
                  reject(error);
                }
              })
          );
          Promise.all(promiseAll);
        });
      });
  } catch (error) {
    res.sendStatus(500);
  }
});
module.exports = router;
