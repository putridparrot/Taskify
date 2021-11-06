using System;
using PowerArgs;

namespace Taskify
{


    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Args.InvokeAction<Arguments>(args);
            }
            catch (ArgException ex)
            {
                Console.WriteLine(ex.Message);
                Console.WriteLine(ArgUsage.GenerateUsageFromTemplate<Arguments>());
            }
        }
    }
}
