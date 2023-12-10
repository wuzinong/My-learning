param resourceGroupName string

module exampleModule 'rgModule.bicep' = {
  name: 'exampleModule'
  scope: resourceGroup(resourceGroupName)
  params: {
    location: 'westus'
  }
}
