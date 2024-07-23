import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('server is ready');
});


app.get('/api/jokes', (req, res) => {
      const jokes = [
        {
          id: 1,
          setup: "Why don't scientists trust atoms?",
          punchline: 'Because they make up everything!',
        },
        {
          id: 2,
          setup: 'Why did the scarecrow win an award?',
          punchline: 'Because he was outstanding in his field!',
        },
        {
          id: 3,
          setup: "Why don't skeletons fight each other?",
          punchline: "They don't have the guts.",
        },
        {
          id: 4,
          setup: 'What do you call fake spaghetti?',
          punchline: 'An impasta!',
        },
        {
          id: 5,
          setup: 'Why did the bicycle fall over?',
          punchline: 'Because it was two-tired!',
        },
      ];
      res.send(jokes);
  });

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`);
})