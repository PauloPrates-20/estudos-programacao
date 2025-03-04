﻿namespace Variaveis
{
    internal class Program
    {
        // Enumerações devem ser declaradas fora do método Main
        enum Notas { 
            Minimo = 10, 
            Media = 20, 
            Maxima = 30,
        }

        // Estruturas devem ser declaradas fora do método Main
        struct Pessoa {
            public string nome;
            public int idade;
            public double altura;
        }

        static void Main(string[] args)
        {
            #region Numericas Inteiras
            // Inteiro assinado
            //sbyte num1 = 10; // 8 bits, de -128 a 127
            //short num2 = 20; // 16 bits, de -32.768 a 32.767
            //int num3 = 30; // 32 bits, de -2.147.483.648 a 2.147.483.647
            //long num4 = 40L; // 64 bits, de -9.223.372.036.854.775.808 a 9.223.372.036.854.775.807

            //// Inteiro não-assinado
            //byte num5 = 10; // 8 bits, de 0 a 255,
            //ushort num6 = 20; // 16 bits, de 0 a 65.535
            //uint num7 = 30; // 32 bits, de 0 a 4.294.967.295
            //ulong num8 = 40L; // 64 bits, de 0 a 18.446.744.073.709.551.615

            //sbyte numero;
            //numero = 100;

            //numero = 120;
            //numero = num1;
            #endregion

            #region Numericas Reais
            //float real1 = 100.75f; // 32 bits
            //double real2 = 500.754; // 64 bits
            //decimal real3 = 752538.457m; // 128 bits 

            //double valor;
            //valor  = real1;
            #endregion

            #region Caracter
            //char letra = '\u0061'; // letra a
            //char escape = '\\';
            //char literal = 'C';
            #endregion

            #region Boolean
            //bool verificar = false;
            //verificar = true;
            #endregion

            #region Strings
            // Variável por referência
            //string texto = @"Paulo Prates\n 2003 @@@???$$$"; // @ anula caracteres de escape
            //string mensagem = null;
            //mensagem = texto;
            #endregion

            #region Var
            // Possui tipo implícito
            //var valor = 100;
            //valor = 20;
            #endregion

            #region Tipo Object
            // Tipo fundamental do C#, comporta todos os tipos de dados.
            //object obj = true;
            //obj = 200;
            #endregion

            #region Constantes
            //const double pi = 3.1415;
            //const string nome = "Paulo";
            #endregion

            #region Enum
            // Forma de definir um conjunto de constantes numéricas inteiras
            //Notas notasAlunos = Notas.Media; 
            #endregion

            #region Struct
            // Estruturas personalizadas de dados
            //Pessoa pessoa1 = new Pessoa();
            //pessoa1.altura = 1.75;
            //pessoa1.idade = 21;
            //pessoa1.nome = "Paulo";

            //Pessoa pessoa2 = new Pessoa()
            //{
            //    altura = 1.55,
            //    idade = 12,
            //    nome = "Willian"
            //};

            //pessoa1.nome = "Alguém";
            #endregion

            Console.WriteLine();
            Console.ReadKey();
        }
    }
}
