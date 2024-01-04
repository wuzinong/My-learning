module exampleModue 'tenantModule.bicep' = {
  name:'deployToTenant'
  sceop:tenant()
}


var tenantInfo = tenant();

output tenantResult object = tenantInfo


// returns
// "tenantResult": {
//   "type": "Object",
//   "value": {
//     "countryCode": "US",
//     "displayName": "Contoso",
//     "id": "/tenants/00000000-0000-0000-0000-000000000000",
//     "tenantId": "00000000-0000-0000-0000-000000000000"
//   }
// }

resource kv 'Microsoft.KeyVault/vaults@2021-06-01-preview' = {
  name: 'examplekeyvault'
  location: 'westus'
  properties: {
    tenantId: tenant().tenantId
  }
}
