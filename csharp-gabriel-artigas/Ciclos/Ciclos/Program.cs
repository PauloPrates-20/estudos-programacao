using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ciclos
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region While
            //int valor = 0;

            //while (valor < 10)
            //{
            //    Console.WriteLine($"O valor é {valor}");
            //    valor++;
            //}
            #endregion

            int valor = 15;
            do
            {
                Console.WriteLine($"O valor é {valor}");
                valor++;
            } while (valor < 10);
        }
    }
}
