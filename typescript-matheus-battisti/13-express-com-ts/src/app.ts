// 1 - iniciando o projeto
// console.log('Express com TS!!!');

// 2 - init express
import express, { NextFunction, Request, Response } from 'express'

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

// 6 - enviando json
app.get('/api/json', (req: Request, res: Response) => {
  res.json({
    name: 'Shirt',
    price: 30.00,
    color: 'Blue',
    sizes: ['P', 'M', 'G']
  });
});

// 7 - router parameters
app.get('api/product/:id', (req: Request, res: Response) => {
  console.log(req.params);

  const id = req.params.id;

  if (id === '1') {
    const product = {
      id: 1,
      name: 'Boné',
      price: 10
    };

    res.json(product)
  } else {
    res.send('Produto não encontrado.');
  }
});

// 8 - rotas complexas
app.get('api/products/:productId/reviews/:reviewId', (req: Request, res: Response) => {
  console.log(req.params);

  const productId = req.params.productId;
  const reviewId = req.params.reviewId;

  res.send(`Acessando a review ${reviewId} do produto ${productId}`);
});

// 9 - router handler
function getUser(req: Request, res: Response) {
  console.log(`Resgatando o usuário com o id: ${req.params.id}`);

  res.send('Usuário encontrado.')
}

// 10 - middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === '1') {
    console.log('Pode seguir');
    next();
  }
  else {
    console.log('acesso restrito');
  }
}

// 11 - middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}

app.use(showPath);

app.get('/api/user/:id/access', checkUser, (req: Request, res: Response) => {
  res.json({ msg: 'Bem vindo à área administrativa.' });
});

app.get('/api/user/:id', getUser);

// 12 - req e res com generics
app.get('/api/user/:id/details/:name',
  (
    req: Request<{ id: string, name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(`ID: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);

    res.json({ status: true });
  });

// 13 - tratamento de erros
app.get('/api/erro', (req: Request, res: Response) => {
  try {
    // nossa lógica
    throw new Error('Algo deu errado');
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
})

app.listen(3000, () => {
  console.log('Aplicação TS + Express rodando!');
});

