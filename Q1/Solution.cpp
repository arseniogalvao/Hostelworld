using System;
using System.Text.RegularExpressions;

class Solution
{
   public static void Main()
   {
    string input1 = "Eleven plus two";
    string input2 = "Twelve plus one";
    //string input1 = "Punishment";
    //string input2 = "Nine Thumps";
    //string input1 = "The Morse code";
    //string input2 = "Here come dots";
    //string input1 = "Snooze alarms";
    //string input2 = "Alas! No more Zs";
    //string input1 = "Halley's Comet";
    //string input2 = "Shall yet come";
    //string input1 = "One good turn deserves another.";
    //string input2 = "Do rogues endorse that? No,never!";

      string pattern = "(?i)[^A-Z]";
      string replacement = "";
      Regex rgx = new Regex(pattern);
      string result1 = rgx.Replace(input1, replacement).ToUpper();
      string result2 = rgx.Replace(input2, replacement).ToUpper();
 
      Console.WriteLine("String1 = '{0}' \nString2 = '{1}'", input1, input2);
      Console.WriteLine("It's anagrams? {0}", validateAnagram(result1,result2));        
   }
 
    public static bool validateAnagram(String input1, String input2) {
    if(input1.Length != input2.Length) 
        return false;

    for(int i = 0; i < input2.Length; i++)
    {
        var n = input1.IndexOf(input2[i]);
        if(n < 0)
            return false;
        input1 = input1.Remove(n, 1);
    }
    return String.IsNullOrEmpty(input1);
    }
}
