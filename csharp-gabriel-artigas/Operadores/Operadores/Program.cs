using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Operadores
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region Operadores Aritméticos
            //int num1 = 10;
            //int num2 = 2;
            //int resultado = num1 + num2;
            #endregion

            #region Precedência de Operadores Aritméticos
            //double num1 = 100;
            //double num2 = 10;
            //double num3 = 5;

            //double res = (num1 + num2) * (num3 / 3);
            #endregion

            int num1 = 10;

            // num1 = num1 + 1;
            // ++num1;
            // num1++;
            // --num1;
            // num1--;

            Console.WriteLine(num1++);
            Console.WriteLine(num1);
        }
    }
}
