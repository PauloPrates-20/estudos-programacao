namespace MyConsoleApp
{
    internal class Program
    {
        /*
         * Esta é uma aplicação de teste,
         * sendo usada apenas para fins de teste.
         * Onde estamos testando linhas e
         * Blocos de comentários
         */
        static void Main(string[] args)
        {
            #region Escreve as quatro primeiras mensagens.
            Console.WriteLine("Primeiro Comando");
            Console.WriteLine("Segundo Comando");
            Console.WriteLine("Terceiro Comando");
            Console.WriteLine("Quarto Comando");
            #endregion

            #region Executa outros comandos.
            Console.WriteLine("Demais Comandos");
            Console.WriteLine("Demais Comandos");
            Console.WriteLine("Demais Comandos");
            Console.WriteLine("Demais Comandos");
            #endregion
        }
    }
}
