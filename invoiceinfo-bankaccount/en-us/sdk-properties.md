Nacos �ͻ��˳�ʼ��˵��

```
	public final static String ENDPOINT = "endpoint";
	public final static String NAMESPACE = "namespace";
	public final static String ACCESS_KEY = "accessKey";
	public final static String SECRET_KEY = "secretKey";
	public final static String SERVER_ADDR = "serverAddr";
	public final static String CONTEXT_PATH = "contextPath";
	public final static String CLUSTER_NAME = "clusterName";
	public final static String ENCODE = "encode";

```
һ���ͻ��˿���ͨ�����ַ�ʽ��ʼ������ѡһ���ش���

1. ͨ��ֱ�Ӵ���Nacos server����Ϣ��ip:port��������������ʽ

	``
	SERVER_ADDR server��ַ����ʽΪ��ip1:port,ip2.port��
	``
2. ͨ���������н����ȡ������Ϣ

	```
	ENDPOINT ����� 
	CLUSTER_NAME ��Ⱥ����
	```
	
�������ӵ�server��·�����Ǳش���

```
CONTEXT_PATH server��·�� ��Ĭ��ֵ nacos��
```
����������루�Ǳش���

```
NAMESPACE ��������
```

�ġ���Ȩ�������Ǳش���

```
ACCESS_KEY ��Կ
SECRET_KEY ˽Կ
```