// 1 - iniciando o projeto
// console.log('Express com TS!!!');

// 2 - init express
import express, { Request, Response} from 'express'

const app = express();

// criando uma rota (rota GET).
app.use(express.json());
// necessário passar argumentos req e res (requisição e resposta)
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// 3 - rota com POST
app.post('/api/product', (req, res) => {
  console.log(req.body);

  res.send('Produto adicionado!');
});

// 4 - Rota para todos os métodos
app.all('/api/product/check', (req, res) => {
  // req.method = VERBO HTTP

  if (req.method === 'POST') {
    res.send('Inseriu algum registro');
  } else if (req.method === 'GET') {
    res.send('Leu algum registro');
  } else {
    res.send("Não podemos realizar esta operação.");
  }
});

// 5 - interfaces do express
app.get('/api/interfaces', (req: Request, res: Response) => {
  res.send('Utilizando as interfaces');
});

app.listen(3000, () => {
  console.log('Aplicação TS + Express rodando!');
});

// 6 - enviando json
app.get('/api/json', (req: Request, res: Response) => {
  res.json({
    name: 'Shirt',
    price: 30.00,
    color: 'Blue',
    sizes: ['P', 'M', 'G']
  });
});