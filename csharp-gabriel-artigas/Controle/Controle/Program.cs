using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Controle
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int escolha = 1;

            switch (escolha)
            {
                case 1:
                    Console.WriteLine("Caso 1");
                    break;
                case 2:
                    Console.WriteLine("Caso 2");
                    break;
                case 3:
                    Console.WriteLine("Caso 3");
                    break;
                default:
                    Console.WriteLine("Nenhum caso");
                    break;
            }
        }
    }
}
