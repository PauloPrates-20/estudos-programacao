using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConversorTemperaturas
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Minha solução
            //Leitura de input do usuário
            Console.Write("Digite a temperatura em ºC: ");
            double temperaturaCelsius = double.Parse(Console.ReadLine());

            //Conversões
            double temperaturaFarenheit = (temperaturaCelsius * 9 / 5) + 32;
            double temperaturaKelvin = temperaturaCelsius + 273.15;

            Console.WriteLine($"\nTemperatura em Farenheit: {temperaturaFarenheit} ºF");
            Console.WriteLine($"Temperatura em Kelvin: {temperaturaKelvin}K");

            //Solução da aula
            //double c, f, k;

            //Console.WriteLine("### CONVERSOR DE TEMPERATURA ###");
            //Console.Write("Insira a temperatura em Celcius: ");
            //c = double.Parse(Console.ReadLine());
            //Console.WriteLine("----------------------------------");

            //// (c * 9 / 5) + 32 = F
            //f = (c * 9 / 5) + 32;

            //// c + 273,15 = K
            //k = c + 273.15;
            //Console.WriteLine(c + " graus celcius = " + f + " graus farenheit");
            //Console.WriteLine(c + " graus celcius = " + k + " kelvin");
            Console.WriteLine("----------------------------------");
        }
    }
}
