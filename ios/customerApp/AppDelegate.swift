import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider
import GoogleMaps

@main
class AppDelegate: RCTAppDelegate {
  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    self.moduleName = "customerApp"
    self.dependencyProvider = RCTAppDependencyProvider()
    GMSServices.provideAPIKey("AIzaSyDwcvvpzgOthoJ_RkIn_m8-ESRRQSMV0dw")
    // You can add your custom initial props in the dictionary below.
    // They will be passed down to the ViewController used by React Native.
    self.initialProps = [:]
   

    let isLaunched =  super.application(application, didFinishLaunchingWithOptions: launchOptions)
    
//    DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
        RNSplashScreen.show()
//       }
    return isLaunched

  }

  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
    RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }
}
