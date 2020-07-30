using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class RawProduct
    {
        public string id { get; set; }
        public string name { get; set; }
        public Provider provider { get; set; }
        
        public Urls urls { get; set; }
        public Dynamic dynamic { get; set; }

        //These infos are in another separate request
        public List<string> features { get; set; }
        public List<Section> sections { get; set; }
        public string tagline { get; set; }
    }

    class Section
    {
        public string heading { get; set; }
    }

    class Urls
    {
        public string primary { get; set; }
        //public string aliases { get; set; }
    }

    class Provider
    {
        public string name { get; set; }
        public string description { get; set; }
    }

    class Dynamic
    {
        public Summary summary { get; set; }
        public Categorization categorization { get; set; }

        public double sorting { get; set; }
    }

    class Summary
    {
        public string text { get; set; }
    }

    class Categorization
    {
       public List<Industry> industries { get; set; }   
    }

    class Industry
    {
        public string key { get; set; }
        public string name { get; set; }
    }

    class RawProductList
    {
        public bool endOfResult { get; set; }
        public List<RawProduct> results{get;set;}
    }


}
