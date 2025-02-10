//4 - importação de componentes
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";
import State from "./components/State";
import { createContext } from "react";
import Context from "./components/Context";

// 9 - type
type TextOrNull = string | null;
// type Fixed = 'isso' | 'algo' | 'outro';

// 10 - context API
interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variáveis
  const name: string = 'Paulo';
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  // 9 - type
  const myText: TextOrNull = 'Tem algum texto aqui';
  let mySecondText: TextOrNull = null;
  // const testFixed: Fixed = 'isso';

  // 10 - context API
  const contextValue: IAppContext = {
    language: 'Javascript',
    framework: 'Express',
    projects: 5
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div>
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <p>Está trabalhando</p>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name='segundo' />
        <Destructuring title='Primeiro post' content='Algum conteúdo' commentsQty={10} tags={['TypeScript', 'Javascript']} category={Category.TS} />
        <Destructuring title='Segundo post' content='Outro conteúdo' commentsQty={10} tags={['Python']} category={Category.P} />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
      </div>
      <Context />
    </AppContext.Provider>
  );
}

export default App