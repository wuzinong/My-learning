
param location string = 'westus'
//Give the parameter a default value:
param location2 string = resourceGroup().location
resourceGroupOutput().location

resource virtualNetwork 'Microsoft.Network/virtualNetworks@2023-05-01' = {
  name: 'example-vnet'
  location: location
  properties: {
    addressSpace: {
      addressPrefixes: [
        '10.0.0.0/16'
      ]
    }
    subnets: [
      {
        name: 'Subnet-1'
        properties: {
          addressPrefix: '10.0.0.0/24'
        }
      }
      {
        name: 'Subnet-2'
        properties: {
          addressPrefix: '10.0.1.0/24'
        }
      }
    ]
  }
}

//Add another parameter for the storage account name with a default value:

@maxLength(24)
@minLength(3)
@description('The name of the storage account.')
param storageAccountName string = 'store${uniqueString(resourceGroup().id)}'

//az group create --name exampleRG --location westus
//az deployment group create --resource-group exampleRG --template-file main.bicep --parameters location=westus storageAccountName=uniquename
