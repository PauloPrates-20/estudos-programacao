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
            #region Switch
            //int escolha = 1;

            //switch (escolha)
            //{
            //    case 1:
            //        Console.WriteLine("Caso 1");
            //        break;
            //    case 2:
            //        Console.WriteLine("Caso 2");
            //        break;
            //    case 3:
            //        Console.WriteLine("Caso 3");
            //        break;
            //    default:
            //        Console.WriteLine("Nenhum caso");
            //        break;
            //}
            #endregion

            Inicio:
            Console.Write("Escolha uma opção: ");
            int op = int.Parse(Console.ReadLine());
            int valor = 0;

            switch (op)
            {
                default:
                    Console.WriteLine("Opção inválida\n");
                    goto Inicio;
                case 1:
                    valor += 100;
                    break;
                case 2:
                    valor += 50;
                    goto case 1;
            }

            Console.WriteLine($"Valor final: {valor}");
        }
    }
}
