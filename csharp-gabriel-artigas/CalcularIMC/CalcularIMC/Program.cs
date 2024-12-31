using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalcularIMC
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Informe o peso em Kg: ");
            float peso = float.Parse(Console.ReadLine());
            Console.Write("Informe sua altura em metros: ");
            float altura = float.Parse(Console.ReadLine());

            float imc = (float)(peso / Math.Pow(altura, 2));

            Console.Write($"\nIMC = {imc} -> ");
            if (imc < 20)
            {
                Console.WriteLine("Abaixo do peso.");
            }
            else if (imc < 25)
            {
                Console.WriteLine("Normal.");
            }
            else if (imc < 30)
            {
                Console.WriteLine("Acima do peso.");
            }
            else if (imc < 35)
            {
                Console.WriteLine("Obeso.");
            }
            else
            {
                Console.WriteLine("Muito obeso.");
            }
        }
    }
}
