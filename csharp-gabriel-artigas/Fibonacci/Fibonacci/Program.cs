using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fibonacci
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // 0 1 1 2 3 5 8
            int a = 0, b = 1, c = 0;

            Console.Write("Quantos valores imprimir: ");
            int valores = int.Parse(Console.ReadLine());

            Console.WriteLine($"Sequência de Fibonnaci com {valores} valores");

            for (int i = 0; i  < valores; i++)
            {
                Console.Write(i == valores - 1 ? Convert.ToString(a) : (a + ", "));

                c = a + b;
                a = b;
                b = c;
            }
        }
    }
}
