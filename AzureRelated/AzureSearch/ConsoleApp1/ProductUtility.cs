using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace ConsoleApp1
{
    class ProductUtility
    {
        public static List<Product> GetProductList(){
            List<Product> plist = new List<Product>();
            string json = File.ReadAllText("products.json");
            JObject jo = (JObject)JsonConvert.DeserializeObject(json);
            RawProductList rlist = jo.ToObject<RawProductList>();

            if(rlist != null && rlist.results != null)
            {
                foreach (var item in rlist.results)
                {
                    StringBuilder sb = new StringBuilder();
                    var product = new Product()
                    {
                        ProductId = item.id,
                        Name = item.name,
                        Summary = item.dynamic?.summary?.text,
                        AdditionalInfoString="",
                        Provider = item.provider?.name,
                        ProviderDescription = item.provider?.description,
                        Rating = item.dynamic?.sorting
                    };

                    if(!string.IsNullOrEmpty(item.tagline))
                    {
                        sb.Append(item.tagline);
                    }

                    if(item.features != null)
                    {
                        item.features.ForEach(text =>
                        {
                            sb.Append(" " + text);
                        });
                    }
                    if(item.sections != null)
                    {
                        item.sections.ForEach(section =>
                        {
                            if (!string.IsNullOrEmpty(section.heading))
                            {
                                sb.Append(" " + section.heading);
                            }
                        });
                    }

                    product.AdditionalInfoString = sb.ToString();


                    plist.Add(product);
                }
            }
            

            return plist;
        }

    }
}
