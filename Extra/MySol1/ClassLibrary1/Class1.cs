using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int Sum(int n1, int n2)
        {
            return n1 + n2;
       }
    }
}
