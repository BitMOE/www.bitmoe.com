# 前提条件

请先参看 [Nacos 快速入门](https://nacos.io/zh-cn/docs/quick-start.html)，下载 Nacos Server 并启动服务。

# 配置管理

<span data-type="color" style="color:rgb(38, 38, 38)"><span data-type="background" style="background-color:rgb(255, 255, 255)">完整示例代码：</span></span>[nacos-spring-config-example](https://github.com/nacos-group/nacos-example/nacos-spring-config-example)

## 依赖

```
<dependency>
    <groupId>com.alibaba.nacos</groupId>
    <artifactId>nacos-spring-context</artifactId>
    <version>${latest.version}</version>
</dependency>
```

## 示例

通过 `@EnableConfigNacos` 开启 Nacos Spring 的配置管理功能，使用 `@NacosPropertySource` 加载 `dataId` 为 `example` 的配置源，并开启自动更新：

```
@Configuration
@EnableNacosConfig(globalProperties = @NacosProperties(serverAddr = "127.0.0.1:8848"))
@NacosPropertySource(dataId = "example", autoRefreshed = true)
public class NacosConfiguration {

}
```

通过 Spring 的 `@Value` 注解设置属性值，注意，需要同时有 `Setter`方法才能在配置变更的时候自动更新：

```
@Controller
@RequestMapping("config")
public class ConfigController {

    @Value("${useLocalCache:false}")
    private boolean useLocalCache;

    public void setUseLocalCache(boolean useLocalCache) {
        this.useLocalCache = useLocalCache;
    }

    @RequestMapping(value = "/get", method = GET)
    @ResponseBody
    public boolean get() {
        return useLocalCache;
    }
}
```

## 运行

启动 Tomcat，调用 `curl http://localhost:8080/config/get`，返回内容是 `false`。

通过调用 [Nacos Open API](https://nacos.io/zh-cn/docs/open-API.html) 向 Nacos Server 发布配置：dataId 为`example`，内容为`useLocalCache=true`

```
curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=example&group=DEFAULT_GROUP&content=useLocalCache=true"
```

再次访问 `http://localhost:8080/config/get`，此时返回内容为`true`，说明程序中的`useLocalCache`值已经被动态更新了。

# 服务发现

<span data-type="color" style="color:rgb(38, 38, 38)"><span data-type="background" style="background-color:rgb(255, 255, 255)">完整示例代码：</span></span>[nacos-spring-discovery-example](https://github.com/nacos-group/nacos-example/nacos-spring-discovery-example)

## 依赖

```
<dependency>
    <groupId>com.alibaba.nacos</groupId>
    <artifactId>nacos-spring-context</artifactId>
    <version>${latest.version}</version>
</dependency>
```

## 示例

通过 `@EnableNacosDiscovery` 开启 Nacos Spring 的服务发现功能：

```
@Configuration
@EnableNacosDiscovery(globalProperties = @NacosProperties(serverAddr = "127.0.0.1:8848"))
public class NacosConfiguration {

}
```

使用 `@NacosInjected` 注入  Nacos 的 `NamingService` 实例：

```
@Controller
@RequestMapping("discovery")
public class DiscoveryController {

    @NacosInjected
    private NamingService namingService;

    @RequestMapping(value = "/get", method = GET)
    @ResponseBody
    public List<Instance> get(@RequestParam String serviceName) throws NacosException {
        return namingService.getAllInstances(serviceName);
    }
}
```

## 运行

启动 Tomcat，调用 `curl http://localhost:8080/discovery/get?serviceName=example`，此时返回为空 JSON 数组`[]`。

通过调用 [Nacos Open API](https://nacos.io/zh-cn/docs/open-API.html) 向  Nacos Server 注册一个名称为 `example` 服务

```
curl -X PUT 'http://127.0.0.1:8848/nacos/v1/ns/instance?serviceName=example&ip=127.0.0.1&port=8080'
```

再次访问 `curl http://localhost:8080/discovery/get?serviceName=example`，此时返回内容为：

```
[
  {
    "instanceId": "127.0.0.1#8080#DEFAULT#example",
    "ip": "127.0.0.1",
    "port": 8080,
    "weight": 1.0,
    "healthy": true,
    "cluster": {
      "serviceName": null,
      "name": "",
      "healthChecker": {
        "type": "TCP"
      },
      "defaultPort": 80,
      "defaultCheckPort": 80,
      "useIPPort4Check": true,
      "metadata": {}
    },
    "service": null,
    "metadata": {}
  }
]
```

# 参看

* [Nacos](https://github.com/alibaba/nacos)
* [Nacos Spring](https://github.com/nacos-group/nacos-spring-project)
* [Nacos Spring Boot](https://github.com/nacos-group/nacos-spring-boot-project)
* [Spring Cloud](https://github.com/spring-cloud-incubator/spring-cloud-alibaba) [Alibaba](https://github.com/spring-cloud-incubator/spring-cloud-alibaba)

