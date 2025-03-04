const express = require('express');
const app = express();

app.use(
  express.urlencoded({ extended: true })
);
app.use(express.json());

// rotas - endpoints
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Primeira rota criada com sucesso' });
});

// rota com POST
app.post('/create', (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  if (!name) {
    res.status(422).json({ message: 'O campo nome é obrigatório!' });
    return;
  }
  
  console.log(name, price);

  // status na resposta
  res.status(201).json({ message: `O produto ${name} foi criado com sucesso.`});
});



app.listen(3000);