#include "AppDelegate.h"
#include "GeneratedPluginRegistrant.h"
#import "FlutterAlipayPlugin.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application
    didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [GeneratedPluginRegistrant registerWithRegistry:self];
  // Override point for customization after application launch.
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

// ios 8.x or older
-(BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url{

    return [FlutterAlipayPlugin handleOpenURL:url];
}

@end
