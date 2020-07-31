using Microsoft.Azure.Search;
using Microsoft.Azure.Search.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading;

namespace ConsoleApp1
{
    class Program
    {
        private static ISearchServiceClient _searchClient;
        private static ISearchIndexClient _indexClient;
        private static string searchServiceName = "as-asdf";
        private static string apiKey = "asdfadf";
        private static string searchIndexName = "productindex";
        private static string scoringProfileName = "scoringProfile";
        static void Main(string[] args)
        {
            try
            {
                Console.ForegroundColor = ConsoleColor.Green;
                Console.WriteLine("Connecting...");
                // Create an HTTP reference to the catalog index
                _searchClient = new SearchServiceClient(searchServiceName, new SearchCredentials(apiKey));
                _indexClient = _searchClient.Indexes.GetClient(searchIndexName);
                RunProductDemo();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error:");
                Console.WriteLine(ex.ToString());
                Console.ReadKey();
            }
            
        }


        private static void RunProductDemo() {
            string indexName = searchIndexName;
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine("Demo one: Search hotel information begin:");

            Console.ForegroundColor = ConsoleColor.Green;
            //Console.WriteLine("search index name:{0}", indexName);
            //Console.WriteLine("{0}", "Deleting index...\n");
            //DeleteIndexIfExists(indexName, _searchClient);

            //Console.WriteLine("{0}", "Creating index...\n");
            //CreateProductIndex(indexName, _searchClient);

            //Console.WriteLine("{0}", "Uploading documents...\n");
            //UploadProducts(_indexClient);

            // Uncomment next 2 lines in "3 - Search an index"
            //Console.WriteLine("{0}", "Searching index...\n");
            //RunProductQueries(_indexClient);


            ShowTip();
            Console.WriteLine("{0}", "Input something to search...\n");

            var input = Console.ReadLine().ToString();
            if (!input.ToUpper().Equals("EXIT"))
            {
                Search(input);
            }
            else
            {
                Environment.Exit(0);
            }
        }


        private static List<ScoringProfile> GetScoringProfile()
        {
            var scoringProfiles = new List<ScoringProfile> {

               new ScoringProfile(){
                  Name = scoringProfileName,
                  TextWeights = new TextWeights(){
                       Weights = new Dictionary<string,double>{
                            {nameof(Product.Name),90},
                            {nameof(Product.Summary),50},
                            {nameof(Product.AdditionalInfoString),50},
                            {nameof(Product.Provider),10},
                            {nameof(Product.ProviderDescription),10},
                       }
                  }
               }
            };

            return scoringProfiles;
        }

        private static void ShowTip() {
            Console.ForegroundColor = ConsoleColor.White;
            Console.WriteLine("Searchable fields: Product Name, Provider ,Slug, Description, Summary, Category, Tags");
            Console.ForegroundColor = ConsoleColor.Green;
        }


        private static void Search(string param)
        {
            string condition = param;
            string filterBy = string.Empty;
            string filterIndustry = string.Empty;
            string filterCategory = string.Empty;
            string filterType = string.Empty;
            SearchParameters parameters;
            DocumentSearchResult<Product> results;

            string[] sl = param.Split(':');
            if (sl.Length > 1)
            {
                condition = sl[0];
                filterBy = sl[1];
                string[] filterList = filterBy.Split('|');
                for(var i = 0; i < filterList.Count(); i++)
                {
                    if (i == 0)
                    {
                        filterIndustry = filterList[i];
                    }
                    if (i == 1)
                    {
                        filterCategory = filterList[i];
                    }
                    if (i == 2)
                    {
                        filterType = filterList[i];
                    }
                }
            }


            Console.ForegroundColor = ConsoleColor.White;
            // Query 1 
            Console.WriteLine("Trying to search something with product type: " + condition);

            parameters = new SearchParameters()
            {
                Top = 5,
                //Facets = new[] {nameof(Product.Category)}.ToList()
            };
            if (!string.IsNullOrEmpty(filterBy))
            {
                StringBuilder filter = new StringBuilder();
                if (!string.IsNullOrEmpty(filterIndustry))
                {
                    filter.Append($"Industry/any(Industry:search.in(Industry,'{filterIndustry}',','))");
                    if (!string.IsNullOrEmpty(filterCategory) || !string.IsNullOrEmpty(filterType))
                    {
                        filter.Append(" and ");
                    }
                }

                if (!string.IsNullOrEmpty(filterCategory))
                {
                    filter.Append($"Category/any(Category:search.in(Category,'{filterCategory}',','))");
                    if (!string.IsNullOrEmpty(filterType))
                    {
                        filter.Append(" and ");
                    }
                }
               
                if (!string.IsNullOrEmpty(filterType))
                {
                    filter.Append($"ProductType/any(ProductType:search.in(ProductType,'{filterType}',','))");
                }
                parameters.Filter = filter.ToString();
                //parameters.Filter = $"ProductType/any(ProductType:search.in(ProductType,'{filterBy}',','))";
                //parameters.Filter = $"Industry/any(Industry:search.in(Industry,'{filterBy}',','))";
                //parameters.Filter = $"Category/any(Category:search.in(Category,'{filterBy}',','))";
                //parameters.Filter = $"Category/any(Category:search.ismatch(Category,'{filterBy}','full','all'))";
            }
            results = _indexClient.Documents.Search<Product>(condition, parameters);


            Console.WriteLine("Search results: ");
            WriteProducts(results);


            ////Only search in c
            //Console.WriteLine("Only search in product name and Category: ");
            //parameters = new SearchParameters()
            //{
            //    ScoringProfile = scoringProfileName,
            //    SearchFields = new[] {nameof(Product.Name), nameof(Product.Category) },
            //    Top = 5,
            //    Select = new[] {nameof(Product.ProductId), nameof(Product.Provider), nameof(Product.Summary), nameof(Product.ProviderDescription), nameof(Product.Name), nameof(Product.Tags), nameof(Product.Slug), nameof(Product.Category), nameof(Product.Rating), nameof(Product.AdditionalInfoString) },
            //};
            //results = _indexClient.Documents.Search<Product>(condition, parameters);
            //WriteProducts(results);


            ////-filtered
            //Console.WriteLine("Filter on ratings greater then 3: ");
            //parameters =
            //new SearchParameters()
            //{
            //    Filter = "Rating gt 3",
            //    Top = 5,
            //    ScoringProfile = scoringProfileName,
            //    Select = new[] { nameof(Product.ProductId), nameof(Product.Provider), nameof(Product.Summary), nameof(Product.ProviderDescription), nameof(Product.Name), nameof(Product.Tags), nameof(Product.Slug), nameof(Product.Category), nameof(Product.Rating), nameof(Product.AdditionalInfoString) },
            //};
            //results = _indexClient.Documents.Search<Product>(condition, parameters);
            //WriteProducts(results);


            //-top 2 results
            Console.WriteLine("Search top 5: ");
            parameters = new SearchParameters()
            {
                //OrderBy = new[] { "Rating desc" },
                ScoringProfile = scoringProfileName,
                Select = new[] { nameof(Product.ProductId), nameof(Product.Provider), nameof(Product.Summary), nameof(Product.ProviderDescription), nameof(Product.Name), nameof(Product.Tags), nameof(Product.Slug), nameof(Product.Category), nameof(Product.Rating), nameof(Product.AdditionalInfoString) },
                Top = 5
            };
            //results = _indexClient.Documents.Search<Product>("*", parameters);
            results = _indexClient.Documents.Search<Product>(condition, parameters);
            WriteProducts(results);
            Console.ForegroundColor = ConsoleColor.Green;

            ShowTip();
            Console.WriteLine("{0}", "Input something to search...\n");

            var r1 = Console.ReadLine().ToString();
            if (!r1.ToUpper().Equals("EXIT"))
            {
                Search(r1);
            }
            else
            {
                Environment.Exit(0);
            }
        }

        // Delete an existing index to reuse its name
        private static void DeleteIndexIfExists(string indexName, ISearchServiceClient serviceClient)
        {
            if (serviceClient.Indexes.Exists(indexName))
            {
                serviceClient.Indexes.Delete(indexName);
            }
        }


        private static void CreateProductIndex(string indexName, ISearchServiceClient serviceClient)
        {
            var definition = new Microsoft.Azure.Search.Models.Index()
            {
                Name = indexName,
                Fields = FieldBuilder.BuildForType<Product>(),
                ScoringProfiles = GetScoringProfile()
            };

            serviceClient.Indexes.Create(definition);
        }


        private static void WriteProducts(DocumentSearchResult<Product> searchResults)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            foreach (SearchResult<Product> result in searchResults.Results)
            {
                Console.WriteLine(result.Document);
                Console.WriteLine("Product Id:  {0} \r\n Name:{1} \r\n Category:  {2} \r\n Provider:  {3} \r\n Summary:  {4} \r\n ProviderDescriptioni:  {5} \r\n AdditionalInfoString:  {6} \r\n Rating:  {7} \r\n Industry:  {8} \r\n ProductType:  {9}  \r\n Score:  {10}", 
                    result.Document.ProductId, 
                    result.Document.Name,
                    result.Document.Category != null? string.Join(",", result.Document.Category):"",
                    result.Document.Provider,
                    result.Document.Summary,
                    result.Document.ProviderDescription,
                    result.Document.AdditionalInfoString,
                    result.Document.Rating,
                    result.Document.Industry != null? string.Join(",", result.Document.Industry):"",
                    result.Document.ProductType != null? string.Join(",", result.Document.ProductType):"",
                    result.Score
                    );
                Console.WriteLine("--------------------------------------------------------");
            }
            if (searchResults.Count == 0)
            {
                Console.WriteLine("No search result!!!");
            }

            Console.WriteLine();
            Console.ForegroundColor = ConsoleColor.Green;
        }


        private static void RunProductQueries(ISearchIndexClient indexClient)
        {
            SearchParameters parameters;
            DocumentSearchResult<Product> results;

            // Query 1 
            Console.WriteLine("Query 1: Search for product where bran's in it");
            parameters = new SearchParameters();
            results = indexClient.Documents.Search<Product>("Bran", parameters);
            WriteProducts(results);



            // Query 5 - top 2 results
            Console.WriteLine("Query 5: Search on term 'boutique'");
            Console.WriteLine("Sort by rating in descending order, taking the top two results");
            Console.WriteLine("Returning only these fields: HotelId, HotelName, Category, Rating:\n");
            parameters =
                new SearchParameters()
                {
                    OrderBy = new[] { "Rating desc" },
                    Select = new[] { "ProductId", "Slug", "Rating" },
                    Top = 2
                };
            results = indexClient.Documents.Search<Product>("bran", parameters);
            WriteProducts(results);
        }


        private static void UploadProducts(ISearchIndexClient indexClient)
        {
            List<Product> plist = ProductUtility.GetProductList();
            //var actions = new IndexAction<Product>[] {
            //       IndexAction.Upload(
            //            new Product(){
            //           ProductId = "025a5011-d880-446b-a592-a1f6afb9113a",
            //           Slug = "smart-cable-guard-bran",
            //           Summary="smart cavle guard is a good product",
            //           ProviderDescription = "2300 energy experts in DNV GL deliver world-renowned testing and game-changing expertise for the energy value chain, including renewables and energy efficiency.",
            //           Category="Monitoring,energey",
            //           Tags = new[]{ "green","healthy"},
            //           IsPopular = true,
            //           Rating  = 5,
            //           Name = "Smart Cable Guard",
            //           Provider = "DNV GL Energy"
            //        }
            //      ),
            //      IndexAction.Upload(
            //         new Product(){
            //           ProductId = "032f4ed3-e332-4f5e-88fe-320601f0006d",
            //           Slug = "t-rex",
            //           Summary = "T-REX is a platform for financial modeling, analytics, collaboration, and data tools to optimize the investment lifecycle of renewable energy assets.",
            //           ProviderDescription = "T-REX is the leading provider of managed data services and financial software for renewable energy markets. With T-REX, professionals can analyze and accurately price the risk associated with issuing and investing in renewables. By eliminating manual processes and automating workflow, T-REX enhances efficiency and transparency across the entire investment lifecycle, from developers to lenders to the end investor.",
            //           Category="Monitoring,Data management,energey",
            //           Tags = new[]{ "great","healthy"},
            //           IsPopular = true,
            //           Rating  = 4,
            //           Name = "T-REX for Energy Project Finance",
            //           Provider = "T-REX"
            //        }
            //      ),
            //     IndexAction.Upload(
            //         new Product(){
            //           ProductId = "0bce69ff-33cd-437f-975e-84f6e7e66918",
            //           Slug = "automation-test-01-for-marketplace",
            //           Summary="",
            //           ProviderDescription = "Driven by our purpose of safeguarding life, property and the environment, DNV GL enables organizations to advance the safety and sustainability of their business. We provide classification, technical assurance, software and independent expert advisory services to the maritime, oil & gas and energy industries.",
            //           Category="Monitoring",
            //           Tags = new[]{ "great"},
            //           IsPopular = false,
            //           Rating  = 3,
            //           Name = "Automation Test 01 for Marketplace",
            //           Provider = "DNV GL"
            //        }
            //      ),
            //     IndexAction.Upload(
            //         new Product(){
            //           ProductId = "1fd8f385-385a-4bcf-9c86-54e2277ca980",
            //           Slug = "shipweight",
            //           Summary="",
            //           ProviderDescription = "BAS Engineering has been in the business of weight engineering for more than 20 years, serving designers, yards and navies all over the world.  ShipWeight has been our main product from the very start of the company.",
            //           Category="energey",
            //           Tags = new[]{ "great"},
            //           IsPopular = false,
            //           Rating  = 2,
            //           Name = "ShipWeight",
            //           Provider = "ShipWeight"
            //        }
            //      ),
            //      IndexAction.Upload(
            //         new Product(){
            //           ProductId = "2c49251c-38ad-4d69-b283-2f1f9ddf3fcb",
            //           Slug = "tcarta-bathymetry",
            //           Summary="",
            //           ProviderDescription = "TCarta’s mission is to improve geo-data accessibility and availability through use of innovative technologies. With an experienced team of data scientists, project managers, GIS professionals, and satellite remote sensing experts, TCarta are now leveraging their heritage and success within the marine sector to land and air applications.",
            //           Category="test",
            //           Tags = new[]{ "great"},
            //           IsPopular = false,
            //           Rating  = 1,
            //           Name = "TCarta Bathymetry",
            //           Provider = "TCarta"
            //        }
            //      )
            //};
            var actions = new List<IndexAction<Product>> { };

            foreach(var item in plist)
            {
                actions.Add(IndexAction.Upload(item));
            }
            

            var batch = IndexBatch.New(actions);
            try
            {
                indexClient.Documents.Index(batch);
            }
            catch (IndexBatchException e)
            {
                // When a service is under load, indexing might fail for some documents in the batch. 
                // Depending on your application, you can compensate by delaying and retrying. 
                // For this simple demo, we just log the failed document keys and continue.
                Console.WriteLine(
                    "Failed to index some of the documents: {0}",
                    String.Join(", ", e.IndexingResults.Where(r => !r.Succeeded).Select(r => r.Key)));
            }

            // Wait 2 seconds before starting queries 
            Console.WriteLine("Waiting for indexing...\n");
            Thread.Sleep(2000);
        }

      

    }

}
