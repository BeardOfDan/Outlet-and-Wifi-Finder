module.exports = (app) => {


  // wifi and outlet are objects that hold data for the location of each item
  // ex. (wifi) {
  //   'category': String, // ex. 'Fast Food' or restaurant? or food?
  //   'name': String, // ex. 'StarBucks'
  //   'address': String, // 1234 somewhere street, Ca, 94521
  //      might also have lat/lng coordinate for it
  //        would be generated by app, not user
  //   'wifiName': String // StarBucksFreeWifi
  //   'password': {
  //     'required': Boolean, // True or False, if False, then the rest of the password object is not required
  //     'static': Boolean, // If true, then password field, with password (assuming is known)
  //     'password': String, // The password, ex. 'abc123', default is empty string, for unknown
  //     'process': String // ex. 'Make a purchase, then check your receipt' // this field is only for if 'static' is false, default is 'unknown'
  //   }
  // }

  // ex. (outlets) { // in plural because they usually come in pairs, so basically always multiple instances of them
  //   'category': String, // ex. 'Fast Food' or restaurant? or food?
  //   'name': String, // ex. 'StarBucks'
  //   'address': String, // 1234 somewhere street, Ca, 94521
  //      might also have lat/lng coordinate for it
  //        would be generated by app, not user
  //   'quantity': Number, // estimated count of electrical outlets
  //   'onsiteLocation': String, // ex. 'Along the walls, and on the side of the long tables'
  //    possible extra feature:
  //      'pictures': [String] // array of paths to images, would require seperate upload of images, then saving the images, then editing this object to add the paths to said images
  // }

  app.post('/newData', (req, res, next) => {
    const { wifi, outlets } = req.body;

    if (typeof wifi === 'object object') {
      // handle adding wifi
    }

    if (typeof outlets === 'object object') {
      // handle adding outlet
    }

    res.send('acknowledgement statement here');
  });


};
