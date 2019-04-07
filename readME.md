<h1 align='center'>Short Url with node</h1>

<p align='center'>In construction</p>

# how to use

- Set string connection with data base in file ./config/config.js
- Run server
```
    npm run dev
``` 

## Requests

- Short Url
```
    Type: Post
    localhost:3000/short
    body: { "url": "example.com" }
```

- Get Urls list 
```
    Type: Get
    localhost:3000/
```

- Get Url not compressed 
```
    Type: Get
    localhost:3000/"short"
```

- Delet Url 
```
    Type: Get
    localhost:3000/"_id"
```



[MIT](/LICENSE) &copy; Roberto Guerra
