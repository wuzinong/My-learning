module exampleModule 'subModule.bicep' ={
  name: 'deployToSub'
  scope:subscription()
}

//return subscription
output subscriptionOutput object = subscription()
