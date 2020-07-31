using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    public class RawProduct
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

    public class Section
    {
        public string heading { get; set; }
    }

    public class Urls
    {
        public string primary { get; set; }
        //public string aliases { get; set; }
    }

    public class Provider
    {
        public string name { get; set; }
        public string description { get; set; }
        public Image logo { get; set; }
    }

    public class Image
    {
        public Asset asset { get; set; }
        public Crop crop { get; set; }
        public Hotspot hotspot { get; set; }
        //public string _type { get; set; }
    }

    public class Hotspot
    {
        public double height { get; set; }
        public double width { get; set; }
        public double x { get; set; }
        public double y { get; set; }
        public string _type { get; set; }
    }

    public class Asset
    {
        public string _ref { get; set; }
        public string _type { get; set; }
    }

    public class Crop
    {
       public double bottom { get; set; }
       public double left { get; set; }
       public double right { get; set; }
       public double top { get; set; }
       public string _type { get; set; }
    }

    public class Dynamic
    {
        public Summary summary { get; set; }
        public Categorization categorization { get; set; }

        public Image mainImage { get; set; }
        public double sorting { get; set; }
    }

    public class Summary
    {
        public string text { get; set; }
    }

    public class Categorization
    {
       public List<KeyName> industries { get; set; }
       public List<KeyName> categories { get; set; }
       public List<KeyName> types { get; set; }
    }

    public class KeyName
    {
        public string key { get; set; }
        public string name { get; set; }
    }

    public class RawProductList
    {
        public bool endOfResult { get; set; }
        public List<RawProduct> results{get;set;}
    }


}
