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
            int[] numeros = new int[5];

            numeros[0] = 10;
            numeros[1] = 20;
            numeros[2] = 30;
            numeros[3] = 40;
            numeros[4] = 50;

            numeros[2] = 55;

            string[] nomes = { "Paulo", "Pedro", "Willian" };

            //nomes[0] = "Paulo";
            //nomes[1] = "Pedro";
            //nomes[2] = "Willian";
            nomes[0] = "Logan";


            Console.WriteLine(numeros[2]);
            Console.WriteLine(nomes[0]);
        }
    }
}
