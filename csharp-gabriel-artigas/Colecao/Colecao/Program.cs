using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Colecao
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region Vetores
            //int[] numeros = new int[5];

            //numeros[0] = 10;
            //numeros[1] = 20;
            //numeros[2] = 30;
            //numeros[3] = 40;
            //numeros[4] = 50;

            //numeros[2] = 55;

            //string[] nomes = { "Paulo", "Pedro", "Willian" };

            ////nomes[0] = "Paulo";
            ////nomes[1] = "Pedro";
            ////nomes[2] = "Willian";
            //nomes[0] = "Logan";
            #endregion

            int[,] numeros = new int[2, 3];

            numeros[0, 0] = 10;
            numeros[0, 1] = 20;
            numeros[0, 2] = 30;

            numeros[1, 0] = 40;
            numeros[1, 1] = 50;
            numeros[1, 2] = 60;

            for (int i = 0; i < numeros.GetLength(0); i++)
            {
                for (int j = 0; j < numeros.GetLength(1); j++)
                {
                    Console.Write($"[{numeros[i, j]}]");
                }
                Console.WriteLine();
            }

            string[,] nomes =
            {
                { "Paulo", "André", "João" },
                { "Willian", "Giovanna", "Donald" }
            };

            Console.WriteLine(nomes[0, 0]);
        }
    }
}
