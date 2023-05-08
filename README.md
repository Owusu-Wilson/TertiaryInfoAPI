
# Tertiary Info Hub
#### Provides an interface along with an api serving data of all tertiary institutions in Ghana.




## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


## API Reference

#### Get all items

```http
  GET /universities
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `acronym` | `string` | Acronym of the institution |

#### Get institution by name, region or acronym

```http
  GET /search/name/?name=
```
```http
  GET /search/region/?region=
```
```http
  GET /search/acronym/?acronym=
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` `region` `acronym`      | `string` | **Required**. Name od institution (just part of the name is allowed) |




## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)




## Authors

- [@Owusu Wilson](https://www.github.com/owusu-ilson)


# Hi, I'm Katherine! 👋


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)


## 🛠 Skills
Javascript, HTML, CSS...


## License

[MIT](https://choosealicense.com/licenses/mit/)

