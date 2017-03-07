//
//  ViewController.m
//  RNHotUpdate
//
//  Created by Dongdong on 17/3/7.
//  Copyright © 2017年 com. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>

@interface RNViewManager : NSObject

@property (nonatomic, copy) NSString *moduleName;
@property (nonatomic, strong) NSDictionary *properties;
- (instancetype)initWithModule:(NSString *)moduleName properties:(NSDictionary *)properties;
- (RCTRootView *)fetchRootView;

@end

@implementation RNViewManager

- (instancetype)initWithModule:(NSString *)moduleName properties:(NSDictionary *)properties {
    self = [super init];
    if (self) {
        self.moduleName = moduleName;
        self.properties = properties;
    }
    return self;
}

- (RCTRootView *)fetchRootView {
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
    return [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:self.moduleName initialProperties:self.properties launchOptions:nil];
}

@end

@interface ViewController ()

@end

@implementation ViewController

- (void)loadView {
    [super loadView];
    RNViewManager *manager = [[RNViewManager alloc] initWithModule:@"Demo" properties:nil];
    self.view = [manager fetchRootView];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
