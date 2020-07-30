using Microsoft.Azure.Search;
using Microsoft.Azure.Search.Models;
using Newtonsoft.Json;
using System;
namespace ConsoleApp1
{
    public partial class ProductPresentation
    {

        [IsSearchable, IsSortable, IsFilterable, IsFacetable]
        public string ProductName { get; set; }

        [IsSearchable, IsSortable, IsFilterable, IsFacetable]
        public string Provider { get; set; }
    }
}
