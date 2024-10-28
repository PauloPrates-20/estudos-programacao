using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MultiplicarMatrizes
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[,] matriz1 = new int[2, 3];
            int[,] matriz2 = new int[3, 2];
            int[,] matrizResultante = new int[2, 2];

            Console.WriteLine("Preencher a matriz #1");
            for (int linha = 0; linha < 2; linha++)
            {
                for (int coluna = 0; coluna < 3; coluna++)
                {
                    Console.Write($"1. [{linha}, {coluna}]: ");
                    matriz1[linha, coluna] = int.Parse(Console.ReadLine());
                }
            }

            Console.WriteLine("Preencher a matriz #2");
            for (int linha = 0; linha < 3; linha++)
            {
                for (int coluna = 0; coluna < 2; coluna++)
                {
                    Console.Write($"2. [{linha}, {coluna}]: ");
                    matriz2[linha, coluna] = int.Parse(Console.ReadLine());
                }
            }

            Console.WriteLine("Matriz resultante da multiplicação da matriz #1 pela matriz #2");
            matrizResultante[0, 0] = matriz1[0, 0] * matriz2[0, 0] + matriz1[0, 1] * matriz2[1, 0] + matriz1[0, 2] * matriz2[2, 0];
            matrizResultante[0, 1] = matriz1[0, 0] * matriz2[0, 1] + matriz1[0, 1] * matriz2[1, 1] + matriz1[0, 2] * matriz2[2, 1];
            matrizResultante[1, 0] = matriz1[1, 0] * matriz2[0, 0] + matriz1[1, 1] * matriz2[1, 0] + matriz1[1, 2] * matriz2[2, 0];
            matrizResultante[1, 1] = matriz1[1, 0] * matriz2[0, 1] + matriz1[1, 1] * matriz2[1, 1] + matriz1[1, 2] * matriz2[2, 1];

            for (int linha = 0; linha < 2; linha++)
            {
                for (int coluna = 0; coluna < 2; coluna++)
                {
                    Console.Write($"[{matrizResultante[linha, coluna]}]");
                }
                Console.WriteLine();
            }
        }
    }
}
