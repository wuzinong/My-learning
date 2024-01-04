
// define resource group
param resourceGroupName string

module exampleModule 'rgModule.bicep' = {
  name: 'exampleModule'
  scope: resourceGroup(resourceGroupName)
  params: {
    location: 'westus'
  }
}


// retrun the properties of the resource group
output resourceGroupOutput object = resourceGroup()

//It returns an object in the following format:
// That's why in main.bicep we could get the location after using the resourceGroup().location get the location

// {
//   id: '/subscriptions/{subscription-id}/resourceGroups/examplegroup'
//   name: 'examplegroup'
//   type: 'Microsoft.Resources/resourceGroups'
//   location: 'southcentralus'
//   properties: {
//     provisioningState: 'Succeeded'
//   }
// }
