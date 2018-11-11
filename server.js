const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

const cors = require('cors');
const options = {
  origin: 'http://localhost:3000'
}
app.use(cors(options));

  // app.use(express.static(__dirname + '/dist/'));
  // app.get(/.*/, function (req, res) {
  //   res.sendFile(__dirname + '/dist/index.html');
  // })

app.get('/api/store', function(req, res) {
  const stickers = [
    {
      _id: 0,
      category: 'JavaScript',
      remaining: 4,
      imageUrl: 'https://source.unsplash.com/collection/3443908/random',
      title: 'JavaScript in the Browser',
      description: "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal."
    },
  {
      _id: 1,
      category: 'Python',
      remaining: 2,
      imageUrl: 'https://source.unsplash.com/collection/3443908/random',
      title: 'Slithery Snakes Boi',
      description: "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal."
    },
  {
      _id: 2,
      category: 'Ruby',
      remaining: 6,
      imageUrl: 'https://source.unsplash.com/collection/3443908/random', 
      title: 'Object Oriented Programming in Ruby',
      description: "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal."
    }
  ]
  
  res.send({
    stickers
   })
})

app.listen(port);

console.log("server started");