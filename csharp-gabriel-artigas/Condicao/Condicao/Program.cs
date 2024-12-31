using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Condicao
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region Estruturas Condicionais Simples
            //int valor = 5;

            //if (valor == 5)
            //{
            //    Console.WriteLine("Condição verdadeira");
            //}
            //else
            //{
            //    Console.WriteLine("Conidação falsa");
            //}
            #endregion

            #region Estruturas Condicionais Encadeadas
            //int valor = 5;

            //if (valor < 5)
            //{
            //    Console.WriteLine("Condição verdadeira");
            //}
            //else if (valor < 10)
            //{
            //    Console.WriteLine("Condição alternativa 1");
            //}
            //else if (valor < 20)
            //{
            //    Console.WriteLine("Condição alternativa 2");
            //}
            //else
            //{
            //    Console.WriteLine("Condição falsa");
            //}
            #endregion

            #region Estruturas Condicionais Aninhadas
            //int numero = 10;

            //if (numero > 5)
            //{
            //    Console.Write("O número é maior que 5");

            //    if (numero % 2 == 0)
            //    {
            //        Console.WriteLine(" e também é par");
            //    }
            //    else
            //    {
            //        Console.WriteLine(" mas não é par.");
            //    }
            //}
            #endregion

            #region Operador Ternário
            int numero = 10;
            string mensagem = "";

            // condicao ? true : false;
            mensagem = numero > 5 ? "Maior que 5" : "Menor que 5";

            Console.WriteLine(mensagem);
            #endregion

            Console.ReadKey();
        }
    }
}
