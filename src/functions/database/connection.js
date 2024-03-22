const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://divpreetkaur043:sNMUmSzn4bZ8T89g@cluster0.tcoookj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log(`connection is successful`);
}).catch((err) => {
    console.log(`no connection`);
});