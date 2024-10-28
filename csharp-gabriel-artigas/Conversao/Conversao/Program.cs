using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conversao
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region Convesão Implícita
            //byte num1 = 100;
            //ushort num2;

            //float num3 = 1250.45f;
            //double num4 = num3;

            //int numero = 'C';
            #endregion

            #region Conversão Explícita
            //ushort num1 = 100;
            //byte num2 = (byte)num1;

            //float num3 = 2500.786f;
            //int num4 = (int)1985.75f;

            //char letra = (char)97;
            #endregion

            #region Método Parse
            //string txtNumero = "1985";

            //int numero = int.Parse(txtNumero);

            //byte num1 = byte.Parse("120");

            //double num2 = double.Parse("125623,57");

            //float num3 = float.Parse("457,75");
            #endregion

            Console.WriteLine();
            Console.ReadKey();
        }
    }
}
