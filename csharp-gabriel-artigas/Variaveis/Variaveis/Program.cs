namespace Variaveis
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region Numericas Inteiras
            // Inteiro assinado
            //sbyte num1 = 10; // 8 bits, de -128 a 127
            //short num2 = 20; // 16 bits, de -32.768 a 32.767
            //int num3 = 30; // 32 bits, de -2.147.483.648 a 2.147.483.647
            //long num4 = 40L; // 64 bits, de -9.223.372.036.854.775.808 a 9.223.372.036.854.775.807

            //// Inteiro não-assinado
            //byte num5 = 10; // 8 bits, de 0 a 255,
            //ushort num6 = 20; // 16 bits, de 0 a 65.535
            //uint num7 = 30; // 32 bits, de 0 a 4.294.967.295
            //ulong num8 = 40L; // 64 bits, de 0 a 18.446.744.073.709.551.615

            //sbyte numero;
            //numero = 100;

            //numero = 120;
            //numero = num1;
            #endregion

            #region Numericas Reais
            //float real1 = 100.75f; // 32 bits
            //double real2 = 500.754; // 64 bits
            //decimal real3 = 752538.457m; // 128 bits 

            //double valor;
            //valor  = real1;
            #endregion 

            char letra = '\u0061'; // letra a
            char escape = '\\';
            char literal = 'C';

            Console.WriteLine(escape);
            Console.ReadKey();
        }
    }
}
