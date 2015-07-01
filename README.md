# generator-lazy-demo

Generator Lazy Demo.


## Useage

### 向导模式创建

- 一路Next你懂的。


### 在包含配置文件的项目中使用

- 命令: yo lazy

```
cd build-with-config-exist
yo lazy
```

### 在未包含任何配置文件的项目中使用

- 命令: yo lazy --with-profile [config file path]

```
cd build-with-special-config
yo lazy --with-profile ../special-config.json
```

### 使用默认的命令创建项目

- 命令: yo lazy --with-configure [words or base64 config]

```
cd build-with-configure
yo lazy --with-configure static
```

使用BASE64命令创建项目

```
cd build-with-configure-base64 
yo lazy --with-configure eyJuYW1lIjoieW91ci1wcm9qZWN0LW5hbWUiLCJkZXNjIjoi6L+Z6YeM5piv6aG555uu55qE6buY6K6k5o+P6L+w5L+h5oGv44CCIiwiYXV0aG9yIjoieW91cm5pY2tuYW1lIDx5b3Vybmlja25hbWVAZW1haWwuY29tPiAoaHR0cDovL3dlYnNpdGUuY29tKSIsImJ1aWxkIjp7Im1vZGUiOiJzdGF0aWMiLCJpbnN0YWxsIjp0cnVlfSwibGljZW5zZSI6eyJuYW1lIjoieW91ci1wcm9qZWN0LW5hbWUiLCJ0eXBlIjoiTUlUIiwieWVhciI6IjIwMTUiLCJhdXRob3IiOiJ5b3Vybmlja25hbWUgPHlvdXJuaWNrbmFtZUBlbWFpbC5jb20+IChodHRwOi8vd2Vic2l0ZS5jb20pIiwiZGVzYyI6Iui/memHjOaYr+mhueebrueahOm7mOiupOaPj+i/sOS/oeaBr+OAgiJ9LCJjc3MiOnsidHlwZSI6Imxlc3MifSwidGFza2VyIjp7InR5cGUiOiJndWxwIn0sInRlbXBsYXRlIjp7InR5cGUiOiJkb1QifSwianMiOnsibW9kdWxlIjoiY29tbW9uanMiLCJqcXVlcnkiOiIxIn0sInRlc3QiOmZhbHNlfQ==
```