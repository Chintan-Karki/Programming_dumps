using System;
using System.Collections;
using System.Collections.Generic;

namespace learnC_
{
    class Program
    {
        static void Main(string[] args)
        {
            //Learning simple data str
            String a = "🙂";
            String b = "😄";
            Console.WriteLine(a + b);

            //Learning Collections

            //*List
            List<String> customers = new List<string>();
            customers.Add("🍎");
            customers.Add("🥎");
            customers.Add("🔥");
            customers.Add("🚒");

            Console.WriteLine(customers.Count);
            foreach (var customer in customers)
            {
                Console.Write(customer + " | "); //Write prints out the item in same line
            }
            Console.WriteLine(customers[1]);

            //Learning dictionary
            Dictionary<String, String> person = new Dictionary<string, string>();
            person.Add("Name👉", "Chintan Karki👻");
            person.Add("Address👉", "Biratnagar Morang🤖");
            //Console.WriteLine(person["Address"]);
            //Console.WriteLine(person["Name"]);

            foreach (var data in person)
            {
                Console.WriteLine(data.Key + " " + data.Value);
            }

            //Learning ArrayList --> Depricated and replaced by List
            //Specifying the type is not needed.
            //C# uses boxing to convert any data type to a regular c# object.

            //BOXING
            String box = "📦";
            Object testBox = box;
            box = (String)testBox;
            Console.WriteLine(box);

            //Constructing Arraylist
            //Arraylist boxes the item in the Background
            ArrayList arrayList = new ArrayList();
            arrayList.Add("Test🔌");
            arrayList.Add("Test🧳");
            arrayList.Add("Test🍻");

            foreach (var test in arrayList)
            {
                Console.Write((String)test + " | ");
            }

            //Learning a hash table
            Hashtable testHash = new Hashtable();
            testHash.Add("Name", "My first C# Hash 🙌");
            Console.WriteLine("");

            //Index order to get the value from Hash, an unboxing is needed.
            //i.e. we need to cast it.
            Console.WriteLine((String)testHash["Name"]);

            // Lets read from the users
            Console.WriteLine("Hello there! What is your name ?");
            string str = Console.ReadLine();
            Console.WriteLine("Why, hello there " + str+ ". We are so happy to meet you." );

            //Unless console reads the program, the output is not gained
            // Console.Read();
        }
    }
}
