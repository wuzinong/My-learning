using Microsoft.Azure.Search;
using Microsoft.Azure.Search.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace ConsoleApp1
{
    public partial class Product
    {
        [System.ComponentModel.DataAnnotations.Key]
        [IsFilterable]
        public string ProductId { get; set; }


        [IsSearchable, IsSortable]
        public string Name { get; set; }


        [IsSearchable]
        [Analyzer(AnalyzerName.AsString.EnMicrosoft)]
        public string Summary { get; set; }


        [IsSearchable]
        public string AdditionalInfoString { get; set; }

        [IsSearchable]
        public string Provider { get; set; }


        [IsSearchable]
        public string ProviderDescription { get; set; }


        [IsFilterable]
        public string Slug { get; set; }

        [IsSearchable, IsFilterable, IsFacetable]
        public List<string> Category { get; set; }

        [IsSearchable, IsFilterable, IsFacetable]
        public List<string> Industry { get; set; }

        [IsSearchable, IsFilterable, IsFacetable]
        public List<string> ProductType { get; set; }

        [IsSearchable, IsFilterable, IsFacetable]
        public string[] Tags { get; set; }

        [IsFilterable, IsSortable, IsFacetable]
        public bool? IsPopular { get; set; }

        [IsFilterable, IsSortable, IsFacetable]
        public double? Rating { get; set; }

        //public Image mainImage { get; set; }

        //public Image logo { get; set; }
        //public ProductPresentation Presentation { get; set; }
    }
}
